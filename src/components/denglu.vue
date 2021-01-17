<template>
    <div id="denglu" style="margin-top:3vw">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="u_name">
            <Input type="text" v-model="formInline.u_name" placeholder="账号">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
    </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    u_name: '',
                    password: ''
                },
                test:{
                    act:'123456',
                    psw:'123456',
                },
                ruleInline: {
                    u_name: [
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            if(this.formInline.u_name === this.test.act && this.formInline.password === this.test.psw){
                this.$Message.success("登录成功!");
                this.$router.push('/home');
            }else{
                this.$Message.error("账号或密码错误");
            }
          }else {
            this.$Message.error('请正确填写表格');
          }
        }, 5000)
      },
        }
    }
</script>
