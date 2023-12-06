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
    ],
    articles: [
        {
            title: 'Increasing creativity is possible for everyone',
            imgPath: '../assets/img/news-1.jpg'
        },
        {
            title: 'Because market research is part of the business plan',
            imgPath: '../assets/img/news-2.jpg'
        },
        {
            title: 'Working from home is now a trend',
            imgPath: '../assets/img/news-3.jpg'
        },
        // {
        //     title: 'It\' s never too late for learn something new',
        //     imgPath: '../assets/img/news-4.jpg'
        // },
        // {
        //     title: 'Interval your sessions for more focus',
        //     imgPath: '../assets/img/news-5.jpg'
        // },
    ],
    activeArticle: null,
});