<script>
import {passwordRules, emailRegex} from '../data/rules'

export default {
  name: 'SignUpForm',
  data() {
    return {
      nickname: '',
			name: '',
			email: '',
			password: '',
			checkPassword: '',
      passwordVisible: false,
      submitted: false
    }
  },
  props: {
    status: {
      type: Object,
      default: () => {}
    },
  },
  computed: {
    statusMessage() {
      return this.status?.message;
    },
    passwordsFilled () {
			return this.password && this.checkPassword;
		},
    samePasswords () {
      return this.passwordsFilled ? this.password === this.checkPassword : false;
		},
		passwordValidation () {
			let errors = [];
			for (let condition of this.passwordRules) {
				if (!condition.regex.test(this.password)) {
					errors.push(condition.message);
				}
      }
      return { valid: (errors.length === 0), errors };
    },
    enableSignUp () {
      return this.isNickNameValid && 
        this.isNameValid && 
        this.isEmailValid && 
        this.passwordsFilled && 
        this.samePasswords && 
        this.passwordValidation.valid;
    },
    isEmailValid() {
      return this.email && this.emailRegex.test(this.email);
    },
    isNickNameValid() {
      return this.nickname && this.nickname.length >= 3;
    },
    isNameValid() {
      return this.name && this.name.length >= 3;
    }
  },
  methods: {
    signup() {
      if(this.enableSignUp) {
        this.submitted = true;
        this.$emit('do-signup', {
          nickname: this.nickname,
          name: this.name,
          email: this.email,
          password: this.password
        });
      }
    },
    cancel() {
      this.nickname = '';
      this.name = '';
      this.email = '';
      this.password = '';
      this.$emit('do-cancel');
    },
		togglePasswordVisibility() {
			this.passwordVisible = !this.passwordVisible
    }
  },
  created() {
    this.emailRegex = emailRegex;
    this.passwordRules = passwordRules;
  }
}
</script>
<template>
  <div>
		<form class="absolute w-4/5 dt:w-2/6 bg-white rounded" style="transform: translate(-50%, -50%); top: 50%; left: 50%" @submit.prevent>
			<div class="flex justify-center -mt-10">
				<img class="border-2 w-20 h-20 rounded-full" src="https://images.pexels.com/photos/166360/pexels-photo-166360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
			</div>
			<div class="px-12 py-10">
				<div class="w-full mb-2">
					<div class="flex items-center">
						<i class="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user-ninja"></i>
						<input v-model.trim="nickname" minlength="3" type="text" placeholder="nickname" class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"/>
            <i class="fas fa-check" :style="{color: isNickNameValid ? 'green' : 'red'}"></i>
          </div>
				</div>
        <div class="w-full mb-2">
					<div class="flex items-center">
						<i class="ml-2 fill-current text-gray-400 text-xs z-10 fas fa-signature"></i>
						<input v-model.trim="name" type="text" placeholder="name" class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"/>
            <i class="fas fa-check" :style="{color: isNameValid ? 'green' : 'red'}"></i>
					</div>
				</div>
        <div class="w-full mb-2">
					<div class="flex items-center">
						<i class="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-at"></i>
						<input v-model.trim="email" type="email" placeholder="email" class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"/>
            <i class="fas fa-check" :style="{color: isEmailValid ? 'green' : 'red'}"></i>
					</div>
				</div>
				<div class="w-full mb-2">
					<div class="flex items-center">
						<i class="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-unlock"></i>
						<input v-model="password" :class='{valid:passwordValidation.valid}' type="password" placeholder="password" class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"/>
            <i class="fas fa-check" :style="{color: passwordValidation.valid ? 'green' : 'red'}">
              <span v-for="(error, index) in passwordValidation.errors" :key="index" class="bg-blue-200 rounded"></span>
            </i>
					</div>
				</div>
        <div class="w-full mb-2">
					<div class="flex items-center">
						<i class="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
						<input v-model.trim="checkPassword" type="password" placeholder="confirm password" class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"/>
            <i class="fas fa-check" :style="{color: passwordsFilled && samePasswords ? 'green' : 'red'}">
              <span v-if="passwordValidation.errors.length === 0 && passwordsFilled && !samePasswords" key="passmatch" class="bg-blue-200 rounded"></span>
            </i>
					</div>
          <span class="text-gray-500 text-xs">(Password must contain: {{passwordRules.map(rule => rule.message).join(', ')}})</span>
				</div>
				<p v-if="statusMessage" class="text-md text-red-400 pb-4">{{ statusMessage }}</p>
				<div class="mt-8 flex justify-evenly">
					<button @click="cancel()" class="bg-yellow-400 text-xs hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
						Cancel
					</button>
          <button @click="signup()" class="bg-yellow-400 text-xs text-black font-bold py-2 px-4 rounded hover:bg-yellow-300">
						Register
					</button>
				</div>
			</div>
		</form>
	</div>
</template>
