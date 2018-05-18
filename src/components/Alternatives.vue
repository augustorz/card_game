<template>
  <div>
    <div class="alternative">
      <a v-for="(alternative, index) in alternatives" 
       :key="alternative.id"
       href="javascript:void(0);"
       :class="['card alternative__item', { selected: id === alternative.id }]"
       v-on:click="checkAlternative(alternative)">
         {{ String.fromCharCode(index + 65) }})
         {{ alternative.text }}
      </a>
    </div>
    <div :class="['btn-align', { 'show-btn': isSelected }]">
      <a href="javascript:void(0);" class="btn btn__default" v-on:click="submit">
        <span class="btn__content">Confirmar</span>
      </a>
    </div>
    <ResponseModal :response="response, isCorrect, isWrong, feedback"/>
  </div>
</template>

<script>
import axios from 'axios';
import ResponseModal from './ResponseModal.vue'

export default {
    name: "Alternatives",
    components: {
      ResponseModal
    },
    props: ['alternatives'],
    data () {
      return {
        id: "",
        answer: "",
        isSelected: false,
        feedback: "",
        response: "",
        isCorrect: false,
        isWrong: false
      }
    },
    mounted() {
    },
    methods: {
      checkAlternative(alternative) {
        this.id = alternative.id;
        this.answer = alternative.text;
        this.isSelected = true;
      },
      postData() {
        const url = "http://frontsabia.getsandbox.com/question";
        axios.post(url, {
          id: this.id,
          answer: this.answer
        }).then(response => {
          if (this.id === response.data.correctAnswer) {
            this.response = "Resposta Correta!";
            this.isCorrect = true;
          } else {
            this.response = "Resposta Incorreta!";
            this.isWrong = true;
          }
          this.feedback = response.data.feedback
        }, error => {
          console.error(error);
        });
      },
      submit() {
        this.postData();
      }
    }
}
</script>

<style lang="scss" scoped>
  $selected-border-color: #348AA7;

  .alternative {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 20px;
    justify-content: space-between;

    &__item {
      text-decoration: none;
      color: #000000;
    }
  }

  .btn-align {
    visibility: hidden;
    text-align: center;
  }

  .show-btn {
    visibility: visible;
    animation: fadein 2s;
  }

  .selected {
    border-left-width: thick;
    border-left-style: solid;
    border-left-color: $selected-border-color;
  }

  @media only screen and (max-width: 600px) {
    .alternative__item {
      flex-grow: 1;
    }
  }
</style>