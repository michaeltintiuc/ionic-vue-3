<template>
  <IonApp>
    <IonTabs>
      <RouterView />
      <template v-slot:bottom>
        <IonTabBar>
          <IonTabButton tab="tab1" href="/">
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/about">
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </template>
    </IonTabs>
  </IonApp>
</template>

<script>
import {
  IonApp,
  IonTabs,
  IonTabBar,
  IonLabel,
  IonTabButton
} from "@modus/ionic-vue";

export default {
  name: "App",
  components: {
    IonApp,
    IonTabs,
    IonTabBar,
    IonLabel,
    IonTabButton
  }
};
</script>
