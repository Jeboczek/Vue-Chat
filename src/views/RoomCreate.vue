<template>
    <div class="room-create">
        <form @submit="createRoom">
            <h1>Welcome in room creator</h1>
            <h3>Room name</h3>
            <input type="text" v-model="roomName">
            <p v-if="roomNameError">
                <i class="error">You need to provide room name</i>
            </p>
            <h3>Room color</h3>
            <select v-model="roomColor">
                <option value="blue" selected>Blue</option>
                <option value="violet">Violet</option>
                <option value="green">Green</option>
                <option value="black">Black</option>
            </select>
            <h3>Room icon</h3>
            <select v-model="roomIcon">
                <option value="fab fa-vuejs" selected>Vue</option>
                <option value="fab fa-php">PHP</option>
                <option value="fab fa-js">JavaScript</option>
                <option value="fab fa-linux">Linux</option>
                <option value="fab fa-python">Python</option>
            </select>
            <p>
                <button>Create</button>
            </p>
        </form>
    </div>
</template>

<script>

import {getDatabase, ref, push} from "firebase/database";

export default {
    name: "RoomCreate",    
    data(){
        return {
            roomNameError: false,
            roomName: "",
            roomColor: "",
            roomIcon: ""
        }
    },
    methods: {
        createRoom(event) {
            event.preventDefault()

            var db = getDatabase()
            var query = ref(db, "room/")

            push(query, {
                name: this.roomName,
                color: this.roomColor,
                icon: this.roomIcon,
            })

            this.$router.replace("/")
        }
    }
}
</script>

<style lang="scss" scoped>
div.room-create{
    padding: 30px
}

i.error{
    color: red;
}
</style>