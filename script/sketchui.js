$(function() {
    $('.play').each(function(index, val) {
        $(this).click(function() {
            var sketchId = $(this).data('sketch-id');
            var sketchPath = $('#'+sketchId).data('sketch-src');
            console.log(sketchId, sketchPath);
            if ($('#sketchframe-'+sketchId).length == 0) {
                $('#'+sketchId).append(
                    "<iframe id='sketchframe-"+sketchId+"' src='"+sketchPath+
                    "' width='400' height='400' frameborder='0'></iframe>");
            }
        });
    });
    $('.stop').each(function(index, val) {
        $(this).click(function() {
            var sketchId = $(this).data('sketch-id');
            console.log(sketchId);
            $('#sketchframe-'+sketchId).remove();
        });
    });
});