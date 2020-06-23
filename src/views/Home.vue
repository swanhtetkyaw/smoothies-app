<template>
  <div class="home">
    <div>
      <h3 class="pink-text text-lighten-1">Home</h3>
    </div>
    <Smoothies />
  </div>
</template>

<script>
// @ is an alias to /src
import Smoothies from "@/components/SmoothiesItems.vue";

export default {
  name: "Home",
  components: {
    Smoothies
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>
