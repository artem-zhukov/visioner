$(function () {
    var arr;
    $('#magicsuggest').magicSuggest({
        maxSelection: 10, //Максимальное количество слов
        placeholder: "Type here",
        hideTrigger: true,
        valueField: "name",
        sortOrder: 'name',
        minChars: 2,
        data: 'data.json'
    });

    var tags = $('#magicsuggest').magicSuggest();

    $("#magicsuggest").keyup(function () {
        if (event.keyCode == 13) {
            arr = tags.getValue()[tags.getValue().length-1];
            $.ajax({
                type: 'GET',
                url: 'data.json',
                dataType: 'json',
                success: function (data) {
                    var result = checkMatches(data, arr);
                    if (result == 0) {
                        $.ajax({
                            url: 'ajax.php',
                            data: 'postVar=' + arr,
                            type: "POST",
                            success: function (data) {
                            }
                        });
                    }
                }
            });
        }
    });

    function checkMatches(data, arr) {
        var result = 0;
        $.each(data, function (index, element) {
            if (arr == element.name) {
                result = 1;
            }
        });
        return result;
    }
});
