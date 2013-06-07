Balanced.NET = (function () {

    var csrfToken = $.cookie('csrftoken');

    var ajaxHeaders = {
        'X-CSRFToken': csrfToken
    };

    $.ajaxSetup({
        type: 'POST',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function (xhr, settings) {
            for (var key in ajaxHeaders) {
                if (!ajaxHeaders.hasOwnProperty(key)) {
                    continue;
                }
                xhr.setRequestHeader(key, ajaxHeaders[key]);
            }
        }
    });

    return {
        init: function () {
            if (!window.TESTING) {
                // POSTing to / will return a csrf token
                $.post(Ember.ENV.BALANCED.AUTH).success(function (r) {
                    csrfToken = r.csrf;
                    $.cookie('csrftoken', csrfToken);
                    ajaxHeaders['X-CSRFToken'] = csrfToken;
                });
            }
        },
        ajaxHeaders: ajaxHeaders
    };

})();
