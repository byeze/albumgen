var opacidad = 1;
var grayscale = 0;
var title_size = 65;

$('.dl').click(function () {
    html2canvas(document.querySelector("#canvas"), {
        allowTaint: true,
        useCORS: true
    }).then(canvas => {
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = $('.album-title').val().split(' ').join('-') + '.jpg';
        a.click();
        a.remove();
    });
});

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

$('#oobv').bind('input', function () {
    //addOrChangeFilter('opacity', $(this).val());
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

$('#moreTitleSize').click(function() {
    // 5 in 5 scale
    title_size += 5;
    $('.album-title').css('font-size', title_size);
});

$('#minusTitleSize').click(function() {
    // 5 in 5 scale
    title_size -= 5;
    $('.album-title').css('font-size', title_size);
});