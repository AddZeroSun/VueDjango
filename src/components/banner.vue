<template id="banner">
  <div class="banner">
    <div class="banner_containner">
      <div class="banner_title">
        <p class="title_zn">最新产品</p>
        <p class="title_en">New Product</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.banner {
  width: 100%;
  padding-bottom: 50px;
}
.banner_containner {
  position: relative;
  height: 320px;
  background: url("../assets/img/nav_img1.jpg") no-repeat center top;
  background-size: cover;
  margin-top: 80px;
}
.banner_title {
  position: absolute;
  width: 100%;
  height: 100px;
  top: 50%;
  margin-top: -50px;
  text-align: center;
  line-height: 50px;
  animation: title_animate 1s;
  animation-iteration-count: 1;
  /* Safari and Chrome */
  -webkit-animation: title_animate 1s;
  -webkit-animation-iteration-count: 1;
}
.title_zn {
  font-size: 36px;
  color: #606060;
  letter-spacing: 5px;
}
.title_en {
  font-size: 20px;
  color: #606060;
  letter-spacing: 3px;
}

@keyframes title_animate {
  from {
    margin-top: 0;
  }
  to {
    margin-top: -50px;
  }
}
@-webkit-keyframes title_animate {
  /* safari and chorme */
  from {
    margin-top: 0;
  }
  to {
    margin-top: -50px;
  }
}
</style>
