<template>
    <div class="img__com clearfix">
        <div v-for="item in imgData" class="img__com-item pull-left">

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                imgData: [1,2,3,4,5,6,7,8,9]
            }
        }
    }
</script>
<style>
    .img__com-item {
        width: 400px;
        height: 400px;
        border: 2px solid black;
        margin-left: 20px;
        margin-bottom: 20px;
    }
</style>