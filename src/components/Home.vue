<template>
<div class="home">
        <Layout style="background-color:#17233d,height:calc(100vh - 55px)">
            <Header style="background:#17233d">
                <Menu mode="horizontal" theme="dark" active-name="1" style="background:#17233d">
                    <div class="header">
                    <div class="layout-logo">博客</div>
                    <div class="layout-nav">
                        <MenuItem name="1" to="/guanyu">
                            <Icon type="ios-keypad-outline" />
                            关于
                        </MenuItem>
                        <MenuItem name="2" to="/photo">
                            <Icon type="md-image" />
                            照片
                        </MenuItem>
                        <MenuItem name="3" to="/help">
                            <Icon type="md-help" />
                            帮助
                        </MenuItem>
                        <MenuItem name="4" to="/zan">
                            <Icon type="md-heart" />
                            点赞
                        </MenuItem>
                    </div>
                    </div>
                </Menu>
            </Header>
            <Layout style="height:calc(100vh - 55px)">
                <Sider collapsible :collapsed-width="78" v-model="isCollapsed" style="background:#17233d">
                <Menu active-name="1-1" theme="dark" width="auto" style="background:#17233d">
                    <MenuItem name="1-1" to="/jieshao">
                        <Icon type="ios-man-outline" />
                        <span>个人介绍</span>
                    </MenuItem>
                    <MenuItem name="1-2" to="/userlist">
                        <Icon type="ios-albums-outline" />
                        <span>食物制作</span>
                    </MenuItem>
                    <MenuItem name="1-3" to="/shareviedo">
                        <Icon type="md-share" />
                        <span>电影分享</span>
                    </MenuItem>
                    <MenuItem name="1-4" to="/add">
                        <Icon type="md-apps" />
                        <span>vue知识分享</span>
                    </MenuItem>
                    <MenuItem name="1-5" to="/liuyan">
                        <Icon type="ios-chatboxes" />
                        <span>留言</span>
                    </MenuItem>
                     <div slot="trigger" @click="isCollapsed=!isCollapsed" style="background:#17233d,height:25px,width:200px" class="icon">
                     <Icon type="ios-arrow-back" />
                 </div>
                </Menu>
                
            </Sider>
                    <Layout :style="{padding: '0 24px 24px'}">
                   <router-view/>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
export default {
        data () {
            return {
                isCollapsed: false
            }
        },
   }
</script>

<style scoped>
.layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
}
.layout-logo{
    height: 4vw;
    font-size: 20px;
    color: #fff;
    border-radius: 0.4vw;
    float: left;
}
.header{
    width: 100vw;
}
.layout-nav{
    width: 35vw;
    margin: 0 auto;
    float: right;
    margin-left: 60px;
}
.ivu-layout-header {
    background: #2b85e4;
    padding: 0 50px;
    height: 64px;
    line-height: 64px;
}
</style>