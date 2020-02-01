<template lang="pug">
  div.container
    div.login-form
      img#main-logo(alt='Vue logo' src='../assets/logo.png')
      a#kakao-login-btn(@click="socialLogin('kakao')")
        img(src="../assets/img/kakao_login.png")
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions } from 'vuex'
import Kakao from '@/modules/kakao'

export default {
  name: 'home',
  components: {
  },
  computed: {
    ...mapGetters({
      getLoginState: 'login/getLoginState'
    })
  },
  created () {
  },
  beforeRouteEnter (to, from, next) {
    debugger
  },
  methods: {
    ...mapActions('login', {
      loginAfter: 'loginAfter'
    }),
    socialLogin (type) {
      let vm = this
      switch (type) {
        case 'kakao': {
          Kakao.Auth.login({
            success: function(authObj) {
              Kakao.API.request({
                url: '/v1/user/me',
                success: function(res) {
                  vm.loginAfter(res)
                },
                fail: function (error) {
                  alert(JSON.stringify(error))
                }
              });
            },
            fail: function(err) {
              alert(JSON.stringify('로그인에 실패하셨습니다.'));
            }
          });
        }
      }
    }
  }
}
</script>
<style lang="scss">
  .login-form {
    margin: 25px auto;
    width: 500px;

    #main-logo {
      width: 100%;
    }
  }
  #kakao-login-btn {
    cursor: pointer;
  }
</style>
