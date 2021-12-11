<template>
    <input @input="onInput" v-model="inputData" type="text" placeholder="Search rooms">
</template>

<script>
export default {
    data() {
        return {
            inputData: "",
        }
    },
    name: "SearchBar",
    methods: {
        onInput(_) {
            this.$emit("input", this.inputData)
        }
    }
}
</script>

<style lang="scss" scoped>
    input{
        height: 2.5em;
        width: 80%;
        border-radius: 5px;
        border-style: solid;
        border-color: black;
        border-width: 2px;
        margin: 0px auto;
        padding: 0px 10px;
    }
</style>