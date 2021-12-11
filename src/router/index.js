import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: "RoomNotSelected",
    path: "/",
    component: require("@/views/RoomNotSelected").default
  },
  {
    name: "RoomContent",
    // TODO: Change roomName to roomId based on Firebase id
    path: "/room/:roomName",
    props: true,
    component: require("@/views/RoomContent").default
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
