<template>
    <div class="type" :style="{ right: right + 'vw', bottom: bottom + 'vw' }">
        <img
            :src="url + 'images/icons/video-camera.png'"
            alt="file"
            class="cam-icon"
            v-if="data.type === 'video'"
        />
        <img
            :src="url + 'images/icons/red-mic.png'"
            alt="file"
            class="mic-icon"
            v-else-if="data.type === 'audio'"
        />
        <img
            :src="url + 'images/icons/file.png'"
            alt="file"
            class="file-icon"
            v-else
        />
        <span
            class="type-title"
            v-text="data.type"
            v-if="data.type !== 'video'"
            :style="{ fontSize: fontSize + 'vw' }"
        ></span>
    </div>
</template>

<script>
export default {
    name: "file-type",
    props: ["data", "bottom", "right", "fontSize"],
    data() {
        return {
            url: ""
        };
    },
    mounted() {
        this.url = this.$route.params.id === undefined ? "" : "../";
        console.log(this.url);
    }
};
</script>

<style lang="scss" scoped>
.type {
    position: absolute;
    direction: rtl;
    display: flex;
    .file-icon {
        width: 5.066vw;
        height: 5.866vw;
    }
    .cam-icon {
        width: 4.533vw;
        height: 2.933vw;
    }
    .mic-icon {
        width: 4.266vw;
        height: 5.866vw;
    }
    .type-title {
        font-family: LoewBold;
        color: #8191b2;
        margin-right: 1.866vw;
        text-transform: uppercase;
    }
}
@media (min-width: 576px) {
    .type {
        align-items: center;
        .file-icon {
            width: 0.989vw;
            height: 1.145vw;
        }
        .cam-icon {
            width: 0.885vw;
            height: 0.572vw;
        }
        .mic-icon {
            width: 0.833vw;
            height: 1.145vw;
        }
        .type-title {
            font-size: 0.989vw !important;
            margin-right: 0.364vw;
        }
    }
}
</style>
