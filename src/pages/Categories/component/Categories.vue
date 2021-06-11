<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100 md-size-10">{{ id }}</div>

    <div class="md-layout-item md-small-size-100 md-size-20">
      <img :src="image" />
    </div>

    <div class="md-layout-item md-small-size-100 md-size-20">{{ name }}</div>
    <div class="md-layout-item md-small-size-100 md-size-10">
      {{ section_id }}
    </div>
    <div class="md-layout-item md-small-size-100 md-size-10">
      <i v-if="is_active == 'Active'" class="fa fa-check"></i>
      <i v-else class="fa fa-times"></i>
    </div>
    <div class="icon md-layout-item md-small-size-100 md-size-10">
      <router-link :to="`editcategory/${id}`">
        <i class="fas fa-edit" style="margin: 0 10px;"></i>
      </router-link>

      <i @click="delettcategory(items)" class="fa fa-trash"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Categories",
  props: ["id", "name", "image", "is_active", "section_id"],
  methods: {
    delettcategory(items) {
      this.$store.dispatch("deleteCategory", items);
    },
  },
};
</script>
<style>
.md-field:not(.md-disabled)::after {
  display: none;
}
</style>
