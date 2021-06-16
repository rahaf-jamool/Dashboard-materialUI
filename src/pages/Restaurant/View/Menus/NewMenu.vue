<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <NewMenuForm data-background-color="green"> </NewMenuForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesMenu> </UploadImagesMenu>
      </div>
    </div>
  </div>
</template>

<script>
import UploadImagesMenu from "../../component/Menus/UploadImagesMenu";
import NewMenuForm from "../../component/Menus/NewMenuForm";
export default {
  name: "NewMenu",
  components: {NewMenuForm, UploadImagesMenu}
}
</script>

<style scoped>

</style>