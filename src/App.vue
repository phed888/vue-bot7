<template>
  <div id="app">
    <!-- <TopNav /> -->
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
  padding: 58px 0 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  font-size: 14px;
  line-height: 24px;
}
.container {
  display: flex;

  flex-direction: column-reverse;
  background-color: white;
  margin: 0 auto;
  width: 375px;
  height: 675px;
  position: relative;
}
.full-height {
  height: 100vh;
}
.message-list {
  overflow: auto;
  padding: 0 0 0 6px;
  margin-bottom: 77px;
}
</style>


