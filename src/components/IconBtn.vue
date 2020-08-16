<template>
    <span class="icon" :style="{ borderColor: borderColor }">
        <img :src="iconSrc" alt="icon" class="icon-img" />
    </span>
</template>

<script>
export default {
    name: "IconBtn",
    props: ["iconSrc", "borderColor"]
};
</script>

<style lang="scss" scoped>
.icon {
    width: 10.933vw;
    height: 10.933vw;
    margin-left: 5.333vw;
    background: #fff;
    border: 0.533vw solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (min-width: 576px) {
    .icon {
        width: 2.135vw;
        height: 2.135vw;
        margin-right: 2.552vw;
        margin-left: 1.041vw;
        border-width: 0.104vw;
        img {
            width: 1.041vw;
        }
    }
}
</style>
