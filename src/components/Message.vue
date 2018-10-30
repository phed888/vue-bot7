<template>
  <div class="message" v-bind:class="{'customer': message.from == 'customer'}">
    <div class="message-time">{{ startTime() }}</div>
    <div class="brand-logo" v-if="message.brand"></div>
    <div v-for="(cardGroup, index) in message.cardGroups" :key="index" class="cardGroup">
      <ul v-for="(card, index) in cardGroup" :key="index" class="cardContainer" v-bind:class="{'carousel': card.length > 1}">
          <Card :card="card" v-on:button_event="addChat($event)"/>
      </ul>
    </div>
  </div>
</template>

<script>
// import Card from '@/components/Card';
import Card from '@/components/Card';

export default {
  name: 'Message',
  props: ['message'],
  components: {
    // Card,
    Card
  },
  data() {
    return {};
  },
  methods: {
    ///////////////////////////////////////////
    // Time methods
    //
    // send button_event up to Message List
    addChat({ name, action }) {
      this.$emit('button_event', { name, action });
    },
    // add leading 0 for numbers less than 10
    checkTime(i) {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    },
    // change from 24 hour to 12 hour notation
    checkPM(j) {
      if (j > 12) {
        j = j - 12;
      }
      return j;
    },
    // translate current Date to current time
    startTime() {
      var ampm = '';
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      if (h > 11) {
        ampm = 'PM';
      } else {
        ampm = 'AM';
      }
      h = this.checkPM(h);
      m = this.checkTime(m);
      return h + ':' + m + ' ' + ampm;
    }
    //
    // end of time methods
    ///////////////////////////////////////////
  }
};
</script>

<style>
.message {
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 46px;
  position: relative;
}
.message.customer {
  margin-right: 6px;
}
.message.customer .card-master {
  display: flex;
  justify-content: flex-end;
}
.message.customer .card {
  background-color: #003461;
  margin-right: 0;
  min-width: 0% !important;
  max-width: 100%;
  white-space: nowrap;
}
.message.customer .card .card-text {
  color: #ffffff;
}
.message.customer .message-time {
  text-align: right;
}
.message-time {
  font-size: 11px;
  color: '#5b5b5b';
  padding: 4px 0;
}
.brand-logo {
  position: absolute;
  background-image: url('../assets/logo-expedia.png');
  height: 32px;
  width: 32px;
  top: 18px;
  left: 0;
}
.cardGroup {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.customer .cardGroup {
  flex-direction: row-reverse;
}
.cardContainer {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.customer .cardGroup .cardContainer {
  justify-content: flex-end;
}
.slide-fade-enter-active {
  /* transition: all 0.3s ease; */
  animation: slide-in 0.6s ease;
}
.slide-fade-leave-active {
  /* transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); */
  animation: slide-in 0.6s ease reverse;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scaleY(0);
  opacity: 0;
}
@keyframes slide-in {
  0% {
    opacity: 0;
  }
  /* 50% {
    opacity: 0;
    max-height: 1;
  } */
  100% {
    opacity: 1;
  }
}
</style>


