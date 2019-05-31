<template>
      <div id="addmemberproject">
<v-data-table v-bind:headers="headers" :items="items" hide-actions class="elevation-1">
      <template slot="items" scope="props">
        <td class="index" >{{ props.index }}
        </td>
              

        <td class="text-xs-center"><router-link to="/User">{{ props.item.username }}</router-link></td>
        
        <td class="text-xs-center">{{ props.item.firstname }}</td>
        <td class="text-xs-center">{{ props.item.lastname }}</td>
        <td class="text-xs-center">{{ props.item.type }}</td>
        <td class="text-xs-center">{{ props.item.role }}</td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
     
      el: "#addmemberproject",
      headers: [
        {
          text: "No",
          align: "center",
          sortable: false
        },
        { text: "User name", value: "username", align: "center" },
        { text: "First Name", value: "firstname", align: "center" },
        { text: "Last Name", value: "lastname", align: "center" },
        { text: "Type", value: "type", align: "center" },
        { text: "Role", value: "role", align: "center" }
      ],
      items: [
        {
          value: false ,
          username: 'Khánh Võ',
          firstname: 'Khánh',
          lastname: 'Võ',
          type: 'Dev',
          role:'Member'
        }
      ]
    };
  }
};
</script>
<style scoped>
#addmemberproject {
  width: 100%;
  margin-bottom: 100px;
}
.index{
  text-align: center;
}
</style>
