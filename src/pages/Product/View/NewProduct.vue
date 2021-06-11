<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <CreateProductForm data-background-color="green"> </CreateProductForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesProduct> </UploadImagesProduct>
      </div>
    </div>
  </div>
</template>

<script>
import { CreateProductForm, UploadImagesProduct } from "@/pages";

export default {
  components: {
    CreateProductForm,
    UploadImagesProduct
  }
};
</script>
