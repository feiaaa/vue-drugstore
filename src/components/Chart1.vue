
<template>
  <div class="hello">
    点击事件：  <button v-on:click="greet">Greet</button>
    <form @submit="handleSubmit">
        输入框: <input type="text" name="name" placeholder="输入" v-model="form.text"/>
        下拉框: <select name='companyCode' placeholder="下拉" v-model="form.companyCode">
            <option v-bind:key="el.value" :value="el.value" v-for="el in selectoptions" >{{el.name}}</option> 
        </select>
        <input type="submit" value="提交"/>
    </form>
    <div class="div1">
        <v-chart
          :option="option"
          :init-options="initOptions"
          ref="bar"
          theme="ovilia-green"
          autoresize
          :loading="barLoading"
          :loadingOptions="barLoadingOptions"
          @zr:click="handleZrClick"
          @click="handleClick"
          v-bind:style="{border:'1px solid red'}"  
        />
   </div>
   <div class="div1">
   <v-chart
          :option="option2"
          :init-options="initOptions"
          ref="pie"
          autoresize          
          @click="handleClick"
        />
   </div>
  </div>
</template>

<script>
    import {buildOptionBar,optionPie,companyList} from './echartOption'
    const axios = require('axios');
    console.log(Object.keys(companyList).map(k=>({name:companyList[k],value:k})),'=36')
    export default {
        name:'Charts',
        
        data: () => ({
            form:{companyCode:'000000',text:''},
            
            selectoptions:Object.keys(companyList).map(k=>({name:companyList[k],value:k}))||[],
            barLoading: false,
            barLoadingOptions: {
                text: "Loading…",
                color: "#4ea397",
                maskColor: "rgba(255, 255, 255, 0.4)"
            },
            initOptions:{renderer:'canvas'},
            option: buildOptionBar([]),
            option2:optionPie
        }),
        created(){ 
            this.handleSubmit()     
        },
        methods: {
            handleClick(...args) {
            console.log("click from echarts", ...args);
            },
            handleZrClick(...args) {
            console.log("click from zrender", ...args);
            },
            handleSubmit(e){
                e&& e.preventDefault();
                  
                const {companyCode}=this.form;console.log(this.form,'=this.form',companyCode)
                axios.get(`/cs/risk/index/company/risk_amount?companyCode=${companyCode}`)
                .then(response => {
                    console.log(response,'=69')
                    if(response.data.code=='000000'){
                        const barData = response.data.data.companyRiskAmountByMonthRespDTOS;
                        console.log(barData,'=this.barData')
                        this.option=buildOptionBar(barData)
                        this.barLoading = false;
                    }
                    
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.barloading = false)
                
              
            },//
            greet: function (event) {
                // `this` 在方法里指向当前 Vue 实例
                // console.log('Hello ' + this.name + '!')
                // `event` 是原生 DOM 事件
                if (event) {
                    console.log(event.target.tagName)
                }
            }
        },
        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div1 {
  height:600px;
  margin: 40px 0 0;
}

</style>
