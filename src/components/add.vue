<template>
  <div id="add">
      <Dropdown style="margin-left: 20px,magin-top:15px,magin-bottom:15px">
        <Button type="primary" shape="circle" icon="ios-search">
            Vue下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem><a href="#aaa">Vue.js 是什么</a></DropdownItem>
            <DropdownItem><a href="#bbb">进入/离开 & 列表过渡</a></DropdownItem>
            <DropdownItem><a href="#bbb">路由</a></DropdownItem>
        </DropdownMenu>
    </Dropdown>
   <div style="background:#eee;padding: 20px">
        <Card :bordered="false" id="aaa">
            <p slot="title" style="font-weight:bold">Vue.js 是什么</p>
            <p>是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
            <p>安装教程给出了更多安装 Vue 的方式。请注意我们不推荐新手直接使用 vue-cli，尤其是在你还不熟悉基于 Node.js 的构建工具时。</p>
            <p>如果你喜欢交互式的东西，你也可以查阅这个 Scrimba 上的系列教程，它揉合了录屏和代码试验田，并允许你随时暂停和播放。</p>
            <p>我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被建立了关联，所有东西都是响应式的。我们要怎么确认呢？打开你的浏览器的 JavaScript 控制台 (就在这个页面打开)，并修改 app.message 的值，你将看到上例相应地更新。</p>
            <p>注意我们不再和 HTML 直接交互了。一个 Vue 应用会将其挂载到一个 DOM 元素上 (对于这个例子是 #app) 然后对其进行完全控制。那个 HTML 是我们的入口，但其余都会发生在新创建的 Vue 实例内部。</p>
        </Card>
        <Card :bordered="false" id="bbb">
            <p slot="title" style="font-weight:bold">进入/离开 & 列表过渡</p>
            <p>Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。包括以下工具：</p>
            <p>在 CSS 过渡和动画中自动应用 class</p>
            <p>可以配合使用第三方 CSS 动画库，如 Animate.css</p>
            <p>在过渡钩子函数中使用 JavaScript 直接操作 DOM</p>
            <p>可以配合使用第三方 JavaScript 动画库，如 Velocity.js</p>
        </Card>
        <Card :bordered="false" id="ccc">
            <p slot="title" style="font-weight:bold">路由</p>
            <h5>官方路由:</h5>
            <p>对于大多数单页面应用，都推荐使用官方支持的 vue-router 库。更多细节可以移步 vue-router 文档。</p>
            <h5>从零开始简单的路由:</h5>
            <p>结合 HTML5 History API，你可以建立一个麻雀虽小但是五脏俱全的客户端路由器。可以直接看实例应用。</p>
            <h5>整合第三方路由:</h5>
            <p>如果你有更偏爱的第三方路由，如 Page.js 或者 Director，整合起来也一样简单。这里有一个使用了 Page.js 的完整示例。</p>
        </Card>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>