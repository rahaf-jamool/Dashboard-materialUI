<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100 md-size-20">{{ id }}</div>
    <div class="md-layout-item md-small-size-100 md-size-20">
      <router-link :to="`store/${id}/Products`">{{ title }}</router-link>
    </div>
    <div class="md-layout-item md-small-size-100 md-size-20">
      <div class="dropdown">
  <button class="dropbtn">Show </button>
  <div class="dropdown-content">
  <span href="#" v-for="item in section" :key="item.ps"> {{ item.name }}</span>
  </div>
</div>

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
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content span {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content span:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
