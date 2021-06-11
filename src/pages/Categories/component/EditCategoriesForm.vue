<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edit Category</h4>

        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Name</label>
              <md-input v-model="categories.category[2].name"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Section</label>
              <md-input v-model="categories.section_id" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Parent Category</label>
              <md-input v-model="categories.parent_id" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-button @click="updateCategory()">Update</md-button>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Image</label>
              <md-input
                v-model="categories.image"
                type="email"
                placeholder="Size"
              ></md-input>
            </md-field>
          </div> -->
          <!-- Brand -->
          <!-- <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Brand</h4>
          </md-card-header>
            <Brands></Brands>
        </md-card>
      </div> -->
          <!-- Categories -->
          <!-- <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Categories</h4>
          </md-card-header>
            <Categories></Categories>
        </md-card>
      </div> -->
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "EditCategoryForm",

  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      categories: {
        category: [
          {
            name: "jhjjhjh",
            local: "en",
            language_id: 1,
          },
          {
            name: ",ljlkjlkj",
            local: "fr",
            language_id: 1,
          },
          {
            name: null,
            local: "ar",
            language_id: 1,
          },
        ],
        is_active: 1,
        slug: "jnjkbnjkbjk",
        parent_id: null,
        image: "null",
        lang_id: 1,
        section_id: null,
        created_at: null,
        updated_at: null,
      },
    };
  },
  computed: {
    ...mapState({
      Categories: (state) => state.All.Categories,
      CategoryID: (state) => state.All.CategoryID,
      sections: (state) => state.All.sections,
    }),
  },
  mounted() {
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadCategory", this.$route.params.id);
    this.$store.dispatch("loadSections");
  },
  methods: {
    updateCategory() {
      axios.put(
        `http://edalili.e-dalely.com/public/api/categories/update/${this.CategoryID.id}`,
        this.categories
      );
      console.log(JSON.stringify(this.categories));
      this.$router.push({ name: "allCategories" });
    },
  },
};
</script>
<style></style>
