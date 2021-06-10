<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <CreateProductStor data-background-color="green"> </CreateProductStor>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImages> </UploadImages>
      </div>
    </div>
  </div>
</template>

<script>
import { CreateProductStor, UploadImages } from "@/pages";

export default {
  components: {
    CreateProductStor,
    UploadImages
  }
};
</script>
