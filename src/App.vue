<template>
    <div id="app">
        <WaitingList
            :class="screen !== 'small' && waitList ? 'shift-body' : ''"
        ></WaitingList>
        <SideBar></SideBar>
        <div :class="screen !== 'small' && waitList ? 'shrink' : ''">
            <Rectangle1077></Rectangle1077>
            <div v-if="screen === 'small'" :class="waitList ? 'wl-show' : ''">
                <Rectangle988></Rectangle988>
                <Rectangle991></Rectangle991>
                <Rectangle987></Rectangle987>
                <router-link to="" class="book-btn" v-if="!waitList"
                    >حجز عيادة (20 دينار كويتي)</router-link
                >
            </div>
            <div v-else>
                <Rectangle988ML></Rectangle988ML>
                <Rectangle991ML></Rectangle991ML>
            </div>
            <router-view />
        </div>
    </div>
</template>

<script>
import Rectangle1077 from "./components/Rectangle1077";
import Rectangle988 from "./components/Rectangle988";
import Rectangle988ML from "./components/Rectangle988ML";
import Rectangle991 from "./components/Rectangle991";
import Rectangle991ML from "./components/Rectangle991ML";
import Rectangle987 from "./components/Rectangle987";
import WaitingList from "./components/WaitingList";
import SideBar from "./components/SideBar";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "App",
    components: {
        Rectangle1077,
        Rectangle988,
        Rectangle988ML,
        Rectangle991,
        Rectangle991ML,
        Rectangle987,
        WaitingList,
        SideBar
    },
    computed: { ...mapGetters(["screen", "waitList"]) },
    methods: { ...mapActions(["fetchData", "adjustScreen"]) },
    created() {
        this.fetchData();
        this.adjustScreen();
        window.addEventListener("resize", () => {
            this.adjustScreen();
        });
    }
};
</script>
<style lang="scss">
@import "general-settings";
#app {
    max-width: 100vw;
    height: auto;
    margin: auto;
    font-size: $font-size;
    position: relative;
    overflow: hidden;
    transition: all 0.2s;
    .book-btn {
        width: 84.266vw;
        height: 17.866vw;
        border: none;
        border-radius: 2.666vw;
        background-image: linear-gradient(
            107deg,
            #e83866 -26%,
            #e83866 -17%,
            #e57a3c 84%,
            #e57a3c 112%
        );
        position: fixed;
        bottom: 6.666vw;
        right: calc(8vw + 50vw - 100vw / 2);
        z-index: 9;
        font-family: LoewExtraBold;
        font-size: 4.266vw;
        color: #ffffff;
        text-decoration: none;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wl-show {
        position: relative;
        right: 56vw;
    }
    .shrink {
        width: 81.979vw;
        position: relative;
        left: 18.02vw;
        opacity: 0.97;
        box-shadow: -1.666vw 9.895vw 1.718vw 0 rgba(29, 66, 139, 0.51);
    }
    .shift-body {
        left: 0;
    }
}
</style>
