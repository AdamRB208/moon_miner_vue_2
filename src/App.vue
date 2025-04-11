<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import { ref } from 'vue';
import { mineService } from "./services/MineService.js";

const ore = computed(() => AppState.ore)

const clickUpgrades = computed(() => AppState.clickUpgrades)

const autoUpgrades = computed(() => AppState.autoUpgrades)



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
          <div v-for="clickUpgrade in clickUpgrades" :key="clickUpgrade.name" class="m-5 p-3 bg-secondary rounded"
            style="--bs-bg-opacity: .7;">Click Upgrade:
            <button class="mt-2 btn btn-outline-warning rounded fs-3" type="button">
              <div>{{ clickUpgrade.name }}</div>
            </button>
            <div class="mt-2">Item price: {{ clickUpgrade.price }}</div>
            <div class="mt-2">Item quantity: {{ clickUpgrade.quantity }}</div>
            <div class="mt-2">Item mine ability: {{ clickUpgrade.mineAbility }}</div>
          </div>
        </div>
        <div class="col-md-4">
          <div v-for="autoUpgrade in autoUpgrades" :key="autoUpgrade.name" class="m-5 p-3 bg-secondary rounded"
            style="--bs-bg-opacity: .7;">Auto Upgrade:
            <button class="mt-2 btn btn-outline-warning rounded fs-3" type="button">
              <div>{{ autoUpgrade.name }}</div>
            </button>
            <div class="mt-2">Item price: {{ autoUpgrade.price }}</div>
            <div class="mt-2"> Item quantity: {{ autoUpgrade.quantity }}</div>
            <div class="mt-2">Item mine ability: {{ autoUpgrade.mineAbility }}</div>
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
  color: #ffc105;
  text-shadow: 2px, 2px, 2px, black;
}

.img-section {
  background-color: #607c8b;
}

.ore-section {
  background-color: #607c8b;
  color: #ffc105;
  text-shadow: 2px, 2px, 2px, black;
}

.upgrades-section {
  background-image: url("https://media.istockphoto.com/id/140088435/photo/silver-armour-metal-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=kLG_ebQ0ugSbGRaiRBaaRajscF34BYd6olFuF6hPRlQ=");
  background-size: cover;
  text-shadow: 3px, 3px;
  color: #ffc105;
}

footer {
  background-image: url("https://media.istockphoto.com/id/140088435/photo/silver-armour-metal-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=kLG_ebQ0ugSbGRaiRBaaRajscF34BYd6olFuF6hPRlQ=");
  background-size: cover;
}
</style>
