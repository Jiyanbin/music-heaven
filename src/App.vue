<template>
  <div id="app">
    <v-header></v-header>
    <keep-active>
      <router-view :courses='courses'></router-view>
    </keep-active>
    <div class='tab-wrapper'>
      <div class='tab'>
        <div class='tab-item'><router-link to='/homePage'>首页</router-link></div>
        <div class='tab-item'><router-link to='/courses'>全部课程</router-link></div>
        <div class='tab-item'><router-link to='/myLearn'>我的学习</router-link></div>
        <div class='tab-item'><router-link to='/account'>账号</router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
import header from './components/header/header.vue';
export default {
  name: 'app',
  data () {
      return {
        courses: []
      };
    },
  components: {
    'v-header': header
  }
};

</script>
<style lang ='stylus' rel='stylesheet/stylus'>
  .tab-wrapper
    border-top: 1px solid rgba(139, 125, 107, 0.5)
    position: fixed
    bottom: 0
    width: 100%
    height: 60px
    .tab
      display: flex
      .tab-item
        flex: 1
        display: inline-block
        line-height: 60px
        font-size: 20px
        text-align: center
        & > a
          display: block
          text-decoration: none
          &.router-link-active
            font-size: 21px
            color: rgb(220, 20, 20)
</style>
