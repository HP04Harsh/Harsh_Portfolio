$(document).ready(function () {

    // Add Active to Sidebar link when click
    $(".sidebar nav li a").click(function () {
        $(".sidebar nav li a").removeClass('active');
        $(this).addClass('active');
        // Close sidebar on mobile after clicking a link
        $('.homepage .sidebar').removeClass('active');
        $('.hamburger-menu').removeClass('active');
    });

    // Click on Get Started to scroll down
    $('.homepage .hero-section .get-started').click(function () {
        $('html,body').animate({
            scrollTop: $(".homepage .hero-section").innerHeight()
            // We Need to get hero section height
        }, '100')
    });

    // Hamburger Menu Toggle
    $('#hamburgerMenu, #closeSidebar').click(function () {
        $('.homepage .sidebar').toggleClass('active');
        $('#hamburgerMenu').toggleClass('active');
    });

    // Close sidebar when clicking outside
    $(document).click(function (event) {
        if (!$(event.target).closest('.sidebar, #hamburgerMenu').length) {
            $('.homepage .sidebar').removeClass('active');
            $('#hamburgerMenu').removeClass('active');
        }
    });

    // Initiate Typed js with Platform Engineering focus
    new Typed('#typed', {
        strings: [
            "I'm Harsh Pardhi",
            'Platform Engineer',
            'DevOps Specialist',
            'Cloud Architect',
            'Software Engineer',
            'Infrastructure Automation Expert'
        ],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    // Init Image Filter

    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            // use $(this) to get item element
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        $(this).addClass('active').siblings().removeClass('active')
        var filterValue = $(this).attr('data-filter');
        // use filter function if value matches
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({ filter: filterValue });
    });

    // Contact Form Email Integration
    $('#sendEmailBtn').click(function () {
        const name = $('#contactName').val();
        const phone = $('#contactPhone').val();
        const email = $('#contactEmail').val();
        const subject = $('#contactSubject').val();
        const message = $('#contactMessage').val();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields (Name, Email, Subject, and Message)');
            return;
        }

        const emailBody = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        const mailtoLink = `mailto:harshpardhi477@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;

        window.location.href = mailtoLink;
    });

});

$(window).on('load', function () {
    $(".loading").addClass('endLoading').fadeOut(2000)
})