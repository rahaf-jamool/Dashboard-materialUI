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
  name: "UploadImagesBrand",
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
      Brands: {
        brands: [
          {
            name: "jhjjhjh",
            description: "jbjb",
            locale: "en",
            language_id: 1,
          },
          {
            name: ",ljlkjlkj",
            description: "knjlnlk",
            locale: "fr",
            language_id: 1,
          },
          {
            name: null,
            description: null,
            locale: "ar",
            language_id: 1,
          },
        ],
        slug: "gfvghf",
        is_active: 1,
        image: null,
        lang_id: 1,
      },
    };
  },
  methods: {
    // Pushes posts to the server when called.
    postBrands() {
      axios.post(
        "http://edalili.e-dalely.com/public/api/brands/create",
        this.Brands
      );
      console.log(JSON.stringify(this.Brands));
      this.$router.push({ name: "loadBrands" });
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
      Brands: (state) => state.All.Brands,
      BrandID: (state) => state.All.BrandID,
    }),
  },
  mounted() {
    this.$store.dispatch("loadBrands");
    this.$store.dispatch("loadBrand", this.$route.params.id);
  },
};
</script>
<style></style>
