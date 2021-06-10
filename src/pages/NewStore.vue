<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <CreateStoreForm data-background-color="green"> </CreateStoreForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImages> </UploadImages>
      </div>
    </div>
  </div>
</template>

<script>
import { CreateStoreForm, UploadImages } from "@/pages";

export default {
  components: {
    CreateStoreForm,
    UploadImages
  }
};
</script>
