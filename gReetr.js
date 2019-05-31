(function (global, $) {
    var greetr = function (firstName, lastName, language) {
        return new greetr.init(firstName, lastName, language);
        //returns an object, created by invoking greetr.init function constructor
    }

    greetr.init = function (firstName, lastName, language) {
        var self = this; //to avoid confusion of whom "this" points to

        self.firstName = firstName || " ";
        self.lastName = lastName || " ";
        self.language = language || "en";
    };

    var supportedLanguages = ["en", "es", "bn"];

    var casualGreetings = {
        en: "Hello",
        es: "Hola",
        bn: "হ্যালো"
    };

    var formalGreetings = {
        en: "Greetings",
        es: "Saludos",
        bn: "সম্ভাসণ"
    };

    var logMessages = {
        en: "Logged in",
        es: "Iniciaó sesión",
        bn: "লগইন সম্পন্ন"
    };

    //greetr.init.prototype = greetr.prototype;

    greetr.init.prototype = {
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },

        validLanguage: function () {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Unsupported Language";
            }
        },

        greetMessageCasual: function () {
            return casualGreetings[this.language] + " " + this.firstName;
        },

        greetMessageFormal: function () {
            return formalGreetings[this.language] + ", " + this.fullName();
        },

        greetDisplay: function (formal) {
            var message;
            if (formal) {
                message = this.greetMessageFormal();
            } else {
                message = this.greetMessageCasual();
            }

            if (console) {
                console.log(message);
            }

            return this;
        },

        logDisplay: function () {
            if (console) {
                console.log(logMessages[this.language] + ", " + this.fullName());
            }

            return this;
        },

        setLanguage: function (lang) {
            this.language = lang;

            this.validLanguage();

            return this;
        }
    };

    global.greetr = global.g$ = greetr; //to use both "greetr" and "g$" as function
}(window, jQuery));