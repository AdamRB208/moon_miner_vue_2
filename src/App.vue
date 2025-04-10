<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import { ref } from 'vue';
import { mineService } from "./services/MineService.js";

const ore = computed(() => AppState.ore)

function mine() {
  mineService.increaseOre()
}


</script>

<template>

  <header>
    <div class="container d-flex justify-content-center">
      <div class="row">
        <div class="col-12 mb-3 mt-3">
          <h1>🌘 MoonMiner 🌒</h1>
        </div>
      </div>
    </div>
  </header>

  <main>
    <section class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex justify-content-center img-section">
          <div>
            <img @click="mine()"
              src="file:///Users/adamborup/Downloads/photo-1739723745127-d30d865d9cba-removebg-preview.png"
              alt="image of the moon">
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid d-flex justify-content-center">
      <div class="row">
        <div class="col-md-2 d-flex">
          <div class="d-flex align-items-center bg-secondary rounded p-2 text-nowrap">Total Ore Mined: {{
            ore }}</div>
        </div>
      </div>
    </section>
  </main>
  <footer class=" text-center">
    Made with <i class="mdi mdi-vuejs  text-success"></i> by @AdamRB208
  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

header {
  background-color: gray;
}

.img-section {
  background-color: #607c8b;
}
</style>
