<template>
    <ul class="waiting-list" :class="waitList ? 'show' : ''">
        <li
            v-for="(member, index) in members"
            :key="member.id"
            @click="
                setActive(index);
                setActiveName(member.name);
            "
            :class="index === activeIndex ? 'active-member' : ''"
        >
            <div class="avatar">
                <img
                    :src="
                        member.avatar
                            ? member.avatar
                            : 'images/icons/avatar.png'
                    "
                    alt="avatar"
                />
            </div>
            <div class="info">
                <p class="time">منذ {{ member.time }} دقيقة</p>
                <p class="name">{{ member.name }}</p>
            </div>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    name: "Waiting-List",
    computed: { ...mapGetters(["waitList", "members"]) },
    data() {
        return { activeIndex: 3 };
    },
    methods: {
        ...mapMutations(["setActiveName"]),
        setActive(index) {
            this.activeIndex = index;
        }
    }
};
</script>

<style lang="scss" scoped>
.waiting-list {
    width: 56vw;
    height: 100%;
    position: absolute;
    top: 14.677vw;
    right: -56vw;
    background-color: #fff;
    z-index: 11;
    list-style: none;
    transition: all 0.2s linear;
    direction: rtl;
    li {
        width: 51.733vw;
        padding: 4vw 8vw 4vw 4.533vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        &:hover {
            filter: rightness(1.15);
        }
        &.active-member {
            background-image: url("/images/icons/rectangle-sm.png");
            background-size: cover;
        }
        .avatar {
            width: 9.866vw;
            height: 9.866vw;
            box-shadow: -0.533vw 0.533vw 1.333vw 0 rgba(0, 0, 0, 0.09);
            border: solid 0.2666vw #e9edf0;
            background-color: #ffffff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .info {
            margin-left: 6.4vw;
            text-align: right;
            .time {
                font-family: LoewArabic;
                font-size: 2.667vw;
                text-align: right;
                color: #8c9cbe;
            }
            .name {
                font-family: LoewBold;
                font-size: 4vw;
                color: #1c3668;
            }
        }
    }
}
.waiting-list.show {
    right: 0;
}
@media (min-width: 576px) {
    .waiting-list {
        width: 15.104vw;
        right: auto;
        left: -18.02vw;
        top: 9.635vw;
        li {
            &.active-member {
                background-image: url("/images/icons/rectangle-lg.png");
                background-size: cover;
            }
            justify-content: unset;
            padding: 0;
            padding-right: 0.781vw;
            width: 104%;
            .avatar {
                width: 3.02vw;
                height: 3.02vw;
                margin-left: 0.572vw;
                img {
                    width: 1.041vw;
                    height: 1.458vw;
                }
            }
            .info {
                .time {
                    font-size: 0.572vw;
                }
                .name {
                    font-size: 0.833vw;
                }
            }
        }
        li:not(first-child) {
            padding-top: 0.625vw;
            padding-bottom: 0.885vw;
        }
    }
}
</style>
