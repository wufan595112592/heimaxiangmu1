<template>
<el-row class="header" align="middle" type="flex">
    <el-col class="left" :span="12">
        <i class="el-icon-s-fold" ></i>
        <span>
            王者峡谷科技股份有限公司
        </span>
    </el-col>
    <el-col class="right" :span="12">
        <el-row type="flex" justify="end" align="middle">
        <img :src="userInfo.photo" alt="">
        <el-dropdown trigger='hover' @command="clickMenu" >
         <span>
            {{userInfo.name}}
         </span>
         <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command='info'>个人信息</el-dropdown-item>
                <el-dropdown-item command='git'>git地址</el-dropdown-item>
                <el-dropdown-item command='logout'>退出</el-dropdown-item>
         </el-dropdown-menu>
        </el-dropdown>
        </el-row>
    </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    clickMenu (command) {
      if (command === 'info') {} else if (command === 'git') {
        window.location.href = 'https://github.com/wufan595112592/heimaxiangmu1'
      } else {
        localStorage.removeItem('uesr-token')
        this.$router.push('/login')
      }
    }
  },
  created () {
    const token = localStorage.getitem('user-token')
    this.$axios({
      url: '/user/profile',
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: 'get'
    }).then(res => {
      this.userInfo = res.data.data
    })
  }
}
</script>

<style lang='less' scoped>
.header {
     height: 60px;
     .left{
         i {
             font-size: 20px;
         }
     }
     .right {
        img {
         width: 40px;
         height: 40px;
         border-radius: 50px;
         margin-right: 4px
        }

     }
}

</style>
