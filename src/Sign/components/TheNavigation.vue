<template>
  <div>
    <ul>
      <template v-if="authenticated">
        <li>{{ user.name }}</li>
        <li>
          <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
        </li>
        <li><a href="#">Signout</a></li>
      </template>
      <template v-else>
        <li><router-link :to="{ name: 'Sign' }">SiginIn</router-link></li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheNavigation",
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    // ...mapActions({
    //     signOutActions:'signOut'
    // })
    // signOut(){
    //     this.signOutActions().then(()=>{
    //         this.$router.replace({
    //             name:'home'
    //         })
    //     })
    // }
  },
};
</script>

<style scoped></style>
