<template>
    <section>
        <div class="inputContainer">
            <input v-model="searchValue" @keyup="filterList" type="text" placeholder="Search">
            <span v-if="!data.length" class="searchMessage">No results</span>
            <i class="icon searchIcon"></i>
        </div>
        <h2>Staff Members in Office <span>{{ staffCount }}</span></h2>
        <ul>
            <li v-for="(item,index) in data" :key="index">
                <div class="imgContainer">
                    <img v-if="item.icon" :src="item.icon" :alt="`${item.name}} avatar`">
                </div>
                {{ item.name }}
                <Button @click="userOptions(item)"><i class="icon menuIcon"></i></Button>
            </li>
        </ul>
        <StaffOptionModel @showOption="editDeleteModal" v-if="showOptionsModel"/>
        <StaffDeleteModel @delete="deleteMember" @close="userOptions" @keepMember="userOptions" v-if="showDeleteModel" />
        <StaffMemberModel :editMember="userInfo" v-if="showEditModel" @close="closeModals" @addStaffMember="updateStaffList"/>
    </section>
</template>
<script>
import { ref, defineEmits } from 'vue';
import StaffOptionModel from './StaffOptionModel.vue';
import StaffDeleteModel from './StaffDeleteModel.vue';
import StaffMemberModel from './StaffMemberModel.vue';
import { useStore } from '@/stores/store';

export default {
    props: {
        staff: {
            type: Array,
            required: true
        }
    },
    components: {
        StaffOptionModel,
        StaffDeleteModel,
        StaffMemberModel
    },
    setup(props) {
        const data = ref(props.staff[0].StaffMembers);
        const staffCount = ref(props.staff[0].StaffMembers.length);
        const searchValue = ref('');
        const showOptionsModel = ref(false);
        const showDeleteModel = ref(false);
        const showEditModel = ref(false);
        const userInfo = ref('');
        const store = useStore();

        const filterList = () => {
            if (searchValue.value) {
                data.value = props.staff[0].StaffMembers.filter((item) => {
                    return item.name.toLowerCase().includes(searchValue.value.toLowerCase());
                });
            } else {
                data.value = props.staff[0].StaffMembers;
            }
        };

        const userOptions = (item) => {
            userInfo.value = item;
            showEditModel.value = false;
            showDeleteModel.value = false;
            showOptionsModel.value = true;
        }

        const deleteMember = () => {
            store.state.OfficeData.forEach((item) => {
                if (item.key === props.staff[0].key) {
                    item.StaffMembers = item.StaffMembers.filter(obj => obj.id !== userInfo.value.id);
                    data.value = item.StaffMembers;
                }
            });
            showDeleteModel.value = false;
        };

        const closeModals = () => {
            showOptionsModel.value = false;
            showEditModel.value = false;
            showDeleteModel.value = false;
        }

        const editDeleteModal = (val) => {
            if (val === 'Edit') {
                showOptionsModel.value = false;
                showEditModel.value = true;
            } else if (val == 'Delete') {
                showOptionsModel.value = false;
                showDeleteModel.value = true;
            }
        }

        const updateStaffList = (val) => {
            const officeItem = store.state.OfficeData.find(item => item.key === props.staff[0].key);
            if (officeItem) {
                const staffMember = officeItem.StaffMembers.find(obj => obj.id === userInfo.value.id);
                if (staffMember) {
                    staffMember.name = `${val.firstName} ${val.lastName}`;
                    staffMember.icon = val.avatar;
                }
            }

            showEditModel.value = false;
        }

        return {
            data,
            searchValue,
            filterList,
            staffCount,
            showOptionsModel,
            showDeleteModel,
            showEditModel,
            userOptions,
            editDeleteModal,
            closeModals,
            deleteMember,
            userInfo,
            updateStaffList
        }
    }
}
</script>
<style lang="scss" scoped>
    .inputContainer {
        position: relative;
        margin-bottom: 40px;
        input {
            width: 100%;
            padding: 12px 40px 12px 16px;
            height: 48px;
            background-color: $cardColor;
            border: 1px solid $cardboard;
            border-radius: 5px;
            font-size: 16px;
            line-height: 24px;
            outline: none;
        }
        .searchMessage {
            font-size: 12px;
            color: $textPrimary;
            position: absolute;
            left: 0;
            top: 110%;
        }
        .searchIcon {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    h2 {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $textSecondary;
        font-weight: 600;
        margin-bottom: 30px;
        span {
            display: block;
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
        }
    }

    ul {
        li {
            .imgContainer {
                width: 52px;
                height: 52px;
                border-radius: 52px;
                overflow: hidden;
                background-color: $cardColor;
            }
            display: flex;
            align-items: center;
            gap: 30px;
            margin-bottom: 16px;
            button {
                margin-left: auto;
                cursor: pointer;
            }
        }
    }
</style>