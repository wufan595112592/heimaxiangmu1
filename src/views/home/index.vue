<template>
  <el-container>
    <el-aside style="width:230px">

      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
     <layout-header></layout-header>
      <el-main>
        <ruter-views>主题内容</ruter-views>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutAside from '../../components/home/layout-aside.vue'
import LayoutHeader from '../../components/home/layout-header.vue'
export default {
  components: {
    'layout-aside': LayoutAside,
    'layout-header': LayoutHeader
  }
}
</script>
<style>
</style>
