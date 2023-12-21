<script setup>
import AnimatedText from "@/components/AnimatedText/AnimatedText.vue";

const {title, text} = defineProps([
  'title',
  'text'
])
</script>

<template>
  <div class="main-text-wrap">
    <div class="title-holder">
      <h2>
        <animated-text
            :text="title"
        />
      </h2>
    </div>
    <div class="text-holder">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
