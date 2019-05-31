<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1"     hide-actions
>
    <template v-slot:items="props">
      <router-link to="/Day">
      </router-link>
      <td class="text-xs-center"><v-text-field></v-text-field></td>
      <td class="text-xs-center"><v-text-field></v-text-field></td>
      <td class="text-xs-center"><v-text-field></v-text-field></td>
      <td class="text-xs-center">{{ duration(props.item) }}</td>
      <td>
        <textarea placeholder="comment" readonly></textarea>
      </td>
            <td id="edit" title="edit "><button><v-icon></v-icon>edit</button></td>

    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
    headers: [
      {
        text: "Days",
        align: "center",
        sortable: false,
        value: "day"
      },
      { text: "Start Time", value: "starttime",align: "center" },
      { text: "End Time (g)", value: "endtime",align: "center" },
      { text: "Break Time (g)", value: "breaktime",align: "center" },
      { text: "Duration (g)", value: "duration" ,align: "center"},
      { text: "Comment ", value: "comment",align: "center" }
    ],
    desserts: [
      {
        
      },
      {
        
      },
      {
       
      },
      {
      
      },
      {
        
      },
      {
       
      },
      {
        
      },
      {
        
      },
      {
        
      },
      {
     
      },
      {
        
      },
      {
        
      },
      {
      
      },
      {

      },
      {
  
      },
      {
 
      },
      {

      },
      {
   
      },
      {
      
      },
      {
        
      },
      {
        
      },
      {
     
      },
      {
        
      },
      {
        
      },
      {
        
      },
      {
       
      },
      {
        
      },
      {
     
      },
      {
        
      },
      {
     
      }
    ]
  }),

  methods: {
    duration({ endtime, breaktime, starttime }) {
      return endtime - breaktime - starttime;
    }
  }
}
</script>
<style scoped>


.text-xs-right{
  text-align: center !important;
}
td.days{
  padding-top:14px !important ;
}

</style>
