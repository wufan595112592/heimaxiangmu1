<template>
  <div
  class="login">
  <el-card class="card">
      <div class="title">
          <img src="../../assets/img/logo_index.png" alt="">
      </div>
<el-form :model='loginForm' :rules='loginRules' style="margin-top；20px">
    <el-form-item prop='mobile'>
       <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
    </el-form-item>
    <el-form-item prop='code'>
       <el-input v-model="loginForm.code" style='width:60%' placeholder="请输入验证码"></el-input>
       <el-button plain style='float:right'>发送验证码</el-button>
    </el-form-item>
     <el-form-item prop='checked'>
      <el-checkbox v-model="loginForm.checked">我已阅读同意用户协议和隐私条款</el-checkbox>
    </el-form-item>
     <el-form-item>
      <el-button style='width:100%' type="primary">登录</el-button>
    </el-form-item>
</el-form>
      </el-card></div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        checked: false
      },
      loginRules: {
        mobile: [{ required: true, message: '手机号不能为空' }, {
          pattern: /^1[3-9]\d{9}$/,
          message: '手机号格式不正确'
        }],
        code: [{ required: true, message: '验证码不能为空' }, {
          pattern: /^\d{6}$/,
          message: '6位数验证码'
        }],
        checked: [{
          validator: function (rule, value, callback) {
            value ? callback() : callback(new Error('您必须同意我们的霸王条款'))
          }
        }]
      }
    }
  }
}
</script>

<style lang='less'>
.login {
    justify-content:center;
    display: flex;
    background-image: url(./1.jpg);
    height: 100vh;
    background-size: cover;
    align-items: center;
    .title {
        text-align: center;
          img {
              height: 45px;
          }
    }
.card{

    width: 450px;
    height: 330px;

}
}
</style>
