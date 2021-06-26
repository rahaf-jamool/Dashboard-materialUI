<template>
  <div>
    <md-table v-for="item in Brands.slice(0, 5)" :key="item.pr">
      <md-table-row>
        <md-table-cell>{{ item.name }}</md-table-cell>
        <md-button class="md-just-icon md-simple md-primary">
          <input name="radios2" type="radio" />
        </md-button>
      </md-table-row>
    </md-table>
  </div>
</template>

<script lang="js">
import { mapState } from 'vuex';
export default {
  name: "Brands",
  data() {
    return {
      selected: [],
    };
  },
    methods: {
      onSelect: function(items) {
        this.selected = items;
      }
    },
    computed: {
          ...mapState({

              Brands: (state) => state.All.Brands,
          }),
      },
  mounted() {
      this.$store.dispatch('loadBrands');

  },
};
</script>
