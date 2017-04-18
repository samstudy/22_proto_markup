
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'bottom',
        html : true,
        title : '<p><a href="#" class="close" data-dismiss="alert">×</a><p>',
        content : '<div class="media"><div class="media-body"><h5 class="media-heading">Ваш регион-Новосибирск и область</h5><div class="col-md-8"><h4 class="text-right">Угадали?</h4></div></div><div class="row"><div class="text-right"><div class="col-md-6"><button class="btn btn-default" type="submit">Да</button></div></div><div class="col-md-6"><button class="btn btn-default" type="submit">Нет</button></div></div></div>'
    })
    $("[data-toggle=popover]").popover('show');
    $(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });
    $(document).on("click", ".popover .btn-default" , function(){
        $(this).parents(".popover").popover('hide');
    });
});

