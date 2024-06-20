<template>
  <div class="pd-div-main">
    <div class="pd-logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>

    <form @submit="submit">
      <div class="form-item">
        <input
          type="text"
          id="code"
          name="code"
          placeholder="Code"
          v-model="code"
          required>
      </div>

      <p class="code-send-description">Inserir código que você recebeu no e-mail</p>

      <button type="submit" class="pd-submit-button">Confirmar</button>
    </form>
  </div>
</template>

<script>
import { signConfirmService } from '@/services/authService.js'
import { tokenStore } from '@/stores/token.js'

export default {
  name: 'SignConfirmView',
  data() {
    return {
      code: '',
    }
  },
  props: {
    email: {
      type: String,
      required: true
    }
  },
  methods: {
    submit(event) {
      event.preventDefault()
      const data = {
        email: this.email,
        code: this.code
      }
      this.signConfirm(data);
    },
    async signConfirm(data) {
      const response = await signConfirmService(data);
      if (response.status === 200) {
        const { accessToken } = response.data;
        tokenStore().setToken(accessToken);
        this.$router.push({ name: 'home' });
      } else {
        console.log('ERROR')
      }
    }
  }
}
</script>

<style scoped>

</style>