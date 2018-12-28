<template>
    <div>
        <div class="title-box">
            <textarea class="the-title" placeholder="标题" />
        </div>
        <div>
            <div ref="editor" style="text-align:left"></div>
        </div>
        <button v-on:click="getContent">查看内容</button>
    </div>
</template>

<script>
import E from "wangeditor";
export default {
    name: "editor",
    data() {
        return {
            editorContent: ""
        };
    },
    methods: {
        getContent: function() {
            alert(this.editorContent);
        }
    },
    mounted() {
        var editor = new E(this.$refs.editor);
        editor.customConfig.onchange = html => {
            this.editorContent = html;
        };
        editor.create();
    }
};
</script>

<style>
.title-box {
    text-align: center;
    margin-bottom: 20px;
}
.the-title {
    height: 50px;
    font-size: 24px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    background: rgb(246, 246, 246);
    width: 600px;
}
</style>
