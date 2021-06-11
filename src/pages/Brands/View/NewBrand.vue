<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <NewBrandForm data-background-color="green"> </NewBrandForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesBrand> </UploadImagesBrand>
      </div>
    </div>
  </div>
</template>

<script>
import { NewBrandForm, UploadImagesBrand } from "@/pages";

export default {
  name: "newbrand",
  components: {
    NewBrandForm,
    UploadImagesBrand,
  },
};
</script>
