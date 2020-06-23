<template>
  <div>
    <nav>
      <div class="nav-wrapper pink lighten-1">
        <div class="adj-logo">
          <router-link to="/">
            <span class="brand-logo">Smoothies</span>
          </router-link>
        </div>
        <ul id="nav-mobile" class="right hide-on-med-and-down ul-adj">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/About">About</router-link>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
        <a href class="btn-floating btn-large halfway-fab waves-effect blue lighten-1">
          <router-link :to="{name: 'Smoothies'}">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.adj-logo {
  padding: 0 20px;
}
.ul-adj {
  padding-right: 100px;
}
</style>