import { AppState } from "@/AppState.js"
import { ClickUpgrade } from "@/models/Upgrades.js"


class MineService {

  increaseOre() {
    console.log('moon clicked')
    AppState.ore++
  }

  purchaseClickUpgrade(ClickUpgrade) {
    ClickUpgrade.quantity++
    console.log('click upgrade works!')
  }

}

export const mineService = new MineService()