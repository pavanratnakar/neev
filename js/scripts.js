jQuery(document).ready(function ($) {
    var c = new app.Cards([
        {
            title: 'Neev Ratnakar',
            type: 'parallax',
            image: {
                src: 'img/DSC02844.JPG'
            },
            details: [
                [{value: 'JUST BORN',class: 'description'}]
            ]
        },
        {
            title: 'Personal Details',
            type: 'details',
            details: [
                {key: 'Name',value: 'Neev Ratnakar',keyClass: 'large',valueClass: 'mediumBold'},
                {key: 'Date of birth',value: '23rd October 2013',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Place of birth',value: 'Bangalore',keyClass: 'medium',valueClass: 'largeBold'}
            ]
        },
        {
            title: 'First Month',
            type: 'parallax',
            image: {
                src: 'img/DSC02850.JPG'
            },
            details: [
                [{value: 'Just Born',class: 'description'}]
            ]
        },
        {
            title: 'Parents Details',
            type: 'details',
            details: [
                {key: 'Name',value: 'Neev Ratnakar',keyClass: 'large',valueClass: 'largeBold'},
                {key: 'Father',value: 'Pavan Ratnakar',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Mother',value: 'Sonal Ratnakar',keyClass: 'medium',valueClass: 'mediumBold'}
            ]
        },
        {
            title: 'Second Month',
            type: 'parallax',
            image: {
                src: 'img/IMG_0407.JPG'
            },
            details: [
                [{value: 'Just Born',class: 'description'}]
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
                src: 'img/IMG_0422.JPG'
            },
            details: [
                [{value: 'Just Born',class: 'description'}]
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
            title: 'Fourth Month',
            type: 'parallax',
            image: {
                src: 'img/IMG_0976.JPG'
            },
            details: [
                [{value: 'Just Born',class: 'description'}]
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
            title: 'Fifth Month',
            type: 'parallax',
            image: {
                src: 'img/IMG_0983.JPG'
            },
            details: [
                [{value: 'Just Born',class: 'description'}]
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
            title: 'Sixth Month',
            type: 'parallax',
            image: {
                src: 'img/IMG_0976.JPG'
            },
            details: [
                [{value: 'Just Born',class: 'description'}]
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
            title: 'Seventh Month',
            type: 'parallax',
            image: {
                src: 'img/IMG_0422.JPG'
            },
            details: [
                [{value: 'Just Born',class: 'description'}]
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
            title: 'Ninth Month',
            type: 'parallax',
            image: {
                src: 'img/IMG_0407.JPG'
            },
            details: [
                [{value: 'Just Born',class: 'description'}]
            ]
        }
    ]);
    var a = new app.CardView({
        el: '.homepage .sections',
        collection: c
    });
    a.render();
    $(window).stellar();
});