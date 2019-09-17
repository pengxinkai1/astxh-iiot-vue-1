<template xmlns="http://www.w3.org/1999/html">
  <div>
    <!--属性栏显示设置-->
    <el-button @click="showModal=true" class="buttonMin">显示最小化窗口</el-button>
    <el-switch
      v-model="open"
      active-text="显示动画组态属性"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>


    <!--组态环境窗口总布局-->
    <div class="all-window" v-if="showModal">

      <!--选择项目加载list-->
      <div class="check-list" :style="{height:(showTools?664:793)+ 'px'}">
        <el-carousel class="carousel-img" height="600px" direction="vertical" :autoplay="false">
          <el-carousel-item v-for="item in 3" :key="item">
            <save1 @func="getSave1Data">{{ item }}</save1>
          </el-carousel-item>
        </el-carousel>
      </div>

      <!--导航栏菜单-->
      <div class="toolbar-menu">
        <el-menu
          class="el-menu-head"
          mode="horizontal"
        >
          <el-menu-item index="1">文件</el-menu-item>
          <el-menu-item index="2">编辑</el-menu-item>
          <el-menu-item index="3">查看</el-menu-item>
          <el-menu-item index="4">排列</el-menu-item>
          <el-menu-item index="5">窗口</el-menu-item>
          <el-submenu index="6">
            <template slot="title">打开文件</template>
            <el-menu-item index="6-1">文件1</el-menu-item>
            <el-menu-item index="6-2">文件2</el-menu-item>
            <el-menu-item index="6-3">文件3</el-menu-item>
            <el-submenu index="6-4">
              <template slot="title">文件4</template>
              <el-menu-item index="6-4-1">子文件1</el-menu-item>
              <el-menu-item index="6-4-2">子文件2</el-menu-item>
              <el-menu-item index="6-4-3">子文件3</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-menu-item index="7" @click="buttonTool">工具</el-menu-item>

          <el-menu-item index="8"><a href="http://www.mcgs.com.cn/sc/index.aspx" target="_blank">帮助</a></el-menu-item>

          <!--最小化按钮-->
          <el-button class="button-minimize" size="mini" icon="el-icon-minus" :plain="true"
                     @click="minimizeMsg"></el-button>
          <!--关闭按钮-->
          <el-button class="button-close" type="danger" size="mini" icon="el-icon-close" :plain="true"
                     @click="closeWin"></el-button>

          <!--折叠按钮-->
          <el-button class="button-fold" size="mini" icon="el-icon-arrow-up" v-if="showTools"
                     @click="buttonTool"></el-button>
          <el-button class="button-fold" size="mini" icon="el-icon-arrow-down" v-if="!showTools"
                     @click="buttonTool"></el-button>
        </el-menu>


      </div>

      <!--头部工具栏-->
      <div class="toolbar-head" :style="{height:(showTools?this.headHeight:0)+ 'px'}"
           @mouseenter="enter()"
           @mouseleave="leave()"
      >
        <transition name="el-zoom-in-top">
          <div v-show="showTools">
            <div v-model="showTools">
              <!--工具栏细节图标-->
              <el-button-group>
                <el-button type="success" icon="el-icon-plus"></el-button>
                <el-button type="success" icon="el-icon-minus"></el-button>
                <el-button type="success" icon="el-icon-warning"></el-button>
                <el-button type="success" icon="el-icon-setting"></el-button>
                <el-button type="success" icon="el-icon-tickets"></el-button>
                <el-button type="success" icon="el-icon-more-outline"></el-button>
                <el-button type="success" icon="el-icon-zoom-in"></el-button>
                <el-button type="success" icon="el-icon-zoom-out"></el-button>
                <el-button type="success" icon="el-icon-download"></el-button>
                <el-button type="success" icon="el-icon-upload"></el-button>
                <el-button type="success" icon="el-icon-plus"></el-button>
                <el-button type="success" icon="el-icon-minus"></el-button>
                <el-button type="success" icon="el-icon-warning"></el-button>
                <el-button type="success" icon="el-icon-setting"></el-button>
                <el-button type="success" icon="el-icon-tickets"></el-button>
                <el-button type="success" icon="el-icon-more-outline"></el-button>
                <el-button type="success" icon="el-icon-zoom-in"></el-button>
                <el-button type="success" icon="el-icon-zoom-out"></el-button>
                <el-button type="success" icon="el-icon-download"></el-button>
                <el-button type="success" icon="el-icon-upload"></el-button>
                <el-button type="success" icon="el-icon-plus"></el-button>
                <el-button type="success" icon="el-icon-minus"></el-button>
                <el-button type="success" icon="el-icon-warning"></el-button>
                <el-button type="success" icon="el-icon-setting"></el-button>
                <el-button type="success" icon="el-icon-tickets"></el-button>
                <el-button type="success" icon="el-icon-more-outline"></el-button>
                <el-button type="success" icon="el-icon-zoom-in"></el-button>
                <el-button type="success" icon="el-icon-zoom-out"></el-button>
                <br/>
                <el-button type="primary" icon="el-icon-plus"></el-button>
                <el-button type="primary" icon="el-icon-minus"></el-button>
                <el-button type="primary" icon="el-icon-warning"></el-button>
                <el-button type="primary" icon="el-icon-setting"></el-button>
                <el-button type="primary" icon="el-icon-tickets"></el-button>
                <el-button type="primary" icon="el-icon-more-outline"></el-button>
                <el-button type="primary" icon="el-icon-zoom-in"></el-button>
                <el-button type="primary" icon="el-icon-zoom-out"></el-button>
                <el-button type="primary" icon="el-icon-download"></el-button>
                <el-button type="primary" icon="el-icon-upload"></el-button>
                <el-button type="primary" icon="el-icon-plus"></el-button>
                <el-button type="primary" icon="el-icon-minus"></el-button>
                <el-button type="primary" icon="el-icon-warning"></el-button>
                <el-button type="primary" icon="el-icon-setting"></el-button>
                <el-button type="primary" icon="el-icon-tickets"></el-button>
                <el-button type="primary" icon="el-icon-more-outline"></el-button>
                <el-button type="primary" icon="el-icon-zoom-in"></el-button>
                <el-button type="primary" icon="el-icon-zoom-out"></el-button>
                <el-button type="primary" icon="el-icon-download"></el-button>
                <el-button type="primary" icon="el-icon-upload"></el-button>
                <el-button type="primary" icon="el-icon-plus"></el-button>
                <el-button type="primary" icon="el-icon-minus"></el-button>
                <el-button type="primary" icon="el-icon-warning"></el-button>
                <el-button type="primary" icon="el-icon-setting"></el-button>
                <el-button type="primary" icon="el-icon-tickets"></el-button>
                <el-button type="primary" icon="el-icon-more-outline"></el-button>
                <el-button type="primary" icon="el-icon-zoom-in"></el-button>
                <el-button type="primary" icon="el-icon-zoom-out"></el-button>
                <br/>
                <el-button type="primary" icon="el-icon-plus"></el-button>
                <el-button type="primary" icon="el-icon-minus"></el-button>
                <el-button type="primary" icon="el-icon-warning"></el-button>
                <el-button type="primary" icon="el-icon-setting"></el-button>
                <el-button type="primary" icon="el-icon-tickets"></el-button>
                <el-button type="primary" icon="el-icon-more-outline"></el-button>
                <el-button type="primary" icon="el-icon-zoom-in"></el-button>
                <el-button type="primary" icon="el-icon-zoom-out"></el-button>
                <el-button type="primary" icon="el-icon-download"></el-button>
                <el-button type="primary" icon="el-icon-upload"></el-button>
                <el-button type="primary" icon="el-icon-plus"></el-button>
                <el-button type="primary" icon="el-icon-minus"></el-button>
                <el-button type="primary" icon="el-icon-warning"></el-button>
                <el-button type="primary" icon="el-icon-setting"></el-button>
                <el-button type="primary" icon="el-icon-tickets"></el-button>
                <el-button type="primary" icon="el-icon-more-outline"></el-button>
                <el-button type="primary" icon="el-icon-zoom-in"></el-button>
                <el-button type="primary" icon="el-icon-zoom-out"></el-button>
                <el-button type="primary" icon="el-icon-download"></el-button>
                <el-button type="primary" icon="el-icon-upload"></el-button>
                <el-button type="primary" icon="el-icon-plus"></el-button>
                <el-button type="primary" icon="el-icon-minus"></el-button>
                <el-button type="primary" icon="el-icon-warning"></el-button>
                <el-button type="primary" icon="el-icon-setting"></el-button>
                <el-button type="primary" icon="el-icon-tickets"></el-button>
                <el-button type="primary" icon="el-icon-more-outline"></el-button>
                <el-button type="primary" icon="el-icon-zoom-in"></el-button>
                <el-button type="primary" icon="el-icon-zoom-out"></el-button>
                <br/>
                <el-button type="primary" icon="el-icon-plus"></el-button>
                <el-button type="primary" icon="el-icon-minus"></el-button>
                <el-button type="primary" icon="el-icon-warning"></el-button>
                <el-button type="primary" icon="el-icon-setting"></el-button>
                <el-button type="primary" icon="el-icon-tickets"></el-button>
                <el-button type="primary" icon="el-icon-more-outline"></el-button>
                <el-button type="primary" icon="el-icon-zoom-in"></el-button>
                <el-button type="primary" icon="el-icon-zoom-out"></el-button>
                <el-button type="primary" icon="el-icon-download"></el-button>
                <el-button type="primary" icon="el-icon-upload"></el-button>
                <el-button type="primary" icon="el-icon-plus"></el-button>
                <el-button type="primary" icon="el-icon-minus"></el-button>
                <el-button type="primary" icon="el-icon-warning"></el-button>
                <el-button type="primary" icon="el-icon-setting"></el-button>
                <el-button type="primary" icon="el-icon-tickets"></el-button>
                <el-button type="primary" icon="el-icon-more-outline"></el-button>
                <el-button type="primary" icon="el-icon-zoom-in"></el-button>
                <el-button type="primary" icon="el-icon-zoom-out"></el-button>
                <el-button type="primary" icon="el-icon-download"></el-button>
                <el-button type="primary" icon="el-icon-upload"></el-button>
                <el-button type="primary" icon="el-icon-plus"></el-button>
                <el-button type="primary" icon="el-icon-minus"></el-button>
                <el-button type="primary" icon="el-icon-warning"></el-button>
                <el-button type="primary" icon="el-icon-setting"></el-button>
                <el-button type="primary" icon="el-icon-tickets"></el-button>
                <el-button type="primary" icon="el-icon-more-outline"></el-button>
                <el-button type="primary" icon="el-icon-zoom-in"></el-button>
                <el-button type="primary" icon="el-icon-zoom-out"></el-button>
                <br/>
              </el-button-group>
            </div>
          </div>
        </transition>
        <!--固定工具栏按钮-->
        <el-button class="button-fix" size="mini" type="info" v-show="showTools"
                   @click="buttonFix">
          <i class="icon iconfont">&#xe614;</i>
        </el-button>
        <el-button class="button-noFix" size="mini" type="warning" v-if="fixFlag && noFixFlag"
                   @click="buttonUnFix">
          <i class="icon iconfont">&#xe7ad;</i>
        </el-button>
      </div>

      <!--属性栏DIV-->
      <div class="property-list" :style="{height:(showTools?664:793)+ 'px'}">
        <shrink-view v-model="open">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="属性设置" name="1">
              <div>设置具体属性</div>
              <div>填充颜色，字符颜色，边线颜色，边线线型</div>
            </el-collapse-item>
            <el-collapse-item title="填充颜色" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="字符颜色" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="边线颜色" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </shrink-view>
      </div>

      <!--实例操作窗口-->
      <div class="main-window" :style="{height:(showTools?664:793)+ 'px'}">

      </div>

    </div>
  </div>
