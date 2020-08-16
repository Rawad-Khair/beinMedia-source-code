<template>
    <div class="home-banner">
        <img src="images/icons/logo.png" class="logo" alt="logo" />
        <div class="author">
            <img src="images/icons/home.png" alt="home" class="home-icon" />
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
            <span class="busy-btn">مشغول بإستشارة</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "nav-banner"
};
</script>

<style lang="scss" scoped>
.home-banner {
    width: 100%;
    height: 9.531vw;
    background-color: #1f3a6e;
    opacity: 0.97;
    direction: rtl;
    position: relative;
    padding: 2.447vw 3.437vw;
    .author {
        display: flex;
        position: relative;
        .home-icon {
            width: 1.145vw;
            height: 0.989vw;
            margin-top: 1.25vw;
            margin-left: 1.041vw;
        }
        .author-img {
            width: 3.333vw;
            height: 3.333vw;
        }
        .info {
            .title {
                font-family: LoewExtraBold;
                font-size: 0.937vw;
                color: #ffffff;
            }
            .author-name {
                font-family: LoewBold;
                font-size: 1.0416vw;
                color: #a7b5d2;
            }
            .rating {
                .fa-star {
                    font-size: 0.729vw;
                    margin-left: 0.14vw;
                }
                .full {
                    color: #e56e43;
                }
                .empty {
                    color: #435f95;
                }
                .ranking-title {
                    width: 1.614vw;
                    height: 3.2vw;
                    font-family: LoewArabic;
                    font-size: 0.677vw;
                    color: #a7b5d2;
                    margin-right: 0.416vw;
                }
            }
        }
        .busy-btn {
            width: 7.395vw;
            height: 1.614vw;
            font-family: LoewExtraBold;
            font-size: 0.677vw;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.833vw;
            background-image: linear-gradient(
                121deg,
                #e83866 -28%,
                #e83866 -21%,
                #e57a3c 55%,
                #e57a3c 75%
            );
            margin-right: 0.937vw;
            margin-top: 2.031vw;
        }
    }
    .logo {
        float: left;
        width: 12.916vw;
        height: 3.854vw;
        margin-top: 0.677vw;
    }
}
</style>
