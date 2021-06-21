<template>
  <div class="md-layout md-alignment-center-center all">
    <md-tabs class="md-primary" md-alignment="centered" md-sync-route>
      <md-tab id="tab-home" md-label="Restaurant" md-icon="restaurant" to="allrestaurant"></md-tab>
      <md-tab id="tab-pages" md-label="Meals" md-icon="set_meal" to="allmeals"></md-tab>
      <md-tab id="tab-posts" md-label="Menu" md-icon="menu_book" to="allmenus"></md-tab>
      <md-tab id="tab-favorites" md-label="Users" md-icon="group" to="allusers"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: "Tabs"
}
</script>

<style lang="scss" scoped>
.all{
  margin-top: 30px;
}
</style>