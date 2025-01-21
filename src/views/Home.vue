<template>
    <section>
        <div class="headerPlaceholder"></div>
        <h1>All Offices</h1>
        <div class="officeBox">
            <OfficeCard :offices="data"/>
        </div>
        <AddButton :buttonType="'newOffice'"/>
    </section>
</template>
<style lang="scss">
    .headerPlaceholder {
        height: 24px;
        width: 100%;
        margin: 16px 0 23px;
    }
    .officeBox {
        display: flex;
        flex-shrink: 0;
        gap: 0 25px;
        flex-wrap: wrap;
    }
</style>
<script>
import OfficeCard from '../components/OfficeCard.vue';
import AddButton from '../components/AddButton.vue';
import { ref } from 'vue';
import { useStore } from '@/stores/store';
export default {
    components: {
        OfficeCard,
        AddButton
    },
    setup() {
        const store = useStore();
        const data = ref(store.state.OfficeData);
        return {
            data
        }
    }
}
</script>