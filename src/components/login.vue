<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="姓名:" prop="act">
            <Input v-model="formValidate.act" placeholder="输入用户名"></Input>
        </FormItem>
        <FormItem label="账号:" prop="u_name">
            <Input v-model="formValidate.u_name" placeholder="输入用账号"></Input>
        </FormItem>
        <FormItem label="密码:" prop="psw">
            <Input type="password" v-model="formValidate.psw" placeholder="密码">
            </Input>
        </FormItem>
        <FormItem label="邮箱:" prop="mail">
            <Input v-model="formValidate.mail" placeholder="输入邮箱"></Input>
        </FormItem>
        <FormItem label="日期">
            <Row>
                <Col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="选择年月日" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="2" style="text-align: center"></Col>
                <Col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="选择具体时间" v-model="formValidate.time"></TimePicker>
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="性别:" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="说明:" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="输入一些你想说的话..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">登录</Button>
        </FormItem>
    </Form>
</template>

<script>
export default {
        data () {
            return {
                formValidate: {
                    act:'',
                    u_name: '',
                    major:'',
                    u_date:'',
                    psw:'',
                    psw_check:'',
                    mail: '',
                    u_date:'',
                    gender: '',
                    date: '',
                    time: '',
                    desc: '',
                },
                ruleValidate: {
                    act: [
                        { required: true, message: '名字太简单了', trigger: 'blur' }
                    ],
                    u_name: [
                        { required: true, message: '账号太简单了', trigger: 'blur' }
                    ],
                    psd: [
                        { required: true, message: '密码长度至少六位', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度至少六位', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能设置太简单', trigger: 'blur' },
                        { type: 'email', message: '错误格式', trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: '请选择具体时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请说明...', trigger: 'blur' },
                        { type: 'string', min: 10, message: '至少10个字', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
           handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success("注册成功");
            this.$router.push("/denglu");
          }else {
            this.$Message.error('请正确填写表格');
          }
        }, 5000)
      },
            handleReset (name) {
                this.$refs[name].resetFields();
                this.$router.push('/denglu')
            }
        }
    }
</script>

<style>
html,body {
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.zhuce {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
}
.zhuce .from-wrap{
    position: fixed;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top: -150px;
    width: 400px;
    height: 240px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px 30px;
}
.zhuce h2 {
    text-align: center;
    margin-bottom: 20px;
}
.zhuce FormItem {
    margin-bottom: 15px;
}
.zhuce .form-footer {
    text-align: right;
}
.ivu-form-item-required .ivu-form-item-label:before {
    display: none;
}
</style>