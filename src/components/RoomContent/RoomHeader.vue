<template>
    <div class="room-header">
        <RoomIcon :color="room['color']" :icon="room['icon']" />
        <h3>
        {{ room["name"] }}
        </h3>
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
    components: {
        "RoomIcon": require("@/components/RoomIcon").default
    },
}
</script>

<style lang="scss" scoped>
    div.room-header{
        height: 70px;
        width: 100%;

        display: flex;
        align-items: center;
        padding-left: 1em;
        gap: 1.2em;

        border-bottom-style: solid;
        border-bottom-color: black;
        border-bottom-width: 2px;
    }
</style>