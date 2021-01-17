<template>
<div id="zan">
    <h2 style="margin-top:3vw">喜欢请点赞o(￣▽￣)ｄ</h2>
<Rate v-model="value5" icon="ios-heart" style="margin-top:2vw" />
</div>
</template>

<script>
    export default {
        data () {
            return {
                value5: 3
            }
        }
    }
</script>

<style>

</style>