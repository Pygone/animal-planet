<template>
  <div>
    <el-image :src="url" class="map"></el-image>
  </div>
</template>
<script>
export default {
  data(){
    return{
      url:require('@/static/map.jpg'),
    }
  }
}
</script>
<style scoped lang="less">
.map{
  overflow: hidden;
  height: auto;
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>