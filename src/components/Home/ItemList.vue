<template>

        <div class="book-list">
          <div class="header">
            <el-row justify="space-between">
              <el-col :span="6"><div class="grid-content heading">{{heading}}</div></el-col>
              <el-col :span="6" :offset="12"><div class="grid-content more">更多</div></el-col>
            </el-row>
          </div>
          <div class="book-items">
            <el-row type="flex" class="row-bg" justify="center" :gutter='20'>
              <el-col :span="12" v-for="item in items" :key='item.id'><div class="grid-content">
                <router-link :to="{name:'goodsDetail',params:{id:item.id}}"><img class='goods-img' :src='item.img_url'/></router-link>
                <div class="goods-info" @click="$emit('select',item)">
      						 <h3>{{item.drug_name}}</h3>
                    <div class='content-M'><b>id：</b><span>{{item.id}}</span></div>
      						 <div class='content-M'><b>规格：</b><span>{{item.specif_cation}}</span></div>
                   <div class='content-M'><b>单价：</b><span>￥{{(parseInt(item.shop_price)/100).toFixed(2)}}</span></div>
      						 <div class='content-M'><b>商品编号：</b><span>{{ item.goods_code|join }}</span></div>
      					</div>
              </div></el-col>


            </el-row>
          </div>
        </div>
</template>
<script>
export default {
  props:[
    'heading',
    'items'//商品对象数组
  ],
  filters:{
    join(args){
      return args.join('-')
    }
  },
}
</script>
