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
        <div class="col-12 mb-5 mt-4">
          <h1>🌘 Moon Miner 🌒</h1>
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
    <section class="container-fluid d-flex justify-content-center ore-section">
      <div class="row">
        <div class="col-md-2 d-flex">
          <div class="d-flex align-items-center bg-secondary rounded p-2 mb-1 text-nowrap">Total Ore Mined: {{
            ore }}</div>
        </div>
      </div>
    </section>

    <section class="container-fluid upgrades-section">
      <div class="row">
        <div class="col-md-4">
          <div class="m-5 p-3 bg-secondary rounded" style="--bs-bg-opacity: .5;">click upgrades here
            <p class="mt-3">pickaxe here</p>
            <p>drill here</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="m-5 p-3 bg-secondary rounded" style="--bs-bg-opacity: .5;">auto upgrades here
            <p class="mt-3">astronaut here</p>
            <p>rover here</p>
          </div>
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
  background-image: url("https://media.istockphoto.com/id/140088435/photo/silver-armour-metal-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=kLG_ebQ0ugSbGRaiRBaaRajscF34BYd6olFuF6hPRlQ=");
  background-size: cover;
  color: rgb(233, 233, 53);
  text-shadow: 2px, 2px;
}

.img-section {
  background-color: #607c8b;
}

.ore-section {
  background-color: #607c8b;
  color: rgb(233, 233, 53);
  text-shadow: 2px, 2px;
}

.upgrades-section {
  background-image: url("https://media.istockphoto.com/id/140088435/photo/silver-armour-metal-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=kLG_ebQ0ugSbGRaiRBaaRajscF34BYd6olFuF6hPRlQ=");
  background-size: cover;
  text-shadow: 2px, 2px;
  color: rgb(233, 233, 53);
}

footer {
  background-image: url("https://media.istockphoto.com/id/140088435/photo/silver-armour-metal-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=kLG_ebQ0ugSbGRaiRBaaRajscF34BYd6olFuF6hPRlQ=");
  background-size: cover;
}
</style>
