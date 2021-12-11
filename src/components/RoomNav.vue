<template>
    <div class="room-nav">
        <h1>Rooms</h1>
        <SearchBar />
        <ul>
            <RoomLink v-for="room in rooms" :key="room['name']" :room="room" />
        </ul>
    </div>
</template>

<script>
export default {
    name: "RoomNav",
    data(){
        return {
            rooms: [{"name": "MyRoom", "icon": "fab fa-vuejs", "color": "green"}]
        }
    },
    components: {
        "RoomLink": require("@/components/RoomNav/RoomLink").default
    }
}
</script>

<style lang="scss" scoped>
    div.room-nav{
        width: 20%;
        min-height: 100vh;
        padding: 20px 20px;
        text-align: center;

        h1:first-child{
            margin-top: 0;
        }
    }

    ul {
        list-style-type: none;
        padding-left: 0;
    }
</style>