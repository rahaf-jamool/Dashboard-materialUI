<template>
  <div class="content">
    <form>
      <md-card>
        <md-card-header :data-background-color="'green'">
          <h4 class="title">Products</h4>

          <p class="category">All your Products</p>

          <div class="new_product">
            <router-link :to="`newproduct`"
              ><button>
                <i class="fa fa-plus"></i> &nbsp;&nbsp;New Products
              </button></router-link
            >
          </div>
        </md-card-header>

        <md-card-content>
          <!-- nav detalis products -->
          <div class="md-layout">
            <div class="md-layout-item md-small-size-100 md-size-20">
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
                <label>Status</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Edit</label>
              </md-field>
            </div>
          </div>
          <!-- loop products -->
          <Products
            v-for="items in Product.slice(0, 10)"
            :key="items.pr"
            :id="items.id"
            :name="items.name"
            :image="items.image"
            :is_appear="items.is_appear"
            style="margin: 10px 0"
          >
          </Products>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { Products } from "@/pages";
import { mapState } from "vuex";

export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  components: {
    Products,
  },
  computed: {
    ...mapState({
      Product: (state) => state.All.Product,
    }),
  },
  mounted() {
    this.$store.dispatch("loadProducts");
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
