<template>
    <div class="no-selected">
        <i class="far fa-comments"></i>
        Select a room to start chatting
        <br>
        or
        <router-link :to="{name: 'RoomCreate'}">create a new one</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    div.no-selected{
        width: 80%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        text-align: center;

        gap: 20px;

        i{
            font-size: 4em;
        }
    }
</style>