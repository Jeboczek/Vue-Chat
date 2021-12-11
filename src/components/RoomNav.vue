<template>
  <div class="room-nav">
    <h1>Rooms</h1>
    <SearchBar @input="onSearch" />
    <ul>
      <RoomLink v-for="room in getRooms" :key="room['name']" :room="room" />
    </ul>
  </div>
</template>

<script>
export default {
  name: "RoomNav",
  data() {
    return {
      rooms: [{ name: "MyRoom", icon: "fab fa-vuejs", color: "green" }],
      searchQuerry: "",
    };
  },
  components: {
    RoomLink: require("@/components/RoomNav/RoomLink").default,
    SearchBar: require("@/components/RoomNav/SearchBar").default,
  },
  computed: {
    getRooms() {
      return this.rooms.filter((e) => e["name"].toLowerCase().match(this.searchQuerry.toLowerCase()));
    },
  },
  methods: {
    onSearch(newSearchQuerry) {
      if (typeof newSearchQuerry === "string") {
        console.log(newSearchQuerry);
        this.searchQuerry = newSearchQuerry;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div.room-nav {
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 20%;
  min-height: 100vh;
  padding: 20px 20px;
  text-align: center;

  h1:first-child {
    margin-top: 0;
  }
}

ul {
  list-style-type: none;
  padding-left: 0;
}
</style>