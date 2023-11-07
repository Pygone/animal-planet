<template>
  <el-container class="imgname">
    <el-aside width="130px">
      <el-avatar shape="circle" :size="120" :src=squareUrl class="block"/>
    </el-aside>
    <el-main>
      <div class="username">{{ post.artTitle}}</div>
      <div class="time">{{ post.artCreTime }}</div>
      <div class="location">
        <MapLocation style="font-size: 20px; color: grey; width: 1em; height: 1em;"/>
        {{ post.artLat }}
      </div>
    </el-main>
  </el-container>
  <el-container class="context">
    <div class="word" tabindex="2">{{ post.artContent }}</div>
    <div>
      <el-image :src="post.imgSrc" class="image"/>
    </div>
  </el-container>
</template>


<script>
import {MapLocation} from "@element-plus/icons-vue";

export default {
  components: {MapLocation},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      squareUrl: require("@/static/img.jpg"),
      currentDate: new Date(),
    };
  },
}
</script>


<style scoped lang="less">
.imgname {
  //帖子中的头像和名字
  position: absolute;
  top: 5px;
  left: 40px;
}

.username {
  //名字
  color: black;
  font-weight: 500;
  font-size: 30px;
}

.time {
  font-size: 15px;
  color: #999;
}

.location {
  font-size: 15px;
  color: black;
}

.context {
  //帖子内容
  position: absolute;
  top: 160px;
  left: 60px;
  display: block;
}

.word {
  //文字
  color: black;
  font-weight: 500;
  font-size: 15px;
  display: block;
}

.image {
  //图片
  margin-top: 30px;
  width: 23%;
  display: block;
}
</style>