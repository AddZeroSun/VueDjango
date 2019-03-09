<template id="cooperation">
  <div class="cooperation">
    <div class="cooperation_container">
      <div class="cooperation_title">
        <p>
          互利共赢，精诚<span>合作</span>
        </p>
      </div>
      <div class="cooperation_show">
          <div class="cooperation_box">
              <!-- <div class="box_skin"></div> -->
              <div class="box_left">
                  <img src="../../assets/img/home_img1.jpg" alt="">
              </div>
              <div class="box_right">
                  <p class="right_titile">前端之约</p>
                  <p class="right_detail">当你我之手叠在一起，我们是这份盟约的基石。我们乐意感受这重量和责任，于指尖之术，打造更完善的开源的基础前端 UI 框架，化作你方寸屏幕前的亿万字节，共筑利器。</p>
              </div>
          </div>
          <div class="cooperation_box">
              <!-- <div class="box_skin"></div> -->
              <div class="box_left">
                  <img src="../../assets/img/home_img2.jpg" alt="">
              </div>
              <div class="box_right">
                  <p class="right_titile">前端之约</p>
                  <p class="right_detail">当你我之手叠在一起，我们是这份盟约的基石。我们乐意感受这重量和责任，于指尖之术，打造更完善的开源的基础前端 UI 框架，化作你方寸屏幕前的亿万字节，共筑利器。</p>
              </div>
          </div>
          <div class="cooperation_box">
              <!-- <div class="box_skin"></div> -->
              <div class="box_left">
                  <img src="../../assets/img/home_img3.jpg" alt="">
              </div>
              <div class="box_right">
                  <p class="right_titile">前端之约</p>
                  <p class="right_detail">当你我之手叠在一起，我们是这份盟约的基石。我们乐意感受这重量和责任，于指尖之术，打造更完善的开源的基础前端 UI 框架，化作你方寸屏幕前的亿万字节，共筑利器。</p>
              </div>
          </div>
          <div class="cooperation_box">
              <!-- <div class="box_skin"></div> -->
              <div class="box_left">
                  <img src="../../assets/img/home_img4.jpg" alt="">
              </div>
              <div class="box_right">
                  <p class="right_titile">前端之约</p>
                  <p class="right_detail">当你我之手叠在一起，我们是这份盟约的基石。我们乐意感受这重量和责任，于指尖之术，打造更完善的开源的基础前端 UI 框架，化作你方寸屏幕前的亿万字节，共筑利器。</p>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.cooperation {
  width: 100%;
  padding-bottom: 100px;
}
.cooperation_container {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}
/* 大标题 */
.cooperation_title {
  width: 100%;
  height: 200px;
  text-align: center;
  font-size: 36px;
  line-height: 200px;
  color: #484848;
}
.cooperation_title p span {
  color: #40c3bd;
}
.cooperation_show{
    width: 100%;
    height: auto;
    overflow: hidden;
}
.cooperation_box{
    position: relative;
    width: 570px;
    height: 400px;
    margin: 20px 0 20px 20px;
    float: left;
    transition: 0.3s;
}
.cooperation_box:hover{
    box-shadow: 3px 3px 10px #484848;
}
.box_left{
    float: left;
    width: 50%;
    height: 100%;
    text-align: center;
}
.box_left img{
    width: 285px;
    height: 400px;
}
.box_right{
    float: left;
    width: 50%;
    height: 100%;
    text-align: left;
}
/* 盒子内标题 */
.right_titile{
    padding: 40px 40px 30px 20px ;
    font-size: 16px;
    line-height: 30px;
}
/* 详情 */
.right_detail{
    padding: 10px 30px 30px 30px ;
    font-size: 14px;
    line-height: 30px;
    color: #adadad;
}
</style>
