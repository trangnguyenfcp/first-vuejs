<template>
  <v-app>
    <HeaderComp :title = "title"
    v-on:changetitle = "handleChangetitle">
    <p style="text-align: center; color: grey" slot="title">Vuejs</p>
    <small slot="button">Click to change title</small>
    </HeaderComp>
    <v-main>
   <Table></Table>

    </v-main>
  </v-app>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import Table from './components/Table.vue'
export default {
  name: 'App',

  components: {
   Table,
   HeaderComp
   
  },

  data() {
    return {title: 'Training Product'}
  },
  methods: {
    handleChangetitle(e) {
      this.title = e.title
    }
  }
};
</script>
