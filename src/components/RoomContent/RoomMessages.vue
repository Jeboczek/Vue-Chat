<template>
    <div class="room-messages">
        <RoomMessage v-for="message in messages" :key="message['id']" :message="message" />
    </div>
    <div class="new-message">

    </div>
</template>

<script>
export default {
    name: "RoomMessages",
    data() {
        return {
            messages: [{"id": "abc", "content": "Hello, world", "username": "Jamnik"}],
        }
    },
    components: {
        RoomMessage: require("@/components/RoomContent/RoomMessage").default
    }
}
</script>

<style lang="scss" scoped>
    div.room-messages{
        width: 100%;
        height: 88%;

        padding: 20px
    }

    div.new-message {
        width: 100%;
        height: 5%;
        
        border-top-style: solid;
        border-top-width: 2px;
        border-top-color: black;
    }
</style>