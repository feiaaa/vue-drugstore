
<style lang='less'>
@import "./home.less";
</style>




<template>
  <div>
    <div class="section">
      <!--热门推荐-->
      <div class='banner'>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in slides" :key="item.id">
            <img :src='item.img_url' key='item.id' height="150"/>
            <h3>{{ item.title }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!--快讯-->
      <div class='announcement'>
        <label>快讯</label>
        <span>{{announcement}}</span>
      </div>
    </div>
    <div class="section">
      <!--新书上架-->
      <item-list :items='latestUpdated' heading='最新更新' @select="preview($event)"></item-list>

    </div>
    <div class="section">
      <!--编辑推荐-->
      <item-list :items='recommended' heading='编辑推荐'></item-list>
    </div>
    <!--商品详情弹框，ok后改成el弹框-->
    <modal-dialog ref="dialog" @dialogClose='selected=undefined'>
        <div slot="heading">
            <h2>{{ selected && selected.drug_name }}</h2>
            <div class='dismiss' @click.prevent='$refs.dialog.close()'>X</div>
        </div>
        <div>
            <img class='goods-img' :src='selected && selected.img_url'/>
        </div>
        <div>
          <el-button>加入购物车</el-button>
          <el-button type="primary">立即购买</el-button>
        </div>
    </modal-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import ItemList from './ItemList.vue';
import ModalDialog from '@/components/Dialog/dialog.vue';
import faker from "@/fixtures/faker";//数据仿真
//判断是否开发环境
const debug=process.env.NODE_ENV !== 'production';

export default {
  name: 'Home',
  data () {
    return {
      selected:undefined,
      
    }
  },
  created(){
    if(debug){
      //faker获取home.json里的数据
      const fakeData=faker.getHomeData();
      console.log('fakedata',fakeData);
      for(var prop in fakeData) {
        this[prop]=fakeData[prop];
      };
    }
    else{
      //连服务器获得数据
      var self=this;
      // this.$http.post('/api/apiname').then(res)=>{
      //   console.log(res,'res');
      //   self.announcement=res.announcement;
      //   self.slides=res.slides;
      //   self.latestUpdated=res.recommended;
      //   self.recommended=res.recommended;
      // },(error)=>{
      //   console.log('error');
      // }
    }



  },
  mounted(){
    document.title = "商店"
  },
  components:{
    ItemList,
    ModalDialog
  },
  methods:{
    preview:function(item) {
                console.log('item',item);
                this.selected = item;
                this.$refs.dialog.open();
            }

  }

}
</script>
