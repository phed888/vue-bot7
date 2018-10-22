<template>
  <div class="header anon">
    <router-link to="/" tag="button" class="back-to-index">Back to Index</router-link>
  </div>
</template>

<script>
export default {
  name: 'ChatHeaderAnon',
  data() {
    return {};
  }
};
</script>

<style>
.header {
  height: 26px;
  width: calc(375px - 32px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  z-index: 5;
  position: absolute;
  top: -58px;
}
.header.anon {
  background-color: #444;
}
.back-to-index {
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 8px 16px;
  color: white;
}
</style>

