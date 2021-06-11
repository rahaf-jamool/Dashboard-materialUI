<template>
  <div class="content">
    <form>
      <md-card>
        <md-card-header :data-background-color="'green'">
          <h4 class="title">Brands</h4>

          <p class="category">All your Brands</p>

          <div class="new_product">
            <router-link :to="`newbrand`"
              ><button>
                <i class="fa fa-plus"></i> &nbsp;&nbsp;New Brand
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
                <label>Name</label>
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
          <Brands
            v-for="items in Brands"
            :key="items.pr"
            :id="items.id"
            :name="items.name"
            :image="items.image"
            :Description="items.Description"
            :is_active="items.is_active"
            style="margin: 10px 0"
          >
          </Brands>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Brands from "../component/Brands.vue";
export default {
  name: "allBrands",
  components: { Brands },
  computed: {
    ...mapState({
      Brands: (state) => state.All.Brands,
    }),
  },
  mounted() {
    this.$store.dispatch("loadBrands");
  },
};
</script>
