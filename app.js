var opacidad = 1;
var grayscale = 0;
var title_size = 65;
var preview_title_size = 17;
var author_size = 20;
var original_author;
var original_title;
var titleAdded = false;

$('.dl').click(function () {

    if ($(window).width() < 450) {
        $('.album-art').css('width', '600px')
        $('.album-art').css('height', '600px')
        $('.canvas-image').css('width', '600px')
        $('.canvas-image').css('height', '600px')
        $('.canvas-opacity').css('width', '600px')
        $('.canvas-opacity').css('height', '600px')
        $('.album-separator').css('height', '16px')
        $('.album-separator').css('width', '48px')

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
                var title = $('.album-title').val().toLowerCase();
                var a = document.createElement('a');
                a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                a.download = title.split(' ').join('-') + '-' + Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5) + '.jpg';
                a.click();
                a.remove();
            });

            $('.album-art').css('width', '270px')
            $('.album-art').css('height', '270px')
            $('.canvas-image').css('width', '270px')
            $('.canvas-image').css('height', '270px')
            $('.canvas-opacity').css('width', '270px')
            $('.canvas-opacity').css('height', '270px')
            $('.album-separator').css('width', '32px')
            $('.album-separator').css('height', '8px')
            $('.album-title').addClass('atr');
            $('.album-title').css('font-size', preview_title_size);
        }, 7);
    } else {
        html2canvas(document.querySelector(".album-art"), {
            allowTaint: true,
            useCORS: true,
            scale: 3
        }).then(canvas => {
            var title = $('.album-title').val().toLowerCase();
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = title.split(' ').join('-') + '-' + Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5) + '.jpg';
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

$('#customthemecolor').bind('input', function () {
    $('.album-author').css('color', $(this).val());
    $('.album-separator').css('background-color', $(this).val());
});

$('#themes').change(function () {
    if ($(this).val() !== 'custom') {
        $('#customthemecolor').hide();
    }

    switch ($(this).val()) {
        case 'white':
            $('.album-author').css('color', '#FFF');
            $('.album-separator').css('background-color', '#FFF');
            break;

        case 'black':
            $('.album-author').css('color', '#000');
            $('.album-separator').css('background-color', '#000');
            break;

        case 'purple':
            $('.album-author').css('color', '#B646FF');
            $('.album-separator').css('background-color', '#B646FF');
            break;

        case 'red':
            $('.album-author').css('color', '#FA0231');
            $('.album-separator').css('background-color', '#FA0231');
            break;

        case 'yellow':
            $('.album-author').css('color', '#E0FD35');
            $('.album-separator').css('background-color', '#E0FD35');
            break;

        case 'cyan':
            $('.album-author').css('color', '#45D7FC');
            $('.album-separator').css('background-color', '#45D7FC');
            break;

        case 'gold':
            $('.album-author').css('color', '#C9BD02');
            $('.album-separator').css('background-color', '#C9BD02');
            break;

        case 'half':
            $('.album-author').css('color', '#91CECF');
            $('.album-separator').css('background-color', '#91CECF');
            break;

        case 'gold_sand':
            $('.album-author').css('color', '#E4BA92');
            $('.album-separator').css('background-color', '#E4BA92');
            break;

        case 'pink':
            $('.album-author').css('color', '#E484C9');
            $('.album-separator').css('background-color', '#E484C9');
            break;

        case 'blue':
            $('.album-author').css('color', '#00DACA');
            $('.album-separator').css('background-color', '#00DACA');
            break;

        case 'custom':
            $('#customthemecolor').show();
            break;
    }

});

$('#customfont').bind('input', function () {
    $('.album-art').css('font-family', '\'' + $(this).val() + '\'');
});

function addGoogleFont(FontName) {
    $('link[data-id="customfont"]').remove();
    $("head").append("<link data-id='customfont' href='https://fonts.googleapis.com/css?family=" + FontName + "' rel='stylesheet' type='text/css'>");
}

function addCustomFont(FontName) {
    $('link[data-id="customfont"]').remove();

    switch(FontName) {
        case 'circular':
            //("head").append("<link data-id='customfont' href='fonts/circular.css' rel='stylesheet' type='text/css'>");
            // Already added!
            break;
    }
}

$("#fonts").change(function () {
    if ($(this).val() !== 'custom') {
        $('#customfont').hide();
    }

    switch ($(this).val()) {
        case 'arial':
            $('.album-art').css('font-family', '"Arial"');
            break;

        case 'times':
            $('.album-art').css('font-family', '"Times New Roman"');
            break;

        case 'bahn':
            $('.album-art').css('font-family', '"Bahnschrift"');
            break;

        case 'helvetica':
            $('.album-art').css('font-family', '"Helvetica"');
            break;

        case 'montserrat':
            addGoogleFont('Montserrat');
            $('.album-art').css('font-family', '"Montserrat"');
            break;

        case 'lato':
            addGoogleFont('Lato');
            $('.album-art').css('font-family', '"Lato"');
            break;

        case 'playfair':
            addGoogleFont('Playfair Display');
            $('.album-art').css('font-family', '"Playfair Display"');
            break;

        case 'circular':
            addCustomFont('circular');
            $('.album-art').css('font-family', '"Circular Sp UI v3 T"');
            break;

        case 'roboto':
            addGoogleFont('Roboto');
            $('.album-art').css('font-family', '"Roboto"');
            break;

        case 'source':
            addGoogleFont('Source Sans Pro');
            $('.album-art').css('font-family', '"Source Sans Pro"');
            break;

        case 'oswald':
            addGoogleFont('Oswald');
            $('.album-art').css('font-family', '"Source Sans Pro"');
            break;

        case 'custom':
            $('#customfont').show();
            break;
    }
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

$('#oobv').on('input', function () {
    //addOrChangeFilter('opacity', $(this).val());
    $('#oobv_value').html($('#oobv').val())
    $('.canvas-opacity').css('background-color', 'rgba(0, 0, 0, ' + $(this).val() + ')');
});

$('#oolv').on('input', function () {
    //addOrChangeFilter('opacity', $(this).val());
    $('#oolv_value').html($('#oolv').val())
    $('.canvas-spotify').css('opacity', $(this).val())
});

$("#bwColors").change(function () {
    if (this.checked) {
        addOrChangeFilter('grayscale', '100');
    } else {
        addOrChangeFilter('grayscale', '0');
    }
});

$("#boldTitle").change(function () {
    if (this.checked) {
        $('.album-title').css('font-weight', 'bold');
    } else {
        $('.album-title').css('font-weight', 'normal');
    }
});

$("#spotifyLogo").change(function () {
    if (this.checked) {
        $('.canvas-spotify').show();
    } else {
        $('.canvas-spotify').hide();
    }
});

$("#upperTitle").change(function () {
    if (this.checked) {
        original_title = $('.album-title').val();
        $('.album-title').val($('.album-title').val().toUpperCase());
    } else {
        if (original_title.toLowerCase() == $('.album-title').val().toLowerCase()) {
            $('.album-title').val(original_title);
        } else {
            original_title = $('.album-title').val().toLowerCase();
            $('.album-title').val(original_title);
        }
    }
});

$("#upperAll").change(function () {
    if (this.checked) {
        original_title = $('.album-title').val();
        $('.album-title').val($('.album-title').val().toUpperCase());
        original_author = $('.album-author').val();
        $('.album-author').val($('.album-author').val().toUpperCase());
    } else {
        if (original_title.toLowerCase() == $('.album-title').val().toLowerCase()) {
            $('.album-title').val(original_title);
        } else {
            original_title = $('.album-author').val().toLowerCase();
            $('.album-title').val(original_title);
        }

        if (original_author.toLowerCase() == $('.album-author').val().toLowerCase()) {
            $('.album-author').val(original_author);
        } else {
            original_author = $('.album-author').val().toLowerCase();
            $('.album-author').val(original_author);
        }
    }
});

$("#upperAuthor").change(function () {
    if (this.checked) {
        original_author = $('.album-author').val();
        $('.album-author').val($('.album-author').val().toUpperCase());
    } else {
        if (original_author.toLowerCase() == $('.album-author').val().toLowerCase()) {
            $('.album-author').val(original_author);
        } else {
            original_author = $('.album-author').val().toLowerCase();
            $('.album-author').val(original_author);
        }
    }
});

$('#moreTitleSize').click(function () {
    // If mobile
    if ($('.album-art').css('width') == '270px') {
        // Se suma 48px al tamaño real
        preview_title_size += 5;
        title_size = preview_title_size + 48;
        titleAdded = true;
        $('.album-title').css('font-size', preview_title_size + 'px');
        console.log(preview_title_size, title_size);
    } else {
        // 5 in 5 scale
        title_size += 5;
        $('.album-title').css('font-size', title_size + 'px');
    }
});

$('#minusTitleSize').click(function () {
    // If mobile
    if ($('.album-art').css('width') == '270px') {
        // Se resta 48px al tamaño real
        preview_title_size -= 5;
        title_size = preview_title_size + 48;
        $('.album-title').css('font-size', preview_title_size + 'px');
        console.log(preview_title_size, title_size);
    } else {
        // 5 in 5 scale
        title_size -= 5;
        $('.album-title').css('font-size', title_size + 'px');
    }
});

$('#moreAuthorSize').click(function () {
    author_size += 5;
    $('.album-author').css('font-size', author_size + 'px');
});

$('#minusAuthorSize').click(function () {
    author_size -= 5;
    $('.album-author').css('font-size', author_size + 'px');
});