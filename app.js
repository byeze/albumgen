var opacidad = 1;
var grayscale = 0;
var title_size = 65;
var preview_title_size = 17;

$('.dl').click(function () {

    if ($(window).width() < 450) {
        $('.album-art').css('width', '600px')
        $('.album-art').css('height', '600px')
        $('.canvas-image').css('width', '600px')
        $('.canvas-image').css('height', '600px')
        $('.canvas-opacity').css('width', '600px')
        $('.canvas-opacity').css('height', '600px')

        $('body, html').animate({
            scrollTop: $("#app").offset().top
        }, 1);

        $('.album-title').removeClass('atr');
        $('.album-title').css('font-size', title_size);

        setTimeout(function () {
            html2canvas(document.querySelector(".album-art"), {
                allowTaint: true,
                useCORS: true,
                width: 600,
                height: 600
            }).then(canvas => {
                var a = document.createElement('a');
                a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                a.download = $('.album-title').val().split(' ').join('-') + '.jpg';
                a.click();
                a.remove();
            });

            $('.album-art').css('width', '270px')
            $('.album-art').css('height', '270px')
            $('.canvas-image').css('width', '270px')
            $('.canvas-image').css('height', '270px')
            $('.canvas-opacity').css('width', '270px')
            $('.canvas-opacity').css('height', '270px')
            $('.album-title').addClass('atr');
            $('.album-title').css('font-size', preview_title_size);
        }, 300);
    } else {
        html2canvas(document.querySelector(".album-art"), {
            allowTaint: true,
            useCORS: true
        }).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = $('.album-title').val().split(' ').join('-') + '.jpg';
            a.click();
            a.remove();
        });
    }

});

window.addEventListener('resize', function () {
    if ($(window).width() > 450) {
        $('.album-art').css('width', '600px')
        $('.album-art').css('height', '600px')
        $('.canvas-image').css('width', '600px')
        $('.canvas-image').css('height', '600px')
        $('.canvas-opacity').css('width', '600px')
        $('.canvas-opacity').css('height', '600px')
        $('.album-title').removeClass('atr');
        $('.album-title').css('font-size', title_size);
    } else {
        $('.album-art').css('width', '270px')
        $('.album-art').css('height', '270px')
        $('.canvas-image').css('width', '270px')
        $('.canvas-image').css('height', '270px')
        $('.canvas-opacity').css('width', '270px')
        $('.canvas-opacity').css('height', '270px')
        $('.album-title').addClass('atr');
        $('.album-title').css('font-size', preview_title_size);
    }
})

$('#bgurl').bind('input', function () {
    $('.canvas-image').css('background-image', 'url(' + $(this).val() + ')');
});

$('#themecolor').bind('input', function () {
    $('.album-author').css('color', $(this).val());
    $('.album-separator').css('background-color', $(this).val());
});

$('#customfont').bind('input', function () {
    $('.album-art').css('font-family', '\'' + $(this).val() + '\'');
});

$("#hideColorPills").change(function () {
    if (this.checked) {
        $('.album-separator').css('opacity', '0');
    } else {
        $('.album-separator').css('opacity', '1');
    }
});

$("#hideAuthor").change(function () {
    if (this.checked) {
        $('.album-author').css('opacity', '0');
    } else {
        $('.album-author').css('opacity', '1');
    }
});

function addOrChangeFilter(filter_name, filter_value) {
    if (filter_name == 'opacity') {
        $('.canvas-image').css('filter', 'opacity(' + filter_value + ') grayscale(' + grayscale + '%)');
        opacidad = filter_value;
    } else if (filter_name == 'grayscale') {
        $('.canvas-image').css('filter', 'opacity(' + opacidad + ') grayscale(' + filter_value + '%)');
        grayscale = filter_value;
    }
}

$('#oobv').change(function () {
    //addOrChangeFilter('opacity', $(this).val());
    $('#oobv_value').html($('#oobv').val())
    $('.canvas-opacity').css('background-color', 'rgba(0, 0, 0, ' + $(this).val() + ')');
});

$("#bwColors").change(function () {
    if (this.checked) {
        addOrChangeFilter('grayscale', '100');
    } else {
        addOrChangeFilter('grayscale', '0');
    }
});

$("#darkBkgr").change(function () {
    if (this.checked) {
        $('.canvas-opacity').show();
    } else {
        $('.canvas-opacity').hide();
    }
});

$("#boldTitle").change(function () {
    if (this.checked) {
        $('.album-title').css('font-weight', 'bold');
    } else {
        $('.album-title').css('font-weight', 'normal');
    }
});

$("#upperTitle").change(function () {
    if (this.checked) {
        $('.album-title').css('text-transform', 'uppercase');
    } else {
        $('.album-title').css('text-transform', 'none');
    }
});

$("#upperAll").change(function () {
    if (this.checked) {
        $('.album-title').css('text-transform', 'uppercase');
        $('.album-author').css('text-transform', 'uppercase');
    } else {
        $('.album-title').css('text-transform', 'none');
        $('.album-author').css('text-transform', 'none');
    }
});

$("#upperAuthor").change(function () {
    if (this.checked) {
        $('.album-author').css('text-transform', 'uppercase');
    } else {
        $('.album-author').css('text-transform', 'none');
    }
});

$('#moreTitleSize').click(function () {
    // If mobile
    if ($('.album-art').css('width') == '270px') {
        // Se suma 48px al tamaño preview
        preview_title_size += 5;
        title_size = preview_title_size + 48;
        $('.album-title').css('font-size', preview_title_size + 'px');
        console.log(preview_title_size);
    } else {
        // 5 in 5 scale
        title_size += 5;
        $('.album-title').css('font-size', title_size + 'px');
    }
});

$('#minusTitleSize').click(function () {
    // If mobile
    if ($('.album-art').css('width') == '270px') {
        // Se resta 48px al tamaño preview
        console.log(preview_title_size);
        preview_title_size -= 5;
        title_size = 48 - preview_title_size;
        $('.album-title').css('font-size', preview_title_size + 'px');
    } else {
        // 5 in 5 scale
        title_size += 5;
        $('.album-title').css('font-size', title_size + 'px');
    }
});