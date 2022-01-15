<template>
    <div class="message">
        <div v-if="!myMessage" class="avatar">{{message["username"][0]}}</div>
        <div class="message-content" :class="{'my-message': myMessage}">{{message["content"]}}</div>
    </div>
</template>

<script>
import { UsernameStorage } from "@/lib/UsernameStorage/UsernameStorage.js";

export default {
    name: "RoomMessage",
    props: {
        message: {
            type: Object,
            required: true,
        }
    },
    computed: {
        myMessage(){
            let usernameStorage = UsernameStorage.getInstance()
            return usernameStorage.getUsername() === this.message.username;
        }
    }
}
</script>

<style lang="scss" scoped>
    div.my-message{
        margin-left: auto !important;
    }

    div.message{
        display: flex;
        margin-bottom: 10px;
        
        align-items: center;

        div.avatar{
            width: 2.5em;
            height: 2.5em;
            background-color: green;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100px;
            margin-right: 1em;
        }

        div.message-content{
            padding: 10px 20px;
            background-color: black;
            width: fit-content;
            border-radius: 24px;
            color: white;
        }
    }
</style>