<template>
  <div id = 'button-delete'>
      <v-btn class="mt-2 mt-10 ml-2"
      absolute
      @click="deleteFirstStudent"
      >Delete First Student</v-btn>
  </div>
</template>

<script>
export default {
    name: "button-delete",
    methods: {
        deleteFirstStudent() {
            this.$store.commit('DELETE_STUDENT')
        }
    }

}
</script>

<style>

</style>