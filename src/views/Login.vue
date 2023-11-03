<template>
  <div class="login" id="building">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>欢迎来到动物星球~</span>
      </div>
      <el-tabs v-model="currentIndex" stretch @tab-click="handleTabsClick">
        <el-tab-pane label="登录" name="login">
          <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm">
            <el-form-item label="用户名" label-width="80px" prop="username">
              <el-input type="text" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="80px" prop="password">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <el-form :model="registerForm" :rules="rules" status-icon ref="registerForm">
            <el-form-item label="用户名" label-width="80px" prop="username">
              <el-input type="text" v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="80px" prop="password">
              <el-input type="password" v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" label-width="80px" prop="configurePassword">
              <el-input type="password" v-model="registerForm.configurePassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>

export default {
  data() {
    //验证规则
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error("请输入用户名"))
      } else if (value.length < 6) {
        callback(new Error("长度不够"))
      } else {
        callback();
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error("请输入密码"))
      } else {
        callback();
      }
    }
    var validateConfigurePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error("请输入密码"))
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致！"))
      } else {
        callback();
      }
    }
    return {
      currentIndex: "login",
      loginForm: {
        username: "",
        password: ""
      },
      registerForm: {
        username: "",
        password: "",
        configurePassword: ""
      },
      activeTab: "login",
      rules: {
        username: [
          {
            validator: validateUserName, trigger: "blur"
          }
        ],
        password: [
          {
            validator: validatePassword, trigger: "blur"
          }
        ],
        configurePassword: [
          {
            validator: validateConfigurePassword, trigger: "blur"
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.activeTab === 'login') {
            //登录
            console.log(this.loginForm)
          }
          if (this.activeTab === 'register') {
            //注册
            console.log(this.registerForm)
          }
        } else {
          return;
        }
      });
    },
    handleTabsClick(tab) {
      this.activeTab = tab.props.name;
    }
  }
}
</script>

<style scoped lang="less">
.login {
  width: 1200px;
  margin: 0 auto;

  .box-card {
    width: 500px;
    margin: 100px auto;
  }
}

#building {
  background: url("../static/background.jpeg");
  width: 100%; //大小设置为100%
  height: 100%; //大小设置为100%
  position: fixed;
  background-size: 100% 100%;
}
</style>