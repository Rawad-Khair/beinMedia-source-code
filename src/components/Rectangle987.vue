<template>
    <div class="author-banner">
        <div class="author">
            <span class="busy-btn">مشغول بإستشارة</span>
            <img
                src="images/author/author.png"
                alt="author"
                class="author-img"
            />
            <div class="info">
                <h2 class="title">العیادة الرقمية</h2>
                <p class="author-name">لـ د. هند الناهض</p>
                <div class="rating">
                    <i class="fa fa-star full"></i>
                    <i class="fa fa-star full"></i>
                    <i class="fa fa-star full"></i>
                    <i class="fa fa-star empty"></i>
                    <span class="ranking-title">تقييم</span>
                </div>
            </div>
        </div>
        <LazyNav></LazyNav>
    </div>
</template>

<script>
import LazyNav from "./LazyNav";
export default {
    name: "nav-banner",
    components: { LazyNav }
};
</script>

<style lang="scss" scoped>
.author-banner {
    width: 100%;
    height: 45.066vw;
    background-color: #153064;
    opacity: 0.97;
    direction: rtl;
    position: relative;
    .author {
        display: flex;
        position: relative;
        .author-img {
            margin-right: calc(8vw - 2vw);
            margin-top: calc(6.666vw - 2vw);
            width: 17.6vw;
            height: 17.6vw;
        }
        .info {
            margin-right: 3.2vw;
            margin-top: 8vw;
            .title {
                font-family: LoewExtraBold;
                font-size: 2.93vw;
                font-weight: 8vw;
                color: #ffffff;
            }
            .author-name {
                font-family: LoewBold;
                font-size: 4vw;
                color: #a7b5d2;
            }
            .rating {
                .fa-star {
                    font-size: 2.93vw;
                    margin-left: 0.586vw;
                }
                .full {
                    color: #e56e43;
                }
                .empty {
                    color: #435f95;
                }
                .ranking-title {
                    width: 8.266vw;
                    height: 3.2vw;
                    font-family: LoewArabic;
                    font-size: 2.93vw;
                    text-align: right;
                    color: #a7b5d2;
                    margin-right: 1.306vw;
                }
            }
        }
        .busy-btn {
            width: 25.333vw;
            height: 6.133vw;
            border-radius: 4.266vw;
            background-image: linear-gradient(
                123deg,
                #e83866 -30%,
                #e83866 -23%,
                #e57a3c 56%,
                #e57a3c 77%
            );
            position: absolute;
            top: 12.533vw;
            left: 7.733vw;
            font-family: LoewExtraBold;
            font-size: 2.4vw;
            font-weight: 800;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
