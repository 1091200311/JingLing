<template>
    <div>
      <v-carousel></v-carousel>
      <div style="padding-top: 50px">
        <div class="content">
          <div style="text-align: center;font-size: 30px">
            <div>云端服务功能</div>
            <p>小小的精灵在云端有大大的知识图谱，她的能力超乎你想象</p>
          </div>
          <div>
            <b-card no-body>
              <b-tabs pills card style="text-align: center">
                <b-tab title="娱乐" active><b-card-text style="width:1184px">
                </b-card-text></b-tab>
                <b-tab title="生活"><b-card-text style="width:1184px"></b-card-text></b-tab>
                <b-tab title="教育"><b-card-text style="width:1184px"></b-card-text></b-tab>
                <b-tab title="游戏"><b-card-text style="width:1184px"></b-card-text></b-tab>
                <b-tab title="工具"><b-card-text style="width:1184px"></b-card-text></b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import vCarousel from '../common/Carousel';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
      components: {
        vCarousel,
      },
    }
</script>

<style scoped>
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
</style>
