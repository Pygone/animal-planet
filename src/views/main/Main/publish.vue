<template>
  <div>
    <el-form ref="postForm" :model="post" class="form-container">
      <el-main class="form-row">
        <el-form-item prop="content" class="input">
          <el-input :rows="7" type="textarea" v-model="post.artContent" placeholder="请输入内容"
                    class="input"></el-input>
        </el-form-item>
        <el-form-item class="picture">
          <el-upload action="/your-upload-endpoint" list-type="picture-card" :on-success="handleUploadSuccess"
                     aria-placeholder="选择图片">
            <el-button type="primary" :icon="Camera" color="#FCF882FF" class="button"/>
          </el-upload>
        </el-form-item>
      </el-main>
      <el-form-item prop="location" class="location">
        <el-select v-model="post.artLat" placeholder="请选择定位">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="publish">
        <el-button type="primary" @click="submitPost">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {Camera, LocationInformation} from "@element-plus/icons-vue";
import axios from "axios";

export default {
  computed: {
    Camera() {
      return Camera
    },
    LocationInformation() {
      return LocationInformation
    }
  },
  data() {
    let user;
    try {
      user = JSON.parse(this.$route.query.user);
    } catch (error) {
      user = {userId: 1};
    }

    return {
      post: {
        userId: user.userId,
        artTitle: "test",
        artContent: "",
        artLat: "",
      },
      options: [{
        value: '西十二教学楼',
        label: '西十二教学楼'
      }, {
        value: '东九教学楼',
        label: '东九教学楼'
      }, {
        value: '沁苑学生宿舍',
        label: '沁苑学生宿舍'
      }, {
        value: '紫菘学生宿舍',
        label: '紫菘学生宿舍'
      }, {
        value: '韵苑学生宿舍',
        label: '韵苑学生宿舍'
      }, {
        value: '主校区图书馆',
        label: '主校区图书馆'
      }, {
        value: '校医院',
        label: '校医院'
      }, {
        value: '居民区',
        label: '居民区'
      }],
    };
  },
  methods: {
    handleUploadSuccess(response, file, fileList) {
      // 处理图片上传成功后的回调，将上传成功的图片信息存储在post.images数组中
      this.post.images.push(response.url);
    },
    submitPost() {
      axios.post('http://localhost:8081/postArticle', this.post)
          .then(response => {
            console.log(response.data);

            // 你可能还想在这里添加一些代码，例如导航到其他页面
          })
          .catch(error => {
            console.error(error);
            // 你可能还想在这里添加一些代码，例如显示一个错误消息
          });
    },
  },
};
</script>
<style scoped lang="less">
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  height: 300px;
  margin: 0 auto;
}

.form-row {
  display: flex;
  justify-content: space-between;
  width: 1150px;
}

.input {
  width: 100%;
  height: auto;
}

.picture {
  margin-top: 0;
  width: auto;
  /* 设置图片选择框的宽度 */
  height: auto;
  /* 设置图片选择框的高度 */
}

.location {
  width: 100%;
  margin-left: 1px;
  /* 设置位置左边距 */
  display: flex;
  /* 使用 Flex 布局水平排列图标和选择框 */
  margin-top: 10px;
  /* 添加一些上边距以与上传按钮分隔 */
}

.button {
  width: 100%;
  height: 100%;
  font-size: 60px;
  border: 1px solid grey;
  padding: 0;
}

.publish {
}
</style>
