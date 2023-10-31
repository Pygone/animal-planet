<template>
  <div class="login" id="building">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>欢迎来到动物星球~</span>
      </div>
      <el-tabs v-model="currentIndex" stretch @tab-click="handleTabsClick">
        <el-tab-pane label="登录" name="login">
          <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm">
            <el-form-item label="用户名" label-width="80px" prop="userName">
              <el-input type="text" v-model="loginForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="80px" prop="userPassword">
              <el-input type="password" v-model="loginForm.userPassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <el-form :model="registerForm" :rules="rules" status-icon ref="registerForm">
            <el-form-item label="用户名" label-width="80px" prop="username">
              <el-input type="text" v-model="registerForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="80px" prop="password">
              <el-input type="password" v-model="registerForm.userPassword"></el-input>
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
import axios from 'axios';
import router from "@/router";

export default {
  data() {
    //验证规则
    const validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error("请输入用户名"))
      } else if (value.length < 6) {
        callback(new Error("长度不够"))
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error("请输入密码"))
      } else {
        callback();
      }
    };
    const validateConfigurePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error("请输入密码"))
      } else if (value !== this.registerForm.userPassword) {
        callback(new Error("两次输入密码不一致！"))
      } else {
        callback();
      }
    };
    return {
      currentIndex: "login",
      loginForm: {
        userName: "",
        userPassword: ""
      },
      registerForm: {
        userName: "",
        userPassword: "",
        configurePassword: ""
      },
      activeTab: "login",
      rules: {
        userName: [
          {
            validator: validateUserName, trigger: "blur"
          }
        ],
        userPassword: [
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
            // 登录
            console.log(this.loginForm)
            axios.get('http://localhost:8081/login/checklogin', {params: this.loginForm})
                .then(response => {
                  console.log(response.data);

                })
                .catch(error => {
                  console.error(error);
                });
          }
          if (this.activeTab === 'register') {
            // 注册
            axios.post('http://localhost:8081/login/register', this.registerForm)
                .then(response => {
                  console.log(response.data);
                  router.push({path: '/'});
                })
                .catch(error => {
                  console.error(error);
                });
          }
        } else {
          console.log("error submit!!");
          return false;
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