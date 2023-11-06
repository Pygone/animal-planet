<!--<template>-->
<!--  <div>-->
<!--    <h1></h1>-->

<!--    <form @submit.prevent="submitPost">-->

<!--      <div>-->
<!--        <textarea id="content" v-model="post.content" required></textarea>-->
<!--      </div>-->
<!--      <div>-->
<!--&lt;!&ndash;        <input type="text" id="title" v-model="post.location" required>&ndash;&gt;-->
<!--      </div>-->
<!--      <div>-->
<!--        <label for="image">上传图片：</label>-->
<!--        <input type="file" id="image" @change="handleFileUpload" accept="image/*">-->
<!--      </div>-->
<!--      <button type="submit">发布</button>-->
<!--    </form>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      post: {-->
<!--        content: "",-->
<!--        location: "",-->
<!--        image: null // 用于存储上传的图片文件-->
<!--      },-->

<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    submitPost() {-->
<!--      // 这里可以编写提交帖子的逻辑，包括上传图片文件-->
<!--      console.log("发布帖子:", this.post);-->

<!--      // 清空表单-->
<!--      this.post.location = "";-->
<!--      this.post.content = "";-->
<!--      this.post.image = null;-->
<!--    },-->
<!--    handleFileUpload(event) {-->
<!--      const file = event.target.files[0];-->
<!--      if (file) {-->
<!--        this.post.image = file;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<template>
  <div>
    <el-form ref="postForm" :model="post" class="form-container">
      <el-main class="form-row">
        <el-form-item prop="content"  class="input">
          <el-input :rows="7" type="textarea" v-model="post.content" placeholder="请输入内容" class="input"></el-input>
        </el-form-item>
        <el-form-item class="picture">
          <el-upload action="/your-upload-endpoint"
                     list-type="picture-card"
                     :on-success="handleUploadSuccess" aria-placeholder="选择图片"><!-- 上传图片的服务器端地址在action中 -->
            <el-button type="primary" :icon="Camera" color="#FCF882FF" class="button"/>
          </el-upload>
        </el-form-item>
      </el-main>
      <el-form-item prop="location" class="location">
        <el-select v-model="post.location" placeholder="请选择定位">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
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
    return {
      post: {
        content: "",
        location: "",
        images: [] // 存储上传的图片
      },
      options: [{
        value: '选项1',
        label: '西十二教学楼'
      }, {
        value: '选项2',
        label: '东九教学楼'
      }, {
        value: '选项3',
        label: '沁苑学生宿舍'
      }, {
        value: '选项4',
        label: '紫菘学生宿舍'
      }, {
        value: '选项5',
        label: '韵苑学生宿舍'
      }, {
        value: '选项6',
        label: '主校区图书馆'
      }, {
        value: '选项7',
        label: '校医院'
      }, {
        value: '选项8',
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
      // 在这里执行帖子提交逻辑，包括帖子内容和图片信息
      console.log("发布帖子:", this.post);
      // 清空表单
      this.$refs.postForm.resetFields();
      this.post.images = [];
    }
  }
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
  width: auto; /* 设置图片选择框的宽度 */
  height: auto; /* 设置图片选择框的高度 */
}

.location {
  width: 100%;
  margin-left: 1px; /* 设置位置左边距 */
  display: flex; /* 使用 Flex 布局水平排列图标和选择框 */
  margin-top: 10px; /* 添加一些上边距以与上传按钮分隔 */
}

.button {
  width: 100%;
  height: 100%;
  font-size: 60px;
  border: 1px solid grey;
  padding: 0;
}

.publish{

}
</style>
