    $(document).ready(function(){
    dropdownOpen();
    });
    function dropdownOpen() {

    var $dropdownLi = $('li.dropdown');

    $dropdownLi.mouseover(function() {
    $(this).addClass('open');
    }).mouseout(function() {
    $(this).removeClass('open');
    });
    }