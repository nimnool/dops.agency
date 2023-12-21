<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navLinks: [
        {id: 1, text: 'Services', url: '/services'},
        {id: 2, text: 'Case Studies', url: '/casestudies'},
        {id: 3, text: 'Blog', url: '/blog'},
        {id: 4, text: 'About Us', url: '/about'},
        {id: 5, text: 'We\'re hiring', url: '/wearehiring'},
        {id: 6, text: 'Contacts', url: '/contacts'}
      ],
      isMenuOpen: false
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<template>
  <div class="nav-bar" :class="{ 'active': isMenuOpen }">
    <router-link to='/' class="logo"><span>R</span><span>S</span></router-link>
    <div class="nav-holder">
      <ul class="nav-list">
        <li v-for="link in navLinks" key="link.id">
          <router-link :to="link.url">{{ link.text }}</router-link>
        </li>
      </ul>
      <button class="btn btn-action">
      <span>
        <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Path 8510"
                d="M21.1007 6.49956L15.3873 0.786133H12.5306L17.2399 5.49546L0.899353 5.48769L0.900767 7.51284L17.2498 7.51355L12.5306 12.213L15.3866 12.2137L21.1007 6.49956Z"
                fill="#E63E3A"/>
        </svg>
      </span>
        Book a call
      </button>
    </div>
    <span @click="toggleMenu" class="opener"><span></span></span>
  </div>
</template>

<style scoped src="./nav-bar.scss" lang="scss"/>
