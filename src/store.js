import { reactive } from 'vue';

export const store = reactive({
    team: [
        {
            name: 'David Cooper',
            role: 'cto & co-founder',
            imgPath: '../assets/img/member-1.jpg'
        },
        {
            name: 'Oliver Jones',
            role: 'chief procurement',
            imgPath: '../assets/img/member-3.jpg'
        },
        {
            name: 'Emma Lopez',
            role: 'chief marketing',
            imgPath: '../assets/img/member-2.jpg'
        },
        {
            name: 'T. Johnson',
            role: 'ceo & president',
            imgPath: '../assets/img/member-4.jpg'
        },
    ]
});