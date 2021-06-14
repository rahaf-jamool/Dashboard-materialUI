<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <NewMealsForm data-background-color="green"> </NewMealsForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesMeals> </UploadImagesMeals>
      </div>
    </div>
  </div>
</template>

<script>
import NewMealsForm from "../../component/Meals/NewMealsForm";
import UploadImagesMeals from "../../component/Meals/UploadImagesMeals";
export default {
  name: "NewMeals",
  components: {UploadImagesMeals, NewMealsForm},
};
</script>
