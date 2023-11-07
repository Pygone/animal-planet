<template>
  <div id="building">
    <div class="signal">{{ user.userShow }}</div>
    <div class="person-information">
      <el-container>
        <el-aside width="200px" class="container">
          <el-avatar shape="circle" :size="140" :src="user.userImg" class="block"/>
          <div class="username">{{ user.userName }}</div>
        </el-aside>
        <el-main class="inputBlock">
          <publish/>
        </el-main>
      </el-container>
    </div>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="(post1, index) in posts" :key="index" class="infinite-list-item">
        <message :post="post1"/>
      </li>
    </ul>
  </div>
</template>

<script>
import {Camera, LocationInformation} from "@element-plus/icons-vue";
import message from "@/components/message.vue";
import publish from "./publish.vue"
import axios from 'axios'

export default {
  computed: {
    LocationInformation() {
      return LocationInformation
    },
    Camera() {
      return Camera
    },
  },
  data() {
    return {
      posts: [],
      user: JSON.parse(this.$route.query.user),
      textarea: "",
    }
  },
  methods: {
    load() {
      console.log("load");
    },
  },
  mounted() {
    axios.get('http://127.0.0.1:8081/browse') // 替换为你的API URL
        .then(response => {
          this.posts = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
  },
  components: {
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

.container {
  //头像和名字
  margin-left: auto;
  display: grid;
  place-items: center;
}

.username {
  //名字
  color: black;
  font-weight: 900;
  font-size: 30px;
}

.block {
  //头像
  display: flex;
  justify-content: right;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
}

.signal {
  //个性签名
  margin-left: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #3c77a9;
  font-weight: 900;
  font-size: 23px;
}

.inputBlock {
  //输入框
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  /* 设置背景颜色为白色 */
  margin-right: 200px;
  height: 325px;
}
</style>