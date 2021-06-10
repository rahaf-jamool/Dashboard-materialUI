<template>
  <div>
    <md-table   v-for="item in Categories.slice(0,5)" :key="item.pr">
      <md-table-row
   
      >
        <md-table-cell>{{ item.name }}</md-table-cell>
                      <md-button class="md-just-icon md-simple md-primary">
                    <input
                     
                        name="radios2"
                        type="radio"

                    />
          </md-button>
        <!-- <md-table-cell>

          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
           <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>
        </md-table-cell>  -->
      </md-table-row>

    </md-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Categories",
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
            Categories: (state) => state.All.Categories,
  
        }),
    },
    mounted() {

        this.$store.dispatch('loadCategories');
    },
};
</script>
