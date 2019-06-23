<template>
    <div class="field">
        <label>{{ title }}</label>
        <p>{{ name }}</p>
    </div>
</template>

<script>
export default {
	name: 'LabelGroup',
	props: [
		'title',
		'name'
	]
}
</script>