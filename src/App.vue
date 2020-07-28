<template>
  <div>导航栏
    <router-link to="/">首页</router-link>
    <router-link to="/frank2">二级页</router-link>
  </div>
  <router-view/>
</template>

<script>
import Frank from './components/Frank.vue'

export default {
  name: 'App',
  components: {
    Frank
  }
}
</script>
