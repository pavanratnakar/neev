jQuery(document).ready(function ($) {
    var c = new app.Cards([
        {
            title: 'Neev Ratnakar',
            type: 'parallax',
            image: {
                src: 'img/0.jpg',
                credit: 'Hetal Shah',
                creditSource: 'https://www.facebook.com/hetal1706'
            },
            details: [
                [{value: 'Timeline',class: 'description'}]
            ]
        },
        {
            title: 'Personal Details',
            type: 'details',
            details: [
                {key: 'Name',value: 'Neev Ratnakar',keyClass: 'large',valueClass: 'mediumBold'},
                {key: 'Date of birth',value: '23rd October 2012',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Time of birth',value: '10:37 AM',keyClass: 'medium',valueClass: 'largeBold'},
                {key: 'Place of birth',value: 'Hyderabad',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Sun sign',value: 'Scorpio',keyClass: 'smallBold',valueClass: 'large'}
            ]
        },
        {
            title: 'First Month',
            type: 'parallax',
            image: {
                src: 'img/1.jpg',
                credit: 'Hetal Shah',
                creditSource: 'https://www.facebook.com/hetal1706'
            },
            details: []
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
                src: 'img/2.jpg',
                credit: 'Sonal Ratnakar',
                creditSource: 'https://www.facebook.com/sonal.ratnakar'
            },
            details: []
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
                src: 'img/3.jpg',
                credit: 'Sonal Ratnakar',
                creditSource: 'https://www.facebook.com/sonal.ratnakar'
            },
            details: []
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
                src: 'img/4.jpg',
                credit: 'Sonal Ratnakar',
                creditSource: 'https://www.facebook.com/sonal.ratnakar'
            },
            details: []
        },
        {
            title: 'Hyderabad Home',
            type: 'details',
            details: [
                {key: 'Date',value: '26th October 2012',keyClass: 'smallBold',valueClass: 'large'}
            ]
        },
        {
            title: 'Fifth Month',
            type: 'parallax',
            image: {
                src: 'img/5.jpg',
                credit: 'V R Ratnakar',
                creditSource: 'https://www.facebook.com/profile.php?id=100003955268332'
            },
            details: []
        },
        {
            title: 'Namkaran Ceremony',
            type: 'details',
            details: [
                {key: 'Date',value: '21st November 2012',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Venue',value: 'Hyderabad',keyClass: 'medium',valueClass: 'mediumBold'}
            ]
        },
        {
            title: 'Sixth Month',
            type: 'parallax',
            image: {
                src: 'img/6.jpg',
                credit: 'V R Ratnakar',
                creditSource: 'https://www.facebook.com/profile.php?id=100003955268332'
            },
            details: []
        },
        {
            title: 'Bangalore Home',
            type: 'details',
            details: [
                {key: 'Date',value: '25th December 2012',keyClass: 'smallBold',valueClass: 'large'}
            ]
        },
        {
            title: 'Seventh Month',
            type: 'parallax',
            image: {
                src: 'img/7.jpg',
                credit: 'V R Ratnakar',
                creditSource: 'https://www.facebook.com/profile.php?id=100003955268332'
            },
            details: []
        },
        {
            title: 'First Sankranti',
            type: 'details',
            details: [
                {key: 'Date',value: '15th January 2013',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Venue',value: 'Bangalore',keyClass: 'medium',valueClass: 'mediumBold'}
            ]
        },
        {
            title: 'Eigth Month',
            type: 'parallax',
            image: {
                src: 'img/8.jpg',
                credit: 'V R Ratnakar',
                creditSource: 'https://www.facebook.com/profile.php?id=100003955268332'
            },
            details: []
        },
        {
            title: 'Ushtavan Ceremony',
            type: 'details',
            details: [
                {key: 'Date',value: '11th April 2013',keyClass: 'smallBold',valueClass: 'large'},
                {key: 'Venue',value: 'Bangalore',keyClass: 'medium',valueClass: 'mediumBold'}
            ]
        },
        {
            title: 'Ninth Month',
            type: 'parallax',
            image: {
                src: 'img/9.jpg',
                credit: 'Prabhu Kalidas',
                creditSource: 'https://www.facebook.com/prabhu.kalidas'
            },
            details: [
                [{value: 'Coming soon',class: 'description'}]
            ]
        }
    ]);
    var a = new app.CardView({
        el: '.homepage .sections',
        collection: c
    }).render();
    $(window).stellar();
});