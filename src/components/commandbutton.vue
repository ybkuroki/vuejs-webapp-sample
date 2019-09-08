<template>
    <div v-if="useDiv" class="ui button" :class="[isLoading ? 'loading' : '', className]" @click="onClick">
        <slot>{{ name }}</slot>
    </div>
    <button v-else class="ui button" :class="[isLoading ? 'loading' : '', className]" @click="onClick">
        {{ name }}
    </button>
</template>

<script>
export default {
    name: 'CommandButton',
    props: {
        name: {type: String, required: true},
        className: {type: String},
        isLoading: {type: Boolean, default: false},
        useDiv: {type: Boolean, default: false}
    },
    methods: {
        onClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>
