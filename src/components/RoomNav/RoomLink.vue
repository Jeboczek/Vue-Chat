<template>
  <router-link :to="{name: 'RoomContent', params: {roomID: room['id']}}">
    <li>
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
  components: {
    RoomIcon: require("@/components/RoomIcon").default,
  },
};
</script>

<style lang="scss" scoped>

a{
  text-decoration: none;
}

li {
  cursor: pointer;
  gap: 30px;
  display: flex;
  align-items: center;
  color: black;

  font-size: 1.2em;
  margin-bottom: 1em;
}
</style>