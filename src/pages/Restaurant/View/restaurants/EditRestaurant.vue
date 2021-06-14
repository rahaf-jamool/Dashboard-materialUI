<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <EditRestaurantForm data-background-color="green"> </EditRestaurantForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesRestaurant> </UploadImagesRestaurant>
      </div>
    </div>
  </div>
</template>

<script>
import EditRestaurantForm from "../../component/restaurants/EditRestaurantForm";
import UploadImagesRestaurant from "../../component/restaurants/UploadImagesRestaurant";
export default {
  name: "EditRestaurant",
  components: {UploadImagesRestaurant, EditRestaurantForm}
}
</script>

<style scoped>

</style>