<template>
  <button class="card-button" v-on:click="doAction(button.name, button.action)">
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
    doAction(name, action) {
      if (action) {
        this.$emit('button_event', { name, action });
      }
    }
  }
};
</script>

<style>
.card-button {
  border: none;
  background-color: #fff;
  border-radius: 0;
  cursor: pointer;
  font-size: 16px;
  color: #0056ac;
  height: 48px;
  padding: 0 0 0 16px;
  text-align: left;
  width: calc(100% - 2px);
  margin-bottom: 2px;
}
.card-button:hover {
  background-color: aliceblue;
}
.card-button:active {
  background-color: #0056ac;
  color: white;
}
.card-button:last-child {
  border-radius: 0 0 13px 13px;
  margin-bottom: 0;
}
</style>