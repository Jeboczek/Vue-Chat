<template>
    <input @keydown="ifEnterSendMessage" type="text" id="message-content" v-model="messageContent" placeholder="Your message..." >
    <a>
        <i @click="sendMessage" class="fas fa-paper-plane"></i>
    </a>
</template>

<script>

import { UsernameStorage } from "@/lib/UsernameStorage/UsernameStorage.js";
import { getDatabase, ref, push } from '@firebase/database';

export default {
    data(){
        return {
            messageContent: "",
        }
    },
    props: {
        roomID: {
            type: String, 
            required: true,
        }
    },
    methods: {
        ifEnterSendMessage(event){
            if (event.key == "Enter") {
                this.sendMessage()
            }
        },
        sendMessage(){
            console.log(this.roomID)

            let usernameStorage = UsernameStorage.getInstance()

            if (!usernameStorage.isUsernameProvided()) {
                let newUsername = prompt("Set your username")
                if (newUsername) {
                    usernameStorage.setUsername(newUsername)
                }else{
                    return
                }
            }

            let db = getDatabase();
            let query = ref(db, `/room/${this.roomID}/message`)
            push(query, {
                username: usernameStorage.getUsername(),
                content: this.messageContent
            })

            this.messageContent = ""
        }
    },
    computed: {
        username(){
            let usernameStorage = UsernameStorage.getInstance()
            return usernameStorage.getUsername()
        }
    }
}
</script>

<style lang="scss" scoped>

    a{
        margin: 0 10px;
        cursor: pointer;
    }

    input[type="text"]{
        width: 100%;
        border-width: 0;
        height: 100%;
        padding: 0 10px;
    }
</style>