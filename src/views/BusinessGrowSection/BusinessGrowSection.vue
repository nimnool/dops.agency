<script setup>
import { ref, onMounted, inject } from 'vue';
import gsap from 'gsap';
import MainTitleText from "@/components/MainTitleText/MainTitleText.vue";
import { fetchStatistic } from '@/store/statApi.js';
import { nextTick } from "vue";

const isTouchDevice = inject('isTouchDevice');
const values = ref([]);

onMounted(async () => {
  const response = await fetchStatistic();
  if (response && response.data) {
    values.value = response.data.map(item => ({
      id: item.id,
      startHeight: '0',
      height: `${item.attributes.value}%`,
      text: item.attributes.text
    }));

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
