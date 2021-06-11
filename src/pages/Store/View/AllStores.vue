<template>
  <div class="content">
    <form>
      <md-card>
        <md-card-header :data-background-color="'green'">
          <h4 class="title">Stores</h4>

          <p class="category">All Stores</p>

          <div class="new_product">
            <router-link :to="`newstore`"
              ><button>
                <i class="fa fa-plus"></i> &nbsp;&nbsp;New Stores
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
                <label>name</label>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-20">
              <md-field>
                <label>Section</label>
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
          <Stores
            v-for="items in Stores.slice(0, 10)"
            :key="items.pr"
            :id="items.id"
            :title="items.title"
            :section="items.section"
            :is_active="items.is_active"
          />
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { Stores } from "@/pages";
import { mapState } from "vuex";

export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  components: {
    Stores,
  },
  computed: {
    ...mapState({
      Stores: (state) => state.Stores.Stores,
    }),
  },
  mounted() {
    this.$store.dispatch("loadStores");
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
