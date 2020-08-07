<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          About Default
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h1>This is an about Default</h1>
      <RouterLink to="/about/details">About details</RouterLink>

    </IonContent>
  </div>
</template>

<script>
import {
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
} from '@modus/ionic-vue'

export default {
  components: {
    IonTitle,
    IonHeader,
    IonToolbar,
    IonContent
  }
}
</script>

