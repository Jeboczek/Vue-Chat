<template>
    <div class="message">
        <div v-if="!myMessage" class="avatar">{{message["username"][0]}}</div>
        <div class="message-content">{{message["content"]}}</div>
    </div>
</template>

<script>
export default {
    name: "RoomMessage",
    props: {
        message: {
            type: Object,
            required: true,
        }
    },
    computed: {
        // TODO: Write this method after implementing username's 
        myMessage(){
            return false
        }
    }
}
</script>

<style lang="scss" scoped>
    div.message{
        display: flex;
        
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
        }
    }
</style>