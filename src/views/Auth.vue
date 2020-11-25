<script>
import { mapGetters } from 'vuex';

import LoginForm from '@/components/LoginForm';
import SignUpForm from '@/components/SignUpForm';
import PasswordReset from '@/components/PasswordReset';

export default {
	components: {
    PasswordReset,
    LoginForm,
    SignUpForm
	},
	data() {
		return {
			showLoginForm: true,
			showSignUpForm: false,
      showPasswordReset: false,
      signUpStatus: {},
      resetStatus: {}
		}
  },
  computed: {
    ...mapGetters(['getError', 'getInformation']),
  },
	methods: {
		toggleLogin() {
			this.showLoginForm = true;
			this.showSignUpForm = false;
			this.showPasswordReset = false;
    },
    toggleSignUp() {
			this.showLoginForm = false;
			this.showSignUpForm = true;
			this.showPasswordReset = false;
		},
		togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
		},
		async login(data) {
			await this.$store.dispatch('login', {
				email: data.email,
				password: data.password,
			})
		},
		async signUp(data) {
			await this.$store.dispatch('signup', {
				nickname: data.nickname,
				name: data.name,
				email: data.email,
				password: data.password
      });
      this.signUpStatus = (this.getError?.signUp || this.getInformation?.signUp);
    },
    async resetPassword(data) {
      await this.$store.dispatch('resetPassword', {email: data.email});
      this.resetStatus = this.getError?.resetPassword || this.getInformation?.resetPassword;
    }
  },
  watch: {
    getInformation(newInformation) {
      newInformation?.signUp && this.toggleLogin();
    }
  },
}
</script>
<template>
	<div>
    <div class="w-full h-screen md:-mx-4 cover-image" style=""></div>
    <password-reset v-if="showPasswordReset" :status="resetStatus" @do-close="togglePasswordReset()" @do-reset="resetPassword"></password-reset>
    <login-form v-show="showLoginForm" :style="{display: showPasswordReset ? 'none' : 'block'}" @do-login="login" @toggle-password-reset="togglePasswordReset" @toggle-signup="toggleSignUp">
      <p v-if="getInformation && getInformation.signUp" slot="message" class="px-2 bg-green-400 rounded">{{ getInformation.signUp.message }}</p>
      <p v-if="getError && getError.login" slot="message" class="px-2 bg-red-400 rounded">Invalid email/password</p>
    </login-form>
    <sign-up-form v-if="showSignUpForm" :status="signUpStatus" @do-signup="signUp" @do-cancel="toggleLogin" />
  </div>
</template>
<style scoped>
  .cover-image {
    filter: blur(5px); 
    background-size: cover; 
    background-image:url('./../assets/visuals/umbrellas.jpg');
  }
</style>

