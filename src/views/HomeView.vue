<template>
  <div>
    <p>TOKEN: {{ token }}</p>
  </div>
</template>

<script>
import { tokenStore } from '@/stores/token.js'

export default {
  name: 'HomeView',
  data() {
    return {
      token: ''
    }
  },
  mounted() {
    this.mountToken()
  },
  methods: {
    mountToken() {
      this.token = tokenStore().token
    }
  }
}
</script>