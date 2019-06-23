<template>
    <div class="ui dimmer modals page" :class="[showModal ? 'visible active' : '']">
        <div class="ui modal" :class="[showModal ? 'visible active' : '']" :style="[showModal ? { display: 'block' } : { display: 'none' } ]">
            <i v-if="showCloseIcon" class="close icon" @click="close"></i>
            
            <div class="header">
                <slot name="header">
                header
                </slot>
            </div>
 
            <div class="content">
                <slot name="content">
                    <p>Content</p>
                </slot>
            </div>
 
            <div class="actions">
                <slot name="footer">
                    <div class="ui positive right button" @click="close">
                        OK
                    </div>
                </slot>
            </div>
 
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    model: {
        prop: 'showModal',
        event: 'changed'
    },
    props: {
        showModal: { required: true, type: Boolean, default: false },
        showCloseIcon: { type: Boolean, default: false },
    },
    methods: {
        close () {
            this.$emit('changed', false)
        },
        open () {
            this.$emit('changed', true)
        },
    },
}
</script>
