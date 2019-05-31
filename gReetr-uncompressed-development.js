(function (global, $) {

    //returns an object. can be used to create an object 
    var greetr = function (firstName, lastName, language) {
        return new greetr.init(firstName, lastName, language);
        //returns an object, created by invoking greetr.init function constructor
    }

    //the actual object is created here. Purpose: so that we don't have to use "new" every time we create an object
    //simply can use  "g$(firstname, lastname, language)"
    greetr.init = function (firstName, lastName, language) {
        var self = this; //to avoid confusion of whom "this" points to

        self.firstName = firstName || " ";
        self.lastName = lastName || " ";
        self.language = language || "en";
    };

    //available languages to use
    //english, spanish, bangla
    var supportedLanguages = ["en", "es", "bn"]; //hidden within the scope of IIFE. Never directly accessible

    //for informal greet words
    var casualGreetings = {
        en: "Hello",
        es: "Hola",
        bn: "হ্যালো"
    };

    //for formal greet words
    var formalGreetings = {
        en: "Greetings",
        es: "Saludos",
        bn: "সম্ভাসণ"
    };

    //for log in confirmation message
    var logMessages = {
        en: "Logged in",
        es: "Iniciaó sesión",
        bn: "লগইন সম্পন্ন"
    };

    //prototype holds methods [to save memory space]
    greetr.prototype = {

        //generate fullname
        fullName: function () {
            return this.firstName + " " + this.lastName; //"this" refers to the object that's called at execution time
        },

        //check if chosen laguage is supported
        validLanguage: function () {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Unsupported Language";
            }
        },

        //for casul greetings
        greetMessageCasual: function () {
            return casualGreetings[this.language] + " " + this.firstName;
        },

        //for formal greetings
        greetMessageFormal: function () {
            return formalGreetings[this.language] + ", " + this.fullName();
        },

        //show the greet message
        greetDisplay: function (formal) {
            var message;
            if (formal) {
                message = this.greetMessageFormal();
            } else {
                //if the parameter is left empty or set to undefined or null, that will be coerced to false and will greet casual message
                message = this.greetMessageCasual();
            }
            //if console is available
            if (console) {
                console.log(message);
            }

            return this;    //chainable method. chainable methods return their own containing object
        },

        //show logged message
        logDisplay: function () {
            if (console) {
                console.log(logMessages[this.language] + ", " + this.fullName());
            }

            return this;    //chainable method
        },

        //choose language on the fly
        setLanguage: function (lang) {
            this.language = lang;

            this.validLanguage();

            return this;    //chainable method
        },

        //adding jQuery support
        HTMLgreetings: function (selector, formal) {
            if (!$) {
                throw "jQuery not loaded";
            }
            if (!selector) {
                throw "Missing jQuery HTML Selector";
            }

            var message;
            if (formal) {
                message = this.greetMessageFormal();
            } else {
                message = this.greetMessageCasual();
            }

            $(selector).html(message);

            return this;    //chainable method
        }
    };

    //trick borrowed from jQuery so that we don't have to use "new"
    greetr.init.prototype = greetr.prototype;

    //attach "greetr" to the global object and provide a shorthand "g$"
    global.greetr = global.g$ = greetr; //to use both "greetr" and "g$" as function

}(window, jQuery));