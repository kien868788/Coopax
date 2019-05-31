<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn class="changePass"           color="green"
 dark v-on="on">Edit Pass</v-btn>
    </template>

    <v-card>
      <material-card
          color="green"
          title="Edit PassWord"
          text="Change your password"
        >
      <v-text-field
      class="formchangepass"
        v-model="yourPass"
        type="password"
        :rules="yourPassRules"
        label="Your Password"
        required
      ></v-text-field>
      <v-text-field
            class="formchangepass"

        v-model="newPass"
        type="password"
        :rules="newPassRules"
        label="New Password"
        required
      ></v-text-field>
      <v-text-field
            class="formchangepass"

        type="password"
        v-model="retypePass"
        :rules="retypePassRules"
        label="Retype Password"
        required
      ></v-text-field>
      <v-divider></v-divider>
      <v-btn color="green" class="save">Save</v-btn>
      </material-card>

    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      yourPass: "",
      yourPassRules: [
        v => !!v || "Pass is required",
        v => (v && v.length < 8) || "You need at least 8 characters"
      ],
      newPass: "",
      newPassRules: [
        v => (v && v.length < 8) || "You need at least 8 characters"
      ],
      retypePass: "",
      retypePassRules: [
        v => (v && v.length < 8) || "You need at least 8 characters",
        this.isSamePass
      ]
    };
  },

  methods: {
    isSamePass(){
      console.log('abc', this.newPass, this.retypePass);
      return this.newPass === this.retypePass || 'Password must be same';
    }
  }
};
</script>
<style scoped>
.save{
    margin-left: 15px;

}
.changePass {
  margin-left: 15px;
  font-size: 12px;
  height: 35px;
  width: 50px;
}
.formchangepass{
  margin-left: 15px;
  margin-right: 15px;
}
</style>
