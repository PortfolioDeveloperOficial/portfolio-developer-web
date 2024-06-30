<template>
  <div class="pd-page">
    <page-header />
    <div class="bar-content">
      <side-bar />
      <page-content />
    </div>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader.vue'
import PageContent from '@/components/PageContent.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'HomeView',
  components: { SideBar, PageContent, PageHeader },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
.pd-page {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
}

.bar-content {
  display: flex;
}
</style>