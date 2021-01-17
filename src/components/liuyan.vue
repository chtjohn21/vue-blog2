<template>
<div id="liuyan">
  	<div>
          <h2>留言板</h2>
<div class="name" style="margin-right:30px">
    <p>
        用户名:
    <input type="text" v-model="name">
    </p>
  	</div>
      <div class="text" style="margin-top:20px">
          <p>
       留言:
       <br/>
       <textarea rows="7" name="" id="" cols="30" v-model="content"></textarea>
       <span :class="{'text-color':'!onSubmit'}">{{userLength}}/{{maxLength}}</span>
          </p>
      </div>
      <p>
      <button @click="add">提交</button>
      </p>
      <div v-for="(item,index) in list " style="border-bottom:1px dashed">
          <p class="down">
          <span>
          用户-{{item.name}}
          </span>
          </p>
          <div>
            内容-{{item.content}}
          </div>
          <p>
          <button @click="del(item,index)">删除</button>
          </p>
      </div>

</div>
</div>
</template>
<script>
    export default{
		data(){
            return{
                name:'',
                content:'',
                list:[],
                userLength:0,
                maxLength:30,
                onSubmit:true
            }
        },
        created(){
        let liuyan = localStorage.liuyan
        if(liuyan){
            this.list=JSON.parse(liuyan)
        }
        },
        watch:{
            content(newVol,oldVol){
                this.userLength=newVol.length
                    if(this.userLength>this.maxLength){
                        this.onSubmit=false
                    }else{
                        this.onSubmit=true
                    }
                }
            },
        methods:{
            add(){
              if(this.name.trim()==''){
                  alert('请输入用户名')
                  return
              }else if
                  (this.content.trim()==''){
                      alert('请输入内容')
                      return
                  }
              if(this.userLength>this.maxLength){
                  alert('你输入内容已超过')
                  return
              }
              this.list.push({
                  name:this.name,
                  content:this.content
              })
              this.name=''
              this.content=''
              this.save()
              },
              del(item,index){ 
				let rel = window.confirm(`确定要删除${item.name}的留言吗？`)
				if(rel){
					this.list.splice(index,1)
					this.save()
				}
			},
              save(){
               localStorage.liuyan=JSON.stringify(this.list)
              }
            }
        }
</script>

<style>
#liuyan{
    margin-top: 2.667vw;
}
</style>