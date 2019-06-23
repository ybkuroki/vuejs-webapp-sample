<template>
    <div class="item" :class="[selected ? 'active selected' : '']" @click="clickItem" >{{ name }}</div>
</template>

<script>
export default {
    name: 'SelectItem',
    data() {
        return {
        }
    },
    props: {
        id: {type: Number, required: true},
        name: {type: String, required: true},
        selected: {type: Boolean}
    },
    methods: {
        clickItem() {
            this.$emit('click', this.id)
        }
    }
}
</script>
