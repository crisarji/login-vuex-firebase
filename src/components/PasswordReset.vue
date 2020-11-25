<script>
export default {
	data() {
		return {
			email: ''
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
    statusSucceeded() {
      return this.status?.code === 'Success';
    }
  },
	methods: {
		resetPassword() {
			this.$emit('do-reset', {email: this.email})
		}
	}
}
</script>
<template>
	<div class="modal">
		<div class="modal-content">
			<div @click="$emit('do-close')" class="close w-8 h-8 bg-red-400 text-white text-center rounded hover:text-red-200">X</div>
			<h2 class="text-lg font-bold">Password Reset</h2>
			<p v-if="statusSucceeded">{{statusMessage}}</p>
			<div v-else>
				<p class="py-4">Type your email for a password reset</p>
				<form class="py-2" @submit.prevent>
					<input v-model.trim="email" type="email" placeholder="you@email.com" class="px-4 w-full border rounded py-2 text-gray-700"/>
				</form>
				<p v-if="statusMessage" class="text-md text-red-400 pb-4">{{ statusMessage }}</p>
				<button @click="resetPassword()" class="button w-full bg-blue-400 text-white rounded h-12">Reset</button>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.modal {
		display: flex;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(#333, 0.5);
	}

	.modal-content {
		position: relative;
		margin: auto;
		width: 100%;
		max-width: 400px;
		background: white;
		padding: 40px;
		border-radius: 5px;
		box-shadow: 0 0 5px 0 rgba(#333, 0.5);
		z-index: 999;
	}

	.close {
		position: absolute;
		top: 10px;
		right: 10px;
		padding: 5px;
		cursor: pointer;
		transition: 0.15s;
	}
</style>
