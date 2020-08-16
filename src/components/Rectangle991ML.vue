<template
    ><div class="nav">
        <LazyNav></LazyNav>
        <div class="connections">
            <IconBtn iconSrc="images/icons/mic.png" borderColor="#1dd950" />
            <div class="contact-info">
                <span class="title">تجربة الصوت </span>
                <span class="result">جيد جدا</span>
            </div>
            <IconBtn iconSrc="images/icons/cam.png" borderColor="#e21956" />
            <div class="contact-info">
                <span class="title">تجربة الكاميرا</span>
                <span class="result">لم تقم باختيارها</span>
            </div>
            <IconBtn iconSrc="images/icons/wifi.png" borderColor="#e28519" />
            <div class="contact-info">
                <span class="title">سرعة الانترنت</span>
                <span class="result">36Mbps</span>
            </div>
        </div>
    </div>
</template>

<script>
import LazyNav from "./LazyNav";
import IconBtn from "./IconBtn";
export default {
    name: "connections-banner",
    components: { LazyNav, IconBtn }
};
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: space-between;
    direction: rtl;
    height: 4.791vw;
    background-image: linear-gradient(80deg, #254176 11%, #1c3668 95%);
    padding: 1.041vw 3.437vw;

    .connections {
        direction: rtl;
        display: flex;
        float: left;
        .contact-info {
            margin-right: -0.208vw;
            span {
                display: block;
            }
            .title {
                font-family: LoewBold;
                font-size: 0.833vw;
                color: #ffffff;
                white-space: nowrap;
            }
            .result {
                font-family: LoewMedium;
                font-size: 0.729vw;
                color: #a7b5d2;
                white-space: nowrap;
            }
        }
    }
}
</style>
