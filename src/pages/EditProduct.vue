<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <EditProductForm data-background-color="green"> </EditProductForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImages> </UploadImages>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProductForm, UploadImages } from "@/pages";

export default {
  components: {
    EditProductForm,
    UploadImages
  }
};
</script>
