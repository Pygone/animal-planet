<template>
  <div id="building">
    <div class="signal">唯有猫咪和自由不可辜负~</div>
    <div class="person-information">
      <el-container>
        <el-aside width="200px">
          <el-avatar shape="circle" :size="140" :src="squareUrl" class="block"/>
          <div class="username">{{ name }}</div>
        </el-aside>
        <el-main>
          <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
              v-model="textarea"
              class="input">
          </el-input>
          <el-button type="primary" :icon="Camera" color="#FCF882FF" class="button" size="large"/>
          <el-button type="primary" :icon="LocationInformation" color="#FCF882FF" class="button" size="large"/>
        </el-main>
      </el-container>
    </div>

    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">
        <el-avatar shape="circle" :size="115" :src="squareUrl" class="inblock"/>
        <div class="inusername">{{ name }}</div>
        帖子在这{{ i }}
      </li>
    </ul>
  </div>
</template>

<script>
import {Camera, LocationInformation} from "@element-plus/icons-vue";

export default {
  computed: {
    LocationInformation() {
      return LocationInformation
    },
    Camera() {
      return Camera
    }
  },
  data() {
    return {
      count: 0,
      squareUrl: require("@/static/img.jpg"),
      name: "mjj",
      textarea: "",
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
  background: url("../../static/background.jpeg");
  width: 100%; //大小设置为100%
  height: 100%; //大小设置为100%
  position: fixed;
  background-size: 100% 100%;
}

.infinite-list {

  height: 600px;
  width: 1300px;
  padding: 0;
  margin: auto;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: rgba(244, 206, 159, 0.8);
  margin: 10px;
  color: black;
}

.button {
  width: 100px;
  height: 100px;
  font-size: 40px;
}

.block {
  margin-left: 40px;
  margin-top: 30px;
}

.input {
  width: 1100px;
  height: 100px;
  margin-top: 30px;
}

.username {
  margin-top: 10px;
  margin-left: 80px;
  color: black;
  font-weight: 900;
  font-size: 30px;
}

.signal {
  margin-left: 40px;
  margin-top: 30px;
  color: #3c77a9;
  font-weight: 900;
  font-size: 23px;
}
</style>