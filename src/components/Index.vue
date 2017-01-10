<template>
  <div class="page has-navbar" v-nav="{title: '实时监测', showBackButton: true}">
    <div class="page-content" style="padding-top: 54px;">
      <div class="list list-ios" thin-border>
        <div class="item item-ios" thin>
          <span class="item-title">最新报警信息</span>
        </div>
        <div class="item item-icon-right thin-border" style="height: 88px;padding: 0;" v-for="item in 5">
          <div class="item-image">
            <img src="/static/images/image-square.png">
          </div>
          <div class="home-title">
            <span>{{message}}</span>
            <span>2017-01-01 17:00:00</span>
          </div>
          <div class="home-content">A相断电或与模块的接线端子连接异常</div>
          <i class="icon ion-ios-arrow-right" style="color: #DDD;margin-top: 15px;"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  module.exports = {
    data(){
      return {
        message: 'Hello'
      }
    },
    ready(){
      console.log('Hello!!!')
    }
  }
</script>
<style lang="less" src="../style/index.less" scoped></style>