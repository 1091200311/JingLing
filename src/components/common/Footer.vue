<template>
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
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
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
