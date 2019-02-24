<template>
  <v-layout column style="margin-right: 24%">
    <v-flex xs6 offset-xs3>
      <panel title="Login">
          <v-text-field
          name="input-1"
          label="Username/email"
          v-model="email"
          id="email"
        ></v-text-field>
          <br>
          <v-text-field
          name="input-1"
          label="Password"
          type="password"
          v-model="password"
          id="password"
        ></v-text-field>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn class = "cyan"
            @click="login" dark>
            Log In
          </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        const token = response.data.token
        console.log(token)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error {
  color: rgb(247, 239, 239);
}
</style>
