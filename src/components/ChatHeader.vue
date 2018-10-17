<template>
  <div class="header expedia">
    <div class="header-logo"></div>
    <div class="header-close"></div>
  </div>
</template>

<script>
export default {
  name: 'ChatHeader',
  data() {
    return {};
  }
};
</script>

<style>
.header {
  height: 26px;
  width: 343px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  z-index: 5;
  position: fixed;
  top: 50px;
}
.header.expedia {
  background-color: #ffcc02;
}
.expedia .header-logo {
  background-image: url('../assets/header-expedia-logo.png');
  height: 34px;
  width: 118px;
}
.expedia .header-close {
  background-image: url('../assets/header-close-x.png');
  height: 18px;
  width: 18px;
}
</style>

