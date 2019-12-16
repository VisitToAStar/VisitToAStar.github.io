# Reference
* [ ][d3 tutorial](https://alignedleft.com/tutorials/d3/fundamentals)
* [ ][HTML element](https://en.wikipedia.org/wiki/HTML_element)
* [ ][JavaScript tutorial in an interactive way ](https://beta.observablehq.com/playground)
* [x] https://learnlayout.com/
* [x] [html & CSS](https://learn.shayhowe.com/html-css)

# CSS
```css
h1          /* Selects level 1 headings              */
p           /* Selects paragraphs                    */
.caption    /* Selects elements with class "caption" */
#subnav     /* Selects element with ID "subnav"      */
```
##Include stylesheet
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

## sample code pieces
* `div` and `span`

    A `div` is a block element, and will span the width of the container unless a width is set. A `span` is an inline element, and will have the width of the text inside it. Currently, you are trying to set align as a CSS property. Align is an attribute.
    ```html
    <div style="text-align: center;">
    <h1><span class = "welcome" >JavaScript library for data visualization overview</span></h1>
    </div>
    ```
* `class` and `id`

    ```html
    <div id="vis"></div>
    <h1><span class = "welcome">JavaScript library for data visulization overview</span></h1>
    ```
    In the CSS, a class selector is a name preceded by a full stop (`.`) and an ID selector is a name preceded by a hash character (`#`).

    ```css
    .welcome { font-style:italic; color:red; }
    span {border          :1px solid black;
        background-color:cyan;  }
    ```

# Javascript

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


# Problems need to be solved
* [ ] I have a serious problems, which I can only display one vega-lite example in a webpage, how to display multiple examples?
* [ ]  Contents of html file only contains `<script>`, `<script>` and what's in between.
