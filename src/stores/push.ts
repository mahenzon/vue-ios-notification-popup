import { defineStore } from 'pinia'
import type { IPushInfo } from "@/interfaces/push-info"


export const usePushesStore = defineStore('pushes', {
  state: (): { pushes: IPushInfo[] } => {
    return {
      pushes: [],
    }
  },
  actions: {
    addPush(pushInfo: IPushInfo) {
      this.pushes.push(pushInfo)
    },
    reset() {
      while (this.pushes.length) {
        this.pushes.pop()
      }
    },
  },
})
