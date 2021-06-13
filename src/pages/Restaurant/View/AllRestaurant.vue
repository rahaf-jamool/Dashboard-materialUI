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
          <p class="category">All your Restaurant</p>

          <div class="new_product">
            <router-link :to="`newrestaurant`"
            ><button>
              <i class="fa fa-plus"></i> &nbsp;&nbsp;New Restaurant
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
                <label>Title</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-10">
              <md-field>
                <label>Description</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-10">
              <md-field>
                <label>Action</label>
              </md-field>
            </div>
          </div>
          <!-- loop products -->
          <Restaurant>
          </Restaurant>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import Restaurant from "../component/Restaurant";
export default {
  name: "AllRestaurant",
  components: {Restaurant}
}
</script>

<style scoped>

</style>