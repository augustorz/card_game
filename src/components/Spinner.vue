<template>
    <div :class="['spinner container', { loading: !isLoading }]">
    </div>
</template>

<script>
    export default {
        name: "Spinner",
        props: ['isLoading']
    }
</script>

<style lang="scss" scoped>
$spinner-color: #348AA7;
$spinner-border-color: #fff;

.spinner {
  border: 16px solid $spinner-border-color; 
  border-top: 16px solid $spinner-color;
  border-radius: 50%;
  margin-top: 10%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>