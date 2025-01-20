<template>
    <section>
        <Header :heading="heading == 'office-edit' ? 'Edit Office' : 'New Office'"/>
        <div class="formContainer">
            <form>
                <div class="inputContainer">
                    <input v-model="officeName" @keyup="nameValidation()" class="input" type="text" placeholder="Office Name">
                </div>
                <div class="inputContainer">
                    <input v-model="physicalAddress" class="input" type="text" placeholder="Physical Address">
                </div>
                <div class="inputContainer" :class="!emailAddressError == false ? 'error' : ''">
                    <input v-model="emailAddress" @blur="emailValidation()" class="input" type="text" placeholder="Email Address">
                    <span v-if="!emailAddressError == false">Email address is not valid</span>
                </div>
                <div class="inputContainer">
                    <input v-model="phoneNumber" @blur="phoneValidation()" class="input" type="text" placeholder="Phone Number">
                </div>
                <div class="inputContainer">
                    <input v-model="maximumCapacity" @keyup="numberValidation()" class="input" type="text" placeholder="Maximum Capacity">
                </div>
                <div class="colorGrid">
                    <h2>Office Colour</h2>  
                    <div class="color" v-for="(color,index) in colors">
                        <input
                            :id="color.id"
                            type="checkbox"
                            :checked="selectedColor === color.color"
                            @change="toggleColorSelection(color.color)"
                            hidden
                        />
                        <label :for="color.id" :class="[color.color, selectedColor === color.color ? 'selected' : '']"></label>
                    </div>
                </div>
            </form>
            <Button v-if="heading == 'office-edit'" class="button" @click="updateOffice()">Update office</Button>
            <Button v-if="heading == 'office-edit'" class="button white" @click="deleteOffice()">Delete Office</Button>
            <Button  v-if="heading == 'office-add'" class="button" >Add Office</Button>
        </div>
    </section>
</template>
<script>
import Header from '@/components/Header.vue';
import { ref, onMounted } from 'vue';
import validationHelper from '@/helpers/regex';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from '@/stores/store';
export default {
    name: 'ManageOffice',
    components: {
        Header,
    },
    setup() {
        const officeName = ref('');
        const physicalAddress = ref('');
        const emailAddress = ref('');
        const emailAddressError = ref(null);
        const phoneNumber = ref('');
        const maximumCapacity = ref('');
        const selectedColor = ref('');
        const colors = ref([
            {
                color: 'yellow',
                id: '99'
            },
            {
                color: 'peach',
                id: '98'
            },
            {
                color: 'orange',
                id: '97'
            },
            {
                color: 'brown',
                id: '96'
            },
            {
                color: 'lavander',
                id: '95'
            },
            {
                color: 'pink',
                id: '94'
            },
            {
                color: 'mint',
                id: '93'
            },
            {
                color: 'green',
                id: '92'
            },
            {
                color: 'lightBlue',
                id: '91'
            },
            {
                color: 'blue',
                id: '90'
            },
            {
                color: 'purple',
                id: '89'
            },
        ])
        const officeData = ref();
        const store = useStore();
        const route = useRoute();
        const router = useRouter();

        const heading = ref(route.name);

        onMounted(() => {
            if (heading.value == "office-edit") {
                officeData.value = store.state.OfficeData.find(obj => obj.key === route.params.slug);
                officeData.value = officeData.value.BasicCompanyInfo;

                officeName.value = officeData.value.officeName;
                physicalAddress.value = officeData.value.address;
                emailAddress.value = officeData.value.email;
                phoneNumber.value = officeData.value.tel;
                maximumCapacity.value = officeData.value.officeCapacity;
                selectedColor.value = officeData.value.color;
            }
        });

        const updateOffice = () => {
            const officeItem = store.state.OfficeData.find(item => item.key === route.params.slug);
            if (officeItem) {
                officeItem.BasicCompanyInfo.officeName = officeName.value;
                officeItem.BasicCompanyInfo.officeCapacity = maximumCapacity.value;
                officeItem.BasicCompanyInfo.email = emailAddress.value;
                officeItem.BasicCompanyInfo.color = selectedColor.value;
                officeItem.BasicCompanyInfo.address = physicalAddress.value;
                officeItem.BasicCompanyInfo.tel = phoneNumber.value;
            }
            
            router.push('/');
        } 

        const deleteOffice = () => {
            // Use filter to remove the object with matching key
            store.state.OfficeData = store.state.OfficeData.filter(item => item.key !== route.params.slug);

            // Navigate to home or another route
            router.push('/');
        } 

        const addNewOffice = () => {
            
        } 

        const toggleColorSelection = (val) => {
            if (selectedColor?.value === val) {
                selectedColor.value = null;
            } else {
                selectedColor.value = val;
            }
        }

        const nameValidation = () => {
            officeName.value = validationHelper.textTest(officeName.value);
        }

        const numberValidation = () => {
            maximumCapacity.value = validationHelper.numberTest(maximumCapacity.value);
        }

        const phoneValidation = () => {
            phoneNumber.value = validationHelper.formatCellNumber(phoneNumber.value);
        }

        const emailValidation = () => {
            emailAddressError.value = validationHelper.emailTest(emailAddress.value);
        }

        return {
            officeName,
            physicalAddress,
            emailAddress,
            phoneNumber,
            maximumCapacity,
            nameValidation,
            numberValidation,
            phoneValidation,
            emailValidation,
            emailAddressError,
            colors,
            toggleColorSelection,
            selectedColor,
            route,
            heading,
            updateOffice,
            deleteOffice
        }
    }
}
</script>
<style lang="scss" scoped>
.formContainer {
    margin: 45px 0 0;
    .inputContainer {
        margin-bottom: 16px;
        position: relative;
        .input {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid $cardboard;
            border-radius: 4px;
            font-size: 14px;
            font-size: 16px;
            line-height: 24px;
            &:last-of-type {
                margin-bottom: 0;
            }
        }
        &.error {
            font-size: 10px;
            color: $error;
            position: relative;
            .input {
                border-color: $error;
            }
            span {
                position: absolute;
                top: 100%;
                left: 0;
            }
        }
    }
    .colorGrid {
        margin: 36px 0;
        display: flex;
        gap: 36px 24px;
        justify-content: center;
        flex-wrap: wrap;
        h2 {
            width: 100%;
            flex-shrink: 0;
        }
        .color {
            label {
                width: 36px;
                height: 36px;
                border-radius: 36px;
                display: block;
                flex-shrink: 0;
                &.yellow {
                    background-color: $yellow1;
                }
                &.peach {
                    background-color: $peach1;
                }
                &.orange {
                    background-color: $orange1;
                }
                &.brown {
                    background-color: $brown1;
                }
                &.lavander {
                    background-color: $lavander1;
                }
                &.pink {
                    background-color: $pink1;
                }
                &.mint {
                    background-color: $mint1;
                }
                &.green {
                    background-color: $green1;
                }
                &.lightBlue {
                    background-color: $lightBlue1;
                }
                &.blue {
                    background-color: $blue1;
                }
                &.purple {
                    background-color: $purple1;
                }
                &.selected {
                    border: 2.5px solid $primary;
                    box-shadow: 2px 2px 12px rgba(0,0,0,.2);
                }
            }
        }
    }
    .button {
            min-width: 232px;
            padding: 16px;
            text-align: center;
            background-color: $secondary;
            color: $primaryContrast;
            border-radius: 100px;
            margin: 0 auto;
            display: block;
            &.white {
                background-color: $background;
                color: $secondary;
                margin-top: 12px;
            }
        }
}
</style>