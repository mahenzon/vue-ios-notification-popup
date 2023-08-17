<script setup lang="ts">
import PushNotification from './components/PushNotification.vue'
import { usePushesStore } from "./stores/push"
import { computed, onMounted } from "vue"

const pushesStore = usePushesStore()

const allPushes = computed(() => {
  return pushesStore.pushes.slice().reverse()
})

onMounted(() => {

  pushesStore.reset()

  pushesStore.addPush({
    id: "msg-dima",
    iconSrc: "https://raw.githubusercontent.com/WebDevPie/Create-iOS-Push-Notifications-Popup-HTML-CSS-and-JavaScript/master/img/icon-ios-msg.png",
    title: "Messages",
    time: "1d ago",
    person: "John Smith",
    message: "Are you listening?",
  })

  pushesStore.addPush({
    id: "yt",
    iconSrc: "https://uploads-ssl.webflow.com/61fd00481f4b997da0ec34e3/62947eb4354f097a75cb3668_yt.png",
    title: "youtube",
    time: "6h ago",
    person: "LTT posted a new video",
    message: "Watch video 'How many GPUs can fit into...'",
  })

})
</script>

<template>

  <div class="push__wrapper">
    <TransitionGroup name="bounce">
        <PushNotification
            v-for="push in allPushes"
            :key="push.id"
            v-bind="push"
        />
    </TransitionGroup>
  </div>

</template>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
@import "./assets/push.scss";
@import "./assets/transition-bounce.css";

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'SF Pro Display', sans-serif;
  font-size: 16px;
  color: #222;
  background-image: url(https://raw.githubusercontent.com/WebDevPie/Create-iOS-Push-Notifications-Popup-HTML-CSS-and-JavaScript/master/img/iphone-14-2560x1440-abstract-ios-16-hd-24001.jpg);
  background-repeat: no-repeat;
  background-position: top;
  background-size: 200vh;
}

</style>
