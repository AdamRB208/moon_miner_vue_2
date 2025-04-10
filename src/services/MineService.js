import { AppState } from "@/AppState.js"


class MineService {

  increaseOre() {
    console.log('moon clicked')
    AppState.ore++
  }


}

export const mineService = new MineService()