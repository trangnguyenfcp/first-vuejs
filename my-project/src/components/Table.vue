<template>
  <div>
    <v-autocomplete
      v-model="name"
      :items="names"
      dense
      filled
      label="Your name"
    ></v-autocomplete>
    <v-data-table
      :headers="headers"
      :items="students"
      class="elevation-1"
      :search="search"
      item-key="name"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search (UPPER CASE ONLY)"
          class="mx-4"
        ></v-text-field>
      </template>
    </v-data-table>
    <v-btn small dark right absolute class="mt-4 mx-4" @click="deleteConfirm"
      >Delete first student</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "table",
  data() {
    return {
      search: "",
      name: "",
      students: [
        {
          name: "Chang Chang",
          phone: "0773554340",
          gender: "female",
          class: "A",
          address: "Thua Thien Hue",
        },
        {
          name: "Phong Hoang Nhu",
          phone: "0764917603",
          gender: "male",
          class: "B",
          address: "Thua Thien Hue",
        },
        {
          name: "Ngoc Ngoc",
          phone: "09053553416",
          gender: "female",
          class: "A",
          address: "Da Nang",
        },
        {
          name: "Chang Chang 2",
          phone: "0773554340",
          gender: "female",
          class: "A",
          address: "Thua Thien Hue",
        },
        {
          name: "Phong Hoang Nhu 2",
          phone: "0764917603",
          gender: "male",
          class: "B",
          address: "Thua Thien Hue",
        },
        {
          name: "Ngoc Ngoc 2",
          phone: "09053553416",
          gender: "female",
          class: "A",
          address: "Da Nang",
        },
      ],
      names: [],
    };
  },
  created() {
    for (const i of this.students) {
      console.log(i);
      this.names.push(i.name);
      console.log(this.names);
    }
  },
  methods: {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
    deleteConfirm() {
      this.students.splice(0, 1);
    },
  },
  computed: {
    headers() {
      return [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Phone",
          value: "phone",
        },
        { text: "Gender", value: "gender" },
        { text: "Class", value: "class" },
        { text: "Address", value: "address" },
      ];
    },
  },
};
</script>

<style>
</style>