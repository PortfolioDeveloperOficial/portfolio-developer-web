<template>
  <header>
    <div>
      <img class="header-logo" src="@/assets/logo.png" alt="logo" />
    </div>
    <div class="header-profile">
      <p>{{ developer.name }}</p>
      <img class="header-profile-img" src="@/assets/profile.png" alt="Profile">
    </div>
  </header>
</template>

<script>
import { developerRetrieveLogged } from '@/services/developerService.js'
import { tokenStore } from '@/stores/token.js'

export default {
  name: 'PageHeader',
  data() {
    return {
      developer: {},
    }
  },
  created() {
    this.verifyIsLogged()
    this.getDeveloper()
  },
  methods: {
    verifyIsLogged() {
        if(!tokenStore().isAuthenticated) {
          this.$router.push({ name: 'sign-in' })
        }
    },
    async getDeveloper() {
      const response = await developerRetrieveLogged()
      if (response.status === 200) {
        this.developer = response.data
      } else {
        console.log('ERROR')
      }
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  height: 8vh;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #2c3e50;
}

.header-logo {
  width: 100px;
}

.header-profile {
  display: flex;
  justify-content: end;
  align-items: center;
}

.header-profile-img {
  width: 50px;
  border-radius: 50%;
}
</style>