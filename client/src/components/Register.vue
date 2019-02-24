<template>
  <v-layout column style="margin-right: 24%">
    <v-flex xs6 offset-xs3>
      <panel title="Register">
          <form
            name="tab-tracker-form"
            autocomplete="off">
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
          autocomplete="new-password"
        ></v-text-field>
        </form>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn class = "cyan"
            @click="register" dark>
            Register
          </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
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
  color: white;
}
</style>
