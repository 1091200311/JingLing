<template>
    <div>
      <b-navbar toggleable="md" type="light" variant="default" fixed class="box">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav style="margin-left: 400px">
            <b-nav-item>
              <router-link to="/index">首页</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/skills">魔法技能</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/equipment">智慧生活</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .box {
    border-bottom: 1px solid #eef1f6;
    height: 55px;
  }

  a {
    color: #324157;
  }
</style>
