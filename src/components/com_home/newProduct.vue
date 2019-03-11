<template id="newProduct">
  <div class="newProduct">
    <div class="newProduct_container">
      <div class="product_title">
        <p>着眼未来，聚焦<span>新品</span></p>
      </div>
      <div class="product_show">
        <div class="product_box">
          <div class="product_img">
            <img src="../../assets/img/newproduct.jpg"
                 alt="产品图标1">
          </div>
          <div class="product_name">
            <p>M17 电瓶驱动驾驶式扫洗一体机</p>
          </div>
          <div class="product_abstract">
            <p>多功能的 M17 电瓶扫洗一体机，降低了反复清洁的需求。</p>
          </div>
          <div class="product_link">
            <a href="javascript:void(0)">产品详情>></a>
          </div>
        </div>
        <div class="product_box">
          <div class="product_img">
            <img src="../../assets/img/newproduct.jpg"
                 alt="产品图标1">
          </div>
          <div class="product_name">
            <p>M17 电瓶驱动驾驶式扫洗一体机</p>
          </div>
          <div class="product_abstract">
            <p>多功能的 M17 电瓶扫洗一体机，降低了反复清洁的需求。</p>
          </div>
          <div class="product_link">
            <a href="javascript:void(0)">产品详情>></a>
          </div>
        </div>
        <div class="product_box">
          <div class="product_img">
            <img src="../../assets/img/newproduct.jpg"
                 alt="产品图标1">
          </div>
          <div class="product_name">
            <p>M17 电瓶驱动驾驶式扫洗一体机</p>
          </div>
          <div class="product_abstract">
            <p>多功能的 M17 电瓶扫洗一体机，降低了反复清洁的需求。</p>
          </div>
          <div class="product_link">
            <a href="javascript:void(0)">产品详情>></a>
          </div>
        </div>
        <div class="product_box">
          <div class="product_img">
            <img src="../../assets/img/newproduct.jpg"
                 alt="产品图标1">
          </div>
          <div class="product_name">
            <p>M17 电瓶驱动驾驶式扫洗一体机</p>
          </div>
          <div class="product_abstract">
            <p>多功能的 M17 电瓶扫洗一体机，降低了反复清洁的需求。</p>
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
  mounted () { }
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
  height: 420px;
  float: left;
  margin: 4px 12px;
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
  height: 240px;
  line-height: 240px;
}
.product_img img {
  max-width: 80%;
  height: auto;
}
.product_name {
  color: #939393;
  width: 80%;
  height: 40px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 20px;
}
.product_abstract {
  padding-top: 10px;
  width: 80%;
  height: 80px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 20px;
  color: #ababab;
}
.product_link {
  /* padding-top: 20px; */
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
