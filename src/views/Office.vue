<template>
    <section>
        <Header/>
        <OfficeCard :offices="data"/>
        <StaffList :staff="data" @deleteMember="removeMember"/>
        <AddButton @click="addStaffMember"/>
        <StaffMemberModel v-if="showAddStaff" @addStaffMember="updateStaffList" @close="closeModel"/>
    </section>
</template>
<script>
import OfficeCard from '../components/OfficeCard.vue';
import AddButton from '../components/AddButton.vue';
import StaffList from '@/components/StaffList.vue';
import Header from '@/components/Header.vue';
import StaffMemberModel from '@/components/StaffMemberModel.vue';
import { ref } from 'vue';
import { useStore } from '@/stores/store';
import { useRoute } from 'vue-router';
export default {
    components: {
        OfficeCard,
        AddButton,
        StaffList,
        Header,
        StaffMemberModel
    },
    setup() {
        const store = useStore();
        const storeData = ref(store.state.OfficeData);
        const router = useRoute();
        const slug = ref(router.params.slug);
        const showAddStaff = ref(false)

        const data = storeData.value.filter((office) => {
            if (office.key === slug.value) {
                return office;
            }
        })

        const removeMember = (i) => {
            console.log(i);
        }

        const updateStaffList = (staff) => {
            const office = store.state.OfficeData.find((office) => office.key === slug.value);
            if (office) {
                let obj = {
                    name: `${staff.firstName} ${staff.lastName}`,
                    icon: staff.avatar
                }
                office.StaffMembers.push(obj);
                closeModel();
            }
        }

        const closeModel = (val) => {
            console.log('hit', showAddStaff.val)
            showAddStaff.value = !showAddStaff.value;
        }

        const addStaffMember = () => {
            closeModel();
        }

        return {
            data,
            addStaffMember,
            updateStaffList,
            showAddStaff,
            closeModel,
            removeMember
        }
    }
}
</script>