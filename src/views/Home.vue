<template>
  <div class="home">
    <div class="text">
      <h1>Здеся будет HOME-шняя страница</h1>
    </div>
    <div class="admin-panel">
      <div>DemLex.corp</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">
@import '../style/reset';
@import '../style/theme';

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--content-bg-color);
}

.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: #ffffff;
}

.text {
  text-align: center;
  height: 100%;
  width: 100%;
  color: #ff0000;
  flex-grow: 1;
}

.admin-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--admin-panel-height);
  background-color: var(--admin-panel-bg-color);
  padding: 1rem;
  color: var(--color-text);
}
</style>
