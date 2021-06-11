<template>
  <div class="content">
    <form>
      <md-card>
        <md-card-header :data-background-color="'green'">
          <!-- <div class="topnav">
            <router-link class="active a" to="/allDoctors">Dectors</router-link>
            <router-link class="a" to="/trashdoctors">Trached</router-link>
          </div> -->
          <!-- <div style="display:flex;">
            <h4 class="title">Doctors</h4>
            <h4>Trashed</h4>
          </div> -->
          <p class="category">All your Doctors</p>

          <div class="new_product">
            <router-link :to="`newdoctor`"
              ><button>
                <i class="fa fa-plus"></i> &nbsp;&nbsp;New Doctor
              </button></router-link
            >
          </div>
        </md-card-header>

        <md-card-content>
          <!-- nav detalis products -->
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-10">
              <md-field>
                <label>Id</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Img</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>FirstName</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-10">
              <md-field>
                <label>LastName</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-10">
              <md-field>
                <label>Description</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-10">
              <md-field>
                <label>Status</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-10">
              <md-field>
                <label>Action</label>
              </md-field>
            </div>
          </div>
          <!-- loop products -->
          <Doctors
            v-for="items in doctors"
            :key="items.pr"
            :id="items.id"
            :first_name="items.first_name"
            :last_name="items.last_name"
            :image="items.image"
            :description="items.description"
            :is_active="items.is_active"
            style="margin: 10px 0"
          >
          </Doctors>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Doctors from "../component/Doctors.vue";
export default {
  components: { Doctors },
  name: "allDoctors",
  computed: {
    ...mapState({
      doctors: (state) => state.Doctors.doctors,
    }),
  },
  mounted() {
    this.$store.dispatch("loadDoctors");
  },
};
</script>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
  margin-left: 18%;
  margin-right: 10px;
  margin-top: 10px;
}

/* Style the links inside the navigation bar */
.topnav .a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav .a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav .a.active {
  background-color: #04aa6d;
  color: white;
}
</style>
