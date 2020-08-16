<template>
    <div class="logo-banner">
        <img src="images/icons/logo.png" class="logo" alt="logo" />
        <div class="account">
            <span class="profile">
                <img
                    src="images/icons/user.png"
                    alt="profile"
                    class="profile-img"
                />
            </span>
            <span class="bell">
                <span class="notification"></span>
                <img
                    src="images/icons/bell.png"
                    alt="notification"
                    class="bell-img"
                />
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "logo-banner"
};
</script>

<style lang="scss" scoped>
.logo-banner {
    width: 100%;
    height: 27.2vw;
    opacity: 0.97;
    background-color: #1f3a6e;
    display: flex;
    justify-content: space-between;
    border-radius: 1.866vw 1.866vw 0 0;
    .logo {
        width: 44.773vw;
        height: 13.893vw;
        margin-top: 6.666vw;
        margin-left: 7.973vw;
    }
    .account {
        display: flex;
        justify-content: space-between;
        .profile {
            width: 12vw;
            height: 12vw;
            margin-top: 7.733vw;
            margin-right: 3.84vw;
            background: #e9edf0;
            border: 0.533vw solid #a7b5d2;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            .profile-img {
                width: 7.253vw;
                height: 7.253vw;
            }
        }
        .bell {
            position: relative;
            .notification {
                width: 4.266vw;
                height: 4.266vw;
                border-radius: 50%;
                border: solid 0.453vw #1c3668;
                background-color: #e83866;
                position: absolute;
                right: 7.493vw;
                top: 9.413vw;
            }
            .bell-img {
                width: 7.04vw;
                height: 8.773vw;
                margin-right: 9.626vw;
                margin-top: 9.413vw;
            }
        }
    }
}
</style>
