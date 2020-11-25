<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getUserProfile']),
    showNav() {
      return Object.keys(this.getUserProfile).length > 1
    }
  }
}
</script>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
