<template>
  <h1>{{ msg}}</h1>
  <!-- <b-button >change</b-button> -->
</template>

<script lang="ts">
import { defineComponent} from 'vue';
export default defineComponent({
  setup: () => {  
    return {
      msg : 'Component test', 
    };
  },
});
</script>
