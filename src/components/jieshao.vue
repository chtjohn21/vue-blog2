<template>
    <div id="jieshao">
    <div class="photo"><img src="../assets/logo.png" alt=""></div>
    <Form :model="formItem" :label-width="80">
        <FormItem label="姓名">
            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="学校">
            <Input v-model="formItem.school" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="班级">
            <Input v-model="formItem.class" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="性别">
            <Input v-model="formItem.xingbie" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="自我介绍">
            <Input v-model="formItem.jieshao" type="textarea" :autosize="{minRows:4,maxRows:7,mincol:4,maxcol:7}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="联系方式" class="php">
            <a><img src="../assets/logo4.jpg" alt="" ></a>
        </FormItem>
    </Form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '陈海涛',
                    school: '江门职业技术学院',
                    class:'18计算机应用班',
                    xingbie: '男',
                    jieshao: '站长',
                }
            }
        }
    }
</script>

<style scoped>
.photo{
    
    margin: 5vw 5vw;
    clear: both;
}
.php img{
    width: 500px;
    height: 500px;
}
</style>