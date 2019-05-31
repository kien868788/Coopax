<template>
    <v-layout column>
       <app-addProject></app-addProject>
        <br>
          
    <app-datatableProject></app-datatableProject>
    </v-layout>
</template>

<script>
import DatatableProject from './DatatableProject.vue'
import AddProject from './AddProject.vue'
export default {
      data () {
      return {
        dialog: false
      }
    },
     components:{
         appDatatableProject :DatatableProject,
         appAddProject:AddProject
     }
}
</script>
<style scoped>
.addProject{
    font-size: 30px;
    font-weight: bold;
}
</style>