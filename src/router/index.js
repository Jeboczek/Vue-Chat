import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: "RoomNotSelected",
    path: "/",
    component: require("@/views/RoomNotSelected").default
  },
  {
    name: "RoomContent",
    path: "/room/:roomID",
    props: true,
    component: require("@/views/RoomContent").default
  },
  {
    name: "RoomCreate",
    path: "/create/room",
    component: require("@/views/RoomCreate").default
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
