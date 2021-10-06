<template>
  <div id="table">
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
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.actions = {item}>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <ButtonDelete />
  </div>
</template>

<script>
import ButtonDelete from "./ButtonDelete.vue";
export default {
  name: "table",
  data() {
    return {
      search: "",
      name: "",
      dialogDelete: false,
      names: [],
      editedIndex: -1,
      students: [],
      editedItem: null
    };
  },

  created() {
    this.students = this.$store.state.students;
    for (const i of this.students) {
      this.names.push(i.name);
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
    deleteItem(item) {
      this.editedIndex = this.students.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.students.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
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
        { text: "Actions", value: "actions", sortable: false },
      ];
    },
  },
  components: {
    ButtonDelete,
  },
};
</script>

<style>
</style>