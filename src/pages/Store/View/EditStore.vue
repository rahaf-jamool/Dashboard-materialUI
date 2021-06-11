<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <EditStoreForm data-background-color="green"> </EditStoreForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesStore> </UploadImagesStore>
      </div>
    </div>
  </div>
</template>

<script>
import { EditStoreForm, UploadImagesStore } from "@/pages";

export default {
  components: {
    EditStoreForm,
    UploadImagesStore
  }
};
</script>
