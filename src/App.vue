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
    title: "Сообщения",
    time: "13 часов назад",
    person: "Димон (бар)",
    message: "Слыш, когда касарь вернёшь? Уже месяц прошёл.",
  })

  pushesStore.addPush({
    id: "yt",
    iconSrc: "https://uploads-ssl.webflow.com/61fd00481f4b997da0ec34e3/62947eb4354f097a75cb3668_yt.png",
    title: "youtube",
    time: "9 часов назад",
    person: "Новый подписчик!",
    message: "На ваш канал уже подписалось целых 2378 чел...",
  })

  setTimeout(() => {

    pushesStore.addPush({
      id: "t-1",
      iconSrc: "https://acdn.tinkoff.ru/static/pages/files/ba002123-6b93-4af2-855e-3a33b8bc0a08.png",
      title: "tinkoff",
      time: "сейчас",
      person: "Пополнение +390.000₽, счёт RUB",
      message: "Доход, карта *0228. Баланс 391.337.42₽",
    })

    setTimeout(() => {

      pushesStore.addPush({
        id: "t-2",
        iconSrc: "https://acdn.tinkoff.ru/static/pages/files/ba002123-6b93-4af2-855e-3a33b8bc0a08.png",
        title: "tinkoff",
        time: "сейчас",
        person: "Пополнение +540.000₽, счёт RUB",
        message: "Доход, карта *0228. Баланс 931.337.42₽",
      })

    }, 3000)
  }, 4000)

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
