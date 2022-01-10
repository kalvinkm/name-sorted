const list = []

$('#add').click(function () {
    $('#names-div').css('visibility', 'visible').toggle()
    $('#draw').css('visibility', 'visible').toggle()
})

$('#name-confirmed').click(function () {
    const names = $('#names').val()

    if(names != "") {
        list.push(names)
        $('#res').html(`${list} `)
    } else {
        $('#res').text('Preencha o campo!')
    }
    $("body").find('main').find('input,  text').val('')
    $('#add').hide()
})

$('#draw').click(function () {
    const sorted = Math.floor(Math.random() * list.length)
    $('#name-drawn').html(`O sorteado foi: ${list[sorted]}`)
    $('#reset').css('visibility', 'visible')
})

/* $('#reset').click(function() {

}) */