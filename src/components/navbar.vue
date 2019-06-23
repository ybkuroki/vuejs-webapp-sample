<template>
    <div class="ui grid">
        <div class="computer tablet only row">
            <div class="ui fixed top menu">
                <a class="brand item" href="/">{{ title }}</a>
                <slot name="content"></slot>
            </div>
        </div>
        <div class="mobile only row">
            <div class="ui fixed top menu">
                <a class="brand item" href="/">{{ title }}</a>
                <slot name="mobile-left-content"></slot>
                <div class="right menu">
                    <slot name="mobile-right-content"></slot>
                    <div v-if="isToggle" id="menu" class="ui right simple dropdown item">
                        <i class="content icon" @click="clickMenu"></i>
                        <div class="menu">
                            <slot name="toggle-content"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.mobile.row{
	padding-top: 0px !important;
	margin-top: 0px !important;
}

@media (max-width: 767px) {
  .main.container {
    padding: 5em 2em 2em !important;
  }
}
</style>

<script>
export default {
    name: 'NavBar',
    props: ['title', 'isToggle'],
    methods: {
        clickMenu() {
        }
    }
}
</script>

