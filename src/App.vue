<script>
import { store } from './store';
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';

export default {
  components: {
    HeaderApp,
    MainApp,
    FooterApp,
  },
  
  data () {
    return {
      store,
    }
  }
}

</script>

<template>
  <HeaderApp />
  <MainApp />
  <FooterApp />
</template>

<style lang="scss">
@use './style/partials/mixins' as *;
@use './style/partials/variables' as *;
@import './style/general.scss';
@import '@fortawesome/fontawesome-free/css/all.css';

</style>
