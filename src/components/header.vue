<template id="header">
  <div class="header">
    <div class="header_container">
      <div class="header_left">
        <img src="../assets/img/logo.png"
             alt="logo">
      </div>
      <div class="header_right">
        <a @click="changeNav(0)"
           :class="{nav_active:cur==0}"
           class="nav"
           href="javascript:void(0);">首页</a>
        <a @click="changeNav(1)"
           :class="{nav_active:cur==1}"
           class="nav"
           href="javascript:void(0);">产品</a>
        <a @click="changeNav(2)"
           :class="{nav_active:cur==2}"
           class="nav"
           href="javascript:void(0);">动态</a>
        <a @click="changeNav(3)"
           :class="{nav_active:cur==3}"
           class="nav"
           href="javascript:void(0);">服务支持</a>
        <a @click="changeNav(4)"
           :class="{nav_active:cur==4}"
           class="nav"
           href="javascript:void(0);">关于我们</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cur: 0
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {
    changeNav (index) {
      sessionStorage.setItem('index', index)
      this.cur = index
      if (this.cur === 0) {
        this.$router.push({ path: '/home', name: 'home', params: { id: this.cur } })
      } else if (this.cur === 1) {
        this.$router.push({ path: '/product', name: 'product', params: { id: this.cur } })
      } else if (this.cur === 2) {
        this.$router.push({ path: '/news', name: 'news', params: { id: this.cur } })
      } else if (this.cur === 3) {
        this.$router.push({ path: '/surport', name: 'surport', params: { id: this.cur } })
      } else {
        this.$router.push({ path: '/aboutus', name: 'aboutus', params: { id: this.cur } })
      }
    },
    handleScroll () {
      var navDiv = document.getElementsByClassName('header')[0]
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 100) {
        navDiv.style.background = 'rgba(255, 255, 255)'
      } else {
        navDiv.style.background = 'rgba(255, 255, 255, 0.8)'
      }
    }
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll)
    let index = sessionStorage.getItem('index')
    if (index === '' || index === null || index === undefined) {
      this.cur = 0
    } else {
      this.cur = index
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 2px 0px 10px #48484866;
}
.header_container {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  overflow: hidden;
}
.header_left {
  width: 245px;
  height: 80px;
  float: left;
}
.header_left img {
  width: 200px;
  height: 40px;
  margin-top: 23px;
}
.header_right {
  height: 80px;
  float: right;
  margin-right: 50px;
}
.nav {
  text-decoration: none;
  display: inline-block;
  height: 78px;
  font-size: 18px;
  text-align: center;
  line-height: 78px;
  border-bottom: 2px solid rgba(255, 255, 255, -0.6);
  margin-left: 100px;
  color: #000000;
}
.nav:hover {
  color: #40c3bd;
  border-bottom: 2px solid #40c3bd;
  transition: 0.5s;
}
.nav_active {
  color: #40c3bd;
  border-bottom: 2px solid #40c3bd;
}
</style>
