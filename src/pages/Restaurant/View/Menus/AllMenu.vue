<template>
  <div>
    <Tabs></Tabs>
    <form class="all">
      <md-card>
        <md-card-header :data-background-color="'purple'">
          <p class="category">All your Menu</p>

          <div>
            <router-link :to="`newmenu`"
            ><button>
              <i class="fa fa-plus"></i> &nbsp;&nbsp;New Menu
            </button></router-link
            >
          </div>
        </md-card-header>

        <md-card-content>
          <!-- nav detalis products -->
          <md-table class="md-layout">
            <md-table-row>
              <md-table-head md-numeric>ID</md-table-head>
              <md-table-head>Img</md-table-head>
              <md-table-head>Title</md-table-head>
              <md-table-head>Description</md-table-head>
              <md-table-head>Action</md-table-head>
            </md-table-row>
            <!-- loop products -->
            <md-table-row>
              <md-table-cell md-numeric><md-field>1</md-field></md-table-cell>
              <md-table-cell><md-field>Shawna Dubbin</md-field></md-table-cell>
              <md-table-cell
              ><md-field>sdubbin0@geocities.com</md-field></md-table-cell
              >
              <md-table-cell><md-field>Male</md-field></md-table-cell>
              <md-table-cell
              ><router-link :to="`editmenu`">
                <i class="fas fa-edit" style="margin: 0 10px;"></i>
              </router-link>

                <i class="fa fa-trash"></i
                ></md-table-cell>
            </md-table-row>
          </md-table>
          <!-- loop products -->
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import Tabs from "../../component/Tabs";
export default {
  name: "AllMenu",
  components: {Tabs}
}
</script>

<style scoped>

</style>