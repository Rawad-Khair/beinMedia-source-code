<template>
    <div class="broadcast">
        <ChosenItem :data="chosenBroadcastItem"></ChosenItem>
        <div class="broadcast-container">
            <Item :data="item" v-for="item in broadcasts" :key="item.id"></Item>
            <template v-if="screen === 'large'">
                <Item
                    :data="item"
                    v-for="item in broadcasts"
                    :key="item.id + Math.random()"
                ></Item>
            </template>
        </div>
    </div>
</template>

<script>
import ChosenItem from "../components/ChosenItem";
import Item from "../components/Item";
import { mapGetters } from "vuex";
export default {
    name: "broadcast",
    components: { ChosenItem, Item },
    computed: {
        ...mapGetters(["broadcasts", "chosenBroadcastItem", "screen"])
    }
};
</script>
<style lang="scss" scoped>
.broadcast {
    .broadcast-container {
        height: auto;
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
    .broadcast {
        background: #153064;
        padding-top: 2.6vw;
        padding-left: 3.432vw;
        padding-bottom: 2.359vw;
        .broadcast-container {
            max-width: 39.093vw;
            padding-top: 0;
            padding-right: 3.76vw;
            padding-left: 1.281vw;
            height: auto;
            display: flex;
            justify-content: flex-start;
        }
    }
}
</style>
