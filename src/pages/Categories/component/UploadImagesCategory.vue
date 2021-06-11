<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <UploadImage class="upload_img" :max="3" @change="handleImages" />
      <md-button class="md-round md-success" @click="postCategor()"
        >Save</md-button
      >
    </md-card-content>
  </md-card>
</template>
<script>
import UploadImage from "vue-upload-drop-images";
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "UploadImagesCategory",
  components: {
    UploadImage,
  },
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg"),
    },
  },
  data() {
    return {
      files: [],
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
        image: null,
        lang_id: 1,
        section_id: null,
        created_at: null,
        updated_at: null,
      },
    };
  },
  methods: {
    // Pushes posts to the server when called.
    postCategory() {
      axios.post(
        "http://edalili.e-dalely.com/public/api/categories/create",
        this.categories
      );
     console.log(JSON.stringify(this.categories));
      this.$router.push({ name: "categories_dash" });
    },
    // handleImages(Imgs) {
    //     this.categories.image = 'http://localhost:8081/img/' + Imgs[0].name;
    //     for (var i = 0; i < Imgs.length; i++) {
    //         this.categories.images[i] = Imgs[i].name;
    //         this.categories.images[i] = {
    //             image: Imgs[i].name,
    //             product_id: this.CategoryID.id,
    //             is_cover: i === 0 ? 1 : 0,
    //         };
    //     }
    //     console.log(this.categories.images);
    // },
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
};
</script>
<style></style>
