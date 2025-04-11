import { reactive } from 'vue'
import { AutoUpgrade, ClickUpgrade } from './models/Upgrades.js'


export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  ore: 0,

  clickUpgrades: [
    new ClickUpgrade({
      name: '⛏️ pickaxe',
      price: 5,
      quantity: 0,
      mineAbility: 1,
    }),
    new ClickUpgrade({
      name: '⚙ drill',
      price: 10,
      quantity: 0,
      mineAbility: 5,
    }),
  ],

  autoUpgrades: [
    new AutoUpgrade({
      name: '🧑🏼‍🚀 astronaut',
      price: 25,
      quantity: 0,
      mineAbility: 20,
    }),
    new AutoUpgrade({
      name: '🚜 rover',
      price: 50,
      quantity: 0,
      mineAbility: 30,
    }),
  ]

})

