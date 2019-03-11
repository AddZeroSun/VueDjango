<template id="hotline">
  <div class="hotline">
    <div class="hotline_container">
      <div class="hotline_top">
        <p class="title_zn">服务网点</p>
        <p class="title_en">SERVICE NETWORK</p>
      </div>
      <div class="hotline_bottom">
        <div class="box_img">
          <img src="../../assets/img/service_site.jpg"
               alt="">
        </div>
        <div class="box_text">
          <p class="text_main">我们在全国，拥有<em>700</em>多个服务中心，<em>7000</em>余名技术人员，可以实现<em>365X24</em>全时服务，<em>2小时内</em>到达现场，<em>1天内</em>排除故障。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hotline {
  width: 100%;
  padding-bottom: 20px;
}
.hotline_container {
  width: 1000px;
  overflow: hidden;
  margin: 0 auto;
}
.hotline_top {
  width: 100%;
  padding-bottom: 50px;
  /* background-color: aqua; */
  text-align: center;
}
.title_zn {
  display: inline-block;
  margin: 30px;
  padding: 0 20px;
  font-size: 36px;
  color: #40c3bd;
  border-left: 2px solid #606060;
  border-right: 2px solid #606060;
}
.title_en {
  font-size: 20px;
}
.hotline_bottom {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
  overflow: hidden;
}
.box_img {
  width: 100%;
  height: 600px;
}
.box_img img {
  max-width: 100%;
  height: auto;
}
.box_text {
  margin: 0 auto;
  width: 90%;
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  color: #666;
}
.box_text em {
  color: #f52020;
  font-style: normal;
}
</style>
