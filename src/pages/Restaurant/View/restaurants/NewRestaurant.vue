<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <NewRestaurantForm data-background-color="green"> </NewRestaurantForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesRestaurant> </UploadImagesRestaurant>
      </div>
    </div>
  </div>
</template>

<script>
import NewRestaurantForm from "../../component/restaurants/NewRestaurantForm";
import UploadImagesRestaurant from "../../component/restaurants/UploadImagesRestaurant";
export default {
  name: "NewRestaurant",
  components: {UploadImagesRestaurant, NewRestaurantForm}
}
</script>

<style scoped>

</style>