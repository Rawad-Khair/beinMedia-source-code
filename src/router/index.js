import Vue from "vue";
import VueRouter from "vue-router";
import Info from "../views/Info.vue";
import CoursePage from "../views/CoursePage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Info",
        component: Info
    },
    {
        path: "/store",
        name: "Store",
        component: () => import("../views/Store.vue")
    },
    {
        path: "/broadcast",
        name: "Broadcast",
        component: () => import("../views/Broadcast.vue")
    },
    {
        path: "/courses",
        name: "Courses",
        component: () => import("../views/Courses.vue")
    },
    {
        path: "/courses/:id",
        name: "Course Page",
        component: CoursePage
    },
    {
        path: "/book-clinic",
        name: "BookClinic",
        component: () => import("../views/BookClinic.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (from.path === "/" && to.params.id !== undefined) {
        window.location.href = "/courses";
    }
    next();
});

export default router;
