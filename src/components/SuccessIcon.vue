<template>
  <div class="success">
    <svg aria-hidden="true" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-check fa-w-16 fa-7x">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class="">      
      </path>
    </svg>
  </div>
</template>

<script>
export default {
    name: "SuccessIcon"
}
</script>

<style lang="scss" scoped>
    $success-bg-color: #4caf50;
    $success-color: #fff;

    .success {
        padding: 15px;
        border: 1px solid $success-bg-color;
        border-radius: 50%;
        width: 50px;
        background-color: $success-bg-color;
        color: $success-color;
    }

    .success-show {
        animation: pulse_success 2s;
    }

    @keyframes pulse_success {
        5% {
            -moz-box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
        }
        70% {
            -moz-box-shadow: 0 0 0 20px rgba(76, 175, 80, 0);
            box-shadow: 0 0 0 20px rgba(76, 175, 80, 0);
        }
        100% {
            -moz-box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
        }
    }

    
</style>