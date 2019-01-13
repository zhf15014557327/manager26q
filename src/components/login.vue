<template>
  <div class="login-container">
    <div class="form-container">
      <h1>登录</h1>
      <el-form
        label-position="top"
        label-width="80px"
        :model="formdata"
        ref="formdata"
        :rules="rules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formdata.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formdata.password" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="submitForm('formdata')" class="login-btn">登录按钮</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      formdata: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "用户名", trigger: "change" },
          { min: 3, message: "你短了", trigger: "change" }
        ],
        password: [
          { required: true, message: "密码", trigger: "change" },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formdata) {
      this.$refs[formdata].validate(valid => {
        // 判断格式正确
        if (valid) {
          // 正确登录发送请求
          this.$axios.post("login", this.formdata).then(res => {
              console.log( res );
            if ((res.data.meta.status === 400)) {
              // 错误
              this.$message.error(res.data.meta.msg);
            } else if ((res.data.meta.status === 200)) {
              // 成功登录 
              this.$message.success(res.data.meta.msg);
                window.sessionStorage.setItem('token',res.data.token)
              this.$router.push('/')
            }
          });
        } else {
          // 格式错误
          this.$message.error("请正确输入信息");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-container {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-container {
    background-color: #fff;
    width: 580px;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
