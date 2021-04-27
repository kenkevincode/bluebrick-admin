<template>
  <div id="app" class="app">
    <div class="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Articles' }">Articles</router-link>
      <router-link :to="{ name: 'Users' }">Users</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Cherry+Swash);
@import 'style/reset';
@import 'style/theme';
@import 'style/layout';

$fontFamily: "Cherry Swash";

body {
  font-family: $fontFamily;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
	background-color: var(--content-bg-color);
}

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.nav {
  background-color: var(--nav-bg-color);
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;

  a {
    font-family: $fontFamily;
		display: inline-flex;
		align-items: center;
		color: var(--nav-item-color);
		padding: 0 1rem;
    height: 2.5rem;
    border-right: 1px solid var(--nav-item-color);
		text-decoration: none;
		&:last-child {
			border-right-style: none;
		}
		&:hover {
			color: var(--nav-item-color-hover);
			background-color: var(--nav-item-bg-hover);
		}

    &.router-link-exact-active {
			color: var(--nav-item-color-active);
    }
  }
}

</style>
