<template>
  <div class='secoundhome'>
    <el-carousel :interval="4000" type="card" height="700px">
    <el-carousel-item v-for="item in list" :key="item">
     <img style="width:100%"  :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return { list: ['http://img3.imgtn.bdimg.com/it/u=1535711284,868786361&fm=26&gp=0.jpg', 'http://img5.imgtn.bdimg.com/it/u=1743661438,1631154157&fm=26&gp=0.jpg', 'http://img4.imgtn.bdimg.com/it/u=4108910939,1365921795&fm=26&gp=0.jpg', 'http://img1.imgtn.bdimg.com/it/u=288076519,3250187520&fm=26&gp=0.jpg'] }
  }
}
</script>

<style lang='less' scoped>
// .secoundhome {
//     background-image: url('http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E7%B2%89%E4%B8%9D%E7%94%BB%E5%83%8F&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=858558717,4171450648&os=3427187865,1947636108&simid=4190061746,840309076&pn=29&rn=1&di=2530&ln=1343&fr=&fmq=1583218611675_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimg1.toocle.com%2Fuppic%2Fa%2F2017%2F02%2F10%2F9b%2Ffb%2F9bfb345dc7e1490aa7b4bcfc38862dab-378595.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined');
//     height: calc(100vh - 60px);
//     background-size: cover;
// };

</style>
