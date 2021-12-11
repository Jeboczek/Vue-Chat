<template>
  <RoomHeader :room="room" />
  <RoomMessages />
</template>

<script>
export default {
  name: "RoomContent",
  data() {
    return {
      roomName: "Example room",
      icon: "fab fa-vuejs",
      color: "green",
    };
  },
  computed: {
      room() {
          return {
              "roomName": this.roomName,
              "icon": this.icon,
              "color": this.color
          }
      }
  },
  components: {
      "RoomHeader": require("@/components/RoomContent/RoomHeader").default
  }
};
</script>