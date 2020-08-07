<template>
  <IonApp>
    <IonRouterView v-slot="{ Component, transitionProps }">
      <Transition v-bind="transitionProps">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </Transition>
    </IonRouterView>
  </IonApp>
</template>

<script>
import {
  IonApp,

  IonRouterView
} from "@modus/ionic-vue";

export default {
  name: "App",
  components: {
    IonApp,
    IonRouterView
  },
};
</script>
