<template lang="pug">
  div
    header
      div
        h1
          a(href='/')
            img.logo(src='../../assets/logo.png' alt='')
        ul
          li
            a#gnbTimeline(@click="goTo('timeline')") 타임라인
          li
            a#gnbCyClub(href='#') 월드그룹
        div.menu-right
          a#login-btn(v-if="isLogin === false") 로그인
          a#login-btn(v-else) 로그아웃
          button.btn1
            img(src='http://c1img.cyworld.co.kr/img/timeimg/common/layout/btn_dot3.png' alt='')
        ol(style='display: none;')
          li
            a#coverStory(href='#') 커버스토리
          li
            a#cyBook(href='#') 싸이북
          li
            a#notice(href='#') 공지사항
          li
            a#helpDesk(href='#') 고객센터

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters('login', {
      isLogin: 'getLoginState'
    })
  },
  methods: {
    goTo (target) {
      this.$router.push(target)
    }
  }
}
</script>
<style lang="scss" scoped>
$desktop: "min-width: 768px";
$mobile: only screen and (max-width: 769px);
* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: #121212;
}
.logo {
  width: 100px;
}
@media only screen and ($desktop) {
  header {
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    background-color: #fff;
    z-index: 4 !important;

    >div {
      position: Relative;
    }
    h1 {
      position: absolute;
      left: 80px;
      top: 10px;
    }
    button {
      position: relative;
      display: inline-block;
      width: 30px;
      text-align: center;
      outline: none;
      border: none;
      background: none;
      float: left;
      cursor: pointer;
    }
    #login-btn {
      position: relative;
      display: block;
      padding: 4px;
      color: #8f8f8f;
      float: left;
      margin-right: 50px;
    }

    ul {
      position: absolute;
      margin-left: 0px;
      left: 50%;
      top: 15px;
      margin-left: -315px;

      li {
        float: left;
        list-style: none;
        cursor: pointer;

        a {
          margin-right: 55px;
          font-size: 18px;
          color: #777777;
          line-height: 2;
          font-family: NotoSans;
          letter-spacing: -0.7px;
        }
      }
    }
  }
  .menu-right {
    position: absolute;
    right: 100px;
    top: 20px;
  }
}
</style>
