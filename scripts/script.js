$(function () {

    //* Showing New note box
    $('a.stickyNote').on('click', function (e) {
        e.preventDefault();
        console.log('Sticky note button clicked');
        $('.todoContainer').hide();
        $('.formContainer').show();
        $('.reminderContainer').hide();
        $('.parentContainer').css('display', 'flex');
        $('body').addClass('note'); //* change the background in Text note section
        $('.addNewNote').css('height', '10vh');
        $('.stickyNote').css('border-bottom', '1px solid #f06543');
        $('.listing').css('border-bottom', 'none')
    })

    //* Showing To Do list box
    $('a.listing').on('click', function (e) {
        e.preventDefault();
        console.log('To-Do button clicked');
        $('.formContainer').hide();
        $('.todoContainer').show();
        $('.reminderContainer').hide();
        $('.parentContainer').css('display', 'flex');
        $('.addNewNote').css('height', '10vh');
        $('.listing').css('border-bottom', '1px solid #f06543');
        $('.stickyNote').css('border-bottom', 'none')
    })

    //* Showing Reminder list box
    $('a.reminder').on('click', function (e) {
        e.preventDefault();
        // console.log('Reminder button clicked');
        $('.formContainer').hide();
        $('.todoContainer').hide();
        $('.reminderContainer').show();
        $('.parentContainer').css('display', 'flex');
        $('.addNewNote').css('height', '10vh');
        $('.reminder').css('border-bottom', '1px solid #f06543');
        $('.listing').css('border-bottom', 'none');
        $('.stickyNote').css('border-bottom', 'none')
    })

    //* Text Note Starts Here--------------- 
    //* capturing note Heading and Note data
    $('form.textNoteForm').on('submit', function (e) {
        e.preventDefault();
        const noteHeading = $('input.noteHeading').val();
        //* console.log(noteHeading);
        const noteDetails = $('textarea').val();
        //* console.log(noteDetails);

        if (noteDetails) {
            const textNote = `<div class="generalNote">
        <h2>${noteHeading}</h2>
        <p>${noteDetails}</p>
        </div>`;
            $('.textNoteContainer').append(textNote);
            $('input.noteHeading,textarea').val('');
        } else {
            $('input.noteHeading,textarea').css("border", "1px solid #D7263D");
        }
    })
    //* Text Note Ends Here--------------- 

    //* To Do Starts Here-----------------
    $('form.toDo').on('submit', function (e) {
        e.preventDefault();
        let todoNoteHeading = $('input.todoHeading').val();
        //* console.log(todoNoteHeading);
        let todoNoteList = $('input.todoList').val();
        //* console.log(todoNoteList);

        if (todoNoteList) {
            const listHeading = `<h2>${todoNoteHeading}</h2>`;
            const listItems = `<li><i class="far fa-check-circle"></i> ${todoNoteList}</li>`;
            $('div.toDoTitle').html(listHeading);
            $('ul.toDoHead').append(listItems);
            $('input.todoList').val(''); //*checking if input field has data then clear the field for next item to input
        }
        else {
            $('input.todoList, input.todoHeading').css("border", "1px solid #D7263D");
        }

    })

    $('ul').on('click', 'li', function () {
        $(this).toggleClass('text-muted');
    })
    //* To Do Ends Here-------------------

    //* Reminder Starts Here-----------------

    $('.reminderForm').on('submit', function (e) {
        e.preventDefault();
        let seconds = parseInt($('#time').val());
        let reminderMessage = $('input.reminderNote').val();
        
        let interval = setInterval(function () {

            seconds--;

            if (seconds === 0) {
                clearInterval(interval);
                $('#clip').trigger('play')
                const reminder = `<h2>${reminderMessage}</h2>`;
                $('div.reminderNote').html(reminder).addClass('vibrate');

            }
        }, 1000);
    });
    //* Reminder Ends Here-------------------

});