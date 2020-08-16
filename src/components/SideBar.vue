<template>
    <ul class="side-bar" :class="sideBar ? 'show' : ''">
        <li><router-link to="">الرئيسية</router-link></li>
        <li><router-link to="">نبذه عنا</router-link></li>
        <li><router-link to="">الخبراء</router-link></li>
        <li><router-link to="">سؤال وجواب</router-link></li>
        <li><router-link to="">اختبارات كورونا</router-link></li>
        <li><router-link to="">اتصل بنا</router-link></li>
        <li><router-link to="">انضم كخبير</router-link></li>
    </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "side-bar",
    computed: { ...mapGetters(["sideBar"]) }
};
</script>

<style lang="scss" scoped>
.side-bar {
    position: absolute;
    top: 14.666vw;
    left: -100%;
    width: 80.266vw;
    height: 100%;
    background-color: #fff;
    z-index: 11;
    list-style: none;
    transition: all 0.3s linear;
    direction: rtl;
    padding-top: 16vw;
    li {
        width: 51.733vw;
        margin: 12.8vw;
        text-align: center;
        cursor: pointer;
        &:hover {
            filter: rightness(1.15);
        }
        a {
            text-decoration: none;
            font-family: LoewBold;
            font-size: 4.533vw;
            color: #1d428b;
        }
    }
}
.side-bar.show {
    left: 0;
}
</style>
