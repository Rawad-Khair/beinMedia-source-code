<template>
    <div class="chosen-course-video">
        <video
            controls
            loop
            :poster="
                data.url
                    ? '../' + data.url
                    : screen === 'small'
                    ? '../images/author/intro-image.png'
                    : '../images/author/broad-image-big.png'
            "
        ></video>
        <img
            :src="'../' + 'images/author/video-overlay.png'"
            alt="video poster"
            class="poster"
        />
        <h4 class="title" v-text="data.title"></h4>
        <FileType
            v-if="screen === 'small'"
            :data="data"
            bottom="26.666"
            right="8"
            fontSize="4"
        ></FileType>
        <FileType
            v-else
            :data="data"
            bottom="9.807"
            right="2.416"
            fontSize="0.781"
        ></FileType>
        <div class="report">
            <div>
                <span class="price" v-text="data.price"></span>
                <span class="currency"> دينار كويتي </span>
            </div>
            <div class="downloads">
                {{ data.downloads }}
                <img :src="'../' + 'images/icons/download-2x.png'" alt="icon" />
            </div>
        </div>
    </div>
</template>

<script>
import FileType from "./FileType";
import { mapGetters } from "vuex";
export default {
    name: "chosen-course-video",
    props: ["data"],
    components: { FileType },
    computed: { ...mapGetters(["screen"]) }
};
</script>

<style lang="scss" scoped>
.chosen-course-video {
    width: 100%;
    height: auto;
    position: relative;
    background-image: linear-gradient(
        321deg,
        #10306f 100%,
        rgba(29, 66, 139, 0) 40%
    );
    direction: rtl;
    video {
        width: 100%;
        height: 100%;
    }
    .poster {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    .title {
        font-family: LoewArabic;
        font-size: 3.733vw;
        font-weight: 500;
        text-align: right;
        color: #ffffff;
        position: absolute;
        top: 41.866vw;
        right: 8vw;
        z-index: 2;
        width: 60%;
    }
    .report {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 2.666vw 8vw 5.306vw 5.36vw;
        z-index: 2;
        .price {
            font-family: LoewBold;
            font-size: 4vw;
            color: #8191b2;
        }
        .currency {
            font-family: LoewMedium;
            font-size: 2.666vw;
            color: #8191b2;
        }
        .downloads {
            font-family: LoewArabic;
            font-size: 4.266vw;
            color: #8191b2;
            float: left;
            align-self: flex-end;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 5.866vw;
                margin-right: 1.76vw;
            }
        }
    }
    .shopping-btn {
        position: absolute;
        top: 5.04vw;
        left: 5.466vw;
        display: flex;
        align-items: center;
        z-index: 8;
        .shopping-cart {
            position: absolute;
            top: 1.893vw;
            left: 1.813vw;
        }
        span {
            font-family: LoewBold;
            font-size: 2.666vw;
            color: #ffffff;
            margin-left: 2.213vw;
        }
    }
}
@media (min-width: 576px) {
    .chosen-course-video {
        max-width: 57.474%;
        float: left;
        margin-right: 2.01vw;
        video {
            width: 100%;
            max-height: 32.031vw;
        }
        .poster {
            width: 100%;
            height: 100%;
        }
        .title {
            font-size: 1.51vw;
            font-family: LoewMedium;
            bottom: 4.723vw;
            right: 2.416vw;
            top: auto;
            max-width: 26.041vw;
        }
        .report {
            padding: 0 2.427vw 2.432vw 1.932vw;
            .price {
                font-size: 1.25vw;
            }
            .currency {
                font-size: 0.833vw;
            }
            .downloads {
                font-size: 1.093vw;
                img {
                    width: 1.406vw;
                    margin-right: 0.343vw;
                }
            }
        }
        .shopping-btn {
            top: 2.406vw;
            left: 2.609vw;
            .shopping-cart {
                width: 1.666vw;
                top: 0.63vw;
                left: 0.614vw;
            }
            span {
                font-size: 0.833vw;
                margin-left: 0.781vw;
            }
        }
    }
}
</style>
