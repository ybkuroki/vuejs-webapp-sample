<template>
	<div>
		<a href="#" @click="clickEdit">編集</a>
		
		<Modal v-model="showModal" >
			<template slot="header">
			    書籍編集
			</template>
            <template slot="content">
			    <Message messageType="error" :messages="errors" />
				<div class="ui form">
					<InputBox v-model="book.title" title="書籍タイトル" :isValide="errors.hasOwnProperty('title')" />
					<InputBox v-model="book.isbn" title="ISBN" :isValide="errors.hasOwnProperty('isbn')" />
					<SelectBox v-model="category" title="カテゴリ" :options="categories" />
					<SelectBox v-model="format" title="形式" :options="formats" />
				</div>
			</template>
			<template slot="footer">
				<CommandButton name="キャンセル" className="black" :useDiv="true" @click="bookCancel" />
				<CommandButton name="編集" className="primary right" :useDiv="true" :isLoading="isLoading" @click="bookEdit" />
			</template>
		</Modal>
	</div>
</template>

<script>
import Modal from '../components/modal.vue'
import Message from '../components/message.vue'
import InputBox from "../components/inputbox.vue"
import SelectBox from "../components/selectbox.vue"
import CommandButton from '../components/commandbutton.vue'
import Ajax from '../lib/ajax.js'

export default {
	name: 'Edit',
	props: ['book'],
	data () {
		return {
			category: this.book.category.id,
			format: this.book.format.id,
			errors: [],
			showModal: false,
			isLoading: false
		};
	},
	components: {
		Modal,
		Message,
      	InputBox,
		SelectBox,
		CommandButton
    },
    computed: {
        categories() {
            return this.$store.getters.getCategory
		},
		formats() {
			return this.$store.getters.getFormat
		}
    },
	methods: {
	    clickEdit() {
	         this.showModal = true
        },
		success() {
			this.showModal = false
			this.errors = ''
			location.href='/'
		},
		bookEdit() {
			this.isLoading = true
			var book = new Object();
		
			book.id = this.book.id;
			book.title = this.book.title;
			book.isbn = this.book.isbn;
			book.category = {id: this.category, name: '****'}
			book.format = {id: this.format, name: '****'}
			
			var self = this;
			Ajax.post('/api/book/edit',
				JSON.stringify(book),
				(body) => {
					this.isLoading = false
					self.success()
				},
				(body) => {
					this.isLoading = false
					self.errors = body
				})
		},
		bookCancel() {
			this.errors = '';
		
			this.showModal = false
			location.href='/'
		}
	}
}
</script>