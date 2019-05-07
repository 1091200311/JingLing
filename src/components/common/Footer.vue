<template>
  <div>
    <div class="container">
      <h2 style="text-align: center">精灵具备以下技能</h2>
      <b-row>
        <b-col v-for="skills in skillsList":key="skills.id">
          <div class="list">
            <img class="pic" :src="skills.url">
            <p class="name">{{skills.name}}</p>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="footer">
      <div class="footer-content">
        <span class="social">
          <div class="social-imgs">
            <img  style="width: 68px;height: 67px" src="https://img.alicdn.com/tfs/TB16QCXshTpK1RjSZFMXXbG_VXa-136-134.png">
            <div class="text">关注微信</div>
          </div>
          <div>
            <img style="width: 68px;height: 67px" src="https://img.alicdn.com/tfs/TB1yMqvsiLaK1RjSZFxXXamPFXa-132-134.png">
            <div class="text">关注微博</div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer",
      data(){
          return{
            skillsList:[
              {
                "id":1,
                "url":"https://i01picsos.sogoucdn.com/e86b342b945e833f",
                "name":"听音乐"
              },
              {
                "id":2,
                "url":"https://i01piccdn.sogoucdn.com/dc95def5a5268c92",
                "name":"天气"
              },
              {
                "id":3,
                "url":"https://i04picsos.sogoucdn.com/958202a66eaf2079",
                "name":"闹钟"
              },
              {
                "id":4,
                "url":"https://img02.sogoucdn.com/app/a/100520093/02180dee779e8a8c-9a2dfd51a14e3358-1fbc0f705fe013bc123857eb2c170002.jpg",
                "name":"找手机"
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .list{
    clear: both;
    position: relative;
    display: inline-block;
    width: 215px;
    height: 200px;
    margin: 0 10px 20px 10px;
    background-color: #fff;
    transition: 1s box-shadow;
    cursor: pointer;
  }
  .name{
    position: absolute;
    text-align: center;
    width: 100%;
  }
  .pic{
    position: relative;
    width: 80px;
    height: 80px;
    top: 22px;
  }
  .container{
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
  }
  .social-imgs{
    position: absolute;
    left: 50%;
    margin-left: -34px;
  }
  .text{
    padding-top: 80px;
    padding-left: 2px;
    font-size: 14px;
    text-align: center;
  }
  .social{
    position: center;
    padding-left: 50px;
    width: 260px;
    display: flex;
    flex-flow: row;
  }
  .footer-content{
    display: flex;
    flex-flow: row;
    margin: auto;
    max-width: 1200px;
    padding: 25px 60px 25px;
  }
.footer{
  background: #000;
  color: #ffffff;
  position: relative;
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 500ms;
}
</style>
