<template>
  <div class="card">
    <div class="card-text">
      {{ card.text }}
    </div>
    <div class="button-list">
      <Button :button="button" v-for="(button, index) in card.buttons" :key="index"/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: 'Card',
  props: ['card'],
  components: {
    Button
  }
};
</script>

<style>
.card {
  border-radius: 14px;
  background-color: #eaeaea;
  border: none;
  padding: 0;
  position: relative;
  min-width: 130px;
  max-width: 85%;
  margin-bottom: 4px;
}
.card-text {
  color: #5b5b5b;
  /* font-family: '-apple-system '; */
  font-size: 14px;
  line-height: 21px;
  padding: 16px;
  text-align: left;
}
.button-list {
  padding: 0 0 2px 2px;
}
</style>
