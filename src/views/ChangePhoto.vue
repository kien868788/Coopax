<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn class="changePhoto"           color="green"
 dark v-on="on">Change Ava</v-btn>
    </template>

    <v-card>
      <v-card>
        <v-img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"></v-img>

        <v-card-title primary-title>
          <div>
            <h3>{{ card_text }}</h3>
          </div>
        </v-card-title>
      </v-card>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="file" color="primary" flat @click="dialog = false">File</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      card_text: "Khánh Võ"
    };
  }
};
</script>
<style scoped>
.changePhoto {
  font-size: 12px;
  height: 35px;
  width: 50px;
}
</style>
