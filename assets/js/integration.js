$(document).ready(function(){
    val = $('input[name=integration_type]').val();
    if(val == 1){
        $('#o-auth-integration').removeClass('d-none');
    }else if(val==2){
        $('#service-account-sync-intergration').removeClass('d-none');
    }else{
        $('#disable-intergration').removeClass('d-none');
    }
})

$('input[name=integration_type]').click(function(){
    val = $(this).val();
    $('#o-auth-integration').addClass('d-none');
    $('#service-account-sync-intergration').addClass('d-none');
    $('#disable-intergration').addClass('d-none');
    if(val == 1){
        $('#o-auth-integration').removeClass('d-none');
    }else if(val==2){
        $('#service-account-sync-intergration').removeClass('d-none');
    }else{
        $('#disable-intergration').removeClass('d-none');
    }
})

$('#copy_uri').click(function (){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#redirect_uri_box').text()).select();
    document.execCommand("copy");
    $temp.remove();
})

