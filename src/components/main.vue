<template>
<div>
   <el-button type="success" @click="loginout">退出</el-button>
</div>
</template>
<script>
export default {
    // 生命周期
    beforeCreate: function () {
    let token =window.sessionStorage.getItem('token')
        if(token){
            console.log(token);
        }else{
            this.$message.error("请登录");
            this.$router.push('/login');
        }
  },
  methods: {
      loginout(){
          window.sessionStorage.removeItem('token');
          this.$router.push('/login');
      }
  },
}
</script>
<style>

</style>
