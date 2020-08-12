console.log('It works')

$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('Clicked button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var name = $('.name').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
        } else {
            event.preventDefault()
            statusElm.append('<div class="alert alert-danger">Email is NOT valid</div>')
        }
        
        if(name.length >= 2) {
        } else {
            event.preventDefault()
            statusElm.append('<div class="alert alert-danger">Name is NOT valid</div>')
        }

        if(message.length >= 10) {
        } else {
            event.preventDefault()
            statusElm.append('<div class="alert alert-danger">Message is NOT valid</div>')
        }
    })
})