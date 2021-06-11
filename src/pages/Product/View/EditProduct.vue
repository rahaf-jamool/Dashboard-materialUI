<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <EditProductForm data-background-color="green"> </EditProductForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesProduct> </UploadImagesProduct>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProductForm, UploadImagesProduct } from "@/pages";

export default {
  components: {
    EditProductForm,
    UploadImagesProduct
  }
};
</script>
