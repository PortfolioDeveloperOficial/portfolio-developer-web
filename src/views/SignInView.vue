<template>
  <div class="pd-div-main">
    <div class="pd-logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>

    <form @submit="submit">
      <div class="pd-form-item">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          v-model="email"
          required>
      </div>

      <button type="submit" class="pd-submit-button">Entrar</button>
      <router-link to="/sign-up">Eu não tenho um cadastro</router-link>
    </form>
  </div>
</template>

<script>
import { signInService } from '../services/authService.js'

export default {
  name: 'SignInView',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      this.signIn({
        email: this.email,
      });
    },
    async signIn(data) {
      const response = await signInService(data);
      if (response.status === 200) {
        this.$router.push({ name: 'sign-confirm', query: { email: this.email }});
      } else {
        console.log('ERROR')
      }
    }
  },
}
</script>

<style scoped>
a {
  width: 100%;
  color: #29583f;
  cursor: pointer;
}

</style>