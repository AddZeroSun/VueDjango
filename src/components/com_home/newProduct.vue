<template id="newProduct">
  <div class="newProduct">
    <div class="newProduct_container">
      <div class="product_title">
        <p>着眼未来，聚焦<span>新品</span></p>
      </div>
      <div class="product_show">
        <div class="product_box">
          <div class="product_img">
            <img src="../../assets/img/Big_icon1.png" alt="产品图标1">
          </div>
          <div class="product_name">
            <p>最新产品</p>
          </div>
          <div class="product_abstract">
            <p>采用自身模块规范编写的开源前端 UI 框架，遵循原生 HTML/CSS/JS 开发模式</p>
          </div>
          <div class="product_link">
            <a href="javascript:void(0)">产品详情>></a>
          </div>
        </div>
        <div class="product_box">
          <div class="product_img">
            <img src="../../assets/img/Big_icon2.png" alt="产品图标2">
          </div>
          <div class="product_name">
            <p>最新产品</p>
          </div>
          <div class="product_abstract">
            <p>采用自身模块规范编写的开源前端 UI 框架，遵循原生 HTML/CSS/JS 开发模式</p>
          </div>
          <div class="product_link">
            <a href="javascript:void(0)">产品详情>></a>
          </div>
        </div>
        <div class="product_box">
          <div class="product_img">
            <img src="../../assets/img/Big_icon3.png" alt="产品图标3">
          </div>
          <div class="product_name">
            <p>最新产品</p>
          </div>
          <div class="product_abstract">
            <p>采用自身模块规范编写的开源前端 UI 框架，遵循原生 HTML/CSS/JS 开发模式</p>
          </div>
          <div class="product_link">
            <a href="javascript:void(0)">产品详情>></a>
          </div>
        </div>
        <div class="product_box">
          <div class="product_img">
            <img src="../../assets/img/Big_icon4.png" alt="产品图标4">
          </div>
          <div class="product_name">
            <p>最新产品</p>
          </div>
          <div class="product_abstract">
            <p>采用自身模块规范编写的开源前端 UI 框架，遵循原生 HTML/CSS/JS 开发模式</p>
          </div>
          <div class="product_link">
            <a href="javascript:void(0)">产品详情>></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  mounted () {}
}
</script>

<style scoped>
.newProduct {
  width: 100%;
}
.newProduct_container {
  width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
}
.product_title {
  width: 100%;
  height: 200px;
  text-align: center;
  font-size: 36px;
  line-height: 200px;
  color: #484848;
}
.product_title p span {
  color: #40c3bd;
}
.product_show {
  width: 100%;
  overflow: hidden;
}
.product_box {
  width: 251px;
  height: 300px;
  float: left;
  margin: 4px 12px;
  padding: 30px;
  box-sizing: border-box;
  border: 1px solid #dedede;
  transition: 0.3s;
  text-align: center;
}
.product_box:hover {
  box-shadow: 1px 1px 10px #484848;
}
.product_img {
  width: 100%;
  height: 64px;
}
.product_img img {
  width: 64px;
  height: 64px;
}
.product_name {
  color: #939393;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  padding: 10px 0;
}
.product_abstract {
  font-size: 16px;
  color: #ababab;
}
.product_link {
  padding: 20px 0;
  width: 100%;
  height: 30px;
  font-size: 18px;
  line-height: 30px;
}
.product_link a {
  text-decoration: none;
  color: #40c3bd;
}
</style>
