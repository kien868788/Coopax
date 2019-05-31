<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="green" dark v-on="on" class="adduser">ADD Project</v-btn>
    </template>
 <material-card
          color="green"
          title="ADD Project"
          text="Information Project"
        >
    <v-card>
      
      <v-card-text>
        <v-text-field
          v-model="projectname"
          type="text"
          :rules="projectnameRules"
          label="Project Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="startday"
          type="text"
          :rules="startdayRules"
          label="Start Day"
          required
        ></v-text-field>
        <v-text-field
          v-model="description"
          type="text"
          :rules="descriptionRules"
          label="Description"
          required
        ></v-text-field>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">ADD</v-btn>
      </v-card-actions>
    </v-card>
 </material-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
       projectname: "",
      projectnameRules: [
        v => !!v || "Project Name is required",
        v => (v && v.length > 8) || "You need at least 8 characters"
      ], 
      startday: "",
      startdayRules: [
        v => !!v || "StartDay required",
        v => (v && v.length > 8) || "You need at least 8 characters"
      ], 
      description: "",
      descriptionRules: [
        v => !!v || "Description is required",
        v => (v && v.length > 8) || "You need at least 8 characters"
      ],
  }

  }}

</script>
<style>
.adduser {
  width: 150px;
}
</style>
