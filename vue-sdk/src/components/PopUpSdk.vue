// src/components/PopUpSDK.vue
<template>
  <div>
    <button @click="showPopup" :style="buttonStyle">{{ buttonText }}</button>
    <div v-if="isPopupVisible" :style="popupStyle" class="popup">
      <p>This is a popup in Vue JS!</p>
      <button @click="closePopup" :style="closeButtonStyle">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUpSDK',
  data() {
    return {
      buttonText: 'Click Me',
      isPopupVisible: false,
      buttonStyle: {
        padding: '10px 20px',
        backgroundColor: '#008CBA',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      },
      popupStyle: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        zIndex: '1000'
      },
      closeButtonStyle: {
        marginTop: '10px',
        padding: '5px 10px'
      }
    };
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    }
  }
};
</script>

<style scoped>

</style>