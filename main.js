const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        console.log(event);
        console.log(event.target);

        // If Else Statements

        if(event.target.id === 'grey') {
            body.style.backgroundColor = 'grey'
        }

        if(event.target.id === 'white') {
            body.style.backgroundColor = 'white'
        }

        if(event.target.id === 'red') {
            body.style.backgroundColor = 'red'
        }

        if(event.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow'
        }


        // Switch Case Statement

        const color = event.target.id

        switch(color) {
            case 'grey': body.style.backgroundColor = 'grey'
            break

            case 'white': body.style.backgroundColor = 'white'
            break

            case 'red' : body.style.backgroundColor = 'red'
            break

            case 'yellow' : body.style.backgroundColor = 'yellow'
            break
        }
    })
})