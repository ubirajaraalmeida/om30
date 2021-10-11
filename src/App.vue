<template>
  <div>
    <Header />
    <Sidebar />
    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Sidebar from './components/layout/Sidebar.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>

<style>
body {
  display: block;
  background-color: #f1f1f1;
  color: #fff; 
  border: solid 1px red;
  height: 100%;
}
</style>