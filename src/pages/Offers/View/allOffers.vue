<template>
  <div class="content">
    <form>
      <md-card>
        <md-card-header :data-background-color="'green'">
          <h4 class="title">Offers</h4>

          <p class="category">All your Offers</p>

          <div class="new_product">
            <router-link :to="`newproduct`"
              ><button>
                <i class="fa fa-plus"></i> &nbsp;&nbsp;New Offer
              </button></router-link
            >
          </div>
        </md-card-header>

        <md-card-content>
          <!-- nav detalis products -->
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-10">
              <md-field>
                <label>id</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>img</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>name</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Time left</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-10">
              <md-field>
                <label>Status</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Edit</label>
              </md-field>
            </div>
          </div>
          <!-- loop offers -->
            <offers />
           
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { offers } from "@/pages";
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  components: {
   offers
  },
  computed: {
 
  },
  mounted() {

  },
};
</script>

<style>
.new_product {
  margin: 5px 0;
}
.new_product button {
  border: none;
  background-color: #4e9952;
  padding: 10px;
  color: #fff;
  border-radius: 5%;
  cursor: pointer;
}
</style>
