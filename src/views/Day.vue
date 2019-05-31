<template>
  <div id="logday">
    <v-layout column row>
      <v-card class="days"></v-card>

      <div class="log">
        <v-flex>
          <div class="tieude1">
          <tr >
            <v-btn class="addtask" type="button" @click="addNewRow">
              <v-icon>add</v-icon>
            </v-btn>
            <th class="tieude"  color="cyan lighten-2
">Start Time</th>
            <th class="tieude">End Time</th>
            <th class="tieude">Break Time</th>
            <th class="tieude">Duration</th>
            <th class="comment" style="    background: #ECEFF1;
">Comment</th>
          </tr>
          <tr>
            

            <br>
          </tr>
          </div>
          <div class="tieude1">
          <tr>
            <th class="tast">
              <v-text-field 
              
              :counter="50" 
              :rules="taskRules" 
              label="Task" 
              required>.</v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="comment">
              <textarea placeholder="Comment" ></textarea>
            </th>
          </tr>
          </div>
          <div class="tieude1">
          <tr>
            <th class="tast">
              <v-text-field 
              
              :counter="50" 
              :rules="taskRules" 
              label="Task" 
              required>.</v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="comment">
              <textarea placeholder="Comment"></textarea>
            </th>
          </tr></div>
          <div class="tieude1">

          <tr>
            <th class="tast">
              <v-text-field 
              
              :counter="50" 
              :rules="taskRules" 
              label="Task" 
              required>.</v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="comment">
              <textarea placeholder="Comment"></textarea>
            </th>
          </tr>
          </div>
          <div class="tieude1">
          <tr v-for="(khanh, k) in khanh" :key="k">
            <th class="tast">
              <v-text-field
                :counter="50"
                :rules="taskRules"
                label="Task"
                required
                v-model="khanh.task"
              ></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field v-model="khanh.starttime"></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field v-model="khanh.endtime"></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field v-model="khanh.breaktime"></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field v-model="khanh.duration"></v-text-field>
            </th>
            <th class="comment">
              <textarea v-model="khanh.comment" placeholder="Comment"></textarea>
            </th>
          </tr>
          </div>
          <div class="tieude1">
          <tr>
            <th class="tast">Support</th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="comment">
              <textarea placeholder="Comment"></textarea>
            </th>
          </tr></div>
          <div class="tieude1">
          <tr>
            <th class="tast">Meeting</th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="comment">
              <textarea placeholder="Comment"></textarea>
            </th>
          </tr>
          </div>
          <div class="tieude1">
          <tr>
            <th class="tast">Regression Task</th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="nhaptime">
              <v-text-field></v-text-field>
            </th>
            <th class="comment">
              <textarea placeholder="Comment"></textarea>
            </th>
          </tr>
          </div>
          <v-btn class="save" color="info">save</v-btn>
        </v-flex>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      el: "#logday",
      khanh: [
        {task: "",
          starttime: "",
          endtime: "",
          breaktime: "",
          duration: "",
          comment: ""
          
        }
      ],
      
      taskRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 20) || "Name must be less than 20 characters"
      ]
    };
  },
  methods: {
    addNewRow() {
      this.khanh.push({
        task: "",
          starttime: "",
          endtime: "",
          breaktime: "",
          duration: "",
          comment: ""
      });
    }
  }
};
</script>
<style scoped>
.tast{border:solid 0.5px gray;
  border-radius: 5px;
      width: 160px;
   background: #ECEFF1;

}
.save {
  margin-top: 20px;
  margin-bottom: 100px;
  font-weight: bold;
}

.tieude {
  border:solid 0.5px gray;
  padding-top:20px;

  box-shadow: 5px 0px 8px -1px grey;
}

.nhaptime {
  border:solid 0.5px gray;
  border-radius: 5px;
}
.tieude {
  height: 60px;
  width: 120px;
  border-radius: 5px;
      width: 139px;
          background: #ECEFF1;


}
.addtask {
  margin-top: 17px;
  width: 143px;
}

.days {
  margin-bottom: 25px;
  height: 50px;
  font-weight: bold;
  font-size: 30px;
}

#logday {
  display: flex;
  flex-direction: column;
}

.log {
  display: flex;
  flex-direction: row;
}

.task {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: bold;
}

.task div {
  height: 20%;
}

td {
  height: 75px;
  padding-top: 23px;
  border: 1px solid;
  border-radius: 5px;
}
.nhaptime textarea {
  height: 100%;
  border-radius: 5px;
}
tr{
  background: white;
}
.comment{
  height: 60px;
  width: 200px;
  box-shadow: 5px 0px 8px -1px grey;
  border-radius: 5px;
  border:solid 0.5px gray;

}
.tieude1{
  margin-bottom: 3  px;
}
th{
  margin:15px;
}
</style>