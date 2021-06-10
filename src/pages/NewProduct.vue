<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <CreateProductForm data-background-color="green"> </CreateProductForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImages> </UploadImages>
      </div>
    </div>
  </div>
</template>

<script>
import { CreateProductForm, UploadImages } from "@/pages";

export default {
  components: {
    CreateProductForm,
    UploadImages
  }
};
</script>
