<template>
    <div class="connections">
        <IconBtn iconSrc="images/icons/mic.png" borderColor="#1dd950" />
        <IconBtn iconSrc="images/icons/cam.png" borderColor="#e21956" />
        <IconBtn iconSrc="images/icons/wifi.png" borderColor="#e28519" />
        <div class="connection-speed">
            <span class="title">سرعة الانترنت</span>
            <span class="speed-val">36Mbps</span>
        </div>
    </div>
</template>

<script>
import IconBtn from "./IconBtn";
export default {
    name: "connections-banner",
    components: { IconBtn }
};
</script>

<style lang="scss" scoped>
.connections {
    width: 100%;
    height: 21.6vw;
    background-image: linear-gradient(65deg, #254176 6%, #1c3668 97%);
    padding-top: 5.333vw;
    direction: rtl;
    padding-right: 17.066vw;
    display: flex;
    .connection-speed {
        margin-right: -1.066vw;
        span {
            display: block;
        }
        .title {
            font-family: LoewBold;
            font-size: 2.666vw;
            color: #ffffff;
        }
        .speed-val {
            font-family: LoewMedium;
            font-size: 3.733vw;
            font-weight: 500;
            text-align: right;
            color: #a7b5d2;
        }
    }
}
</style>
