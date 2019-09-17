<template>
  <div class="saveImg">
    <img class="saveImg-1" src="../animation-save/ppt.jpg" style="width: 250px;height: 600px" @click="sendMsg">
  </div>
</template>

<script>
  export default {
    name: 'save1',
    data() {
      return {
        // 将msg传递给父组件
        msg: '已保存窗口1'
      }
    },
    methods: {
      sendMsg() {
        // func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
        this.$emit('func', this.msg)
      }
    }
  }
</script>

<style lang="stylus">
  .saveImg {
    width: 100%;
    background: #2D64B3;
  }
</style>
