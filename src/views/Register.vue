<template>
  <div class="login-container">
    <el-container>
      <el-card class="login-card" shadow="always">
        <template #header>
          <div class="card-header">
            <span>欢迎来到动物星球~</span>
            <el-button text @click="backToLogin()" class="button" type="primary">返回</el-button>
          </div>
        </template>
        <el-form :model="registerForm" :rules="rules" status-icon ref="registerForm">
          <el-form-item prop="userName">
            <el-input type="text" v-model="registerForm.userName" placeholder="用户名" :prefix-icon="Avatar"
                      class="input1"></el-input>
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-input type="password" v-model="registerForm.userPassword" placeholder="密码" :prefix-icon="Lock"
                      class="input1">
            </el-input>
          </el-form-item>
          <el-form-item prop="checkPassword">
            <el-input type="password" v-model="registerForm.checkPassword" placeholder="确认密码" :prefix-icon="Lock"
                      class="input1">
            </el-input>
          </el-form-item>
          <el-row justify="center">
            <el-button type="primary" @click="submitForm('registerForm')" auto-insert-space text class="button">提交
            </el-button>
          </el-row>
        </el-form>
      </el-card>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios';
import router from "@/router";
import {Lock, Avatar} from "@element-plus/icons-vue";

export default {
  computed: {
    Avatar() {
      return Avatar
    },
    Lock() {
      return Lock
    }
  },
  data() {
    //验证规则
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码长度不能小于6位"));
      } else {
        callback();
      }
    };
    const validateSamePassword = (rule, value, callback) => {
      if (value !== this.registerForm.userPassword) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        userPassword: "",
        checkPassword: ""
      },
      rules: {
        userName: [
          {
            trigger: "blur", required: true, message: "请输入用户名"
          }
        ],
        userPassword: [
          {
            validator: validatePassword, trigger: "blur", required: true
          }
        ],
        checkPassword: [
          {
            validator: validateSamePassword, trigger: "blur", required: true
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('http://localhost:8081/login/register', {params: this.registerForm})
              .then(({data}) => {
                console.log(data);
                router.push({path: '/'});
              });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    backToLogin() {
      router.push({path: '/'});
    }
  }
}
</script>

<style scoped lang="less">

.el-container {
  height: auto;
  width: auto;
}

.login-card {
  background: #FFF9DB;
  width: 20%;
  height: 60%;
  margin: 10% auto;
  border-radius: 10px;
  min-width: 20%;
}

.el-form-item {
  background: var(--el-input-bg-color);
  border: 2px solid #FFD700;
  border-radius: 5px;
}

.el-input {
  --el-input-text-color: #333333;
  --el-text-color-placeholder: gray;
}

.el-button {
  background-color: #FFD700;
}

:deep(.el-input) {

  padding-left: 3px;

  .el-input__wrapper {
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 150px;
}

:deep(.el-form-item ) {
  .el-input__validateIcon {
    display: none;
  }
}

:deep(.el-button) {
  color: #333333;
}
</style>