<template>
  <v-layout column style="margin-right: 24%">
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
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
            @click="register" dark>
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: white;
}
</style>
