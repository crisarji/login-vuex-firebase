<script>
export default {
	name: 'LoginForm',
	data() {
		return {
			loginForm: {
				email: '',
				password: '',
			},
		}
	},
	methods: {
		login() {
			this.$emit('do-login', {
				email: this.loginForm.email,
				password: this.loginForm.password,
			})
		}
	}
}
</script>
<template>
	<div>
		<div class="absolute w-4/5 dt:w-2/6 bg-white rounded" style="transform: translate(-50%, -50%); top: 50%; left: 50%">
			<div class="flex justify-center -mt-10">
				<img class="border-2 w-20 h-20 rounded-full" src="./../assets/visuals/drops.jpg"/>
			</div>
			<div class="px-12 py-10">
				<div class="w-full mb-2">
					<div class="flex items-center">
						<i class="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-at"></i>
						<input v-model.trim="loginForm.email" type="text" placeholder="email" class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"/>
					</div>
				</div>
				<div class="w-full mb-2">
					<div class="flex items-center">
						<i class="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
						<input v-model.trim="loginForm.password" type="password" placeholder="password" class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700"/>
					</div>
				</div>
				<div class="w-full my-4">
					<slot name="message" />
				</div>
				<div class="w-full my-4">
					<div class="flex justify-between">
						<a @click="$emit('toggle-signup')" class="font-bold text-sm text-center text-blue-600 hover:text-blue-dark">Create Account</a>
						<a @click="$emit('toggle-password-reset')" class="font-bold text-sm text-center text-blue-600 hover:text-blue-dark" href="#">Forgot Password?</a>
					</div>
				</div>
				<div class="mt-8 flex justify-end">
					<button @click="login()" class="bg-yellow-400 text-xs hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded">
						SIGN IN
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

