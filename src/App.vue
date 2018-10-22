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

<style>
body {
  background-color: #444;
  margin: 0;
  padding: 50px 0 0;
}
.container {
  display: flex;
  flex-direction: column-reverse;
  background-color: white;
  margin: 0 auto;
  padding-top: 58px;
  width: 375px;
  height: 590px;
  position: relative;
}
.full-height {
  height: 400px;
}
.message-list {
  overflow: auto;
  padding: 0 0 0 6px;
  margin-bottom: 77px;
}
</style>


