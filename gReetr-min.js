!function(e,t){var n=function(e,t,s){return new n.init(e,t,s)};n.init=function(e,t,n){this.firstName=e||" ",this.lastName=t||" ",this.language=n||"en"};var s=["en","es","bn"],i={en:"Hello",es:"Hola",bn:"হ্যালো"},a={en:"Greetings",es:"Saludos",bn:"সম্ভাসণ"},r={en:"Logged in",es:"Iniciaó sesión",bn:"লগইন সম্পন্ন"};n.prototype={fullName:function(){return this.firstName+" "+this.lastName},validLanguage:function(){if(-1===s.indexOf(this.language))throw"Unsupported Language"},greetMessageCasual:function(){return i[this.language]+" "+this.firstName},greetMessageFormal:function(){return a[this.language]+", "+this.fullName()},greetDisplay:function(e){var t;return t=e?this.greetMessageFormal():this.greetMessageCasual(),console&&console.log(t),this},logDisplay:function(){return console&&console.log(r[this.language]+", "+this.fullName()),this},setLanguage:function(e){return this.language=e,this.validLanguage(),this},HTMLgreetings:function(e,n){if(!t)throw"jQuery not loaded";if(!e)throw"Missing jQuery HTML Selector";var s;return s=n?this.greetMessageFormal():this.greetMessageCasual(),t(e).html(s),this}},n.init.prototype=n.prototype,e.greetr=e.g$=n}(window,jQuery);