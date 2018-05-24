<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link  class="navbar-brand" to="/">SIMPLE BOOK</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">      
      <li class="nav-item">
        <router-link class="nav-link" to="/profile">Profile</router-link>
      </li>
      <li class="nav-item">
       <button class="btn btn-secondary" @click="logout">Logout</button>
      </li>        
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      this.$router.push('/register')
    }
  }
}
</script>

<style>

</style>
