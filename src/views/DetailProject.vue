<template>
  <v-layout column wrap>
    <app-profileProject></app-profileProject>
    <app-addmember></app-addmember>
    <app-datatableMember></app-datatableMember>
  </v-layout>
</template>
<script>
import Profile from './ProfileProject'
import DatatableMember from './DatatableMemberProject'
import AddMember from'./AddMemberProject'
export default {
  data() {
    return{

    }},

  components:{
    appAddmember :AddMember,
    appProfileProject: Profile,
    appDatatableMember:DatatableMember
  }
}
</script>

<style scoped>

</style>
