<template>
    <div>
        <div class="right__con">
            <div @click="classChooseHandler(1)" :class="['con-item', articleType == 1 && 'con-item-active']">
                <img src="../../images/code.png" />
                <p>技术</p>
            </div>
            <div @click="classChooseHandler(2)" :class="['con-item', articleType == 2 && 'con-item-active']">
                <img src="../../images/left.png" />
                <p>生活</p>
            </div>
            <div @click="classChooseHandler(3)" :class="['con-item', articleType == 3 && 'con-item-active']">
                <img src="../../images/hobby.png" />
                <p>爱好</p>
            </div>
        </div>
        <div class="right__con">
            <router-link to="/write" class="con-item">
                <img src="../../images/write.png" />
                <p>写文章</p>
            </router-link>
            <router-link v-if="false" to="/write" class="con-item">
                <img src="../../images/resume.png" />
                <p>看简历</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articleType: 0
        }
    },
    methods: {
        classChooseHandler(val) {
            if (this.articleType == val) {
                this.articleType = 0;
                return;
            }
            this.articleType = val;
        }
    }
}
</script>

<style scoped>
.right__con {
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 75px;
    background: #fff;
    margin-left: 6px;
    padding: 20px 0;
    border-radius: 4px;
    margin-bottom: 10px;
}
.con-item {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    width: 40px;
    cursor: pointer;
}
.con-item img {
    width: 40px;
    margin-bottom: 8px;
}
.con-item:hover p {
    font-size: 15px;
}
.con-item:hover img {
    width: 45px;
}
.con-item-active img {
    width: 50px;
}
.con-item-active p {
    font-size: 16px;
}
.con-item-active:hover img {
    width: 50px;
}
.con-item-active:hover p {
    font-size: 16px;
}
</style>
