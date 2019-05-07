<template>
    <div>
      <div class="top">
        <b-img src="https://img.alicdn.com/tfs/TB11_BqsXzqK1RjSZSgXXcpAVXa-1879-520.png" fluid alt="Responsive image"></b-img>
      </div>
      <div>
        <div class="content">
          <div style="text-align: center;font-size: 30px;color: #202020">
            <div>全屋智能</div>
            <p>以下品牌/厂家的相关设备已支持通过精灵进行控制</p>
          </div>
          <div>
            <b-card no-body>
              <b-tabs pills card style="text-align: center">
                <b-tab title="类目"><b-card-text>
                  <el-menu :default-active="activeIndex"  style="width: 100%" class="m-fixnav" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1"><a href="#fridge">冰箱</a></el-menu-item>
                    <el-menu-item index="2"><a href="#Socket">插座</a></el-menu-item>
                    <el-menu-item index="3"><a href="#balance">秤</a></el-menu-item>
                    <el-menu-item index="4"><a href="#Smoke lampblack machine">抽油烟机</a></el-menu-item>
                    <el-menu-item index="5"><a href="#Dehumidifier">除湿器</a></el-menu-item>
                    <el-menu-item index="6"><a href="#sensor">传感器</a></el-menu-item>
                    <el-menu-item index="7"><a href="#window">窗</a></el-menu-item>
                    <el-menu-item index="8"><a href="#Window curtains">窗帘</a></el-menu-item>
                  </el-menu>
                  <v-carousel1></v-carousel1>
                </b-card-text></b-tab>
                <b-tab title="品牌"><b-card-text>
                  <el-menu default-active="activeIndex" style="width: 100%"class="m-fixnav" mode="horizontal">
                    <el-menu-item index="1"><a href="#">全部</a></el-menu-item>
                    <el-menu-item index="2">Midea 美的</el-menu-item>
                    <el-menu-item index="3">OPPLE 欧普</el-menu-item>
                    <el-menu-item index="4">Konke 控客</el-menu-item>
                    <el-menu-item index="5">哈马妮</el-menu-item>
                  </el-menu>
                  <v-carousel1></v-carousel1></b-card-text></b-tab>
                <b-tab title="平台"><b-card-text>
                  <el-menu default-active="activeIndex" style="width: 100%"class="m-fixnav" mode="horizontal">
                    <el-menu-item index="1"><a href="#">全部</a></el-menu-item>
                    <el-menu-item index="2">米林客</el-menu-item>
                    <el-menu-item index="3">征极Mesh</el-menu-item>
                    <el-menu-item index="4">智能家居管家</el-menu-item>
                    <el-menu-item index="5">德士尼智能家园</el-menu-item>
                  </el-menu>
                  <v-carousel1></v-carousel1></b-card-text></b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import  vCarousel1 from '../common/Carousel1';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
      components: {
        vCarousel1,
      },
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .m-fixnav{
    height: 49px;
    width: 100%;
    top: 0;
    background: #ebebeb;
    z-index: 600;
  }
  p{
    margin: 18px 0 28px 0;
    font-size: 14px;
    color: #b0b0b0;
  }
  .content{
    max-width: 1200px;
    margin: auto;
    padding: 0 30px 0;
  }
  .top{
    width: 100%;
    height: 460px;
    text-align: center;
    box-sizing: border-box;
  }

</style>
