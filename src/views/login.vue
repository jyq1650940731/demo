<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <a-form-model
        ref="loginForm"
        :model="loginForm"
        :rules="loginFormRules"
        class="login_form"
      >
        <a-form-model-item label="" prop="username">
          <a-input v-model="loginForm.username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item label="" prop="password">
          <a-input v-model="loginForm.password" type="password">
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item class = "btns">
          <a-button type="primary" @click = "login()">
          登录
          </a-button>
           <a-button
            type="info"
            @click="resetForm('loginForm')"
            style="margin-left: 10px;">
            重置
           </a-button>
      </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
        type: [],
        resource: '',
        desc: '',
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          {
            min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6, max: 11, message: '长度在6 到 11 个字符', trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) return false;
        const { data: res } = await this.$http.post('login', this.loginForm);
        if (res.meta.status !== 200) return this.$message.error('登录失败！');
        this.$message.success('登录成功');
        window.sessionStorage.setItem('token', res.data.token);
        this.$router.push('/home');
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login_container {
  color: Red;
  background-color: #bfa;
  height: 100%;
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form{
    width: 100%;
    position: absolute;
    padding: 0 20px;
    bottom: 0;
    box-sizing:border-box;
}
.btns{
    display: flex;
    justify-content: flex-end;
}
</style>
