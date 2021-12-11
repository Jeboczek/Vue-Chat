<template>
<div class="room-content">
  <RoomHeader :room="room" />
  <RoomMessages />
</div>
</template>

<script>
import { getDatabase, ref, child, get } from "firebase/database";

export default {
  name: "RoomContent",
  data() {
    return {
      room: {},
    };
  },
  props: {
    roomID: {
      type: String,
      required: true,
    },
  },
  beforeCreate() {
    var db = getDatabase();
    var dbRef = ref(db);
    get(child(dbRef, `room/${this.roomID}`)).then((roomData) => {
      roomData = roomData.val()
      this.room = {
        "name": roomData["name"],
        "icon": roomData["icon"],
        "color": roomData["color"],
      };
    });
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
</style>