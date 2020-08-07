<template>
  <IonTab tab="tab1">
    <div class="ion-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButtons>
            <IonBackButton/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <h1>Plain old Home Page</h1>
      </IonContent>
    </div>
  </IonTab>

</template>

<script>
import {
  IonTab,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
} from '@modus/ionic-vue';

export default {
  name: 'Home',
  components: {
    IonTab,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
  }
}
</script>
