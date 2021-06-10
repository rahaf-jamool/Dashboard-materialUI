<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edit Store</h4>
        
        <p class="category">Complete your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">

          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Name</label>
              <md-input v-model="disabled" ></md-input>
            </md-field>
          </div>

        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>

export default {
  name: "EditStoreForm",
   components: {

  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
     products: {
                product: [
                    {
                        local: 'ar',
                        name: null,
                        meta: 'arefe',
                        short_des: null,
                        long_des: null,
                    },
                    {
                        local: 'en',
                        name: 'efen',
                        meta: 'efefen',
                        short_des: 'en en',
                        long_des: 'en en',
                    },
                    {
                        local: 'fr',
                        name: 'ffer',
                        meta: 'ffefr',
                        short_des: 'fr fr',
                        long_des: 'fr fr',
                    },
                ],
                brand_id: null,
                barcode: 'mobiles',
                slug: 'mobiles',
                rating_id: 1,
                offer_id: 1,
                image: [],
                custom_feild_id: 1,
                is_active: 1,
                is_appear: 1,
                category_id: null,
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
                        image: 'asdasd',
                        is_cover: 1,
                    },
                    {
                        product_id: 1,
                        image: 'asdasd',
                        is_cover: 0,
                    },
                    {
                        product_id: 1,
                        image: 'asdasd',
                        is_cover: 0,
                    },
                ],
            }
    };
  }
};
</script>
<style></style>
