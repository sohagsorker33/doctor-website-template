<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import About from "@/components/About.vue";
import Services from "@/components/services.vue";
import Google_map from "@/components/Google_map.vue";
import Contact from "@/components/Contact.vue";
 
</script>

<template>
  <Header />
    <slot />
  <About/>
  <Services />
<Google_map/>
<Contact/>
  <Footer />
</template>
