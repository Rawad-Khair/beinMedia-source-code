<template>
    <div class="store">
        <ChosenItem v-if="chosenStoreItem" :data="chosenStoreItem"></ChosenItem>
        <IntroVideo v-else></IntroVideo>
        <div class="store-container">
            <Item :data="item" v-for="item in storeItems" :key="item.id"></Item>
        </div>
    </div>
</template>

<script>
import IntroVideo from "../components/IntroVideo";
import ChosenItem from "../components/ChosenItem";
import Item from "../components/Item";
import { mapGetters } from "vuex";
export default {
    name: "store",
    components: { IntroVideo, ChosenItem, Item },
    computed: { ...mapGetters(["chosenStoreItem", "storeItems"]) }
};
</script>
<style lang="scss" scoped>
.store {
    .store-container {
        height: 231.466vw;
        padding: 7.2vw 8vw 0 7.733vw;
        opacity: 0.97;
        background-color: #153064;
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        direction: rtl;
        border-radius: 0 0 6.666vw 6.666vw;
    }
}
@media (min-width: 576px) {
    .store {
        height: auto;
        background: #153064;
        padding-top: 2.604vw;
        padding-left: 3.432vw;
        padding-bottom: 2.359vw;
        .store-container {
            max-width: 39.093%;
            padding-top: 0;
            padding-right: 3.76%;
            padding-left: 1.281%;
            height: auto;
            display: flex;
            justify-content: flex-start;
        }
    }
}
</style>
