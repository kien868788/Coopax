<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >
        <material-card
          color="green"
          title="Edit Profile"
          text="Complete your profile"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Phone"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    class="purple-input"
                    label="User Name"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Email Address"
                    class="purple-input"/>
                    
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="First Name"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Last Name"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Address"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    class="purple-input"
                    label="Full Name"
                  />
                </v-flex>
                
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                   placeholder="Please say something about yourself."
                  />
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="success"
                  >
                    Update Profile
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <material-card class="v-card-profile">
          <v-avatar
            slot="offset"
            class="mx-auto d-block"
            size="130"
          >
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h6>
            <app-changePhoto></app-changePhoto>
       <app-changePass></app-changePass>
            <h4 class="card-title font-weight-light">{{name}}</h4>
            <v-select :items="Role" label="Role"></v-select>
    <v-select :items="Project" label="Project"></v-select>
    <v-select :items="Team" label="Team"></v-select>
            
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChangePhoto from './ChangePhoto.vue'
import ChangePass from './ChangePasswork'
export default {
  data:()=>({
        Role: ["Roles", "Roles1", "FiRoleszz", "Roles2"],
    Project: ["Project1", "Project2", "Project3", "Project4"],
    Team: ["Team1", "Team2", "Team3", "Team4", "Team5", "Team6"],
    name:"Khánh Võ"
    }),
  components:{
    appChangePhoto :ChangePhoto,
    appChangePass:ChangePass
  }
}
</script>
