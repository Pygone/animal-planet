<template>
  <div id="building">
    <div class="person-information">
      <el-container>
        <el-aside width="200px">
          <el-avatar shape="circle" :size="140" :src="user.userImg" class="block"/>
        </el-aside>
        <el-main>
          <div class="username">{{ user.userName }}</div>
          <div class="signal">{{ user.userShow }}</div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import message from "@/components/message.vue";

export default {
  computed: {
    limitedCount() {
      // 设置上限为10，如果count超过10，将返回10，否则返回count的当前值
      return Math.min(this.user.count, 10);//在这里设置帖子的最多数量
    }
  },
  data() {
    return {
      user: {
        userId: 2,
        userImg: require("@/static/img.jpg"),
        userName: "mjj",
        userShow: "唯有猫咪和自由不可辜负~"
      },
    }
  },
  methods: {
    load() {
      this.user.count += 2
    }
  },

  components: {
    message,
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

.block {
  margin-left: 40px;
  margin-top: 30px;
}

.username {
  margin-top: 10px;
  margin-left: 10px;
  color: black;
  font-weight: 900;
  font-size: 30px;
}

.signal {
  margin-left: 10px;
  margin-top: 30px;
  color: #3c77a9;
  font-weight: 900;
  font-size: 23px;
}
</style>