</template>

<script>
  import shrinkView from './shrinkView'  // 收缩展开过渡组件
  import save1 from '.././animation-save/save-1'  // 左侧选择窗口子组件

  export default {
    name: 'animation-window',
    components: {
      shrinkView,
      save1
    },
    data() {
      return {
        open: false,
        showModal: false,
        showTools: false,
        msg: '主页面',
        activeName: '1',
        headHeight: 0,
        seen: false,
        current: 0,
        fixFlag: false,
        noFixFlag: false
      }
    },
    methods: {
      closeWin() {
        window.opener = null
        window.open(' ', '_self')
        window.close()
        this.$notify({
          title: '成功',
          message: '窗口已最关闭！',
          type: 'success'
        })
      },
      buttonTool() {
        this.showTools = !this.showTools
        if (this.showTools) {
          this.headHeight = 129
          this.seen = true
        }
      },
      getSave1Data(data) {
        this.msg = data
        console.log(this.msg)
        this.$router.push({name: 'component-son'})
      },
      enter() {
        this.seen = true
      },
      leave() {
        this.seen = false
        if (!this.fixFlag) {
          this.showTools = false
        }
      },
      buttonFix() {
        if (!this.fixFlag) {
          this.$store.commit('animation/updateToolbarFixStore', true)
          this.fixFlag = true
          this.showTools = true
          this.noFixFlag = true
        }
      },
      buttonUnFix() {
        this.fixFlag = false
        this.showTools = this.fixFlag
        this.$store.commit('animation/updateToolbarFixStore', this.fixFlag)
      },
      minimizeMsg() {
        this.showModal = false
        this.$notify({
          title: '成功',
          message: '窗口已最小化！',
          type: 'success'
        })
      }
    },
    computed: {
      toolbarFixStore: {
        get() {
          return this.$store.state.animation.toolbarFixStore
        },
        set(val) {
          this.$store.commit('animation/updateToolbarFixStore', val)
        }
      }
    }
  }
