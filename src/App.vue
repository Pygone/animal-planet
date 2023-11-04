<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
#app{
  background: url("@/static/background.jpeg") no-repeat center center;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: fixed;
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  padding: 0;
}
</style>
