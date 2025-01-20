<template>
    <div class="swipe-container" ref="swipeContainer">
        <Model>
            <div class="headingContainer" >
                <h2 v-html="editMode ? 'Edit Staff Member' : 'New Staff Member'"></h2>
                <button @click="$emit('close', false)"><i class="icon closeIcon"></i></button>
            </div>
            <div v-if="step === 1" class="step">
                <form>
                    <input v-model="newStaffMember.firstName" class="input" type="text" placeholder="First Name">
                    <input v-model="newStaffMember.lastName" class="input" type="text" placeholder="Last Name">
                </form>
            </div>
            <div v-if="step === 2" class="step">
                <h3>Avatar</h3>
                <div class="avatarGrid">
                    <div v-if="avatars" v-for="(avatar,index) in avatars" :key="index" class="avatar">
                        <input
                            :id="avatar.id"
                            type="checkbox"
                            :checked="selectedAvatar === avatar.icon"
                            @change="toggleAvatarSelection(avatar)"
                            hidden
                        />
                        <label :for="avatar.id" :class="newStaffMember.avatar === avatar.icon ? 'selected ': ''">
                            <img :src="avatar.icon" alt="">
                        </label>
                    </div>
                </div>
            </div>
            <div class="pagination">
                <span :class="step === 1 ? 'active' : ''"></span>
                <span :class="step === 2 ? 'active' : ''"></span>
            </div>
            <Button v-if="step === 1" @click="nextStep()"  class="modelButton" :disabled="newStaffMember.firstName == '' || newStaffMember.lastName == ''">Next</Button>
            <Button v-if="step === 2" @click="$emit('addStaffMember',newStaffMember)" class="modelButton" :disabled="newStaffMember.avatar == null">Add staff member</Button>
        </Model>
    </div>
</template>
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Model from './Model.vue';
import { useStore } from '@/stores/store';
import Hammer from 'hammerjs';
export default {
    name: 'StaffMemberModel',
    components: {
        Model
    },
    props: {
        editMember: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const store = useStore();
        const avatars = ref(store.state.Avatars);
        const step = ref(1);
        const newStaffMember = ref({
            firstName: '',
            lastName: '',
            avatar: null
        });
        const editMode = ref(false);
        const swipeContainer = ref(null);
        const hammerInstance = ref(null);

        onMounted(() => {
            if (props.editMember) {
                editMode.value = true;
                // Splits the full name into the first and last names;
                let splitName = props.editMember.name.split(' ', 2)
                // Sets the old Value;
                newStaffMember.value.avatar = props.editMember.icon;
                newStaffMember.value.firstName = splitName[0];
                newStaffMember.value.lastName = splitName[1];
            }
            if (swipeContainer.value) {
                hammerInstance.value = new Hammer(swipeContainer.value);

                hammerInstance.value.on('swipeleft', onSwipeLeft);
                hammerInstance.value.on('swiperight', onSwipeRight);
            }
        });

        onBeforeUnmount(() => {
            if (hammerInstance.value) {
                hammerInstance.value.off('swipeleft', onSwipeLeft);
                hammerInstance.value.off('swiperight', onSwipeRight);
                hammerInstance.value = null;
            }
        });

        const onSwipeLeft = () => {
            if (newStaffMember.value.firstName !== '' && newStaffMember.value.lastName !== '') {
                nextStep();
            }
        };
        
        const onSwipeRight = () => {
            backStep();
        };


        const toggleAvatarSelection = (avatar) => {
            if (newStaffMember.value.avatar === avatar.Id) {
                newStaffMember.value.avatar = null;
            } else {
                newStaffMember.value.avatar = avatar.icon;
            }
        }

        const nextStep = () => {
            step.value = step.value + 1;
        }

        const backStep = () => {
            if (step.value > 1) {
                step.value = step.value - 1;
            }
        }

        return {
            avatars,
            toggleAvatarSelection,
            step,
            nextStep,
            newStaffMember,
            swipeContainer,
            editMode
        }
    }
}
</script>
<style lang="scss" scoped>
.swipe-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
}
    h3 {
        font-weight: 600;
        font-size: 24px;
        color: $textSecondary;
        margin-bottom: 24px;
    }
    .avatarGrid {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
        justify-content: center;
        .avatar {
            label {
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                border-radius: 100%;
                height: 52px;
                width: 52px;
                background-color: $cardColor;
                &.selected {
                    border: 2.5px solid $primary;
                    box-shadow: 2px 2px 12px rgba(0,0,0,.2);
                }
            }
        }
    }
</style>