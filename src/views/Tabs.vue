<template>
  <IonApp>
    <IonTabs>
      <RouterView />
      <template v-slot:bottom>
        <IonTabBar>
          <IonTabButton tab="tab1" href="/home">
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
  IonLabel,
  IonTabBar,
  IonTabButton
} from "@modus/ionic-vue";

export default {
  name: "App",
  components: {
    IonApp,
    IonTabs,
    IonLabel,
    IonTabBar,
    IonTabButton
  }
};
</script>
