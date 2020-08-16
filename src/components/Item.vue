<template>
    <div class="item" @click="chooseItem(data)">
        <div class="cover">
            <img
                :src="data.url"
                alt="poster"
                class="item-image"
                v-if="data.url"
            />
            <img
                src="images/author/video-overlay.png"
                alt="poster"
                class="poster"
                v-if="data.type === 'video'"
            />
            <img
                src="images/author/file-overlay.png"
                alt="poster"
                class="poster"
                v-else
            />
            <FileType
                :data="data"
                bottom="3.04"
                right="3.253"
                fontSize="3.466"
                v-if="screen === 'small'"
            ></FileType>
            <FileType
                :data="data"
                bottom="0.593"
                right="0.635"
                fontSize="0.677"
                v-else
            ></FileType>
        </div>
        <h4 class="title" v-text="data.title"></h4>
        <div class="report">
            <div>
                <span class="price" v-text="data.price"></span>
                <span class="currency"> دينار كويتي </span>
            </div>
            <div class="downloads">
                {{ data.downloads }}
                <img src="images/icons/download.png" alt="icon" />
            </div>
        </div>
    </div>
</template>

<script>
import FileType from "./FileType";
import { mapGetters, mapMutations } from "vuex";
export default {
    name: "item",
    props: ["data"],
    components: { FileType },
    computed: { ...mapGetters(["screen"]) },
    methods: {
        ...mapMutations(["chooseStoreItem", "chooseBroadcastItem"]),
        chooseItem() {
            if (this.$route.path === "/store") {
                this.chooseStoreItem(this.data);
            }
            if (this.$route.path === "/broadcast") {
                this.chooseBroadcastItem(this.data);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.item {
    &:hover {
        filter: brightness(1.15);
        transition: filter 0.6s;
    }
    &:last-child {
        margin-bottom: 3.333vw;
    }
    &:nth-child(2n + 1) {
        margin-left: 3.2vw;
    }
    width: 40.533vw;
    height: 58.133vw;
    margin-top: 6.666vw;
    position: relative;
    cursor: pointer;
    .cover {
        position: relative;
        background-image: linear-gradient(
            321deg,
            #10306f 100%,
            rgba(29, 66, 139, 0) 40%
        );
        width: 40.533vw;
        height: 40.533vw;
        img {
            width: 40.533vw;
            height: 40.533vw;
            border-radius: 5px;
        }
        .poster {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    .title {
        font-family: LoewBold;
        font-size: 2.666vw;
        color: #ffffff;
        max-width: 100%;
    }
    .report {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        right: 0;
        .price {
            font-family: LoewBold;
            font-size: 3.466vw;
            color: #8191b2;
        }
        .currency {
            font-family: LoewMedium;
            font-size: 2.4vw;
            color: #8191b2;
        }
        .downloads {
            font-family: LoewArabic;
            font-size: 2.666vw;
            color: #8191b2;
            float: left;
            align-self: flex-end;
            img {
                width: 3.733vw;
            }
        }
    }
}
@media (min-width: 576px) {
    .item {
        margin-top: 0;
        max-width: 10.208vw;
        height: 14.583vw;
        margin-left: 1.87%;
        margin-bottom: 1.979vw;
        &:nth-child(2n + 1) {
            margin-left: 1.87%;
        }
        .cover {
            width: 10.208vw;
            height: 10.208vw;
            img {
                width: 10.208vw;
                height: 10.208vw;
            }
        }
        .title {
            font-size: 0.729vw;
            margin-top: 0.885vw;
            line-height: 1.041vw;
        }
        .report {
            bottom: -0.468vw;
            .price {
                font-size: 0.989vw;
            }
            .currency {
                font-size: 0.677vw;
            }
            .downloads {
                font-size: 0.729vw;
                img {
                    width: 0.729vw;
                }
            }
        }
    }
}
</style>
