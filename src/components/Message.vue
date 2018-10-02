<template>
  <div class="message" v-bind:class="{'customer': message.from == 'customer'}">
    <div class="message-time">{{ startTime() }}</div>
    <div class="brand-logo" v-if="message.brand"></div>
    <div v-for="(cardGroup, index) in message.cardGroups" :key="index" class="cardGroup">
      <div v-for="(card, index) in cardGroup" :key="index" class="cardContainer">
        <Card :card="card" v-on:button_event="addChat($event)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'Message',
  props: ['message'],
  components: {
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
.message.customer > div {
  justify-content: flex-end;
}
.message.customer .card {
  background-color: #0056ac;
  margin-right: 0;
  min-width: 0% !important;
  width: auto;
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
}
.cardContainer {
  display: flex;
  width: 100%;
}
.customer .cardGroup .cardContainer {
  justify-content: flex-end;
}
</style>


