<template>
    <div class="article">
        <div class="article__title">
            标题
        </div>
        <div class="article__summary">
            概要
        </div>
        <div class="article__footer">
            <div class="article__footer-item">
                <img class="article__footer-icon article__footer-icon-up " src="../../images/zan1.png" />
                <span>22222</span>
            </div>
            <div class="article__footer-item">
                <img class="article__footer-icon article__footer-icon-down" src="../../images/zan1.png" />
                <span>22222</span>
            </div>
            <div class="article__footer-item">
                <img class="article__footer-icon" src="../../images/edit.png" />
                <span>评论</span>
            </div>
            <div class="article__footer-item">
                <img class="article__footer-icon" src="../../images/heart1.png" />
                <span>收藏</span>
            </div>
            <div class="article__footer-item">
                <img class="article__footer-icon" src="../../images/collection.png" />
                <span>感谢</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.article {
    background: #fff;
    padding: 10px;
    border-radius: 4px;
}
.article__title {
    font-size: 20px;
    font-weight: bold;
}
.article__summary {
    font-size: 15px;
    padding: 6px 0;
}
.article__footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.article__footer-item {
    margin-right: 18px;
}
.article__footer-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    vertical-align: middle;
}
.article__footer-icon-down {
    transform: rotate(180deg);
}
</style>
