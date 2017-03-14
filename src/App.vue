<template>
  <div id="app">
    <keep-active>
      <router-view :courses='courses'></router-view>
    </keep-active>
    <div class='tab-wrapper'>
      <div class='tab'>
        <div class='tab-item'><router-link to='/homePage'>首页</router-link></div>
        <div class='tab-item'><router-link to='/courses'>课程</router-link></div>
        <div class='tab-item'><router-link to='/myLearn'>学习</router-link></div>
        <div class='tab-item'><router-link to='/account'>账号</router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
const ERR_OK = 0;
export default {
  name: 'app',
  data () {
    return {
      courses: []
    };
  },
  created () {
    this.$http.get('/api/courses').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.courses = response.data;
        console.log(this.courses);
      }
    });
  }
};

</script>
<style lang ='stylus' rel='stylesheet/stylus'>
  .tab-wrapper
    border-top: 1px solid rgba(139, 125, 107, 0.5)
    background: #fff
    position: fixed
    bottom: 0
    width: 100%
    height: 45px
    z-index: 99
    .tab
      display: flex
      .tab-item
        flex: 1
        display: inline-block
        line-height: 45px
        font-size: 20px
        text-align: center
        & > a
          display: block
          text-decoration: none
          &.router-link-active
            font-size: 21px
            color: rgba(67, 205, 128, .75)
</style>
