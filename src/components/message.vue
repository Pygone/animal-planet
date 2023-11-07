<template>
  <div class="posts">
    <div v-for="(post, index) in posts" :key="index" class="post">
      <div class="imgname">
        <el-avatar shape="circle" :size="120" :src="squareUrl" class="block"/>
        <div class="username">{{ post.name }}</div>
        <div class="time">{{ post.time }}</div>
        <div class="location">
          <MapLocation style="font-size: 20px; color: grey; width: 1em; height: 1em;"/>
          {{ post.location }}
        </div>
      </div>
      <div class="context">
        <div class="word" tabindex="2">{{ post.context }}</div>
        <div>
          <el-image :src="post.messagesrc" class="image"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MapLocation } from "@element-plus/icons-vue";

export default {
  components: { MapLocation },
  data() {
    return {
      currentDate: new Date(),
      squareUrl: require("@/static/img.jpg"),
      posts: [
        {
          name: "mjj",
          time: '2023/10/14 12:18',
          location: '西十二教学楼',
          context: '在西十二发现了一撮灰！',
          messagesrc: require("@/static/IMG_20231014_113937.jpg")
        },
        {
          name: "user2",
          time: '2023/10/15 09:30',
          location: '东三食堂',
          context: '今天的早餐很美味！',
          messagesrc: require("@/static/IMG_20231014_174500.jpg")
        },
        // 其他帖子...
      ]
    };
  }
};
</script>

<style scoped lang="less">
.posts {
  display: flex;
  flex-direction: column;
  gap: 40px; /* 控制帖子之间的间隔 */
}

.post {
  display: flex;
  gap: 20px; /* 控制 imgname 和 context 之间的间隔 */
}

.imgname {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.username {
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
  display: flex;
  flex-direction: column;
  gap: 10px; /* 控制 word 和 image 之间的间隔 */
}

.word {
  color: black;
  font-weight: 500;
  font-size: 15px;
}

.image {
  width: 20%; /* 图片宽度占满容器 */
}
</style>