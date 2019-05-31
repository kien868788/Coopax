<template>
    <div>
    <material-card
          color="green"
          title="Detail Project"
          text="Project and member Information in Project"
        >

     <v-text-field
          v-model="projectname"
          type="text"
          :rules="projectnameRules"
          label="Project Name"
          class="projectname"
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
    </material-card>
        
</div>

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

  }
}
</script>
<style scoped>
.detailproject{
  height: 60px;
  
}
.namedetail{
  padding-top: 5px;
  font-size: 30px;
  font-weight: bold;
}
.projectname{
  font-size: 24px;
}
</style>
