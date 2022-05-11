<template>
    <van-address-edit
    :area-list="areaList"
    show-postal
    show-delete
    show-set-default
    show-search-result
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"
    />
</template>
<script>
import { AddressEdit, Toast } from 'vant'
import { areaList } from '@vant/area-data'

export default {
  data () {
    return {
      areaList,
      searchResult: []
    }
  },
  components: {
    [AddressEdit.name]: AddressEdit
  },
  methods: {
    onSave () {
      Toast('save')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
