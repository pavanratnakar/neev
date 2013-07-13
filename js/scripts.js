jQuery(document).ready(function ($) {
    var c = new app.Cards([
        {
            title: 'Neev Ratnakar',
            type: 'parallax',
            image: {
                src: 'img/0.jpg'
            },
            details: [
                [{value: 'Timeline',class: 'description'}]
            ],
            credit: {
                name: 'Hetal Shah',
                src: 'http://facebook.com'
            }
        },
        {
            title: 'Personal Details',
            type: 'details',
            details: [
                {key: 'Name',value: 'Neev Ratnakar',keyClass: 'large',valueClass: 'mediumBold'},
                {key: 'Date of birth',value: '23rd October 2012',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Place of birth',value: 'Hyderabad',keyClass: 'medium',valueClass: 'largeBold'}
            ]
        },
        {
            title: 'First Month',
            type: 'parallax',
            image: {
                src: 'img/1.jpg'
            },
            details: [
                [{value: 'Yawning',class: 'description'}]
            ],
            credit: {
                name: 'Hetal Shah',
                src: 'http://facebook.com'
            }
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
                src: 'img/2.jpg'
            },
            details: [
                [{value: 'Smiling',class: 'description'}]
            ],
            credit: {
                name: 'Hetal Shah',
                src: 'http://facebook.com'
            }
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
                src: 'img/3.jpg'
            },
            details: [
                [{value: 'Sleeping',class: 'description'}]
            ],
            credit: {
                name: 'Hetal Shah',
                src: 'http://facebook.com'
            }
        },
        {
            title: 'Grand Parents',
            type: 'details',
            details: [
                {key: 'Grand Father',value: 'Surendra Bhandari',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Grand Mother',value: 'Ranjila Bhandari',keyClass: 'medium',valueClass: 'mediumBold'}
            ]
        },
        {
            title: 'Fourth Month',
            type: 'parallax',
            image: {
                src: 'img/4.jpg'
            },
            details: [
                [{value: 'Spiky',class: 'description'}]
            ],
            credit: {
                name: 'Hetal Shah',
                src: 'http://facebook.com'
            }
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
                src: 'img/5.jpg'
            },
            details: [
                [{value: 'NAUGHTY',class: 'description'}]
            ],
            credit: {
                name: 'Hetal Shah',
                src: 'http://facebook.com'
            }
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
                src: 'img/6.jpg'
            },
            details: [
                [{value: 'Flying',class: 'description'}]
            ],
            credit: {
                name: 'Hetal Shah',
                src: 'http://facebook.com'
            }
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
                src: 'img/7.jpg'
            },
            details: [
                [{value: 'SERIOUS',class: 'description'}]
            ],
            credit: {
                name: 'Hetal Shah',
                src: 'http://facebook.com'
            }
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
                [{value: 'Playing',class: 'description'}]
            ],
            credit: {
                name: 'Hetal Shah',
                src: 'http://facebook.com'
            }
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
                [{value: 'Coming soon',class: 'description'}]
            ],
            credit: {
                name: 'Hetal Shah',
                src: 'http://facebook.com'
            }
        }
    ]);
    var a = new app.CardView({
        el: '.homepage .sections',
        collection: c
    }).render();
    $(window).stellar();
});