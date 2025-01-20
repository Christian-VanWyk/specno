<template>
    <header>
        <router-link to="/"><i class="icon leftIcon"></i></router-link>
        <h1>{{ heading }}</h1>
    </header>
</template>
<script>
    export default {
        props: {
            heading: {
                type: String,
                required: true
            }
        },
        setup(props) {
            const heading = props.heading;
            return {
                heading
            }
        }
    }
</script>
<style lang="scss">
    header {
        padding: 15px 0 23px;
        h1 {
            font-size: 18px;
            line-height: 21px;
            letter-spacing: -2%;
            font-weight: 500;
            margin: 0 auto;
            text-align: center;
        }
        a {
            position: absolute;
            left: 16px;
        }
    }
</style>