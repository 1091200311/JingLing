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
                <b-tab title="类目" active><b-card-text style="width:1184px">
                </b-card-text></b-tab>
                <b-tab title="品牌"><b-card-text style="width:1184px"></b-card-text></b-tab>
                <b-tab title="平台"><b-card-text style="width:1184px"></b-card-text></b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Equipment"
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
  .top{
    width: 100%;
    height: 460px;
    text-align: center;
    box-sizing: border-box;
  }

</style>
