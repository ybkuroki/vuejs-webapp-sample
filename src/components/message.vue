<template>
<div v-if="Object.keys(messages).length > 0" class="ui message" :class="messageType">
    <ul v-if="Object.keys(messages).length > 1">
        <li v-for="message in messages">{{ message }}</li>
    </ul>
    <p v-if="Object.keys(messages).length == 1">{{ messages[Object.keys(messages)[0]] }}</p>
</div>
</template>

<script>
export default {
	name: 'Message',
	props: {
	    messageType: {type: String, default: 'info'},
	    messages: {required: true}
    }
}
</script>
