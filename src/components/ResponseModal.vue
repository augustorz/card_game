<template>
  <div>
    <div :class="['modal', { 'md-show': response }]" id="response-modal">
      <div class="md-content">
        <div v-show="isCorrect">
            <SuccessIcon class="container success-show"/>
        </div>
        <div v-show="isWrong">
            <ErrorIcon class="container error-show"/>
        </div>
        <p class="response">{{ response }}</p>
        <router-link :class="['btn', { 'btn__success': isCorrect, 'btn__error': isWrong }]" 
         :to="{name: 'Feedback', params: { feedback: feedback }}">Continuar</router-link>
      </div>
    </div>
    <div class="md-overlay"></div>
  </div>
</template>

<script>
import SuccessIcon from './SuccessIcon.vue'
import ErrorIcon from './ErrorIcon.vue'

export default {
    name: "ResponseModal",
    components: {
        SuccessIcon,
        ErrorIcon
    },
    props: [
        'response', 
        'feedback',
        'isCorrect',
        'isWrong'
    ]
}
</script>

<style lang="scss" scoped>
    $overlay-background-color: rgba(0, 0, 0, .5);

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 50%;
        max-width: 630px;
        min-width: 320px;
        height: auto;
        z-index: 2000;
        visibility: hidden;
        backface-visibility: hidden;
        transform: translateX(-50%) translateY(-50%);
    }

    .md-show {
        visibility: visible;
    }

    .md-overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        visibility: hidden;
        top: 0;
        left: 0;
        z-index: 1000;
        opacity: 0;
        background: $overlay-background-color;
        transition: all 0.3s;
    }

    .md-show ~ .md-overlay {
        opacity: 1;
        visibility: visible;
    }

    .md-content {
        border: 1px solid $overlay-background-color;
        border-radius: 5px;
        padding: 20px;
        text-align: center;
        background-color: #fff;
        transform: scale(0.7);
        opacity: 0;
        transition: all 0.3s;
    }

    .md-show .md-content {
        transform: scale(1);
        opacity: 1;
    }

    .response {
        font-size: 2rem;
    }

</style>