<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1" hide-actions>
    <template v-slot:items="props">
     
      <td class="text-xs-center"> <router-link to="/DetailProject">{{ props.item.projectName }} </router-link></td>
     
      <td class="text-xs-center">{{ props.item.startDay }}</td>
      <td class="text-xs-center">{{ props.item.description }}</td>
      <td class="text-xs-center">
        <v-select :items="status" class="status" label="Standard"></v-select>
      </td>
      <td id="remove" title="remove Project">
        <button>
          <v-icon>remove_shopping_cart</v-icon>
        </button>
      </td>
      <td id="deactivate" title="Deactivate Project">
        <button>
          <v-icon>visibility_off</v-icon>
        </button>
      </td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      status: ["done", "doing", "cancelled", "assigned"],
      headers: [
        {
          text: "Name Project",
          align: "center",
          sortable: false,
          value: "ProjectName"
        },
        { text: "Start Day (g)", value: "startDay" ,align:"center"},
        { text: "Description (g)", value: "description" ,align:"center"},
        { text: "Status (g)", value: "status" ,align:"center"}
      ],
      desserts: [
        {
          projectName: "Tigers",
          startDay: "28/05/2019",
          description: "TimeLog",
          status
        },
        {
          projectName: "Tigers",
          startDay: "28/05/2019",
          description: "TimeLog",
          status
        },
        {
          projectName: "Tigers",
          startDay: "28/05/2019",
          description: "TimeLog",
          status
        }
      ]
    };
  }
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
.ProjectName {
  padding-top: 12px !important;
  padding-left: 0px !important;
  padding-bottom: 12px !important;
}
.status {
  width: 150px;
}
</style>
