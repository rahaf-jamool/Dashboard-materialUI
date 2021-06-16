<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <EditMenuForm data-background-color="green"> </EditMenuForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesMenu> </UploadImagesMenu>
      </div>
    </div>
  </div>
</template>

<script>
import EditMenuForm from "../../component/Menus/EditMenuForm";
import UploadImagesMenu from "../../component/Menus/UploadImagesMenu";
export default {
  name: "EditMenu",
  components: {UploadImagesMenu, EditMenuForm}
}
</script>

<style scoped>

</style>