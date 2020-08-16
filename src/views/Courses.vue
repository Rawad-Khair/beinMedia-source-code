<template>
    <div class="courses">
        <Course
            v-for="course in courses"
            :key="course.id"
            :data="course"
        ></Course>
        <template v-if="screen === 'large'">
            <Course
                v-for="course in courses"
                :key="course.id + Math.random()"
                :data="course"
            ></Course>
            <Course
                v-for="course in courses"
                :key="course.id * Math.random()"
                :data="course"
            ></Course>
        </template>
    </div>
</template>

<script>
import Course from "../components/Course";
import { mapGetters } from "vuex";
export default {
    name: "courses",
    components: { Course },
    computed: { ...mapGetters(["courses", "screen"]) }
};
</script>

<style lang="scss" scoped>
.courses {
    height: auto;
    opacity: 0.97;
    background-color: #153064;
    border-radius: 0 0 6.666vw 6.666vw;
    padding-bottom: 7.733vw;
}
@media (min-width: 576px) {
    .courses {
        padding: 2.604vw 3.75vw 3.125vw 3.02vw;
        border-radius: 0;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        direction: rtl;
    }
}
</style>
