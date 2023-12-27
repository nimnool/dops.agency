<script setup>
import MainTitleText from "@/components/MainTitleText/MainTitleText.vue";
import {useStore} from "vuex";

const store = useStore();

// const increment = () => store.commit('cartStore/updateCounter', store.state.cartStore.count+1)

</script>

<template>
  <div class="marketing-wrap">
<!--    <h1>{{ store.state }}</h1>-->
<!--    <button @click="increment">click</button>-->
    <main-title-text
        title="Growing businesses by building relationships"
        text="B2B Marketing & LinkedIn Lead Generation agency"
    />
  </div>
</template>

<style src="./b2b-marketing.scss" lang="scss"/>
