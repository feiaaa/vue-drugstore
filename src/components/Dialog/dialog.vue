<template>
    <div class="dialog-wrapper"
         :class="{'open':is_open}">
        <div class="overlay" @click="close"></div>
        <div class="dialog">
            <div class="heading">
                <!--header-->
                <slot name="heading"></slot>
            </div>
            <div>
                <!--内容-->
                <slot></slot>
            </div>

        </div><!--dialog end-->
    </div>
</template>

<script>
import "./dialog.less"
export default{
  data(){
    return {
      is_open:false,
    }
  },
  methods:{
    open(){
      if(!this.is_open){
        this.is_open=true;
        this.$emit('dialogopen');
      }
    },
    close(){
      this.is_open=false;
      this.$emit('dialogclose')
    }
  }
}
</script>
