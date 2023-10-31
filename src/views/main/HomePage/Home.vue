<template>
  <div id="building">
    <el-row class="demo-avatar demo-basic">
      <el-col :span="12">
        <div class="block">
          <el-avatar shape="circle" :size="115" :src="squareUrl">{{ name }}</el-avatar>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      squareUrl: require("@/static/img.jpg"),
      name: "mjj",
      input: "",
    }

  },
  methods: {
    load() {
      this.count += 2
    }
  }
}
</script>
<style scoped lang="less">
#building {
  background: url("../../../static/background.jpeg");
  width: 100%; //大小设置为100%
  height: 100%; //大小设置为100%
  position: fixed;
  background-size: 100% 100%;
}

.block {
  margin-left: 40px;
  margin-top: 30px;
}
</style>