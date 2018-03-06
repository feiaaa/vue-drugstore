@import "./item.less";
<template>
  <div class="div1">
    <div className="info-item">
				<!-- <div className='content-M'><b>商品名：</b><span>{drugName}</span></div>
				<div className='content-M'><b>通用名：</b><span>{comName}</span></div>
				<div className='content-M'><b>规格：</b><span>{specifCation}</span></div>
			    <div className='content-M'><b>生产企业：</b><span>{goodsCompany}</span></div>
				<div className='content-M'><b>品牌：</b><span>{barndId}</span></div>
				<div className='content-M'><b>药品类型：</b><span>{pubilcFunc.drugCategory(drugCategory)}</span></div>
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
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
