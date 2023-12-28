// local strapi + store
<script setup>
import { computed, onMounted, inject, nextTick } from 'vue';
import { useStore } from 'vuex';
import gsap from 'gsap';
import MainTitleText from "@/components/MainTitleText/MainTitleText.vue";

const store = useStore();
const isTouchDevice = inject('isTouchDevice');
const values = computed(() => store.state.statistics);

onMounted(async () => {
  await store.dispatch('fetchStatistics');

  await nextTick();

  if (!isTouchDevice) {
    gsap.utils.toArray('.chart-item').forEach((item, index) => {
      gsap.fromTo(item,
          { height: values.value[index].startHeight },
          {
            height: values.value[index].height,
            duration: 0.5,
            delay: 0.2,
            scrollTrigger: {
              trigger: '.chart-wrap',
              start: "center bottom-=100",
              toggleActions: "play none none none",
            }
          });
    });
  }
});
</script>

<template>
  <section id="section3" class="section">
    <div class="business-grow">
      <main-title-text
          title="Consistent leads flow to streamline Your business growth."
          text="We combine disruptive marketing techniques with proven tech solutions to provide maximum business value."
      />
      <div class="chart-wrap">
        <div
            class="chart-item"
            v-for="value in values"
            :key="value.id"
        >
          <span>{{ value.text }}</span>
          <div class="stat-value" :style="{ height: value.height }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="./business-grow.scss" lang="scss"/>

// local without API
<!--<script setup>-->
<!--import {ref, onMounted, inject} from 'vue';-->
<!--import gsap from 'gsap';-->
<!--import MainTitleText from "@/components/MainTitleText/MainTitleText.vue";-->

<!--const isTouchDevice = inject('isTouchDevice');-->
<!--const statData = ref([-->
<!--  {id: 1, startHeight: '0', height: '27%', text: '27'},-->
<!--  {id: 2, startHeight: '0', height: '63%', text: '63'},-->
<!--  {id: 3, startHeight: '0', height: '61%', text: '61'},-->
<!--  {id: 4, startHeight: '0', height: '58%', text: '58'},-->
<!--  {id: 5, startHeight: '0', height: '31%', text: '31'},-->
<!--  {id: 6, startHeight: '0', height: '48%', text: '48'},-->
<!--  {id: 7, startHeight: '0', height: '63%', text: '63'},-->
<!--  {id: 8, startHeight: '0', height: '55%', text: '55'},-->
<!--  {id: 9, startHeight: '0', height: '63%', text: '63'},-->
<!--  {id: 10, startHeight: '0', height: '71%', text: '71'},-->
<!--  {id: 11, startHeight: '0', height: '76%', text: '76'},-->
<!--  {id: 12, startHeight: '0', height: '88%', text: '88'},-->
<!--]);-->



<!--onMounted(() => {-->
<!--  if (!isTouchDevice) {-->
<!--    gsap.utils.toArray('.chart-item').forEach((item, index) => {-->
<!--      gsap.fromTo(item,-->
<!--          { height: statData.value[index].startHeight },-->
<!--          {-->
<!--            height: statData.value[index].height,-->
<!--            duration: 0.5,-->
<!--            delay: 0.2,-->
<!--            scrollTrigger: {-->
<!--              trigger: '.chart-wrap',-->
<!--              start: "center bottom-=100",-->
<!--              toggleActions: "play none none none",-->
<!--            }-->
<!--          });-->
<!--    });-->
<!--  }-->
<!--});-->
<!--</script>-->

<!--<template>-->
<!--  <section id="section3" class="section">-->
<!--    <div class="business-grow">-->
<!--      <main-title-text-->
<!--          title="Consistent leads flow to streamline Your business growth."-->
<!--          text="We combine disruptive marketing techniques with proven tech solutions to provide maximum business value."-->
<!--      />-->
<!--      <div class="chart-wrap">-->
<!--        <div-->
<!--            class="chart-item"-->
<!--            v-for="stat in statData"-->
<!--            :key="stat.id"-->
<!--        >-->
<!--          <span>{{stat.text}}</span>-->
<!--          <div class="stat-value" :style="{ height: stat.height }"></div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
<!--</template>-->

<!--<style src="./business-grow.scss" lang="scss"/>-->

