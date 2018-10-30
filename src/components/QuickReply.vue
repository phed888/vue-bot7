<template>
  <button class="qr-button" v-on:click="doAction(button.name, button.action, $event);">
      {{ button.name }}
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['button'],
  data() {
    return {};
  },
  methods: {
    hideButtonList(event) {
      const self = this;
      const thisParent = event.target.parentElement;
      thisParent.classList.add('hidden');
      setTimeout(self.removeButtonList, 1000, thisParent);
    },
    doAction(name, action, $event) {
      this.$emit('button_event', { name, action });
      if (action !== '') {
        this.hideButtonList($event);
      }
    },
    removeButtonList(thisParent) {
      thisParent.classList.add('removed');
    }
  }
};
</script>

<style>
.qr-button {
  border: none;
  background-color: #0056ac;
  border-radius: 24px;
  cursor: pointer;
  font-size: 14px;
  color: #ffffff;
  height: 48px;
  padding: 0 16px;
  text-align: left;
  width: auto;
  margin: 8px 8px 0 0;
  white-space: nowrap;
}
.qr-button:hover {
  background-color: #002388;
}
.qr-button:active {
  background-color: #000055;
  color: white;
}
</style>