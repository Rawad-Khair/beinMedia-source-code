<template>
    <div class="menus-banner">
        <img
            src="images/icons/menu-btn.svg"
            class="menu-btn"
            alt="menu button"
            @click="toggleSideBar"
        />
        <div
            class="waiting-list"
            @click="toggleWaitList"
            :class="screen !== 'small' && waitList ? 'shift' : ''"
        >
            <i class="fa fa-arrow-right arrow" v-if="screen !== 'small'"></i>
            <span class="count">14</span>
            <span class="title">قائمة الانتظار</span>
        </div>
        <div class="account" v-if="screen !== 'small'">
            <p v-if="screen !== 'small'" class="greet">
                مرحبا بك <span class="name">{{ activeMember }}</span>
            </p>
            <span class="profile">
                <img
                    src="images/icons/user.png"
                    alt="profile"
                    class="profile-img"
                />
            </span>
            <span class="bell">
                <span class="notification"></span>
                <img
                    src="images/icons/bell-bg.png"
                    alt="notification"
                    class="bell-img"
                />
            </span>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    name: "menus-banner",
    methods: {
        ...mapMutations(["toggleWaitList", "toggleSideBar"])
    },
    computed: { ...mapGetters(["screen", "waitList", "activeMember"]) }
};
</script>

<style lang="scss" scoped>
.menus-banner {
    width: 100%;
    height: 14.666vw;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu-btn {
        width: 7.12vw;
        height: 4.266vw;
        margin-left: 8vw;
        cursor: pointer;
    }
    .waiting-list {
        margin-right: 8vw;
        direction: rtl;
        cursor: pointer;
        font-size: 3.466vw;
        span {
            font-family: "LoewExtraBold";
            color: #1d428b;
        }
        .count {
            margin-left: 1.333vw;
        }
    }
}
@media (min-width: 576px) {
    .menus-banner {
        width: 100%;
        height: 4.843vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 3.437vw;
        padding-left: 3.437vw;
        .menu-btn {
            display: none;
        }
        .account {
            position: absolute;
            top: 1.302vw;
            right: 3.442vw;
            display: flex;
            .profile {
                width: 2.343vw;
                height: 2.343vw;
                background: #e9edf0;
                border: 0.104vw solid #a7b5d2;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 2.677vw;
                .profile-img {
                    width: 1.458vw;
                    height: 1.458vw;
                }
            }
            .bell {
                margin-top: 0.104vw;
                .bell-img {
                    width: 1.406vw;
                    height: 1.718vw;
                }
            }
            .greet {
                margin-right: 0.625vw;
                font-family: LoewBold;
                font-size: 0.833vw;
                color: #1c3668;
                .name {
                    font-family: LoewExtraBold;
                    font-size: 0.989vw;
                    padding-right: 0.364vw;
                }
            }
        }
        .waiting-list {
            direction: rtl;
            cursor: pointer;
            font-size: 1.041vw;
            span {
                font-family: "LoewExtraBold";
                color: #1d428b;
            }
            .count {
                margin-left: 0.26vw;
            }
            .arrow {
                margin-left: 0.677vw;
                color: #1d428b;
            }
        }
        .waiting-list.shift {
            position: absolute;
            top: 5.156vw;
            left: -12.76vw;
            .arrow {
                position: absolute;
                top: -3.255vw;
                left: 12.5vw;
                transform: rotate(180deg);
                transition: transform 0.2s;
            }
            &:after {
                content: "";
                display: block;
                width: 1.302vw;
                height: 0.052vw;
                background: #1d428b;
                position: absolute;
                bottom: -0.598vw;
                right: 0;
            }
        }
    }
}
</style>
