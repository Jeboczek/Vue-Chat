<template>
  <div class="room-nav">
    <router-link to="/">
      <h1>Vue chat</h1>
    </router-link>
    <SearchBar @input="onSearch" />
    <ul>
      <RoomLink v-for="room in getRooms" :key="room['name']" :room="room" />
    </ul>
  </div>
</template>

<script>
import { getDatabase, onChildAdded, onChildRemoved, ref } from "firebase/database";

export default {
  name: "RoomNav",
  data() {
    return {
      rooms: [],
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
  created() {
    // Get rooms from Firebase
    var db = getDatabase()
    var querry = ref(db, "room/")


    onChildAdded(querry,  (snapshot) => {
      var newRoomData = snapshot.val()

      this.rooms.push({
        "id": snapshot.key,
        "name": newRoomData["name"],
        "color": newRoomData["color"],
        "icon": newRoomData["icon"],
      })

    }),

    onChildRemoved(querry, (snapshot) => {
      this.rooms = this.rooms.filter((e) => e["id"] != snapshot.key)
    })
    
  }
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

  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: black;

  a:first-child{
    text-decoration: none;
    color: black;
    h1:first-child {
      margin-top: 0;
    }
  }

}

ul {
  list-style-type: none;
  padding-left: 0;
}
</style>