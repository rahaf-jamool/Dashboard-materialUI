<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100 md-size-10">1</div>

    <div class="md-layout-item md-small-size-100 md-size-20">
      <img v-lazy="" />
    </div>

    <div class="md-layout-item md-small-size-100 md-size-20">Head & Shoulders</div>
    <div class="md-layout-item md-small-size-100 md-size-20">8 Hours</div>
    <div class="md-layout-item md-small-size-100 md-size-10">
      <i v-if="is_appear == 'Appear'" class="fa fa-check"></i>
      <i v-else class="fa fa-times"></i>
    </div>
    <div class="icon md-layout-item md-small-size-100 md-size-20">
      <router-link :to="`products/${id}`">
        <i class="fas fa-edit" style="margin: 0 10px;"></i>
      </router-link>

      <i @click="Delete()" class="fa fa-trash"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "offers",
  props: ["id", "name", "image", "is_appear", "quantity"],
  data() {
    return {
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
    };
  },
};
</script>
<style>
.md-field:not(.md-disabled)::after {
  display: none;
}
</style>
