<template>
  <div class="webview-container">
    <div class="webview">
      <div class="webview-header">
        <span>View amenities</span>
        <span class="close" v-on:click="hideWebView()">x</span>
      </div>
      <div class="webview-body">
        <div class="webview-faq" v-bind:class="{'show-answer': displayAnswer}">
          <ul class="question">
            <li 
              v-for="(question, index) in questions" 
              :key="index"
              v-on:click="popInfo(question.name, question.answer); showAnswer(); ">
              {{ question.name }}
            </li>
          </ul>
          <section class="answer">
            <p class="back-link" v-on:click="hideAnswer()">Back</p>
            <h2 class="questionName">{{ questName }}</h2>
            <p>{{ questAnswer }}</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebView',
  data() {
    return {
      displayAnswer: false,
      webViewVisible: true,
      questName: '',
      questAnswer: '',
      questions: [
        {
          name: 'Check-in and check-out times',
          answer:
            'Check-in time is after 4:00 PM and check-out time is before 11:00 AM.'
        },
        {
          name: 'Room size',
          answer:
            'Your room is a Ocean view queen with balcony and is 678 square feet.'
        },
        {
          name: 'Airport shuttle',
          answer:
            'There is an airport shuttle available on demand, 24 hours per day.'
        },
        {
          name: 'Parking',
          answer: 'There is no parking available.'
        },
        {
          name: 'Extra bed / crib',
          answer:
            'A crib can be added to your room for no extra charge. Up to 2 beds can be added to your room for an additional charge of 14.99 USD per person per night. '
        },
        {
          name: 'Restaurant',
          answer: 'There are 3 restaurants, one is open 24 hours per day.'
        },
        {
          name: 'In-room refrigerator / microwave',
          answer:
            'A refrigerator and/or microwave can be added to your room for no additional charge.'
        },
        {
          name: 'Free breakfast',
          answer:
            'A continental breakfast is included in the price of your room.'
        },
        {
          name: 'View from room',
          answer: 'Your room has an ocean view.'
        },
        {
          name: 'Pool',
          answer: 'There is an outdoor pool.'
        },
        {
          name: 'Smoking policy',
          answer:
            'Smoking is not allowed in your room and the hotel only allows somking in designated public areas.'
        },
        {
          name: 'Internet availability',
          answer:
            'Free high-speed wifi is available in your room. Wifi is available in the lobby and meeting rooms.'
        },
        {
          name: 'Room service',
          answer: 'Room service is available 24 hours per day'
        },
        {
          name: 'Pet policy',
          answer: 'Good news. The hotel allows cats and dogs only in your room.'
        },
        {
          name: 'Can kids stay for free?',
          answer:
            "I'm sorry, I don't have information about this for the Hotel Grande. Please contact the hotel directly."
        }
      ]
    };
  },
  methods: {
    showAnswer() {
      this.displayAnswer = true;
    },
    hideAnswer() {
      this.displayAnswer = false;
    },
    popInfo(name, answer) {
      this.questName = name;
      this.questAnswer = answer;
    },
    hideWebView() {
      this.$emit('close_webview');
    }
  }
};
</script>

<style>
h2.questionName {
  color: #222;
  font-size: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #999;
  margin-bottom: 0;
}
.webview-container {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.webview {
  background-color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 5%;
  height: calc(675px - 10%);
}
.webview-header {
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 12px;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
}
.webview-header > .close {
  cursor: pointer;
}
.webview-body {
  overflow-x: hidden;
  overflow-y: hidden;
}
.webview-faq {
  display: flex;
  width: 675px;
  transition: transform 0.3s ease-in-out;
  transform: translateX(0);
}
.webview-faq.show-answer {
  transform: translateX(-50%);
}
.question {
  height: 530px;
  list-style: none;
  margin: 0;
  padding: 6px 16px 16px;
  min-width: 305.5px;
  overflow-y: auto;
}
.question li {
  border-bottom: 1px solid #ddd;
  padding: 16px 0 16px 8px;
  position: relative;
  cursor: pointer;
}
.question li:after {
  content: '˲';
  font-size: 50px;
  line-height: 0;
  position: absolute;
  right: 8px;
  top: -4px;
}
.question li:hover {
  background-color: aliceblue;
}
.question li:active {
  background-color: #0056ac;
  color: white;
}
.back-link {
  padding: 8px;
  padding-left: 32px;
  border-bottom: 1px solid #ccc;
  color: #0056ac;
  cursor: pointer;
  position: relative;
}
.back-link:hover {
  background-color: aliceblue;
}
.back-link:before {
  content: '˱';
  font-size: 50px;
  line-height: 0;
  position: absolute;
  left: 8px;
  top: -4px;
}
.answer {
  padding: 0 16px 16px;
  min-width: 305.5px;
}
.answer > p {
  font-size: 16px;
  line-height: 24px;
}
</style>


