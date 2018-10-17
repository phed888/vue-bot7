<template>
  <li class="card-master" v-bind:class="{'carousel': card.image.length}">
    <div class="card">
      <div class="card-image" v-if="card.image.length">
        <img :src="getImgUrl(card.image)" alt="" />
      </div>
      <div class="card-text" v-html="card.text"></div>
      <div class="button-list" v-if="card.image.length">
        <Button :button="button" v-for="(button, index) in card.buttons" :key="index" v-on:button_event="addChat($event)"/>
      </div>
    </div>
    <div class="qr-button-list" v-if="!card.image.length">
      <QuickReply 
        :button="button" 
        v-for="(button, index) in card.buttons" :key="index"
        v-on:button_event="addChat($event)"/>
    </div>
  </li>
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
.card-master {
  width: 100%;
}
.card-master.carousel {
  width: 250px;
  height: 303px;
}
.card {
  border-radius: 14px;
  background-color: #eaeaea;
  border: none;
  padding: 0;
  position: relative;
  margin-bottom: 4px;
  /* position: relative; */
  max-width: 85%;
}
.carousel .card {
  width: 240px !important;
  max-width: 100%;
}
.card-image {
  background-size: cover;
  border-radius: 13px 13px 0 0;
  overflow: hidden;
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
.qr-button-list {
  display: flex;
  flex-wrap: wrap;
}
.qr-button-list.hidden {
  animation: hideButtons 1s;
  animation-fill-mode: forwards;
}
.qr-button-list.hidden.removed {
  display: none;
}
@keyframes hideButtons {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
