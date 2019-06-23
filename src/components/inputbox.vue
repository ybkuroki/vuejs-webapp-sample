<template>
	<div :class="[isValide ? 'error' : '', className]">
		<slot name="label">
			<label for="title">{{ title }}</label>
		</slot>
		<input ref="input" :type="typeName" :placeholder="placeholder" :value="value" @input="onInput($event.target.value)" @keydown.enter="onEnter" />
		<slot name="button"></slot>
	</div>
</template>

<script>
export default {
	name: 'InputBox',
	props: {
		className: {type: String, default: 'field'},
        title: {type: String, default: 'title'},
        value: {required: true},
        typeName: {type: String, default: 'text'}, 
        placeholder: {type: String, default: ''},
        isValide: {type: Boolean, default: false},
    },
	methods: {
		onEnter(event) {
           this.$emit('enter', event)
        },
		onInput(value) {
			this.$emit('input', value)
		}
	}
}
</script>