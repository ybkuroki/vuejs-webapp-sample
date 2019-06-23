<template>
    <table class="ui selectable striped table">
    	<thead>
        	<tr>
            	<th>書籍ID</th><th>書籍タイトル</th><th>カテゴリ</th><th>形式</th><th colspan="2">操作</th>
        	</tr>
        </thead>
        <tbody>
           	<tr is="Book" v-for="book in books" :book="book" :key="book.id">
           	</tr>
        </tbody>
        <tfoot>
            <tr>
                <th colspan="6">
                    <Pagination ref="pagination"
                        :pageCount="totalPages" 
                        containerClass="ui right floated pagination menu"
                        prevLinkClass="icon item"
                        nextLinkClass="icon item"
                        pageLinkClass="item"
                        :noLiSurround="true"
                        @clickHandler="clickPage" >
                        <i slot="prevContent" class="left chevron icon"></i>
                        <i slot="nextContent" class="right chevron icon"></i>
                    </Pagination>
                </th>
            </tr>
        </tfoot>
    </table>
</template>

<script>
import Book from "../model/book.vue"
import Pagination from "../components/paginate.vue"

export default {
    name: 'BookList',
    props: ['books', 'totalPages'],
    data () {
        return {
        }
    },
    components: {
        Book,
        Pagination
    },
    methods: {
        clickPage(page) {
            this.$emit('clickPage', page)
        }
    }
}
</script>