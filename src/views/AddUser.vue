<template>
  <v-dialog v-model="dialog" width="500">

    <template v-slot:activator="{ on }">
      <v-btn color="green" dark v-on="on" class="adduser">ADD USER</v-btn>
    </template>

    <v-card>
 <material-card
          color="green"
          title="ADD MEMBER"
          text="Information Member"
        >
      <v-card-text>
        <v-text-field
          v-model="firstname"
          type="text"
          :rules="firstnameRules"
          label="First Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="lastname"
          type="text"
          :rules="lastnameRules"
          label="Last Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="userName"
          type="text"
          :rules="userNameRules"
          label="User Name"
          required
        ></v-text-field>

        <v-text-field 
        v-model="Pass" 
        type="password" 
        :rules="PassRules" 
        label="Password" 
        required></v-text-field>
        <v-text-field
          type="password"
          v-model="retypePass"
          :rules="retypePassRules"
          label="Retype Password"
          required
        ></v-text-field>

        <v-select :items="types" label="Type"></v-select>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="dialog = false">ADD</v-btn>
      </v-card-actions>
 </material-card>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      firstname: "",
      firstnameRules: [v => !!v || "First Name is required"],
      lastname: "",
      lastnameRules: [v => !!v || "Last Name is required"],
      userName: "",
      userNameRules: [
        v => !!v || "User Name is required",
        v => (v && v.length < 25) || "You need at least 25 characters"
      ],
      retypePass: "",
      retypePassRules: [
        v => !!v || "Retype Password is required",
        v => (v && v.length > 8) || "You need at least 8 characters",
        this.isSamePass
      ],
      Pass: "",
      PassRules: [
        v => !!v || "Pass is required",
        v => (v && v.length > 8) || "You need at least 8 characters"
      ],
      roles: ["Member", "Project Technique Leader ", "Project Manager"],
      types: ["Dev", "Tester ", "scrum master"]
    };
  },

  methods: {
    isSamePass() {
      return this.Pass === this.retypePass || "Password must be same";
    }
  }
};
</script>
<style>
.adduser {
  width: 150px;
}
</style>
