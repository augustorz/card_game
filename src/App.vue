<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Lato);
  
  $btn-default-bg-color: #348AA7;
  $btn-success-bg-color: #4caf50;
  $btn-error-bg-color: #f44336;
 
  #app {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
  }

  .card {
    word-wrap: break-word;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }

  .card:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .container {
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;
  }

  .btn {
    display: inline-block;
    position: relative;
    padding: 15px;
    margin-top: 20px;
    min-width: 200px;
    border: none;
    outline: none;
    text-decoration: none;
    text-align: center;
    color: white;
    font-family: inherit;
    font-weight: 400;
    font-size: 20px;
    border-radius: 3px;

    &:hover{
      transition: all 0.1s ease-in;
    }
  
    &:active{
      transform:translateY(4px);
      border-bottom-width: 2px;
      box-shadow: none;
    }

    &__default {
      background: $btn-default-bg-color;
      box-shadow: 0 5px 0px darken($btn-default-bg-color,0%);
      border-bottom: 2px solid darken($btn-default-bg-color,3%);

      &:hover {
        background: darken($btn-default-bg-color,5%);
        box-shadow: 0 4px 1px darken($btn-default-bg-color,5%);
        border-bottom: 2px solid darken($btn-default-bg-color,8%);
      }
    }
 

    &__success {
      background: $btn-success-bg-color;
      box-shadow: 0 5px 0px darken($btn-success-bg-color,0%);
      border-bottom: 2px solid darken($btn-success-bg-color,3%);
     
      &:hover {
        background: darken($btn-success-bg-color,5%);
        box-shadow: 0 4px 1px darken($btn-success-bg-color,5%);
        border-bottom: 2px solid darken($btn-success-bg-color,8%);
      }
    }

    &__error {
      background: $btn-error-bg-color;
      box-shadow: 0 5px 0px darken($btn-error-bg-color,0%);
      border-bottom: 2px solid darken($btn-error-bg-color,3%);

      &:hover {
        background: darken($btn-error-bg-color,5%);
        box-shadow: 0 4px 1px darken($btn-error-bg-color,5%);
        border-bottom: 2px solid darken($btn-error-bg-color,8%);
      }
    }
   
    &__content {
      position: relative;
      z-index: 1;
    }
  }

  /* Fade in */
  @keyframes fadein {
    from { 
      opacity: 0; 
    }
    to { 
      opacity: 1; 
    }
  }

  @media only screen and (min-width: 601px) {
    .container {
      width: 85%;
    }
  }

  @media only screen and (min-width: 993px) {
    .container {
      width: 70%;
    }
  }
</style>
