<template>
    <div class="room-messages">
        <RoomMessage v-for="message in messages" :key="message['id']" :message="message" :color="room['color']" />
    </div>
    <div class="new-message">
        <RoomSender :roomID="roomID" />
    </div>
</template>

<script>
import { getDatabase, onChildAdded, ref} from '@firebase/database'
export default {
    name: "RoomMessages",
    props: {
        roomID: {
            type: String,
            required: true,
        },
        room: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            messages: [],
        }
    },
    components: {
        RoomMessage: require("@/components/RoomContent/RoomMessage").default,
        RoomSender: require("@/components/RoomContent/RoomMessageSender").default,
    },
    async created() {
        console.log(this.room)
        var db = getDatabase()
        var query = ref(db, `/room/${this.roomID}/message`)

        onChildAdded(query, (snapshot) => {
            var newMessage = snapshot.val()

            this.messages.push(
                {"username": newMessage.username, "content": newMessage.content}
            )
        })
    }
}
</script>

<style lang="scss" scoped>
    div.room-messages{
        width: 100%;
        height: 88%;

        padding: 20px;
        overflow: scroll;
        overflow-x: hidden;
    }

    div.new-message {
        width: 100%;
        height: 5%;

        display:flex;
        align-items: center;
        justify-content: space-between;

        border-top-style: solid;
        border-top-width: 2px;
        border-top-color: black;
    }
</style>