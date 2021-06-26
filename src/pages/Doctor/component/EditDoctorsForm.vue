<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edit Doctor</h4>

        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>First_name</label>
              <md-input v-model="doctors.doctor[2].first_name"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Last_name</label>
              <md-input v-model="doctors.doctor[2].last_name"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Description</label>
              <md-input
                v-model="doctors.doctor[2].description"
                type="text"
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-button @click="putDoctor()">Update</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script lang="js">
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "EditDoctorsForm",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      doctors: {
        doctor: [
          {
            first_name: "fahed",
            last_name: "fahed",
            description: "fahedfahedfahedfahed",
            locale: "en",
          },
          {
            first_name: "fahed",
            last_name: "fahed",
            description: "fahedfahedfahedfahed",
            locale: "en",
          },
          {
            first_name: null,
            last_name: null,
            description: "vhbgvhvh",
            locale: "ar",
          },
        ],
        is_active: 1,
        is_approved: 1,
        image: "https://www.qries.com/images/banner_logo.png",
        social_media_id: 1,
        clinic_id: 1,
        appointments_id: 1,
        specialty_id: 1,
        hospital_id: 1,
        created_at: null,
        updated_at: null,
      },
    };
  },
  methods: {
    putDoctor() {
      axios.put(
        "http://edalili.e-dalely.com/public/api/doctor/update/",
        this.doctors
      );
      console.log(JSON.stringify(this.doctors));
      this.$router.push({ name: "allDoctors" });
    },
  },
  computed: {
    ...mapState({
      DoctorID: (state) => state.Doctors.DoctorID,
    }),
  },
  mounted() {
    this.$store.dispatch("loadDoctor", this.$route.params.id);
  },
};
</script>
