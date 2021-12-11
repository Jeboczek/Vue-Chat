<template>
<div class="app-content">
  <RoomNav />
  <router-view/>
</div>
</template>

<script>
export default {
  name: "App",
  components: {
    RoomNav: require("@/components/RoomNav.vue").default
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

  *{
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
  }

  body{
    margin: 0;
  }

  .container{
    border-width: 2px;
    border-style: solid;
    border-color: black;  
  }

  div.app-content{
    display: flex;
    flex-direction: row;
}
</style>
