<template>
    <div class="info">
        <IntroVideo></IntroVideo>
        <div class="content-container">
            <p
                class="content"
                :class="screen !== 'small' && waitList ? 'adjust-content' : ''"
            >
                هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب
                وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات
                المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في
                مجال التواصل الاجتماعي.هند الناهض مستشارة إعلام رقمي, مستشارة
                الإعلام الإلكتروني لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة
                لشركة “سوشالوبي” للخدمات المختصة في مجال الإعلام الإجتماعي ,
                بالإضافة الى إنها مستشارة في مجال التواصل الاجتماعي.
            </p>
        </div>
        <div
            class="experiences"
            :class="screen !== 'small' && waitList ? 'adjust-exp' : ''"
        >
            <h4 class="title">الخبرات</h4>
            <ul>
                <li>تطوير الأعمال</li>
                <li>المشاريع الصغيرة</li>
                <li>مشاركة العملاء</li>
                <li>الإعلام</li>
                <li>التحدث أمام الجمهور</li>
                <li>الدعاية والإعلان</li>
                <li>ريادة الأعمال</li>
                <li>القيادة</li>
                <li>التسويق الرقمي</li>
            </ul>
        </div>
    </div>
</template>

<script>
import IntroVideo from "../components/IntroVideo";
import { mapGetters } from "vuex";

export default {
    name: "info",
    components: { IntroVideo },
    computed: { ...mapGetters(["screen", "waitList"]) }
};
</script>

<style lang="scss" scoped>
.info {
    .content-container {
        width: 100%;
        height: 120.8vw;
        box-shadow: 0 1.333vw 22.933vw 0 rgba(0, 0, 0, 0.05);
        padding: 10.666vw 8vw 10.666vw 7.733vw;
        background-color: #2a4986;
        direction: rtl;
        .content {
            font-family: LoewArabic;
            font-size: 4vw;
            line-height: 7.733vw;
            text-align: right;
            color: #ffffff;
            overflow: auto;
        }
    }
    .experiences {
        width: 100%;
        height: 112.8vw;
        opacity: 0.97;
        background-color: #153064;
        padding-top: 10.666vw;
        padding-right: 8vw;
        direction: rtl;
        border-radius: 0 0 6.666vw 6.666vw;
        .title {
            font-family: LoewExtraBold;
            font-size: 4vw;
            color: #ffffff;
        }
        ul {
            width: 100%;
            list-style: none;
            margin-top: 6.133vw;
            display: flex;
            flex-wrap: wrap;
            li {
                margin: 0 0 2.666vw 2.4vw;
                min-width: 40.8vw;
                height: 13.333vw;
                border-radius: 1.333vw;
                background-color: #223c6e;
                font-family: LoewMedium;
                font-size: 2.933vw;
                color: #a7b5d2;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
@media (min-width: 576px) {
    .info {
        padding: 2.604% 3.437% 2.359% 3.432%;
        background: #153064;
        overflow: hidden;
        .content-container {
            width: 33.646vw;
            height: 21.77vw;
            padding: 2.343vw 3.02vw 2.343vw 2.968vw;
            float: right;
            .content {
                font-family: LoewArabic;
                font-size: 1.041vw;
                line-height: 1.77vw;
                text-align: right;
                color: #ffffff;
                overflow: auto;
                height: 15.782vw;
            }
            &.adjust-content {
                width: 25.416vw;
                padding: 2.343vw 3.02vw 2.343vw 1.562vw;
            }
        }
        .experiences {
            float: right;
            width: 33.646vw;
            height: auto;
            padding-top: 1.562vw;
            padding-right: 0;
            &.adjust-exp {
                width: 25.416vw;
            }
            .title {
                font-size: 1.562vw;
                padding-right: 2.343vw;
            }
            ul {
                margin-top: 1.197vw;
                li {
                    font-size: 0.729vw;
                    margin-left: 0.52vw;
                    min-width: auto;
                    padding: 1.041vw;
                    margin: 0 0 0.52vw 0.468vw;
                    height: 2.604vw;
                    border-radius: 0.26vw;
                }
            }
        }
    }
}
</style>
