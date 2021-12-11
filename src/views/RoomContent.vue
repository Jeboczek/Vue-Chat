<template>
  <RoomHeader :room="room" />
  <!-- <RoomMessages /> -->
</template>

<script>
import { getDatabase, ref, child, get } from "firebase/database";

export default {
  name: "RoomContent",
  data() {
    return {
      room: {},
      messages: [],
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
  },
};
</script>