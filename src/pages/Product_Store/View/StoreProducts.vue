<template>
  <div class="content">
    <form>
      <md-card>
        <md-card-header :data-background-color="'green'">
          <h4 class="title">Store {{ this.$route.params.id }}</h4>

          <p class="category">Store Products</p>

          <div class="new_product">
            <router-link :to="`/store/${this.$route.params.id}/newproduct`"
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
          <StoreProd
            v-for="items in store.product.slice(0, 10)"
            :key="items.pr"
            :id="items.id"
            :name="items.name"
            :image="items.image"
            :is_appear="items.is_appear"
            style="margin: 10px 0"
          />
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { StoreProd } from "@/pages";
import { mapState } from "vuex";

export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  components: {
    StoreProd,
  },
  computed: {
    ...mapState({
      store: (state) => state.Stores.store,
    }),
  },
  mounted() {
    this.$store.dispatch("loadstore", this.$route.params.id);
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
