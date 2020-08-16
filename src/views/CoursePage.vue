<template>
    <div class="course-page">
        <div class="description">
            <h4 class="title">وصف الكورس</h4>
            <p class="content">
                لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس
                المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت
                مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،
                لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.
            </p>
        </div>
        <div class="videos">
            <ChosenCourseVideo :data="chosenCourseVideo"></ChosenCourseVideo>
            <div class="videos-container">
                <CourseVideo
                    v-for="item in videos"
                    :data="item"
                    :key="item.id"
                ></CourseVideo>
            </div>
        </div>
        <div class="clear-float"></div>
        <h4 class="course-title">صناعة محتوي تسويقي فعال</h4>
        <div class="videos">
            <div class="videos2-container">
                <CourseVideo
                    v-for="item in videos"
                    :data="item"
                    :key="item.id"
                ></CourseVideo>
            </div>
        </div>
        <div class="clear-float"></div>
        <template v-if="screen !== 'small'">
            <h4 class="course-title">صناعة محتوي تسويقي فعال</h4>
            <div class="videos">
                <div class="videos2-container">
                    <CourseVideo
                        v-for="item in videos"
                        :data="item"
                        :key="item.id"
                    ></CourseVideo>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import ChosenCourseVideo from "../components/ChosenCourseVideo";
import CourseVideo from "../components/CourseVideo";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
    name: "course-page",
    components: { ChosenCourseVideo, CourseVideo },
    computed: {
        ...mapGetters(["chosenCourseVideo", "screen"])
    },
    data() {
        return {
            videos: []
        };
    },
    async created() {
        const response = await axios.get(
            "../json/courses/course" + this.$route.params.id + ".json"
        );
        const data = response.data;
        this.videos = data;
    }
};
</script>

<style lang="scss" scoped>
.course-page {
    background-color: #153064;
    border-radius: 0 0 6.666vw 6.666vw;
    padding-bottom: 26.666vw;
    height: auto;
    .description {
        width: 100%;
        height: auto;
        box-shadow: 0 1.333vw 22.933vw 0 rgba(0, 0, 0, 0.05);
        background-color: #2a4986;
        direction: rtl;
        padding: 7.466vw 9.066vw 11.2vw 7.733vw;
        .title {
            font-family: LoewExtraBold;
            font-size: 4.266vw;
            color: #ffffff;
        }
        .content {
            height: 42.133vw;
            font-family: LoewArabic;
            font-size: 3.466vw;
            line-height: 6.933vw;
            padding-top: 8.8vw;
            text-align: right;
            color: #ffffff;
            overflow: auto;
        }
    }
    .course-title {
        font-family: LoewExtraBold;
        font-size: 4vw;
        color: #a7b5d2;
        direction: rtl;
        background-color: #153064;
    }
    .videos {
        .videos-container,
        .videos2-container {
            height: 142.933vw;
            overflow: hidden;
            padding: 7.2vw 8vw 0 2.01vw;
            opacity: 0.97;
            display: flex;
            align-content: flex-start;
            flex-wrap: wrap;
            direction: rtl;
        }
        .videos2-container {
            overflow: hidden;
            height: 71.466vw;
            padding-top: 0;
            padding-bottom: 0;
        }
    }
}
@media (min-width: 576px) {
    .course-page {
        overflow: hidden;
        border-radius: 0;
        padding-top: 2.604vw;
        padding-bottom: 0;
        .description {
            max-width: 33.646vw;
            float: right;
            margin-right: 3.437vw;
            padding: 2.5vw 3.02vw 2.031vw 2.968vw;
            .title {
                font-size: 1.51vw;
            }
            .content {
                font-size: 1.041vw;
                padding-top: 1.25vw;
                height: 10.833vw;
                line-height: 1.354vw;
            }
        }
        .course-title {
            padding-top: 1.338vw;
            padding-right: 4.895vw;
            font-size: 1.302vw;
            margin-bottom: 1.979vw;
        }
        .videos {
            padding-left: 3.432vw;
            padding-bottom: 2.359vw;
            .videos-container,
            .videos2-container {
                max-width: 33.646vw;
                height: 33.333vw;
                float: right;
                margin-right: 3.437vw;
                padding-top: 1.875vw;
                padding-left: 0;
                padding-right: 0;
                justify-content: flex-end;
            }
            .videos-container {
                overflow: hidden;
            }
            .videos2-container {
                width: 39.0625vw;
                overflow: hidden;
                height: 14.843vw;
                padding-top: 0;
                margin-bottom: 2.359vw;
                direction: rtl;
            }
        }
    }
    .clear-float {
        clear: both;
    }
}
</style>
