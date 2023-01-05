// $(document).ready(function(){
//     var i = $("img");
//     i.animate({top:'5px',bottom:'5px'},"slow");
// });

// $(document).ready(function() {
//     setInterval(function() {
//         $('#animate').slideUp('5000', function() {
//             $('#animate').slideDown('5000');
//         });
//     }, 1500);
// });
function loop() {
    $('#animate').animate({'top': '525'}, {
        duration: 800, 
        complete: function() {
            $('#animate').animate({top: 535}, {
                duration: 800, 
                complete: loop});
        }});
}
loop();

function newloop() {
    $('#laptop').animate({'left': '2'}, {
        duration: 1000, 
        complete: function() {
            $('#laptop').animate({left: -2}, {
                duration: 1000, 
                complete: newloop});
        }});
}
newloop();


var preloader = document.getElementById('preloader');
function loader(){
    preloader.style.display = 'none';
}

window.onload = (event) => {
    let myAlert = document.querySelector('.toast');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
}