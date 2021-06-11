<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <EditDoctorsForm data-background-color="green"> </EditDoctorsForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesDoctor> </UploadImagesDoctor>
      </div>
    </div>
  </div>
</template>

<script>
import { EditDoctorsForm, UploadImagesDoctor } from "@/pages";

export default {
  name: "editdoctors",
  components: {
    EditDoctorsForm,
    UploadImagesDoctor,
  },
};
</script>
