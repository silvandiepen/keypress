# jQuery.Keypress

A simple jQuery extension to catch keypresses and make them do whatever you want with functions.

### Available keys

 backspace, tab, enter, shift, ctrl, alt, pause, capslock, escape, space, pageup, pagedown, end, home, leftarrow, uparrow, rightarrow, downarrow, insert, delete, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, left, right, select, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, multiply, add, substract, decimalpoint, divide, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, numlock, scrolllock, semi-colon, equalsign, comma, dash, period, forwardslash, graveaccent, openbracket, backslash, closebacket, singlequote


### Initialize keypress (example)

```javascript
$('body').keypress({
	a: function(){ alert('Youve clicked a'); },
	delete: function(){ alert('Do something with delete'); },
	rightarrow:  function(){ alert('go to next section'); }
});
```

Installation
------------

Install the script with bower or make your own files

### Embed

```html
<script type="text/javascript" src="vendor/jquery.keypress.js"></script>
```

### Bower

```
bower install keypress --save
```