<template>
  <div id="building">
    <div class="signal">{{ user.signal }}</div>
    <div class="person-information">
      <el-container>
        <el-aside width="200px" class="container">
          <el-avatar shape="circle" :size="140" :src="user.squareUrl" class="block"/>
          <div class="username">{{ user.name }}</div>
        </el-aside>
        <el-main class="inputblock">
          <publish/>
        </el-main>
      </el-container>
    </div>

    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="i in limitedCount" :key="i" class="infinite-list-item">
        <message/>
      </li>
    </ul>
  </div>
</template>

<script>
import {Camera, LocationInformation} from "@element-plus/icons-vue";
import message from "@/components/message.vue";
import publish from "./publish.vue"
export default {
  computed: {
    LocationInformation() {
      return LocationInformation
    },
    Camera() {
      return Camera
    },
    limitedCount() {
      // 设置上限为10，如果count超过10，将返回10，否则返回count的当前值
      return Math.min(this.count, 10);//在这里设置帖子的最多数量
    }
  },
  data() {
    return {
      count: 0,//count存帖子数量
      fileList:[],
      user:{
        squareUrl: require("@/static/img.jpg"),
        name: "mjj",
        signal:"唯有猫咪和自由不可辜负~"
      },
      textarea: "",
    }
  },
  methods: {
    load() {
      this.count += 2
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  components:{
    message,
    publish
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

.infinite-list {
  height: 60%;
  width: 80%;
  padding: 0;
  margin: auto;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 82%;
  background: rgba(244, 206, 159, 0.8);
  margin: 10px;
  color: black;
}

.container{//头像和名字
  margin-left: auto;
  display: grid;
  place-items: center;
}
.username {//名字
  color: black;
  font-weight: 900;
  font-size: 30px;
}
.block {//头像
  display: flex;
  justify-content: right; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.signal {//个性签名
  margin-left: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #3c77a9;
  font-weight: 900;
  font-size: 23px;
}

.inputblock{//输入框
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5); /* 设置背景颜色为白色 */
  margin-right: 200px;
  height: 325px;
}




</style>