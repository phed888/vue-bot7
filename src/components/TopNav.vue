<template>
  <div class="top-nav">
    <div class="button-group">
      <router-link to="/" tag="button" class="top-nav-button">Quick Replies</router-link>
      <router-link to="/card_buttons" tag="button" class="top-nav-button">Card Buttons</router-link>
      <router-link to="/web_view" tag="button" class="top-nav-button">Web View</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data() {
    return {};
  }
};
</script>

<style>
.top-nav {
  background-color: #333;
  width: 100%;
  padding: 8px 0;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 0;
}
.button-group {
  display: flex;
  justify-content: space-between;
}
.top-nav-button {
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #666;
  color: #eee;
  font-size: 14px;
  margin: 0 4px;
}
</style>


