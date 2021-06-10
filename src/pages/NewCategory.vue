<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <NewDoctorsForm data-background-color="green"> </NewDoctorsForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesDoctor> </UploadImagesDoctor>
      </div>
    </div>
  </div>
</template>

<script>
import { NewDoctorsForm, UploadImagesDoctor } from "@/pages";

export default {
  name: "NewCategory",
  components: {
    NewDoctorsForm,
    UploadImagesDoctor,
  },
};
</script>
