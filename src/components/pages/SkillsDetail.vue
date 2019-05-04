<template>
  <div>
    <div class="modal">
      <div style="text-align: left">
        <div class="left">
          <div class="icon">
            <div class="outside"></div>
            <img src="http://ailabs.alibabausercontent.com/images/26734/1556588950216.jpg">
            <p>我</p>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SkillsDetail"
    }
</script>

<style scoped>
  .outside{
    border: 2px solid rgba(0,130,255,.4);
    left: 0;
    top: 0;
    width: 76px;
    height: 76px;
  }
  .left{
    display: inline-block;
    vertical-align: top;
    width: 60%;
  }
  .modal{
    position: fixed;
    display: none;
    top: 50%;
    left: 50%;
    width: 80%;
    max-width: 900px;
    height: auto;
  }

</style>
