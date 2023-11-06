<template>
  <div content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
    <HeaderNav/>
    <router-view>
    </router-view>
  </div>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  components: {HeaderNav},
  comments: {
    HeaderNav
  }
}
</script>
<style>
</style>