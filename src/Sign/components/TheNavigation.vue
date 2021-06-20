<template>
    <div>
        <ul>
            <li>
                <router-link :to="{name:'Home'}">Home</router-link></li>
            <template v-if="authenticated">
                <li>
                <router-link :to="{name:'Dashboard'}">Dashboard</router-link></li>
            <li><a href="#">Signout</a></li>
            </template>
            <template v-else>
                 <li><router-link :to="{name:'SignIn'}">SiginIn</router-link></li>
            </template>
        </ul>
    </div>
</template>

<script>
// import {mapGetters} from 'vuex';
export default {
    name:'TheNavigation',
    computed:{
        // ...mapGetters({
        //     authenticated:'auth/authenticated',
        //     user:'auth/user'
        // })
    }
}
</script>

<style scoped>

</style>