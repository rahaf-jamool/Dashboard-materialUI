<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100 md-size-10">{{ id }}</div>

    <div class="md-layout-item md-small-size-100 md-size-20">
      <img :src="image" />
    </div>

    <div class="md-layout-item md-small-size-100 md-size-20">
      {{ first_name }}
    </div>
    <div class="md-layout-item md-small-size-100 md-size-10">
      {{ last_name }}
    </div>
    <div class="md-layout-item md-small-size-100 md-size-10">
      {{ description }}
    </div>
    <div class="md-layout-item md-small-size-100 md-size-10">
      <i v-if="is_active == '1'" class="fa fa-check"></i>
      <i v-else class="fa fa-times"></i>
    </div>
    <div class="icon md-layout-item md-small-size-100 md-size-10">
      <router-link :to="`editdoctors/${id}`">
        <i class="fas fa-edit" style="margin: 0 10px;"></i>
      </router-link>

      <i @click="delDoctor(items)" class="fa fa-trash"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Doctors",
  props: ["id", "first_name", "last_name", "image", "is_active", "description"],
  methods: {
    delDoctor(items) {
      this.$store.dispatch("deleteDoctor", items);
    },
  },
};
</script>
<style>
.md-field:not(.md-disabled)::after {
  display: none;
}
</style>
