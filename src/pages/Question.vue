<template>
  <div class="page-wrapper">
    <Spinner :isLoading="isLoading"/>
    <div :class="['container', { loading: isLoading }]">
      <div class="question card">
        <div class="question__image">
          <img src="@/assets/images/question.png">
        </div>
        <div class="question__text">
          <p>{{ result.question }}</p>
        </div>
      </div>
      <div :class="['alternatives', { 'show-alternatives': isReady }]">
        <Alternatives :alternatives="result.alternatives"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Spinner from '@/components/Spinner.vue';
import questionAudio from '@/assets/audio/question.mp3';
import Alternatives from '@/components/Alternatives.vue';

export default {
  name: 'Question',
  components: {
    Alternatives,
    Spinner
  },
  data () {
    return {
      result: [],
      isLoading: true,
      isReady: false
    }
  },
  mounted() {
    const url = "http://frontsabia.getsandbox.com/question"
    axios.get(url).then(response => {
      this.result = response.data;
      this.isLoading = false;
      const audio = new Audio(questionAudio)
      audio.play();
      audio.onended = () => {
        this.isReady = true;
      }
    }, error => {
      console.error(error);
    });
  },
  methods: { 
  }
}
</script>

<style lang="scss" scoped>
  .loading {
    display: none;
  }

  .alternatives {
    visibility: hidden;
  }

  .show-alternatives {
    visibility: visible;
    animation: fadein 2s;
  }

  .question {
    padding: 0;
    display: flex;

    &__text {
      padding: 20px;
      font-size: 20px;
    }

    &__image img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  @media only screen and (max-width: 992px) {
    .question {
      flex-wrap: wrap;

      &__text {
        font-size: 15px;
      }
    }    
  }
</style>