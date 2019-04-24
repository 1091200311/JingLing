<template>
  <div>
    <v-head></v-head>
    <div>
      <keep-alive>
        <router-view> </router-view>
      </keep-alive>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHead from './Header.vue';
  import vFooter from './Footer.vue';
  export default {
    name: "Home",
    components: {
      vHead,
      vFooter
    },
  }
</script>

<style scoped>

</style>
