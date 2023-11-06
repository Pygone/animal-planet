<template>
  <el-menu
      :default-active="active"
      mode="horizontal"
      background-color="#FDBD6AFF"
      text-color="#FFFFFF"
      active-text-color="#000000"
      style="position: relative;"
      router>
    <el-menu-item index="/">欢迎来到动物星球~</el-menu-item>
    <el-menu-item index="/index">首页</el-menu-item>
    <el-menu-item index="/personal">个人空间</el-menu-item>
    <el-menu-item index="/map">地图总览</el-menu-item>
    <el-menu-item class="user" style="position:absolute;right:0;">
      <span class="user-name">马嘉骏</span>
      <el-button @click="logoutHandle">退出</el-button>
    </el-menu-item>
  </el-menu>
</template>


<script>
export default {
  data() {
    return {
      active: '1'
    }
  },
  methods: {
    logoutHandle() {

    }
  }

};
</script>


<style scoped lang="less">
.user {
  float: right;
  margin-right: 10px;
  line-height: 60px;
  width: auto;

  .user-name {
    color: #333333;
    margin-right: 10px;
    font-size: 15px;
    border: 1px solid #FFD700;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    overflow: hidden;
  }
}

:deep(.el-menu-item) {
  --el-menu-text-color: #333333;
  font-size: medium;
  font-weight: bold;
}

.el-button {
  background-color: #FFD700;
  border: 1px solid #FFD700;
  border-radius: 5px;

}

:deep(el-button) {
  --el-button-text-color: #333333;
  --el-button-font-weight: bold;
}
</style>