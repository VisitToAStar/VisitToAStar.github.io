* [ ][d3 tutorial](https://alignedleft.com/tutorials/d3/fundamentals)
* [ ][HTML element](https://en.wikipedia.org/wiki/HTML_element)
* [ ][JavaScript tutorial in an interactive way ](https://beta.observablehq.com/playground)
* [x] https://learnlayout.com/
* [x] [html & CSS](https://learn.shayhowe.com/html-css)

### CSS
```css
h1          /* Selects level 1 headings              */
p           /* Selects paragraphs                    */
.caption    /* Selects elements with class "caption" */
#subnav     /* Selects element with ID "subnav"      */
```

CSS rules can be included directly within the head of a document, like so
```html
<head>
    <style type="text/css">
        p {
            font-family: sans-serif;
            color: lime;
        }
    </style>
</head>
```
or saved in an external file with a .css suffix, and then referenced in the document’s head:
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```
### Javascript

```html
<body>
    <script type="text/javascript">
        alert("Hello, world!");
    </script>
</body>
```
or stored in a separate file, and then referenced somewhere the HTML (commonly in the head):

```html
<head>
    <title>Page Title</title>
    <script type="text/javascript" src="myscript.js"></script>
</head>
```
