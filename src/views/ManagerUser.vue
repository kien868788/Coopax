<template>
    <v-layout column>
       <app-addUser></app-addUser>
        <br>
          
    <app-datatableUser></app-datatableUser>
    </v-layout>
</template>

<script>
import DatatableUser from './DatatableUser.vue'
import AddUser from './AddUser.vue'
export default {
      data () {
      return {
        dialog: false
      }
    },
     components:{
         appDatatableUser :DatatableUser,
         appAddUser:AddUser
     }
}
</script>
<style scoped>
.addUser{
    font-size: 30px;
    font-weight: bold;
}
</style>