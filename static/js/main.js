
$(document).ready(function(){
    $("[js-data-toggle=dropdown]").popover('show');
    $(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });
    $(document).on("click", ".popover .btn-default" , function(){
        $(this).parents(".popover").popover('hide');
    });
});

