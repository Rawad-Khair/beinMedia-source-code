<template>
    <div class="course">
        <router-link :to="'/courses/' + data.id">
            <div class="poster-container">
                <img :src="data.url" alt="course poster" class="poster" />
                <div class="videos-count">
                    <span class="count"> {{ data.videosCount }} فیدیو </span>
                    <img
                        src="images/icons/course.png"
                        alt="cam icon"
                        class="cam-icon"
                    />
                </div>
            </div>
            <h4 class="title" v-text="data.title"></h4>
            <div class="price">
                <span class="value" v-text="data.price"></span>
                <span class="currency"> دينار كويتي </span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "course",
    props: ["data"]
};
</script>

<style lang="scss" scoped>
.course {
    &:hover {
        filter: brightness(1.15);
        transition: filter 0.6s;
        cursor: pointer;
    }
    &:last-child {
        margin-bottom: 16vw;
    }
    width: 100%;
    height: 62.133vw;
    padding-right: 8.533vw;
    padding-left: 7.733vw;
    opacity: 0.97;
    background-color: #153064;
    position: relative;
    .poster-container {
        position: relative;
        .poster {
            width: 84.266vw;
            height: 40.533vw;
        }
        .videos-count {
            position: absolute;
            direction: rtl;
            bottom: 3.2vw;
            right: 5.066vw;
            display: flex;
            align-items: center;
            .count {
                font-family: LoewArabic;
                font-size: 2.666vw;
                color: #ffffff;
                margin-left: 1.76vw;
            }
            .cam-icon {
                margin-top: 0.8vw;
            }
        }
    }
    .title {
        padding-left: 10.4vw;
        padding-top: 1.333vw;
        height: 10.933vw;
        font-family: LoewBold;
        font-size: 3.733vw;
        text-align: right;
        direction: rtl;
        color: #ffffff;
    }
    .price {
        position: absolute;
        left: 7.733vw;
        bottom: 5.866vw;
        direction: rtl;
        color: #8191b2;
        .value {
            width: 7.466vw;
            height: 4vw;
            font-family: LoewBold;
            font-size: 4vw;
        }
        .currency {
            width: 14.133vw;
            height: 2.933vw;
            font-family: LoewMedium;
            font-size: 2.4vw;
            margin-right: 1.066vw;
        }
    }
}
@media (min-width: 576px) {
    .course {
        width: 21.197vw;
        height: 14.062vw;
        padding-right: 0;
        padding-left: 2.031vw;
        margin-left: 1.8vw;
        margin-bottom: 3.541vw;
        &:last-child {
            margin-bottom: 3.125vw;
        }
        .poster-container {
            .poster {
                width: 21.198vw;
                height: 10.208vw;
            }
            .videos-count {
                bottom: 0.625vw;
                right: 0.989vw;
                .count {
                    font-size: 0.729vw;
                    margin-left: 0.343vw;
                }
                .cam-icon {
                    margin-top: 0.156vw;
                }
            }
        }
        .title {
            font-size: 0.885vw;
            line-height: 1.407vw;
            padding-top: 1.093vw;
            padding-left: 2.031vw;
            height: 2.135vw;
        }
        .price {
            left: 0;
            bottom: 0;

            .value {
                font-size: 0.989vw;
                width: 1.458vw;
                height: 0.781vw;
            }
            .currency {
                font-size: 0.677vw;
                width: 2.67vw;
                height: 0.572vw;
                margin-right: 0.208vw;
            }
        }
    }
}
</style>
