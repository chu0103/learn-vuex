<template>
  <div class="vant-view">
    <div>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>

    <div>
      <van-checkbox v-model="checked" ref="checkbox"> 复选框 </van-checkbox>

      <!-- 通过 ref 属性将组件绑定到 this.$refs.checkbox 上 -->
      <van-checkbox v-model="checked_ref" ref="checkbox"> 复选框 </van-checkbox>
    </div>

    <div>
      <van-checkbox v-model="checked">
        <!-- 使用组件提供的 icon 插槽 -->
        <!-- 将默认图标替换为个性化图片 -->
        <template #icon="props">
          <!-- <img src='https://img01.yzcdn.cn/vant/user-active.png' /> -->
          <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
        </template>
      </van-checkbox>
    </div>

  </div>
</template>
<script>
import { Button, Checkbox, CheckboxGroup } from 'vant'
export default {
  data () {
    return {
      checked: true,
      checked_ref: true,
      activeIcon: 'https://img01.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img01.yzcdn.cn/vant/user-inactive.png'
    }
  },
  name: 'textVant',
  components: {
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup
  },
  // 注意：组件挂载后才能访问到 ref 对象
  mounted () {
    this.$refs.checkbox.toggle()
  }
}
</script>
<style lang="less">
  .vant-view{
    height: 100vh;
    overflow: scroll;
    .van-checkbox{
      display: flex;
      //尝试自定义vant组件样式(带scoped属性时无效)
      .van-checkbox__label{
        line-height: 100%;
      }
    }
    .img-icon {
      height: 20px;
    }
  }
</style>
