<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="feedback card">
        <div class="feedback__image">
          <img src="@/assets/images/question.png">
        </div>
        <div class="feedback__text">
          <p>{{ this.$route.params.feedback }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import feedbackAudio from '@/assets/audio/feedback.mp3';

    export default {
        name: "Feedback",
        mounted() {
            new Audio(feedbackAudio).play()
        }
    }
</script>

<style lang="scss" scoped>
  .feedback {
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
    .feedback {
      flex-wrap: wrap;

      &__text {
        font-size: 15px;
      }
    }    
  }
</style>