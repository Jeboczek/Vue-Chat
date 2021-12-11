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
        height: 50px;
        width: 100%;

        border-bottom-style: solid;
        border-bottom-color: dark;
        border-bottom-width: 2px;
    }
</style>