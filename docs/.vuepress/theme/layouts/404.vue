<template>
  <section class="theme-container" v-if="!noFoundPageByTencent">
    <article class="content">
      <img style="width:50%;height:50%" src="../images/404.png"/>
      <blockquote>{{ getMsg() }}</blockquote>
      <img style="width:100%;height:100%" src="../images/web404.png"/>
      <router-link to="/">返回文档站主页</router-link>
    </article>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted } from 'vue-demi'
import { useInstance } from '@theme/helpers/composable'

const msgs = [
  `这里嘛也莫得`,
  `哦淦，你咋跑这儿来辽！`,
  `404 Not Found`,
  `这个链接似乎寄了`
]

export default defineComponent({
  setup (props, ctx) {
    const instance = useInstance()

    const noFoundPageByTencent = computed(() => {
      return instance.$themeConfig.noFoundPageByTencent !== false
    })

    const getMsg = () => {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }

    onMounted(() => {
      if (noFoundPageByTencent.value) {
        const dom = document.createElement('script')
        dom.setAttribute('homePageName', '回到首页')
        dom.setAttribute('homePageUrl', instance.$site.base)
        dom.setAttribute('src', '//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js')

        document.body.append(dom)
      }
    })

    return { noFoundPageByTencent, getMsg }
  }
})
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus">
.content
  margin 4rem auto 0
  max-width 800px
  padding 0 2rem
.mod_404
  .desc
    .desc_link
      display: inline-block
      // margin: 20px 0
      background: #424242!important
      color: #ffffff
      padding: 6px 20px!important
      text-decoration: none!important
      border-radius: 4px

@media screen and (max-width: 720px)
  .mod_404
    .desc
      margin: 50px 0
    .wrapper
      margin 0!important
      padding-top 20px
</style>

