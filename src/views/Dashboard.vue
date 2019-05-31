<template>
  <v-layout row wrap>
    <v-flex xs5>
      <v-text-field
        type="number"
        :counter="2"
        v-model="month"
        :rules="monthRules"
        label="Month"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs5>
      <v-text-field
        type="number"
        :counter="4"
        v-model="year"
        :rules="yearRules"
        label="year"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs2>
      
      <v-list-tile class="addmonth">
        <v-list-tile-content>
         <router-link to="/DataTable">View</router-link>
        </v-list-tile-content>
      </v-list-tile>
      
    </v-flex>

    <v-flex xs12>
      <app-datatable></app-datatable>
      <v-btn class="save" color="info">save</v-btn>

    </v-flex>
  </v-layout>
</template>



<script scoped>
import Datatable from './Datatable.vue'

export default {
  data: () => ({
    year: "",
    yearRules: [
      v => !!v || "Year?",
      
      
    ],
    month: "",
    monthRules: [
      v => !!v || "Month?",
      
    ]
  }),
  components:{
    appDatatable:Datatable
  }
  
}
</script>
<style scoped>
.timeday {
  margin-bottom: 25px;
}
.flex {
  background: #f5f5f5;
}
.add {
  margin-left: 20px;
}
.addmonth {
  margin-right: 15px;
  margin-top: 15px;
}
.edit {
  margin-left: 22px;
}
.day {
  padding-top: 50px;
  border: 1px solid black;
}
.task {
  flex-direction: column;
}
.task div {
  border: 1px solid black;
  height: 25%;
}
.log {
  display: flex;

  margin-bottom: 50px;
}

.div1 {
  height: 15px;
  width: 25%;
  margin: 10px;
}
.v-text-field {
  margin: 10px;
}
.add {
  margin: 15px;
}

</style>
