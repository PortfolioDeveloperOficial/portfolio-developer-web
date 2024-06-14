<template>
  <div class="pd-div-main">
    <div class="pd-logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>

    <form @submit="submit">
      <div class="pd-form-item">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          v-model="name"
          required>
      </div>
      <div class="pd-form-item">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          v-model="email"
          required>
      </div>

      <div class="pd-form-item">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+00 (00) 00000-0000"
          v-model="phone"
          required>

        <input type="date" v-model="date">

        <select v-model="gender">
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
      </div>
      <button type="submit" class="pd-submit-button">Cadastrar</button>
      <a>Eu já tenho um cadastro</a>
    </form>
  </div>
</template>

<script>
import { signUpService } from '../services/authService.js'

export default {
  name: 'SignUpView',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      date: '',
      gender: '',
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      this.signUp({
        name: this.name,
        email: this.email,
        phone: this.phone,
        date: this.date,
        gender: this.gender
      });
    },
    async signUp(data) {
      const response = await signUpService(data);
      if (response.status === 201) {
        this.$router.push({ name: 'sign-confirm', query: { email: this.email }});
      } else {
        console.log('ERROR')
      }
    }
  },
}
</script>

<style scoped>
input[type="date"] {
  min-width: 100px;
}

select {
  background-color: #D8EAEC;
  width: 100%;
  min-width: 100px;
  padding: 10px 20px;
  margin: 8px 2px;
  display: inline-block;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
}

a {
  width: 100%;
  color: #29583f;
  cursor: pointer;
}

</style>