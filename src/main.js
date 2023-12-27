import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ServicesPage from '@/pages/ServicesPage.vue';
import HomePage from "@/pages/HomePage.vue";
import CaseStudiesPage from "@/pages/CaseStudiesPage.vue";
import BlogPage from "@/pages/BlogPage.vue";
import HiringPage from "@/pages/HiringPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue"
import AboutUsPage from "@/pages/AboutUsPage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";
import store from "@/store";

const routes = [
    { path: '/', component: HomePage },
    { path: '/services', component: ServicesPage },
    { path: '/casestudies', component: CaseStudiesPage },
    { path: '/blog', component: BlogPage },
    { path: '/wearehiring', component: HiringPage },
    { path: '/about', component: AboutUsPage },
    { path: '/contacts', component: ContactsPage },
    { path: '/*', component: NotFoundPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
