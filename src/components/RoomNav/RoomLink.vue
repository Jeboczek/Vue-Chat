<template>
    <li :style="getLiStyle">
        <div class="room-icon">
            <i :class="room['icon']"></i>
        </div>
        {{ room["name"] }}
    </li>
</template>

<script>
export default {
    name: "RoomLink",
    props: {
        room: Object,
    },
    computed: {
        getLiStyle(){
            return {
                "--icon-color": this.room["color"]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    li{
        cursor: pointer;
        gap: 30px;
        display: flex;
        align-items: center;

        font-size: 1.2em;

        div.room-icon{
            width: 40px;
            height: 40px;
            background-color: var(--icon-color) !important;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100px;
            
            i{
                font-size: 20px !important;
                color: white;
            }
        }
    }

</style>