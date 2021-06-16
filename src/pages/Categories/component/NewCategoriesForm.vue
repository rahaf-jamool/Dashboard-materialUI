<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">New Category</h4>

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
          <!-- <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Section</label>
              <md-input v-model="categories.section_id" type="text"></md-input>
            </md-field>
          </div> -->
          <!-- <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Parent Category</label>
              <md-input v-model="categories.parent_id" type="email"></md-input>
            </md-field>
          </div> -->

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
          <div
            class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
          >
            <md-card>
              <md-card-header data-background-color="dataBackgroundColor">
                <h4 class="title">Section</h4>
              </md-card-header>
              <md-field>
                <md-select v-model="categories.section_id">
                  <md-option
                    v-for="item in sections"
                    :key="item.id"
                    :value="item.id"
                    >{{ item.name }}</md-option
                  >
                </md-select>
              </md-field>
            </md-card>
          </div>
          <!-- Categories -->
          <div
            class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
          >
            <md-card>
              <md-card-header data-background-color="dataBackgroundColor">
                <h4 class="title">Categories Parent</h4>
              </md-card-header>
              <md-field>
                <md-select v-model="categories.parent_id">
                  <md-option
                    v-for="category in Categories"
                    :key="category.id"
                    :value="category.id"
                    >{{ category.name }}</md-option
                  >
                </md-select>
              </md-field>
            </md-card>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-button data-background-color="green" @click="postCategory()"
              >Add</md-button
            >
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "NewCategoryForm",
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
      sections: (state) => state.All.sections,
    }),
  },
  mounted() {
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadSections");
  },
  methods: {
    postCategory() {
      axios.post(
        "http://edalili.e-dalely.com/public/api/categories/create",
        this.categories
      );
      console.log(JSON.stringify(this.categories));
      this.$router.push({ name: "allCategories" });
    },
  },
};
</script>

<style scoped></style>
