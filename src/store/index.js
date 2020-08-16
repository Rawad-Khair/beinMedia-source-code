import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        chosenStoreItem: null,
        chosenBroadcastItem: {
            id: 1,
            type: "video",
            title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
            price: 299,
            downloads: 104
        },
        chosenCourseVideo: {
            id: 1,
            type: "video",
            title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
            price: 299,
            downloads: 104
        },
        waitList: false,
        sideBar: false,
        courses: [],
        broadcasts: [],
        storeItems: [],
        members: [],
        activeMember: "مالك محمد",
        screen: null
    },
    getters: {
        screen: state => state.screen,
        chosenStoreItem: state => state.chosenStoreItem,
        chosenBroadcastItem: state => state.chosenBroadcastItem,
        chosenCourseVideo: state => state.chosenCourseVideo,
        waitList: state => state.waitList,
        sideBar: state => state.sideBar,
        courses: state => state.courses,
        storeItems: state => state.storeItems,
        broadcasts: state => state.broadcasts,
        members: state => state.members,
        activeMember: state => state.activeMember
    },
    mutations: {
        setScreenSize: (state, size) => (state.screen = size),
        chooseStoreItem: (state, item) => (state.chosenStoreItem = item),
        chooseBroadcastItem: (state, item) =>
            (state.chosenBroadcastItem = item),
        chooseVideoCourse: (state, item) => (state.chosenCourseVideo = item),
        toggleWaitList: state => (state.waitList = !state.waitList),
        toggleSideBar: state => (state.sideBar = !state.sideBar),
        setCourses: (state, courses) => {
            state.courses = courses;
        },
        setBroadcasts: (state, broadcasts) => (state.broadcasts = broadcasts),
        setMembers: (state, members) => (state.members = members),
        setStoreItems: (state, items) => (state.storeItems = items),
        setActiveName: (state, name) => (state.activeMember = name)
    },
    actions: {
        async fetchData({ commit }) {
            const coursesData = await axios.get("json/courses.json");
            const courses = coursesData.data;
            commit("setCourses", courses);
            const wlData = await axios.get("json/waiting-list.json");
            const members = wlData.data;
            commit("setMembers", members);
            const broadcastData = await axios.get("json/broadcast.json");
            const broadcasts = broadcastData.data;
            commit("setBroadcasts", broadcasts);
            const storeData = await axios.get("json/store.json");
            const storeItems = storeData.data;
            commit("setStoreItems", storeItems);
        },
        adjustScreen({ commit }) {
            let size = null;
            if (window.innerWidth >= 768) {
                size = "large";
            } else if (window.innerWidth < 768 && window.innerWidth >= 576) {
                size = "medium";
            } else {
                size = "small";
            }
            commit("setScreenSize", size);
        }
    }
});
