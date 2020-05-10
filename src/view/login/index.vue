<template>
  <div class="login">
    <Form class="login-form" ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import { login } from '../helper.js'
export default {
  name: 'login',
  data () {
    return {
      formInline: {
          user: '',
          password: ''
      },
      ruleInline: {
          user: [
              { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
              { required: true, message: 'Please fill in the password.', trigger: 'blur' },
              { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
      handleSubmit(name) {
        console.log('name', name)
          this.$refs[name].validate((valid) => {
              if (valid) {
                login(this.formInline).then(res => {
                  console.log('res', res)
                }).catch(err => {

                })
              } else {
                  this.$Message.error('验证失败');
              }
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589094421339&di=a6c4156c08221b72312ce68ab83b63e1&imgtype=0&src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F11%2F92%2FQms8MVxT7t.jpg") center center / cover no-repeat fixed;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
  .login-form {
    height: 400px;
    width: 400px;
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -200px;
    overflow: hidden;
  }
  .login-form::before {
    content: '';
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589094421339&di=a6c4156c08221b72312ce68ab83b63e1&imgtype=0&src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F11%2F92%2FQms8MVxT7t.jpg") center center / cover no-repeat fixed;
    filter: blur(20px);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    margin: -30px;
  }

</style>
