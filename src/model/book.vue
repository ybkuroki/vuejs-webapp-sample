<template>
	<tr>
		<td>{{ book.id }}</td>
		<td><Detail :book="book" /></td>
		<td>{{ book.category.name }}</td>
		<td>{{ book.format.name }}</td>
		<td><Edit :book="book" /></td>
		<td><a href="#" @click.prevent="bookDelete">削除</a></td>
	</tr>
</template>

<script>
import Detail from '../views/detail.vue'
import Edit from '../views/edit.vue'
import Ajax from '../lib/ajax.js'

export default {
	name: 'Book',
	props: [ 'book' ],
	components: {
		'Detail': Detail,
		'Edit': Edit
	},
	methods: {
		bookDelete() {
			var self = this;
			Ajax.post('/api/book/delete',
				JSON.stringify(self.book),
				() => {},
				() => {})

			location.href='/'
		}
	}
}
</script>