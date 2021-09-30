<template>
  <v-app>
    <h1 style="text-align: center" class="mt-4 mb-4">Training Product</h1>
    <v-main>
   <Table></Table>
    </v-main>
  </v-app>
</template>

<script>

import Table from './components/Table.vue'
export default {
  name: 'App',

  components: {
   Table
  },

  data: () => ({
    //
  }),
};
</script>
