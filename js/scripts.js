jQuery(document).ready(function ($) {
    var c = new app.Cards([
        {
            title: 'Neev Ratnakar',
            type: 'parallax',
            image: {
                src: 'img/0.jpg'
            },
            details: [
                [{value: 'TIMELINE',class: 'description'}]
            ]
        },
        {
            title: 'Personal Details',
            type: 'details',
            details: [
                {key: 'Name',value: 'Neev Ratnakar',keyClass: 'large',valueClass: 'mediumBold'},
                {key: 'Date of birth',value: '23rd October 2012',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Place of birth',value: 'Bangalore',keyClass: 'medium',valueClass: 'largeBold'}
            ]
        },
        {
            title: 'First Month',
            type: 'parallax',
            image: {
                src: 'img/1.JPG'
            },
            details: [
                [{value: 'YAWNING',class: 'description'}]
            ]
        },
        {
            title: 'Parents',
            type: 'details',
            details: [
                {key: 'Father',value: 'Pavan Ratnakar',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Mother',value: 'Sonal Ratnakar',keyClass: 'medium',valueClass: 'mediumBold'}
            ]
        },
        {
            title: 'Second Month',
            type: 'parallax',
            image: {
                src: 'img/2.JPG'
            },
            details: [
                [{value: 'SMILING',class: 'description'}]
            ]
        },
        {
            title: 'Grand Parents',
            type: 'details',
            details: [
                {key: 'Grand Father',value: 'V R Ratnakar',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Grand Mother',value: 'Gayathri Ratnakar',keyClass: 'medium',valueClass: 'mediumBold'}
            ]
        },
        {
            title: 'Third Month',
            type: 'parallax',
            image: {
                src: 'img/3.JPG'
            },
            details: [
                [{value: 'SLEEPING',class: 'description'}]
            ]
        },
        {
            title: 'Grand Parents',
            type: 'details',
            details: [
                {key: 'Grand Father',value: 'Surendra Bhandari',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Grand Mother',value: 'Ranjeela Bhandari',keyClass: 'medium',valueClass: 'mediumBold'}
            ]
        },
        {
            title: 'Fourth Month',
            type: 'parallax',
            image: {
                src: 'img/4.JPG'
            },
            details: [
                [{value: 'SPIKY',class: 'description'}]
            ]
        },
        {
            title: 'TOBE FILLED',
            type: 'details',
            details: []
        },
        {
            title: 'Fifth Month',
            type: 'parallax',
            image: {
                src: 'img/5.JPG'
            },
            details: [
                [{value: 'NAUGHTY',class: 'description'}]
            ]
        },
        {
            title: 'TOBE FILLED',
            type: 'details',
            details: []
        },
        {
            title: 'Sixth Month',
            type: 'parallax',
            image: {
                src: 'img/6.JPG'
            },
            details: [
                [{value: 'FLYING',class: 'description'}]
            ]
        },
        {
            title: 'TOBE FILLED',
            type: 'details',
            details: []
        },
        {
            title: 'Seventh Month',
            type: 'parallax',
            image: {
                src: 'img/7.JPG'
            },
            details: [
                [{value: 'SERIOUS',class: 'description'}]
            ]
        },
        {
            title: 'TOBE FILLED',
            type: 'details',
            details: []
        },
        {
            title: 'Ninth Month',
            type: 'parallax',
            image: {
                src: 'img/8.jpg'
            },
            details: [
                [{value: 'PLAYING',class: 'description'}]
            ]
        },
        {
            title: 'TOBE FILLED',
            type: 'details',
            details: []
        },
        {
            title: 'Ninth Month',
            type: 'parallax',
            image: {
                src: 'img/9.jpg'
            },
            details: [
                [{value: 'COMING SOON',class: 'description'}]
            ]
        }
    ]);
    var a = new app.CardView({
        el: '.homepage .sections',
        collection: c
    }).render();
    $(window).stellar();
});