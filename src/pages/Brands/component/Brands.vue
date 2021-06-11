<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100 md-size-10">{{ id }}</div>

    <div class="md-layout-item md-small-size-100 md-size-20">
      <img :src="image" />
    </div>

    <div class="md-layout-item md-small-size-100 md-size-20">{{ name }}</div>
    <div class="md-layout-item md-small-size-100 md-size-10">
      {{ Description }}
    </div>
    <div class="md-layout-item md-small-size-100 md-size-10">
      <i v-if="is_active == '1'" class="fa fa-check"></i>
      <i v-else class="fa fa-times"></i>
    </div>
    <div class="icon md-layout-item md-small-size-100 md-size-10">
      <router-link :to="`editbrand/${id}`">
        <i class="fas fa-edit" style="margin: 0 10px;"></i>
      </router-link>

      <i @click="delBrand(items)" class="fa fa-trash"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Brands",
  props: ["id", "name", "image", "is_active", "Description"],
  methods: {
    delBrand(items) {
      this.$store.dispatch("deleteBrand", items);
    },
  },
};
</script>
<style>
.md-field:not(.md-disabled)::after {
  display: none;
}
</style>
