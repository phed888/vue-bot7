<template>
  <div class="test-index">
    <div class="index-container">
      <div class="button-group">
      <router-link to="/quick_replies" tag="button" class="index-nav-button">Quick reply buttons</router-link>
      <router-link to="/card_buttons" tag="button" class="index-nav-button">Card buttons</router-link>
      <router-link to="/web_view" tag="button" class="index-nav-button">Web view</router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestIndex',
  data() {
    return {};
  }
};
</script>

<style>
h2.testTitle {
  color: #eee;
  font-size: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #999;
  margin-bottom: 0;
}
.index-container {
  margin: 0 auto;
  width: 375px;
  position: relative;
}
.button-group {
  display: flex;
  flex-direction: column;
}
.index-nav-button {
  padding: 16px 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #666;
  color: #eee;
  font-size: 16px;
  margin: 0 4px 5px;
}
.index-nav-button:hover {
  background-color: #333333;
}
.index-intro {
  font-size: 16px;
  line-height: 28px;
  color: #ccc;
  padding: 32px 0;
}
</style>


