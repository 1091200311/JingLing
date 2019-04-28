<template>
  <div>
    <div class="container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="音乐" name="first">
          <div class="container">
          <el-tabs v-model="activeName1" @tab-click="handleClick">
            <el-tab-pane label="分类" name="first"></el-tab-pane>
            <el-tab-pane label="排行" name="second"></el-tab-pane>
          </el-tabs>
          </div>
          <div class="container">
            <ul style="font-size: 0;margin-right: -20px">
              <li>
                <div>

                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="节目" name="second"></el-tab-pane>
        <el-tab-pane label="儿童" name="third"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
      data() {
        return {
          activeName: 'first',
          activName1:'first'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>

</style>
