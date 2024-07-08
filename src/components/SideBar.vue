<template>
  <div class="pd-side-bar">
    <div class="pd-side-bar-top">
      <div class="side-bar-item">
        <div class="item-icon">
          <v-icon name="fa-home" scale="2" />
        </div>
        <p class="item-label">Home</p>
      </div>

      <div class="side-bar-item">
        <div class="item-icon">
          <v-icon name="fa-project-diagram" scale="2" />
        </div>
        <p class="item-label">Projects</p>
      </div>

      <div class="side-bar-item">
        <div class="item-icon">
          <v-icon name="fa-address-book" scale="2" />
        </div>
        <p class="item-label">Edit profile</p>
      </div>
    </div>
    <div class="pd-side-bar-down">
      <div class="side-bar-item">
        <div class="item-icon">
          <v-icon name="ri-logout-circle-r-line" scale="2" />
        </div>
        <p class="item-label">Sair</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<style scoped>
.pd-side-bar {
  width: 20vw;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 3px solid #b6b7b7;
}

.side-bar-item {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px 30px;
  cursor: pointer;
  box-sizing: border-box;
}

.side-bar-item:hover {
  border-bottom: solid 5px #2c3e50;
}

.item-icon {
  margin-right: 30px;
}
</style>