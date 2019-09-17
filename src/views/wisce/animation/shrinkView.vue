<template>
  <div class="shrink-view" :style="{maxHeight: (mIsOpen?contentHeight:0) + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'shrinkView',
    props: {
      value: Boolean,
      isShowTool: Boolean
    },
    updated() {
      this.init()
    },
    mounted() {
      this.init()
    },
    methods: {
      // 视图高度
      init() {
        // 在下一次DOM更新循环之后执行 在修改数据之后立即使用它，然后等待 DOM 更新
        this.$nextTick(() => {
          this.contentHeight = this.$el.scrollHeight
        })
      }
    },
    watch: {
      value(newValue) {
        // 监听 value 的变化，并将变化值赋值给 本组件维护的 mIsOpen 字段中
        this.mIsOpen = newValue
      },

      // 监听 mIsOpen 的变化，一旦变化，将input事件暴露，这样可实现v-model双向绑定。
      mIsOpen(newValue) {
        this.$emit('checkBox', newValue)
      }
    },
    data() {
      return {
        contentHeight: 0, // 保存视图内容的实际高度
        mIsOpen: this.value  // 保存开合状态，默认值使用prop定义的属性(即v-model的值)
      }
    }
  }
</script>

<style scoped>
  .shrink-view {
    overflow: hidden;

    height: 864px;     // 将父组件页面高度给到子组件保证属性详情可以完整显示
    -webkit-transition-duration: 1000ms;
    -moz-transition-duration: 1000ms;
    -ms-transition-duration: 1000ms;
    -o-transition-duration: 1000ms;
    transition-duration: 1000ms;
  }


</style>
