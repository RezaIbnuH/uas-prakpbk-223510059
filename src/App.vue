<template>
  <div id="app">
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-transparent text-white" height-hint="98">
        <q-toolbar class="header-toolbar">
          <span class="title-text enlarged">Widget Weather Realtime</span>
        </q-toolbar>

        <q-tabs align="center" class="tabs-container">
          <router-link to="/" exact>
            <span>Home</span>
          </router-link>
          <router-link :to="'/Tugas1'">
            <span>Tugas Pertemuan 1</span>
          </router-link>
          <router-link :to="'/Tugas2'">
            <span>Tugas Pertemuan 2</span>
          </router-link>
          <router-link :to="'/Tugas3'">
            <span>Tugas Pertemuan 3</span>
          </router-link>
          <router-link :to="'/Tugas4'">
            <span>Tugas Pertemuan 4</span>
          </router-link>
          <router-link :to="'/Tugas5'">
            <span>Tugas Pertemuan 5</span>
          </router-link>
          <router-link :to="'/Tugas6'">
            <span>Tugas Pertemuan 6</span>
          </router-link>
          <router-link :to="'/Tugas7'">
            <span>Tugas Pertemuan 7</span>
          </router-link>
        </q-tabs>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer elevated class="bg-transparent text-white">
        <q-toolbar class="text-center">
          <q-toolbar-title>
            <div class="footer-text">© 2024 Company Reza Ibnu Hanifa</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
#app {
  font-family: 'Chakra Petch', sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

q-layout {
  flex: 1;
}

.q-header {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-toolbar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.q-footer {
  flex-shrink: 0; 
}

.q-toolbar-title {
  display: flex;
  align-items: center;
}

.tabs-container {
  display: flex;
  justify-content: center;
  margin-top: 10px; 
}

.q-tabs {
  margin-left: 20px; 
  justify-content: center;
}

.q-tabs a {
  color: white; 
  padding: 10px; 
  font-weight: bold;
  text-decoration: none;
}

.q-page-container {
  flex: 1; 
}

.q-footer .q-toolbar {
  justify-content: center;
}

.q-header {
  background-color: transparent; 
}

.q-footer {
  background-color: transparent; 
}

.title-text {
  color: white;
  font-weight: bold;
}

.enlarged {
  font-size: 24px; 
}

.footer-text {
  color: white;
  font-weight: bold;
}

.q-tabs a.router-link-exact-active {
  color: gray; 
}
</style>
