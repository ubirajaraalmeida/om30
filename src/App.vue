<template>
  <Header />
  <Sidebar />
  <router-view/>
  <Footer />
</template>

<script>
import Header from './components/layout/Header.vue'
import Sidebar from './components/layout/Sidebar.vue'
import Footer from './components/layout/Footer.vue'
export default {
  name: "App",
  component:{
    Header,
    Sidebar,
    Footer,
  }
}
</script>