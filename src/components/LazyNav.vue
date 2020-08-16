<template>
    <div class="lazy-nav">
        <div class="scroll-view">
            <div class="h-scroll">
                <router-link exact to="/">نبذة عن هند</router-link>
                <router-link to="/store">متجر</router-link>
                <router-link to="/broadcast">برودكاست</router-link>
                <router-link to="/courses">
                    <i
                        class="fa fa-arrow-right arrow"
                        v-if="this.$route.params.id !== undefined"
                    ></i>
                    كورسات
                </router-link>
                <router-link to="/book-clinic"
                    >حجز عيادة (20 دينار كويتي)</router-link
                >
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ImagesSlider"
};
</script>
<style lang="scss" scoped>
.scroll-view {
    width: 100%;
    margin: auto;
    overflow: hidden;
    .h-scroll {
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        transition: left 0.7s;
        overflow-x: auto;
        overflow-y: hidden;
        margin-left: 10.666vw;
        a {
            text-decoration: none;
            margin: 8vw 6.933vw 4.533vw 6.133vw;
            flex-shrink: 0;
            font-family: LoewMedium;
            font-size: 3.2vw;
            color: #8191b2;
            direction: rtl;
            &.router-link-active {
                font-family: LoewExtraBold;
                font-size: 3.2vw;
                color: #ffffff;
            }
            .arrow {
                margin-left: 1.6vw;
            }
        }
    }
}
@media (min-width: 576px) {
    .scroll-view {
        overflow: unset;
        .h-scroll {
            align-items: center;
            a {
                font-size: 0.937vw;
                margin: 0.572vw 0 0 2.031vw;
                align-self: center;
                &.router-link-active {
                    font-size: 0.937vw;
                    position: relative;
                    &:after {
                        content: "";
                        display: block;
                        width: 1.302vw;
                        height: 0.052vw;
                        background: #fff;
                        position: absolute;
                        bottom: -0.598vw;
                        right: 0;
                    }
                }
                .arrow {
                    margin-left: 0.312vw;
                }
            }
        }
    }
}
</style>
