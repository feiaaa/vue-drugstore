@import "./item.less";

<template id="ItemDetail">
  <div class="div1">
    <div class="section">
      <!--图片-->
      <div class='banner'>
        <el-carousel height="150px">
          <el-carousel-item v-for="(items,index) in goodsImg" :key="index">
            <img :src='he(items.hash,items.type)' key='index' height="150"/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="section">
      <!--信息-->
      <div className="info-item">
        <input v-model='$route.params.id' style='display:none'/>

  				<div class='content-M'><b>商品名：</b><span>{{goods.drugName}}</span></div>
  				<div class='content-M'><b>通用名：</b><span>{{goods.comName}}</span></div>
  				<div class='content-M'><b>规格：</b><span>{{goods.specifCation}}</span></div>
  			  <div class='content-M'><b>生产企业：</b><span>{{goods.goodsCompany}}</span></div>
  				<div class='content-M'><b>品牌：</b><span>{{goods.barndId}}</span></div>

  				<!--<div className='content-M'><b>药品类型：</b><span>{pubilcFunc.drugCategory(drugCategory)}</span></div>
  				<div className='content-M'><b>药品属性：</b><span>{pubilcFunc.goodsProperty(goodsProperty)}</span></div>
  			    <div className='content-M'><b>剂型：</b><span>{pubilcFunc.goodsForts(goodsForts)}</span></div>
  				<div className='content-M'><b>有效期：</b><span>{goodsValidity}</span></div>
  				<div className='content-M'><b>使用方法：</b><span>{pubilcFunc.goodsUse(goodsUse)}</span></div>
  				<div className='content-M'><b>适用人群：</b><span>{pubilcFunc.goodsForpeople(goodsForpeople)}</span></div>
  			    <div className='content-M'><b>是否医保：</b><span>{isMedicare==1?'非医保':(isMedicare==2?'甲类医保':'乙类医保')}</span></div>
  				<div className='content-M'><b>医保编号：</b><span>{medicareCode}</span></div>
  				<div className='content-M'><b>商品条形码：</b></div>
  				<div className='content-M' ><img style={{width:'6rem',height:'1.5rem'}} src={'http://'+path+'/wechat/getBar?msg='+barCode} /></div>
  				<div className='content-M'><b>主要成分：</b><span>{mainIngredient}</span></div>
  			    <div className='content-M'><b>功能主治：</b><span>{goodsIndications}</span></div>
  				<div className='content-M'><b>用法用量：</b><span>{goodsUseMethod}</span></div>
  				<div className='content-M'><b>不良反应：</b><span>{adverseReactioins}</span></div>
  				<div className='content-M'><b>注意事项：</b><span>{goodsNote}</span></div>
  			    <div className='content-M'><b>禁忌：</b><span>{goodsContd}</span></div>
  				<div className='content-M'><b>贮藏：</b><span>{goodsDeposit}</span></div>
  				<div className='content-M'><b>商品批号：</b><span>{goodsBatchNo}</span></div> -->
        </div>
    </div>


  </div>
</template>

<script>
import DetailPageData from "@/fixtures/item.json"//数据仿真
//判断是否开发环境
const debug=process.env.NODE_ENV !== 'production';

export default {
  name: 'ItemDetail',
  data () {
    return {
      item:{}

    }
  },
  created(){
    if(debug){
      //获取item.json里的数据
      const itemData=DetailPageData;
      // console.log('itemData',itemData);
      for(var prop in itemData) {
        this[prop]=itemData[prop];
      };
    }
    else{
      //连服务器获得数据(同home)
    }
  },
  mounted(){
    document.title = "商品详情"
  },
  methods:{
    he:function(hash,type){
      if(type==10){
        return 'https://jkosshash.oss-cn-shanghai.aliyuncs.com/'+hash+'.jpg';
      }
      else if(type==20){
        return 'https://jkosshash.oss-cn-shanghai.aliyuncs.com/'+hash+'.png';
      }
      else if(type==30){
        return 'https://jkosshash.oss-cn-shanghai.aliyuncs.com/'+hash+'.gif';
      }
      else{}

    }

  }
}
</script>
