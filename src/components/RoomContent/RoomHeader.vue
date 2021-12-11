<template>
    <div class="room-header">
        
    </div>    
</template>

<script>
export default {
    name: "RoomHeader",
    props: {
        room: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style lang="scss" scoped>
    div.room-header{
        height: 70px;
        width: 100%;

        border-bottom-style: solid;
        border-bottom-color: black;
        border-bottom-width: 2px;
    }
</style>