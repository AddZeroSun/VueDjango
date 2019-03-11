<template id="footer">
  <div class="footer">
    <div class="footer_content">
      <p class="footer_top">
        <a @click="webJump(0)"
           href="javascript:void(0);">首页</a>
        <a @click="webJump(1)"
           href="javascript:void(0);">产品</a>
        <a @click="webJump(2)"
           href="javascript:void(0);">动态</a>
        <a @click="webJump(3)"
           href="javascript:void(0);">服务支持</a>
        <a @click="webJump(4)"
           href="javascript:void(0);">关于我们</a>
      </p>
      <div class="footer_bottom">
        <div class="footer_img">
          <img src="../assets/img/erweima.png"
               alt="二维码">
        </div>
        <div class="footer_left">
          <p>联系邮箱：</p>
          <p>xxxxxxxxx&#64;xxxx.com</p>
        </div>
        <div class="footer_right">
          <p>copyright©2019 xxxxx有限公司</p>
          <p><a>京ICP备xxxxxxxx号-x</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 1
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {
    webJump (index) {
      var point = index
      if (point === 0) {
        this.$router.push({ path: '/home', name: 'home' })
      } else if (point === 1) {
        this.$router.push({ path: '/product', name: 'product' })
      } else if (point === 2) {
        this.$router.push({ path: '/news', name: 'news' })
      } else if (point === 3) {
        this.$router.push({ path: '/surport', name: 'surport' })
      } else if (point === 4) {
        this.$router.push({ path: '/aboutus', name: 'aboutus' })
      }
    }
  },
  mounted () { }
}
</script>

<style scoped>
.footer {
  margin: 0;
  width: 100%;
  height: 200px;
  background: #5e6664;
}
.footer_content {
  overflow: hidden;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.footer_content p {
  margin: 0;
}
.footer_top {
  padding: 35px 0;
  margin-left: 30px;
}
.footer_top a {
  text-decoration: none;
  margin-left: 20px;
  color: #a5aaa9;
}
.footer_top a:hover {
  color: aliceblue;
  transition: 0.5s;
}
.footer_bottom {
  width: 1200px;
  padding: 0 20px;
  overflow: hidden;
  color: #fff;
  box-sizing: border-box;
}
.footer_img {
  width: 10%;
  border: none;
}
.footer_img img {
  width: 90px;
  height: 90px;
  vertical-align: middle;
  float: left;
}
.footer_left {
  width: 60%;
  float: left;
  padding-left: 60px;
  box-sizing: border-box;
}
.footer_bottom p {
  margin-top: 20px;
}
.footer_right {
  width: 30%;
  float: right;
  box-sizing: border-box;
}
.footer_right a {
  text-decoration: none;
}
.footer_right a:hover {
  cursor: pointer;
}
</style>
