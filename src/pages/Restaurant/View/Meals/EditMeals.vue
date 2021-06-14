<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <EditMealsForm data-background-color="green"> </EditMealsForm>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <UploadImagesMeals> </UploadImagesMeals>
      </div>
    </div>
  </div>
</template>

<script>
import EditMealsForm from "../../component/Meals/EditMealsForm";
export default {
  name: "EditMeals",
  components: {EditMealsForm},
};
</script>
