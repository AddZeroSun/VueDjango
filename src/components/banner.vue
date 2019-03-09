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
export default {}
</script>

<style scoped>
.banner{
    width: 100%;
    padding-bottom: 100px;
}
.banner_containner{
    position: relative;
    height: 320px;
    background: url('../assets/img/nav_img1.jpg') no-repeat center top;
    background-size: cover;
    margin-top: 80px;
}
.banner_title{
    position: absolute;
    width: 100%;
    height: 100px;
    top: 50%;
    margin-top: -5
    0px;
    text-align: center;
    line-height: 50px;
}
.title_zn{
    font-size: 36px;
    color: #606060;
    letter-spacing: 5px;
}
.title_en{
    font-size: 20px;
    color: #606060;
    letter-spacing: 3px;
}
</style>
