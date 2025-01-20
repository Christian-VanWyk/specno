import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
    const state = ref({
        OfficeData: [
            {
                key: '1',
                BasicCompanyInfo: {
                    officeName: 'Specno',
                    tel: '082 364 9864',
                    email: 'info@specno.com',
                    officeCapacity: '25',
                    address: '10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530',
                    color: 'lightBlue'
                },
                StaffMembers: [
                    {
                        id: '235',
                        icon: '/resources/profile-images/Profile-1.png',
                        name: 'John Doe',
                    }
                ]
            },
            {
                key: '2',
                BasicCompanyInfo: {
                    officeName: 'Demo Name',
                    tel: '000 000 0000',
                    email: 'address@email.com',
                    officeCapacity: '20',
                    address: 'somewhere in, Cape Town, 7530',
                    color: 'orange'
                },
                StaffMembers: [
                    {
                        id: '245',
                        icon: '/resources/profile-images/Profile-1.png',
                        name: 'John Doe',
                    },
                    {
                        id: '457',
                        icon: '/resources/profile-images/Profile-2.png',
                        name: 'Jane Doe',
                    },
                    {
                        id: '097',
                        icon: '/resources/profile-images/Profile-3.png',
                        name: 'Jane Doey',
                    }
                ]
            },
            {
                key: '3',
                BasicCompanyInfo: {
                    officeName: 'Demo Name',
                    tel: '000 000 0000',
                    email: 'address@email.com',
                    officeCapacity: '20',
                    address: 'somewhere in, Cape Town, 7530',
                    color: 'pink'
                },
                StaffMembers: [
                    {
                        id: '245',
                        icon: '/resources/profile-images/Profile-1.png',
                        name: 'John Doe',
                    },
                    {
                        id: '457',
                        icon: '/resources/profile-images/Profile-2.png',
                        name: 'Jane Doe',
                    },
                    {
                        id: '097',
                        icon: '/resources/profile-images/Profile-3.png',
                        name: 'Jane Doey',
                    }
                ]
            },
            {
                key: '4',
                BasicCompanyInfo: {
                    officeName: 'Demo Name',
                    tel: '000 000 0000',
                    email: 'address@email.com',
                    officeCapacity: '20',
                    address: 'somewhere in, Cape Town, 7530',
                    color: 'orange'
                },
                StaffMembers: [
                    {
                        id: '245',
                        icon: '/resources/profile-images/Profile-1.png',
                        name: 'John Doe',
                    },
                    {
                        id: '457',
                        icon: '/resources/profile-images/Profile-2.png',
                        name: 'Jane Doe',
                    },
                    {
                        id: '097',
                        icon: '/resources/profile-images/Profile-3.png',
                        name: 'Jane Doey',
                    }
                ]
            },
            {
                key: '5',
                BasicCompanyInfo: {
                    officeName: 'Demo Name',
                    tel: '000 000 0000',
                    email: 'address@email.com',
                    officeCapacity: '20',
                    address: 'somewhere in, Cape Town, 7530',
                    color: 'green'
                },
                StaffMembers: [
                    {
                        id: '245',
                        icon: '/resources/profile-images/Profile-1.png',
                        name: 'John Doe',
                    },
                    {
                        id: '457',
                        icon: '/resources/profile-images/Profile-2.png',
                        name: 'Jane Doe',
                    },
                    {
                        id: '097',
                        icon: '/resources/profile-images/Profile-3.png',
                        name: 'Jane Doey',
                    }
                ]
            },
        ],
        Avatars:[
            {
                id: '1',
                icon: '/resources/profile-images/Profile-1.png',
            },
            {
                id: '2',
                icon: '/resources/profile-images/Profile-2.png',
            },
            {
                id: '3',
                icon: '/resources/profile-images/Profile-3.png',
            },
            {
                id: '4',
                icon: '/resources/profile-images/Profile-4.png',
            },
            {
                id: '5',
                icon: '/resources/profile-images/Profile-5.png',
            },
            {
                id: '6',
                icon: '/resources/profile-images/Profile-6.png',
            },
            {
                id: '7',
                icon: '/resources/profile-images/Profile-7.png',
            },
        ]
    })

    const getOfficeData = computed(() => state.value.OfficeData)

    return {
        state,
        getOfficeData
    }
})
