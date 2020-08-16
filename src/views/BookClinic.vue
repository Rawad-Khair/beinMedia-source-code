<template>
    <div class="book-clinic"></div>
</template>

<script>
export default {
    name: "bookclinic"
};
</script>

<style lang="scss" scoped>
.book-clinic {
    width: 100%;
    height: 100vh;
    box-shadow: 0 1.333vw 22.933vw 0 rgba(0, 0, 0, 0.05);
    background-color: #2a4986;
}
@media (min-width: 576px) {
    .book-clinic {
        box-shadow: 0 0.26vw 4.479vw 0 rgba(0, 0, 0, 0.05);
    }
}
</style>
