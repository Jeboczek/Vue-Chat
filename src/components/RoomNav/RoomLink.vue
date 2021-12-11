<template>
  <router-link :to="{name: 'RoomContent', params: {roomName: 'room'}}">
    <li :style="getLiStyle">
      <RoomIcon :icon="room['icon']" :color="room['color']" />
      {{ room["name"] }}
    </li>
  </router-link>
</template>

<script>
export default {
  name: "RoomLink",
  props: {
    room: Object,
  },
  computed: {
    getLiStyle() {
      return {
        "--icon-color": this.room["color"],
      };
    },
  },
  components: {
    RoomIcon: require("@/components/RoomIcon").default,
  },
};
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
  gap: 30px;
  display: flex;
  align-items: center;

  font-size: 1.2em;
}
</style>