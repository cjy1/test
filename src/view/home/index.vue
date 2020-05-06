<template>
  <Layout>
        <Header class="header">
          <div>游戏账号交易平台</div>
          <div>
            <Dropdown>
              <img class="userImg" src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg" />
              <DropdownMenu slot="list">
                  <DropdownItem>个人中心</DropdownItem>
                  <DropdownItem>
                    <div @click="logout">退出登录</div>
                  </DropdownItem>
              </DropdownMenu>
          </Dropdown>
          </div>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
    logout(e) {
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  color: white;
  font-size: 30px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.userImg {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-top: 20px;
}
</style>
