function hello(event, what){
    event.preventDefault();
    email = $('#'+what).val()
    $.post('http://ohcucontakt.deadpansincerity.com/former.php', {
        z_name: 'Unknown',
        z_requester: email,
        z_subject: 'Open Health Care UK website quick form',
        z_description: 'More information about Open Health Care UK'
    },function(){ window.location = window.location.href});
    return false;
}

function contactform(event){
    event.preventDefault();
    
    $.post('http://ohcucontakt.deadpansincerity.com/former.php', {
        z_name: $('#name').val(),
        z_requester: $('#email').val(),
        z_subject: 'OPAL website contact form',
        z_description: $('#message').val(),
    }, function(){ window.location = window.location.href});
    return false;
}
