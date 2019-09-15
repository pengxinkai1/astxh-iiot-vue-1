<template>
  <div>
    <!--属性栏设置-->
    <el-checkbox label="显示动画组态属性" border v-model="open"></el-checkbox>
    <el-button @click="showModal=true" class="buttonMin">显示最小化窗口</el-button>

    <!--组态环境窗口总布局-->
    <div class="all-window" v-if="showModal">

      <!--选择项目加载list-->
      <div class="check-list">

      </div>
      <div class="toolbar-head">
        <!--头部导航工具栏-->
        <div class="line"></div>
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

          <el-button class="button-minimize" type="info" icon="el-icon-minus" @click="showModal=false"></el-button>
          <el-button class="button-close" type="danger" icon="el-icon-close" @click="closeWin"></el-button>

        </el-menu>

        <!--功能图标-->
        <el-button-group>
          <el-button type="primary" icon="el-icon-plus"></el-button>
          <el-button type="primary" icon="el-icon-minus"></el-button>
          <el-button type="primary" icon="el-icon-warning"></el-button>
          <el-button type="primary" icon="el-icon-setting"></el-button>
          <el-button type="primary" icon="el-icon-tickets"></el-button>
          <el-button type="primary" icon="el-icon-more-outline" @click="buttonTool"></el-button>
          <el-button type="primary" icon="el-icon-zoom-in"></el-button>
          <el-button type="primary" icon="el-icon-zoom-out"></el-button>
          <el-button type="primary" icon="el-icon-download"></el-button>
          <el-button type="primary" icon="el-icon-upload"></el-button>
        </el-button-group>


      </div>

      <!--属性栏DIV-->
      <div class="property-list" style="border: 1px solid gray">
        <shrink-view v-model="open">
          动画组态属性设置详情
          <hr>
          详细属性
        </shrink-view>
      </div>

      <!--工具栏DIV-->
      <div class="toolBar-1" v-if="showTools" title="工具箱">
        <table>
          <el-button-group class="toolbarButton">
            <th>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe6a5;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe600;</i></el-button>
              </tr>
              <tr>
                <el-button type="info" style="width: 58px"><i class="icon iconfont">&#xe653;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe64e;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe6eb;</i></el-button>
              </tr>
              <tr>
                <el-button type="info" style="width: 58px"><i class="icon iconfont">&#xe671;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe790;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe791;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe603;</i></el-button>
              </tr>
            </th>
            <th>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe72f;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
            </th>
            <th>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe72f;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
            </th>
          </el-button-group>
        </table>

        <!--<el-button-group class="toolbarButton">-->
        <!--<el-button type="info"><i class="icon iconfont">&#xe6a5;</i></el-button>-->
        <!--<el-button type="info"><i class="icon iconfont">&#xe600;</i></el-button>-->
        <!--<el-button type="info"><i class="icon iconfont">&#xe653;</i></el-button>-->
        <!--<el-button type="info"><i class="icon iconfont">&#xe64e;</i></el-button>-->
        <!--<el-button type="info"><i class="icon iconfont">&#xe6eb;</i></el-button>-->
        <!--<el-button type="info" style="width: 58px"><i class="icon iconfont">&#xe671;</i></el-button>-->
        <!--<el-button type="info"><i class="icon iconfont">&#xe790;</i></el-button>-->
        <!--<el-button type="info"><i class="icon iconfont">&#xe791;</i></el-button>-->
        <!--<el-button type="info"><i class="icon iconfont">&#xe603;</i></el-button>-->
        <!--<el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>-->
        <!--<el-button type="info" style="top: 0%"><i class="icon iconfont">&#xe72f;</i></el-button>-->
        <!--</el-button-group>-->

      </div>
      <div class="toolbar-2" v-if="showTools">
        <table>
          <el-button-group class="toolbarButton">
            <th>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe72f;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
            </th>
            <th>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe72f;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
              <tr>
                <el-button type="info"><i class="icon iconfont">&#xe61b;</i></el-button>
              </tr>
            </th>
          </el-button-group>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
  import ShrinkView from './shrinkView'

  export default {
    name: 'animation-window',
    components: {
      ShrinkView
    },
    data() {
      return {
        value: true,
        open: false,
        showModal: false,
        showTools: false
      }
    },
    methods: {
      closeWin() {
        window.opener = null
        window.open(' ', '_self')
        window.close()
      },
      buttonTool() {
        this.showTools = !this.showTools
      }
    }
  }
</script>

<style lang="stylus">
  .all-window {
    width: 1920px;
    height: 1040px;
    position: relative
  }

  .check-list {
    width: 300px;
    height: 907px;
    position: absolute;
    bottom: 0
  }

  .toolbar-head {
    width: 1920px;
    height: 133px;
    position: absolute;
    top: 0;
  }

  .property-list {
    width: 30%;
    height: 907px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .el-menu-head {
    position: relative;
    background-color: #545c64;
    text-color: #fff;
    active-text-color: #ffd04b;
  }

  .button-minimize {
    position: absolute;
    top: 0;
    right: 340px;
    size: mini;
  }

  .button-close {
    position: absolute;
    top: 0;
    right: 290px;
    size: mini;
  }

  .toolBar-1 {
    width: 205px;
    height: 300px;
    background #6f7180;
    position: absolute;
    right: 890px;
    top: 300px;
  }

  .toolbar-2 {
    width: 140px;
    height: 240px;
    background #c2ccd1;
    position: absolute;
    right: 720px;
    top: 300px;
  }

  .toolbarButton {
    width: 40px;
  }

  .el-button {
    height: 30px;
    vertical-align: middle;
  }

  .buttonMin {
    height: 36px;
  }
</style>
