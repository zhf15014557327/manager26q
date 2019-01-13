<template>
  <div class="login-container">
    <div class="form-container">
      <h1>登录</h1>
      <el-form label-position="top" label-width="80px" :model="formdata" ref="formdata" :rules="rules" >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formdata.username" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formdata.password"></el-input>
        </el-form-item>
        <el-button  type="primary" @click="submitForm('formdata')" class="login-btn">登录按钮</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return{
      formdata:{
        username:"",
        password:""
      },
        rules: {
          username: [
            { required: true, message: '用户名', trigger: 'change' },
            { min: 3,  message: '你短了', trigger: 'change' }
          ],
          password: [
            { required: true, message: '密码', trigger: 'change' },
            { min: 6, max: 12, message: '长度在 6 到 12个字符', trigger: 'change' }
          ]
        },
    };
  },
    methods: {
      submitForm(formdata) {
        this.$refs[formdata].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
}
</script>

<style lang="scss">
.login-container{
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
.form-container{
  background-color: #fff;
  width: 580px;
  padding: 40px;
box-sizing: border-box;
border-radius: 10px;
}
.login-btn{
  width: 100%;
}
}
</style>
