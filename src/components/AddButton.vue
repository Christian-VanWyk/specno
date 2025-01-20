<template>
    <div>
        <Button v-if="buttonType == 'newMember'" class="AddButton"><i class="icon plusIcon"></i></Button>
        <router-link v-if="buttonType == 'newOffice'" to="/new-office"  class="AddButton"><i class="icon plusIcon"></i></router-link>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    name: 'AddButton',
    props: {
        buttonType: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const buttonLogic = ref(props.buttonType);
        return {
            buttonLogic
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