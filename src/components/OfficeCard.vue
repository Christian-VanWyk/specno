<template>
    <router-link v-for="(item, index) in data" :key="index" class="card" :class="item.BasicCompanyInfo.color" :to="`/office/${item.key}`">
        <div class="cardContainer">
            <div class="cardTop">
                <div class="cardHeading">
                    <h2>{{ item.BasicCompanyInfo.officeName }}</h2>
                    <button @click="goToEdit($event)" class="icon editButtonIcon editButton"></button>
                </div>
                <div class="cardSubHeading">
                    <i class="icon staffIcon"></i>
                    <span class="text"><strong>{{ item.StaffMembers.length }}</strong> Staff Members in Office</span>
                </div>
            </div>
            <button @click="showMore($event, item.key)" class="moreInfo">
                More info
                <i :class="['icon arrowDownIcon', {rotate: showDetails.id === item.key && showDetails.bool}]"></i>
            </button>
            <div :class="['cardDetails', {show: showDetails.id === item.key && showDetails.bool}]">
                <ul>
                    <li><i class="icon phoneIcon"></i>{{ item.BasicCompanyInfo.tel }}</li>
                    <li><i class="icon emailIcon"></i>{{ item.BasicCompanyInfo.email }}</li>  
                    <li><i class="icon maxStaffIcon"></i>Office Capacity: {{ item.BasicCompanyInfo.officeCapacity }}</li>
                    <li><i class="icon locationIcon"></i>{{ item.BasicCompanyInfo.address }}</li>    
                </ul>
            </div>
        </div>
    </router-link>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: 'OfficeComp',
    props: {
        offices: {
            type: Array,
            required: true
        }
    },
    setup(props) {

        const showDetails = ref({
            id: null,
            bool: false,
        });

        const data = ref(props.offices);

        const router = useRouter();
        const showMore = (event, item) => {
            event.preventDefault();
            showDetails.value.id = item;
            showDetails.value.bool = !showDetails.value.bool;

            return;
        }

        const goToEdit = (event) => {
            event.preventDefault();
            router.push('/edit-office/test');
        }

        return {
            showMore,
            showDetails,
            goToEdit,
            data
        }
    }
}
</script>
<style lang="scss"> 
    .card {
        min-height: 132px;
        max-width: 342px;
        background-color: $cardColor;
        border: 1px solid $cardboard;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        margin-bottom: 24px;
        padding-left: 12px;
        position: relative;
        text-decoration: none;
        &::before {
            content: '';
            position: absolute;
            left: 0;
            height: 100%;
            width: 12px;
            display: block;
        }
        .cardContainer {
            width: 100%;
            .cardTop {
                margin: 0 16px 0 22px;         
                border-width: 0 0 0.4px;
                border-color: $primary;
                border-style: solid;       
                .cardHeading {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    position: relative;
                    h2 {
                        width: 100%;
                        padding-right: 30px;
                    }
                    .editButton {
                        cursor: pointer;
                        position: absolute;
                        top: 17px;
                        right: 0;
                        margin: 5px;
                    }
                }
                .cardSubHeading {
                    display: flex;
                    gap: 0 12px;
                    align-items: center;
                    margin-bottom: 10px;
                    .text {
                        display: block;
                        color: $textPrimary;
                        font-size: 12px;
                        line-height: 22px;
                        strong {
                            font-weight: 700;
                        }
                    }
                }
            }
            .moreInfo {
                background-color: $cardColor;
                border-width: 0;
                border-color: $primary;
                border-style: solid;
                color: $textPrimary;
                width: 100%;
                padding: 13px 0 10px;
                font-size: 12px;
                line-height: 22px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 14px;
                cursor: pointer;
            }
            .cardDetails {
                overflow: hidden;
                max-height: 0;
                transition: max-height 0.3s ease;
                margin: 0 16px 0 22px;        
                &.show {
                    max-height: 300px;
                }
                ul {
                    margin: 17px 0 20px;
                    max-width: 243px;
                    li {
                        display: flex;
                        gap: 0 12px;
                        align-items: center;
                        font-size: 12px;
                        line-height: 22px;
                        color: $textPrimary;
                        margin-bottom: 12px;
                    }
                }
            }
        }
    }
</style>