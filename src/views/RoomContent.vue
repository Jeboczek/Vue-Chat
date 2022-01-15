<template>
<div class="room-content" v-if="loaded">
  <RoomHeader :room="room" />
  <RoomMessages :roomID="roomID" :room="room" />
</div>
<div class="center" v-if="!loaded">
  Loading...
</div>
</template>

<script>
import { getDatabase, ref, child, get } from "firebase/database";

export default {
  name: "RoomContent",
  data() {
    return {
      loaded: false,
      room: {},
    };
  },
  props: {
    roomID: {
      type: String,
      required: true,
    },
  },
  async beforeCreate() {
    var db = getDatabase();
    var dbRef = ref(db);
    var roomData = await get(child(dbRef, `room/${this.roomID}`))
      roomData = roomData.val()
      this.room = {
        "name": roomData["name"],
        "icon": roomData["icon"],
        "color": roomData["color"],
    }
    this.loaded = true
  },
  components: {
    RoomHeader: require("@/components/RoomContent/RoomHeader").default,
    RoomMessages: require("@/components/RoomContent/RoomMessages").default
  },
};

</script>

<style lang="scss" scoped>
div.room-content{
  width: 80%;
  min-height: 100%;
}

div.center{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

}
</style>