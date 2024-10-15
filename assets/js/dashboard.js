"use strict";
// Preloader area
const preloader = document.getElementById("preloader");
const preloaderFunction = () => {
    preloader.style.display = "none";
};


// Toggle sidebar start
document.querySelectorAll('.toggle-sidebar-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.body.classList.toggle("toggle-sidebar");
    });
});
// Toggle sidebar end

// // Toggle sidebar start
// // Toggle sidebar visibility
// document.querySelectorAll('.toggle-sidebar-btn').forEach(button => {
//     button.addEventListener('click', (event) => {
//         event.stopPropagation(); // Prevent the click from propagating to the document
//         document.body.classList.toggle("toggle-sidebar");
//     });
// });

// // Hide sidebar when clicking outside of it
// document.addEventListener('click', (event) => {
//     const sidebar = document.querySelector('.sidebar');
//     const toggleButton = document.querySelector('.toggle-sidebar-btn');

//     // Check if the click is outside the sidebar and the toggle button
//     if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
//         document.body.classList.remove("toggle-sidebar");
//     }
// });
// // Toggle sidebar end



// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// cmn select2 start
$(document).ready(function () {
    $('.cmn-select2').select2();
});
// cmn select2 end

// cmn-select2-modal
$(".modal-select").select2({
    dropdownParent: $("#formModal"),
});

// cmn-select2 with image start
$(document).ready(function () {
    $('.cmn-select2-image').select2({
        templateResult: formatState,
        templateSelection: formatState
    });
});

// select2 function
function formatState(state) {
    if (!state.id) {
        return state.text;
    }
    var baseUrl = "assets/img/mini-flag";
    var $state = $(
        '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
};
// cmn-select2 with image start





$(document).ready(function () {
    // owl carousel dashboard card
    $('.carousel-1').owlCarousel({
        loop: true,
        // autoplay: true,
        margin: -20,
        nav: false,
        dots: false,
        // rtl:true,
        responsive: {
            0: {
                items: 1
            },
            375: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 3
            }
        }
    });

    // Bootstrap datepicker start
    if ($('.date').length) {
        $('.date').datepicker({
            // options here
            format: 'dd/mm/yyyy',
        });
    }
    // Bootstrap datepicker end
    //Multi step progress section start

    // Jquery UI start
    if ($('#datepicker').length) {
        $("#datepicker").datepicker({
            buttonImageOnly: false,
        });
    }
    // Jquery UI end

    // Apexcharts start
    // Columnchart
    if ($('#columnChart').length) {
        var options = {
            series: [{
                name: 'Investment',
                color: '#567eae',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 40,45,50]
            }, {
                name: 'Payout',
                color: 'rgb(174,134,86)',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 60,
                65,70]
            }, 
            {
                name: 'Deposit',
                color: '#5a56ae',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 80,85,90]
            },
            {
                name: 'Deposit Bonus',
                color: '#e7bb89',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 30,35,40]
            }
        ],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#columnChart"), options);
        chart.render();

    }

    // 


    // Piechart
    if ($('#pieChart').length) {
        var options = {
            series: [44, 55, 13, 33],
            chart: {
                type: 'donut',
                height: '300'
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
            }
        };

        var chart = new ApexCharts(document.querySelector("#pieChart"), options);
        chart.render();
    }
    // Apexcharts end

    // Circle progress start

    if ($('.circle').length) {
        $('.first.circle').circleProgress({
            value: 0.90,
            size: 70,
            fill: {
                gradient: ["#ae8656"]
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('span').html(Math.round(90 * progress) + '<i>%</i>');
            $(this).find('span').addClass('percent');
        });

    }
    if ($('.circle').length) {
        $('.second.circle').circleProgress({
            value: 0.60,
            size: 70,
            fill: {
                gradient: ["#ae8656"]
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('span').html(Math.round(60 * progress) + '<i>%</i>');
            $(this).find('span').addClass('percent');
        });

    }
    if ($('.circle').length) {
        $('.third.circle').circleProgress({
            value: 0.30,
            size: 70,
            fill: {
                gradient: ["#ae8656"]
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('span').html(Math.round(30 * progress) + '<i>%</i>');
            $(this).find('span').addClass('percent');
        });
    }

    // Circle progress start

    // Line progressbar start
    if ($('#jq1').length) {
        $('#jq1').LineProgressbar({
            percentage: 90,
            fillBackgroundColor: '#fec339',
            height: '5px',
            radius: '5px',
        });
    }
    if ($('#jq2').length) {
        $('#jq2').LineProgressbar({
            percentage: 50,
            fillBackgroundColor: '#fec339',
            height: '5px',
            radius: '5px',
        });
    }
    if ($('#jq3').length) {
        $('#jq3').LineProgressbar({
            percentage: 70,
            fillBackgroundColor: '#fec339',
            height: '5px',
            radius: '5px',
        });
    }
    if ($('#jq4').length) {
        $('#jq4').LineProgressbar({
            percentage: 60,
            fillBackgroundColor: '#fec339',
            height: '5px',
            radius: '5px',
        });
    }



    // Line progressbar end

});


