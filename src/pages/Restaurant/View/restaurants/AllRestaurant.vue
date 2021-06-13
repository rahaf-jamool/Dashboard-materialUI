<template>
  <div class="content md-layout md-gutter">
    <form class="md-layout-item md-size-65 md-small-size-100">
      <md-card>
        <md-card-header :data-background-color="'green'">
          <!-- <div class="topnav">
            <router-link class="active a" to="/allDoctors">Dectors</router-link>
            <router-link class="a" to="/trashdoctors">Trached</router-link>
          </div> -->
          <!-- <div style="display:flex;">
            <h4 class="title">Doctors</h4>
            <h4>Trashed</h4>
          </div> -->
          <p class="category">All your Restaurant</p>

          <div class="new_product">
            <router-link :to="`newrestaurant`"
              ><button>
                <i class="fa fa-plus"></i> &nbsp;&nbsp;New Restaurant
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
                ><router-link :to="`editrestaurant`">
                  <i class="fas fa-edit" style="margin: 0 10px;"></i>
                </router-link>

                <i class="fa fa-trash"></i
              ></md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </form>
    <!-- meals -->
    <form class="md-layout-item md-size-35 md-small-size-100">
      <md-card>
        <md-card-header :data-background-color="'green'">
          <p class="category">All your Meals</p>

          <div class="new_product">
            <router-link :to="`newmeals`"
              ><button>
                <i class="fa fa-plus"></i> &nbsp;&nbsp;New Meals
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
                ><router-link :to="`editmeals`">
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
export default {
  name: "AllRestaurant",
};
</script>

<style scoped></style>
