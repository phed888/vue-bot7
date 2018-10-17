<template>
  <div id="app">
    <TopNav />
    <router-view/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav';

export default {
  name: 'App',
  components: {
    TopNav
  }
};
</script>

