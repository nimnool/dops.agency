<script setup>
import {ref, onMounted, defineEmits} from "vue";
import gsap from "gsap";
import {inject} from 'vue';
const isTouchDevice = inject('isTouchDevice');
const emit = defineEmits(['startMainLogoAnimation']);
const numbers = ['04', '19', '23', '74', '88', '98'];
const currentNumber = ref(numbers[0]);
const showLoader = ref(true);
let numberIndex = 0;

const changeNumber = () => {
  numberIndex++;
  if (numberIndex < numbers.length) {
    currentNumber.value = numbers[numberIndex];
  } else {
    animateSectionOne();
    gsap.to(".number", {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        setTimeout(hideLoader, 500);
      }
    });
  }
};

const animateSectionOne = () => {
  gsap.fromTo("#section1",
  {top: 100},
  {
    top: 0,
    duration: 1,
    delay: 2
  });
  gsap.fromTo("#section2",
  {top: 80},
  {
    top: 0,
    duration: 1,
    delay: 2
  });
};

const hideLoader = () => {
  emit('startMainLogoAnimation');
  gsap.to(".loader-wrap", {
    duration: 1,
    y: -window.innerHeight,
    delay: 1,
    onComplete: () => {
      showLoader.value = false;
      document.body.classList.add('loaded');
    }
  });
}

onMounted(() => {
  if (isTouchDevice) {
    showLoader.value = false;
    emit('startMainLogoAnimation');
  } else {
    const interval = setInterval(changeNumber, 500);
    setTimeout(() => {
      clearInterval(interval);
      changeNumber();
    }, numbers.length * 500);
  }
});

</script>

<template>
  <div v-if="showLoader" class="loader-wrap">
    <div class="number">{{ currentNumber }}</div>
  </div>
</template>

<style scoped lang="scss">
.loader-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $black;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 100px;
  z-index: 98;

  .number {
    color: $red;
    font-weight: 400;
  }
}
</style>
