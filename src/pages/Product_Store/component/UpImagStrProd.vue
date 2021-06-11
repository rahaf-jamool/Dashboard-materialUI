<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <UploadImage class="upload_img" :max="3" @change="handleImages" />
      <md-button class="md-round md-success" @click="postPost()"
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
  name: "UploadImages",
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
      products: {
        product: [
          {
            local: "ar",
            name: "ar",
            meta: "arefe",
            short_des: "ar ",
            long_des: "ar ar",
          },
          {
            local: "en",
            name: "efen",
            meta: "efefen",
            short_des: "en en",
            long_des: "en en",
          },
          {
            local: "fr",
            name: "ffer",
            meta: "ffefr",
            short_des: "fr fr",
            long_des: "fr fr",
          },
        ],
        brand_id: 1,
        barcode: "mobiles",
        slug: "mobiles",
        rating_id: 1,
        offer_id: 1,
        image: [],
        custom_feild_id: 1,
        is_active: 1,
        is_appear: 1,
        category_id: 2,
        category: [
          {
            category_id: 1,
          },
          {
            category_id: 2,
          },
          {
            category_id: 3,
          },
        ],
        customFeild: [
          {
            Gender: [
              {
                Male: 0,
                Female: 0,
              },
            ],
          },
          {
            Size: [
              {
                Large: 0,
                Medium: 0,
                Small: 0,
              },
            ],
          },
        ],
        images: [
          {
            product_id: 1,
            image: "asdasd",
            is_cover: 1,
          },
          {
            product_id: 1,
            image: "asdasd",
            is_cover: 0,
          },
          {
            product_id: 1,
            image: "asdasd",
            is_cover: 0,
          },
        ],
      },
    };
  },
  methods: {
    // Pushes posts to the server when called.
    postPost() {
      axios.post(
        "http://edalili.e-dalely.com/public/api/products/create",
        this.products
      );

      console.log(JSON.stringify(this.products));
    },
    handleImages(Imgs) {
      this.products.image = "http://localhost:8081/img/" + Imgs[0].name;
      for (var i = 0; i < Imgs.length; i++) {
        this.products.images[i] = Imgs[i].name;
        this.products.images[i] = {
          image: Imgs[i].name,
          product_id: this.ProductID.id,
          is_cover: i === 0 ? 1 : 0,
        };
      }
      console.log(this.products.images);
    },
  },

  computed: {
    ...mapState({
      Categories: (state) => state.All.Categories,
      Brands: (state) => state.All.Brands,
    }),
  },
  mounted() {
    this.$store.dispatch("loadBrands");
    this.$store.dispatch("loadCategories");
  },
};
</script>
<style></style>
