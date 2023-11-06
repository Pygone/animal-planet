<template>
  <el-container class="imgname">
    <el-aside width="130px">
      <el-avatar shape="circle" :size="120" :src="squareUrl" class="block"/>
    </el-aside>
    <el-main>
      <div class="username">{{ post.name }}</div>
      <div class="time">{{ post.time }}</div>
      <div class="location">
        <MapLocation style="font-size: 20px; color: grey; width: 1em; height: 1em;"/>
        {{ post.location }}
      </div>
    </el-main>
  </el-container>
  <el-container class="context">
    <div class="word" tabindex="2">{{ post.context }}</div>
    <div>
      <el-image :src="post.messagesrc" class="image"/>
    </div>
  </el-container>
</template>

<script>
import {MapLocation} from "@element-plus/icons-vue";
  export default {
    components: {MapLocation},
    data() {
      return {
        currentDate: new Date(),
        squareUrl: require("@/static/img.jpg"),
        post:{name: "mjj",
          time:'2023/10/14 12:18',
          location:'西十二教学楼',
          context:'在西十二发现了一撮灰！',
          messagesrc: require("@/static/IMG_20231014_113937.jpg"),
        },
      };
    },
  }
</script>


<style scoped lang="less">
.imgname{//帖子中的头像和名字
  position: absolute;
  top: 5px;
  left: 40px;
}
.username{//名字
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

.context{//帖子内容
  position: absolute;
  top: 160px;
  left: 60px;
  display: block;
}
.word{//文字
  color: black;
  font-weight: 500;
  font-size: 15px;
  display: block;
}
.image {//图片
  margin-top: 30px;
  width: 23%;
  display: block;
}
</style>