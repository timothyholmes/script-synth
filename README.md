# ScriptSynth

Web based synthesizer.

## Building

To install dependencies

```shell
npm install
```

Note: To use gulp, make sure you have it installed globally on your system

```shell
npm install gulp -g
```

Default build (build project + start webserver + watch sass)

```shell
gulp
```

After building, the app is viewable at:

+ https://localhost:8080 for the distributed version
+ https://localhost:9090 for the source version

## Gulp tasks

To compile sass, minify css, and minify JS into a 'dist' folder

```shell
gulp build
```

To run webserver

```shell
gulp webserver
```

Watch Sass for changes

```shell
gulp watch
```

## Credits

I used a HTML/CSS from code pen for the piano, with some modification. The point of this project is more focused on using the Web Audio API, and not building things with CSS. Philip's piano looks exactly like what I envisioned, so I thank him for making that public.

[Philip Zastrow on Codepen](http://codepen.io/zastrow/)
[CSS Piano](http://codepen.io/zastrow/pen/oDBki)
