<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "PushNotification",
  props: {
    iconSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true,
    },
    person: {
      type: String,
      default: ''
    },
  },
})

</script>

<template>

  <div class="push__box">
    <div class="push__content">
      <div class="push__top">
        <div class="col">
          <div class="push__imgwrap">
            <img class="push__icon" :src="iconSrc" alt="">
          </div>
          <span class="push__title">{{ title }}</span>
        </div>
        <div class="col">
          <div class="push__time">{{ time }}</div>
        </div>
      </div>
      <div class="push__main">
        <div v-if="person" class="push__person">{{ person }}</div>
        <p>{{ message }}</p>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
