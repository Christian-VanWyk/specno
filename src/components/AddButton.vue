<template>
    <div>
        <Button class="AddButton"><i class="icon plusIcon"></i></Button>
    </div>
</template>
<script>
export default {
    name: 'AddButton',
    setup() {
        return {
            
        }
    }
}
</script>
<style lang="scss">
    .AddButton {
        background-color: $primary;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 24px;
        height: 64px;
        width: 64px;
        right: 17px;
        bottom: 24px;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s;
        z-index: 5;
        @media (min-width: 1025px) {
            &:hover {
                background-color: $secondary;
                box-shadow: 3px 3px 12px rgba(0,0,0,.1);
            }
        }
    }
</style>