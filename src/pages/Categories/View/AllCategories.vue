<template>
  <div class="content">
    <form>
      <md-card>
        <md-card-header :data-background-color="'green'">
          <h4 class="title">Categories</h4>

          <p class="category">All your Categories</p>

          <div class="new_product">
            <router-link :to="`newcategory`"
              ><button>
                <i class="fa fa-plus"></i> &nbsp;&nbsp;New Categories
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
                <label>Section</label>
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
          <Categories
            v-for="items in Categories"
            :key="items.pr"
            :id="items.id"
            :name="items.name"
            :image="items.image"
            :section_id="items.section_id"
            :is_active="items.is_active"
            style="margin: 10px 0"
          >
          </Categories>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Categories from "../component/Categories.vue";
export default {
  components: { Categories },
  name: "allCategories",
  computed: {
    ...mapState({
      Categories: (state) => state.All.Categories,
      sections: (state) => state.All.sections,
    }),
  },
  mounted() {
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadSections");
  },
};
</script>
