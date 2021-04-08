<template>
    <!-- <div class="menu">
      <router-link to="{ name: 'Home' }">Home</router-link> |
      <router-link to="{ name : 'About' }">About</router-link>
    </div>
    <router-view/> -->
  <div id="app" class="app">
    <div class="nav">
      <span class="nav__item">Home</span>
      <span class="nav__item">Articles</span>
      <span class="nav__item">Users</span>
      <span class="nav__item">Settings</span>
    </div>
    <div class="content">
      <div class="toolbar">
        <span class="button">Create</span>
        <span class="button">Delete</span>
        <span class="button">Show dialog</span>
        <span class="button">Toggle admin panel</span>
      </div>
      <div class="table"></div>
    </div>
    <div class="admin-panel">
      <div> DemLex.corp</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "style/reset";
@import "style/theme";

body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
}

.app {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap: 0.5rem 0.5rem 0.5rem 0.5rem; */
    height: var(--nav-height);
    background-color: var(--nav-bg-color);
}
.nav__item {
    display: flex;
    justify-content: center;
    width: 130px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-flex;
    align-items: center;
    /* padding: 0.5rem 2rem; */
    cursor: pointer;
    background-color: var(--nav-bg-item-color);
    color: var(--color-text);
    font-size: var(--nav-item-font-size);
}
.nav__item:hover {
    color: var(--nav-item-text-color-hover);
    /* text-shadow: 1px 2px 4px white; */
    /* box-shadow: 0 8px 5px -5px white; */
}

.content {
    padding: 1rem 2rem 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background-color: var(--content-bg-color);
}

.toolbar {
    display: flex;
    height: var(--toolbar-height);
    width: 100%;
}

.button {
    height: var(--button-height);
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    padding: 0 0.5rem;
    cursor: pointer;
    background-color: var(--button-bg-color);
    color: var(--color-text);
    border: 1px solid var(--button-bordrer);
}
.button:hover {
    background-color: var(--button-bg-color-hover);
    color: var(--button-text-color-hover);
    border: 1px solid var(--button-bordrer-hover);
}

.table {
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    width: 100%;
    background-color: rgb(44, 43, 48);
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

/* LAYOUT */

.toolbar {
  gap: 0.5rem 1rem;
}


</style>
