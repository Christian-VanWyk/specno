<template>
    <section>
        <h1>404</h1>
        <p>You seem to be a bit lost.</p>
        <router-link to="/">Go home</router-link>
    </section>
</template>
<style lang="scss" scoped>
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
    }
    h1 {
        font-size: 100px;
        margin: 0;
        width: 100%;
        text-align: center;
        line-height: 1;
    }
    p {
        width: 100%;
        font-size: 20px;
        margin: 0 0 15px;
        text-align: center;
    }

    a {
        color: $primaryContrast;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: $secondary;
        text-decoration: none;
        font-size: 20px;
    }
</style>