<template>
    <InputBox v-model="query" className="ui fluid action left icon input" placeholder="タイトル検索">
        <i class="search icon" slot="label"></i>
        <CommandButton name="検索" className="primary" :isLoading="isLoading" @click.prevent="searchBook" slot="button" />
    </InputBox>
</template>

<script>
import InputBox from '../components/inputbox.vue'
import CommandButton from '../components/commandbutton.vue'

export default {
    name: 'search',
    props: {
        isLoading: {type: Boolean, default: false}
    },
    data () {
        return {
            query: ''
        };
    },
    components: {
        InputBox,
        CommandButton
    },
    methods: {
       searchBook : function () {
		 this.$emit('search', this.query)
       }
    }
}
</script>