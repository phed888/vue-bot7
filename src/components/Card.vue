<template>
  <div class="card" v-bind:class="{'carousel': card.image.length}">
    <div class="card-image" v-if="card.image.length">
      <img :src="getImgUrl(card.image)" alt="" />
    </div>
    <div class="card-text" v-html="card.text"></div>
    <div class="button-list">
      <Button :button="button" v-for="(button, index) in card.buttons" :key="index" v-on:button_event="addChat($event)"/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button';
import QuickReply from '@/components/QuickReply';

export default {
  name: 'Card',
  props: ['card'],
  components: {
    Button,
    QuickReply
  },
  data() {
    return {};
  },
  methods: {
    addChat({ name, action }) {
      this.$emit('button_event', { name, action });
    },
    getImgUrl(img) {
      var image = require('../assets/photos/' + img + '.png');
      return image;
    }
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
  position: relative;
}
.card.carousel {
  margin-right: 10px;
  overflow: hidden;
}
.card-image {
  background-size: cover;
  border-radius: 13px 13px 0 0;
  overflow: hidden;
  width: 240px;
}
.card-text {
  color: #5b5b5b;
  font-size: 14px;
  line-height: 21px;
  padding: 16px;
  text-align: left;
}
.button-list {
  padding: 0 0 2px 2px;
}
</style>
