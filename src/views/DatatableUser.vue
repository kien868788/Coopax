<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1" hide-actions>
    <template v-slot:items="props">
      
        <td class="text-xs-right"><router-link to="/user-profile">{{ props.item.userName }}</router-link></td>
      

      <td class="text-xs-right">{{ props.item.firstname }}</td>
      <td class="text-xs-right">{{ props.item.lastname }}</td>
      <td class="text-xs-right">{{ props.item.type }}</td>
      <td class="text-xs-right">{{ props.item.role }}</td>
      <td class="text-xs-right">{{ props.item.project }}</td>
      <td id="remove" title="remove User"><button><v-icon> outline-remove-shopping-cart</v-icon></button></td>
      <td id="deactivate" title="Deactivate User"><button><v-icon>visibility_off</v-icon></button></td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
   
    headers: [
      {
        text: "Days",
        align: "left",
        sortable: false,
        value: "UserName"
      },
      { text: "FirstName", value: "firstname" },
      { text: "Last Name (g)", value: "lastname" },
      { text: " Type(g)", value: "type" },
      { text: "Role (g)", value: "role" },
      { text: "Project (g)", value: "project" }
    ],
    desserts: [
      {
        userName: "khanhvo1002",
        firstname: "Khánh",
        lastname: "Võ",
        type: "DEV",
    
        project: "TimeLog",
        role: "member",
         
      },
       {
        userName: "ngocanh",
        firstname: "Ánh",
        lastname: "Nguyễn",
        type: "User Story",
    
        project: "TimeLog",
        role: "Lead"
      },
       {
        userName: "kientran",
        firstname: "Kiên",
        lastname: "Trần",
        type: "DEV",
    
        project: "TimeLog",
        role: "member"
      } 
    ]
  })
};
</script>
<style scoped>
.elevation-1 {
  margin-bottom: 100px;
}
.text-xs-right {
  text-align: left !important;
}
td.days {
  padding-top: 14px !important ;
}

</style>
