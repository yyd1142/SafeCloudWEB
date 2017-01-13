<template>
    <div id="child">
        <mt-header fixed :title="myTitle">
            <router-link :to="link" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
    </div>
</template>

<script>
export default {
    props: ['myTitle', 'link']
}
</script>
