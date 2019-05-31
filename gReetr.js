(function (global, $) {
    var greetr = function (firstName, lastName, language) {
        return new greetr.init(firstName, lastName, language);
    }

    greetr.init = function (firstName, lastName, language) {
        var self = this;

        self.firstName = firstName || " ";
        self.lastName = lastName || " ";
        self.language = language || "en";
    }

    greetr.init.prototype = greetr.prototype;

    greetr.prototype = {};

    global.greetr = global.g$ = greetr;
}(window, jQuery));