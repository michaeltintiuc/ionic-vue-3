<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonButtons>
          <IonBackButton default-href="/about" />
        </IonButtons>
        <IonTitle>
          About Details
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h1>This is an about Details</h1>
    </IonContent>
  </div>
</template>

<script>
import {
  IonTitle,
  IonHeader,
  IonButtons,
  IonToolbar,
  IonContent,
  IonBackButton,
} from '@modus/ionic-vue'

export default {
  components: {
    IonTitle,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonBackButton
  }
}
</script>

