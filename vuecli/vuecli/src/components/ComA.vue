<template>
    <div>
        <h3 @click="$emit('aa','我是ComA')">我是ComA</h3>
        <slot name="content">
            <p>aa</p>
        </slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>