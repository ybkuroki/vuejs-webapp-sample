<template>
    <div class="field">
        <label for="title">{{ title }}</label>
        <div class="ui selection dropdown" :class="{' active visible':isActive}" @click='clickDropdown'>
            <i class="dropdown icon"></i>
            <div class="text">{{ selectedValue }}</div>
            <div class="menu transition" :class="{' visible':isActive}" :style="{'display: block !important':isActive}">
                <SelectItem ref="items" :name="option.name" :id="option.id" :selected="option.id == value" v-for="option in options" :key="option.id" @click="clickItem" />
            </div>
        </div>
    </div>
</template>

<script>
// cf https://qiita.com/huigo/items/a888dcee8f46d62bb9e3
import SelectItem from './selectitem.vue'

export default {
    name: 'SelectBox',
    props: {
        title: {type: String, default: 'title'},
        value: {required: true},
        options: {type: Array, required: true}
    },
    data() {
        return {
            selectedValue: '',
            isActive: false
        }
    },
    components: {
        SelectItem
    },
    watch: {
        options() {
            // 項目リストがcreated時に取得できないことがあるため、watchで監視
            this.selectedValue = this.options.find((option) => option.id == this.value).name
        }
    },
    created() {
        // 初期値を設定
        var defaultValue = this.options.find((option) => option.id == this.value)
        if (defaultValue) this.selectedValue = defaultValue.name
    
        // ドロップダウンの外側をクリック時に閉じる動作
        this.listen(window, 'click', function(e){
            if (!this.$el.contains(e.target)){
                this.isActive = false
            }
        }.bind(this))
    },
    destroyed() {
        // イベント破棄
        if (this._eventRemovers){
            this._eventRemovers.forEach(function(eventRemover){
                eventRemover.remove()
            })
        }
    },
    methods: {
        clickDropdown() {
            // ドロップダウンクリック時の項目リスト表示可否判定
            this.isActive == false ? this.isActive = true : this.isActive = false
        },
        clickItem(index) {
            // メニュー項目クリック時のvalue変更とイベント発火
            this.selectedValue = this.options.find((option) => option.id == index).name
            this.$emit('input', Number(index))
			this.$emit('change')
        },
        listen(target, eventType, callback) {
            // イベントリスナーにドロップダウンの外側をクリック時の処理を追加
            if (!this._eventRemovers){
                this._eventRemovers = []
            }
            target.addEventListener(eventType, callback)
            this._eventRemovers.push( {
                remove :function() {
                    target.removeEventListener(eventType, callback)
                }
            })
        }
    }
}
</script>
