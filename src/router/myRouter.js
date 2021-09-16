// https://github.com/Jasonwang911/my-vue-router/blob/master/src/router/vue-router.js  
import Vue from 'vue'
class HistoryRoute {                
    constructor() {                     
        this.current = null;                
    }                                   
}                                   
                                   
class VueRouter {                   
    constructor(options) {              
        this.mode = options.mode ||  'hash';
        this.routes = options.routes || [];
        this.routerMap=this.createMap(this.routes);// 创建地图json   
        this.history = new HistoryRoute; 
        this.init();  
    }
    init(){
        if(this.mode == 'hash'){
            location.hash?"":location.hash='/'; //万一没输入 ,补全'/#'
            window.addEventListener('load',()=>{
                this.history.current =location.hash.slice(1);
            })
            window.addEventListener('hashchange',()=>{
                this.history.current =location.hash.slice(1);
            })

        }else if(this.mode === 'history'){
            // 判断用户打开页面的 pathname
            location.pathname ? '' : location.pathname = '/';
            // 页面加载完成当前路径写入this.history
            window.addEventListener('load', () => {
                this.history.current = location.pathname;
            });
            // 监听 history 变化并把当前路径存入 this.history
            window.addEventListener('popstate', () => {
                this.history.current = location.pathname;
            });
        }else {
            throw new Error(`vue-router mode error, can no font router mode: ${this.mode}`);
        }
    } 
    // 把地址Array转化成json，好查
    createMap(router){
        // 默认格式 [{path:'/chart',component:ChartPage},{...}]
        return router.reduce((memo,current)=>{
            memo[current.path]=current.component;
            return memo
        },{})

    }                      
} 
// 让外部对象能够触发vue响应式
// defineReactive ：vue默认提供 响应式  
// Vue.util.defineReactive(this,propsName,args)
// 这里写一个单例模式，VueRouter是全局对象要保证唯一性
var _vue
VueRouter.install=function(Vue){
    if(_vue== Vue && VueRouter.install.installed){
        return;
    }
    // 触发监听
    Vue.mixin({
        // mixin start
        beforeCreate(){
            // this指向当前组件;
            // router只在Router里面有，判断是不是根属性
            if(this.$options && this.$options.router){
                this._root=this;
                this._router=this.$options.router;
                // 监听
                Vue.util.defineReactive(this,"current",this._router.history)
            }else{
                // 如果不是根属性。给所有组件都给挂一个_root,然后_root都指向根实例
                /* App.vue 指向根实例；如果App下有个HelloWorld组件，HelloWorld的指向父组件App.vue,此时的_root也指向根实例
                组件套娃下来，所有_root都指向根实例
                */
                this._root=this.$parent._root;
            }
            // this.$router 是源对象的引用。为了保证新方法不去覆盖原对象方法，使用Object.defineProperty()
            // className.prototype.methodName 或者直接赋值 容易覆盖原方法
            Object.defineProperty(this,"$router",{
                get:function(){
                    return this._root._router
                }
                // 没有set表示不可以被改值
            })
            Object.defineProperty(this,"$route",{
                get:function(){
                    return {
                        current: this._root.history.current
                    }
                    // return this._root._router.history
                }
            })
            
        }        
        // mixin end        
    })
   
    // router-link 跳转地址
    Vue.component('router-link',{
        props: {
            to: {
                type: String,
                default: ''
            },
            tag: String
        },
        methods: {
            // <tag on-click={this.handleClick.bind(this)}></tag>
            handleClick() {
                
            }
        },
        // h 表示 createElement 
        render(h) {
            let mode = this._self._root._router.mode;
            let tag = this.tag;
            // return h('a', {}, '首页');
            return <a href={mode === 'hash' ? `#${this.to}` : this.to}>{this.$slots.default}</a>
        }
    })
     // router-view 渲染页面
     Vue.component('router-view',{
        render(h){
            // 输出格式 h(HelloWorld);
            // 根据url找到component，然后render
            let current = this._self._root._router.history.current;
            let routeMap=this._self._root._router.routerMap;
            return h(routeMap[current])
        }
    })
}
export default VueRouter
