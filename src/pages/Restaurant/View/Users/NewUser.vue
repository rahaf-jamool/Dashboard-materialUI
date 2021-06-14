<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <NewUserForm data-background-color="green"> </NewUserForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesUser> </UploadImagesUser>
      </div>
    </div>
  </div>
</template>

<script>
import NewUserForm from "../../component/Users/NewUserForm";
import UploadImagesUser from "../../component/Users/UploadImagesUser";
export default {
  name: "NewUser",
  components: {UploadImagesUser, NewUserForm}
}
</script>

<style scoped>

</style>