</script>

<style lang="stylus">
  .all-window {
    width: 1620px;
    height: 864px;
    position: relative;
    background-color #e7eff7;
  }

  .check-list {
    width: 272px;
    height: 664px;
    position: absolute;
    bottom: 0;
  }

  .toolbar-head {
    width: 1620px;
    height: 129px;
    background #9d9d9d;
    position: absolute;
    top: 71px;
  }

  .property-list {
    width: 300px;
    height: 664px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .main-window {
    width: 1048px;
    height: 664px;
    position: absolute;
    bottom: 0;
    left: 272px;
  }

  .toolbar-menu {
    width: 1618px;
    height: 71px;
    position: absolute;
    top: 0;
  }

  .el-menu-head {
    position: relative;
    background-color: #d4dce4;
    text-color: #fff;
    active-text-color: #ffd04b;
    height: 71px;
  }

  .el-button {
    height: 30px;
    vertical-align: middle;
  }

  .buttonMin {
    height: 36px;
    buttom: 0;
  }

  .button-minimize {
    height: 40px;
    position: absolute;
    top: 0;
    right: 44px;

  }

  .button-close {
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    size: mini;
  }

  .button-fold {
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0px;
    right: 88px;
  }

  .button-fix {
    width: 60px;
    position: absolute;
    right: 0;
    bottom: 45px;
  }

  .button-noFix {
    width: 60px;
    position: absolute;
    right: 0;
    bottom: 45px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
