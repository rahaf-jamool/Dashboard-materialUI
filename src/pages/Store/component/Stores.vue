<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100 md-size-20">{{ id }}</div>
    <div class="md-layout-item md-small-size-100 md-size-20">
      <router-link :to="`store/${id}/Products`">{{ title }}</router-link>
    </div>
    <div class="md-layout-item md-small-size-100 md-size-20">
      <select class="sections">
        <option v-for="item in section" :key="item.ps">
          {{ item.name }}
        </option>
      </select>
    </div>

    <div class="md-layout-item md-small-size-100 md-size-20">
      <i v-if="is_appear == 'Appear'" class="fa fa-check"></i>
      <i v-else class="fa fa-times"></i>
    </div>
    <div class="icon md-layout-item md-small-size-100 md-size-20">
      <router-link :to="`stores/${id}`">
        <i class="fas fa-edit" style="margin: 0 10px;"></i>
      </router-link>

      <i @click="Delete()" class="fa fa-trash"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Stores",
  props: ["id", "title", "section", "name", "is_active"],
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
