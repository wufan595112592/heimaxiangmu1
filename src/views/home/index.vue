<template>
  <el-container>
    <el-aside style="width:230px">
     <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main style="padding: 0">
        <router-view>
          <!-- <linner-n></linner-n> -->1111111111111111
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutAside from '../../components/home/layout-aside.vue'
import LayoutHeader from '../../components/home/layout-header.vue'
// import linner from './secondhome.vue'
export default {
  components: {
    'layout-aside': LayoutAside,
    'layout-header': LayoutHeader
    // 'linner-n': linner
  }
}
</script>
<style>
</style>
