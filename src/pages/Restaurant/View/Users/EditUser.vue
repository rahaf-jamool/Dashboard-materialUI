<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <EditUserForm data-background-color="green"> </EditUserForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesUser> </UploadImagesUser>
      </div>
    </div>
  </div>
</template>

<script>
import EditUserForm from "../../component/Users/EditUserForm";
import UploadImagesUser from "../../component/Users/UploadImagesUser";
export default {
  name: "EditUser",
  components: {UploadImagesUser, EditUserForm}
}
</script>

<style scoped>

</style>