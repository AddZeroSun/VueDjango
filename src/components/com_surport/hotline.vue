<template id="hotline">
  <div class="hotline">
    <div class="hotline_container">
      <div class="hotline_top">
        <p class="title_zn">服务热线</p>
        <p class="title_en">SERVICE HOTLINE</p>
      </div>
      <div class="hotline_bottom">
        <div class="hotline_box">
          <p class="box_city">北京</p>
          <p class="box_num">400-400-400</p>
        </div>
        <div class="hotline_box">
          <p class="box_city">北京</p>
          <p class="box_num">400-400-400</p>
        </div>
        <div class="hotline_box">
          <p class="box_city">北京</p>
          <p class="box_num">400-400-400</p>
        </div>
        <div class="hotline_box">
          <p class="box_city">北京</p>
          <p class="box_num">400-400-400</p>
        </div>
        <div class="hotline_box">
          <p class="box_city">北京</p>
          <p class="box_num">400-400-400</p>
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
  padding-bottom: 50px;
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
  overflow: hidden;
}
.hotline_box {
  box-sizing: border-box;
  width: 200px;
  height: 240px;
  /* background-color: red; */
  float: left;
  padding: 70px 20px;
  text-align: center;
  border: 1px solid #dedede;
  margin: 25px;
  color: #666;
}
.box_city {
  font-size: 20px;
  line-height: 40px;
}
.box_num {
  line-height: 50px;
  font-size: 18px;
}
</style>
