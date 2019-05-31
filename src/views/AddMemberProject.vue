<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }" :items="items">
        <v-btn color="green"  dark v-on="on">ADD MEMBER</v-btn>
      </template>

      <v-card>
        <v-card-title class="green" primary-title>MemBer</v-card-title>

        <v-card-text>
          <v-autocomplete
            v-model="model"
            :items="states"
            :label="`UserMemBer — ${isEditing ? 'Editable' : 'Readonly'}`"
            persistent-hint
            prepend-icon="mdi-city"
          >
            
          </v-autocomplete>
          <v-select class="role"
          prepend-icon="mdi-city" :items="status"  label="Role"></v-select>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
              status: ["Member", "Project Technique Leader", "Project Manager"],

      dialog: null,
      isEditing: false,
      model: null,
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ]
    };
  }
};
</script>
<style scoped>
.info {
  font-weight: bold;
  font-size: 24px;
}

</style>

