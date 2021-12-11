<template>
  <div :style="getIconStyle" class="room-icon">
    <i :class="icon"></i>
  </div>
</template>

<script>
export default {
  name: "RoomIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    getIconStyle() {
      return { "background-color": this.color };
    },
  },
};
</script>

<style lang="scss" scoped>
div.room-icon {
  width: 40px;
  height: 40px;
  background-color: var(--icon-color) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;

  i {
    font-size: 20px !important;
    color: white;
  }
}
</style>