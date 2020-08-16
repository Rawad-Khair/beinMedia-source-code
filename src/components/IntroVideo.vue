<template>
    <div
        class="intro-video"
        :class="screen !== 'small' && waitList ? 'adjust-video' : ''"
    >
        <video
            controls
            loop
            :poster="
                screen === 'small'
                    ? 'images/author/intro-image.png'
                    : 'images/author/intro-image-big.png'
            "
        ></video>
        <img
            src="images/author/video-overlay.png"
            alt="video poster"
            class="poster"
        />
        <h4 class="title">المقدمة التعريفية <br />لـ هند الناهض</h4>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "intro-video",
    computed: { ...mapGetters(["screen", "waitList"]) }
};
</script>

<style lang="scss" scoped>
.intro-video {
    width: 100%;
    height: 67.28vw;
    position: relative;
    background-image: linear-gradient(
        321deg,
        #10306f 100%,
        rgba(29, 66, 139, 0) 40%
    );
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
        height: 100.5%;
    }
    .title {
        font-family: LoewArabic;
        font-size: 3.733vw;
        text-align: right;
        color: #ffffff;
        position: absolute;
        top: 41.866vw;
        right: 5.6vw;
        z-index: 2;
    }
}
@media (min-width: 576px) {
    .intro-video {
        width: 57.474%;
        height: auto;
        float: left;
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
        }
        &.adjust-video {
            width: 47.713vw;
        }
    }
}
</style>
