<script setup>
import { ref, onMounted, inject } from "vue";
import gsap from 'gsap';

const isTouchDevice = inject('isTouchDevice');
const growStatData = ref([
  {id: 1, text: 'Revenue generated for clients', value: '1570'},
  {id: 2, text: 'Conversation opened', value: '1200'},
  {id: 3, text: 'Leads generated via targeted', value: '378'},
  {id: 4, text: 'Calls scheduled for clients', value: '197'},
]);

onMounted(() => {
  if (!isTouchDevice) {
    gsap.utils.toArray('.grow-stat-item-bg').forEach((item, index) => {
      gsap.fromTo(item,
      { right: '100%' },
      {
        right: 0,
        duration: 0.4,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: "center bottom-=10",
          toggleActions: "play none none none",
        }
      });
    });
    gsap.utils.toArray('.grow-stat-item-text').forEach((item) => {
      gsap.fromTo(item,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: item,
          start: "center bottom-=10",
          toggleActions: "play none none none",
        }
      });
    });
  }
});
</script>

<template>
  <section id="section4" class="section">
    <div class="grow-stat-wrap">
      <div v-for="item in growStatData" :key="item.id" class="grow-stat-item">
        <div class="grow-stat-item-bg"/>
        <div class="grow-stat-item-text">
          <p>{{ item.text }}</p>
          <span>{{ item.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="./grow-stat.scss" scoped lang="scss"/>
