<template>
  <div class="modal" v-show="showModal">
    <div class="modal-content">
      <!-- Aqui você pode exibir o conteúdo da página -->
      <!-- Por exemplo, usando um iframe -->
      <iframe :src="modalContentUrl" frameborder="0" width="100%" height="100%"></iframe>
      <button @click="closeModal">Fechar Modal</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      modalContentUrl: '' // Aqui será definida a URL da página que será exibida no modal
    };
  },
  methods: {
    openModal(url) {
      this.modalContentUrl = url;
      this.showModal = true;
    },
    closeModal() {
      this.modalContentUrl = '';
      this.showModal = false;
    }
  }
};
</script>

<style>
/* Estilos do modal, ajuste conforme necessário */
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
}
</style>
