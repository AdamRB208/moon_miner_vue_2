import { AppState } from "@/AppState.js"
import { ClickUpgrade, AutoUpgrade } from "@/models/Upgrades.js"


class MineService {

  increaseOre() {
    console.log('moon clicked')
    AppState.ore++
  }

  /** @param {ClickUpgrade} upgrade */
  purchaseClickUpgrade(upgrade) {

    if (AppState.ore < upgrade.price) {
      window.alert('Not Enough Ore!')
      return
    }
    upgrade.quantity++
    AppState.ore -= upgrade.price
    console.log(AppState.ore, upgrade)
  }

  /** @param {AutoUpgrade} upgrade */
  purchaseAutoUpgrade(upgrade) {
    if (AppState.ore < upgrade.price) {
      window.alert('Not Enough Ore!')
      return
    }
    upgrade.quantity++
    AppState.ore -= upgrade.price
    console.log(AppState.ore, upgrade)
  }

  addOreFromAutoUpgrade() {
    AppState.autoUpgrades.forEach(AutoUpgrade => AppState.ore += (AutoUpgrade.mineAbility * AutoUpgrade.quantity))
  }

}

export const mineService = new MineService()