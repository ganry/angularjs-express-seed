# AngularJS with Express Seed

With this AngularJS seed you can start developing awesome applications right away. No more setting
up server stuff to start your development. This seed includes AngularJS on the front and NodeJS, Express and
Handlebars on the back. Instead of wasting your time on Project configuration you can start making awesome apps today.

As Template Engine I chose Handlebars instead of Jade. Even though Handlebars has some conflicts with Angular,
I find the syntax a lot better. If you want to use AngularJS expressions inside the templates you have to escape them:

**\\{{testExpression}}**

## How to use it

Clone this repository and run the following shell commands afterwards:

```shell
npm install
```

```shell
bower install
```

### Running the app

Run the following shell commands:

```shell
node app.js
```

## Directory Layout
    
    app.js                  --> app config
    bower.json              --> bower packages
    package.json            --> npm packages
    public/                 --> client side files
      css/                  --> css files
        style.css           --> default stylesheet
      images/               --> image files
      js/                   --> javascript files
        app.js              --> declare top-level app module
        controllers.js      --> application controllers
        services.js         --> custom angular services
    routes/
      index.js              --> route for serving HTML pages and partials
    views/
      index.hbs             --> main page processed server side
      partials/             --> view partials processed by angularjs
        home.hbs



## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express and Handlebars, http://expressjs.com/ and http://handlebarsjs.com/ are
your friends.

If you search for more seeds and example Apps regarding AngularJS you can visit my homepage.
http://www.henrykeller.eu
