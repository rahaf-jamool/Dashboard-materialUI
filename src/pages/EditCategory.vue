<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <EditCategoriesForm data-background-color="green"> </EditCategoriesForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesCategory> </UploadImagesCategory>
      </div>
    </div>
  </div>
</template>

<script>
import { EditCategoriesForm, UploadImagesCategory } from "@/pages";

export default {
  components: {
    EditCategoriesForm,
    UploadImagesCategory,
  },
};
</script>
