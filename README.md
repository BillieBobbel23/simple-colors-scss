# [simple-colors](https://github.com/BillieBobbel23/simple-colors)
Color management for atomic / modular design systems using SCSS

## Installation

#### With Git:
```git clone https://github.com/BillieBobbel23/simple-colors```

## Usage

#### Importing

Import ```/dist/_simple-colors.scss``` into your file before any other imports or styles.
```
@import 'simple-colors';
@import 'other-styles';
body {margin:0;}
```

#### Customising

For each base color add their unique name to ```$colors``` ([chir.ag website](http://chir.ag/projects/name-that-color/#6195ED) or [npm package](https://www.npmjs.com/package/namethatcolor))
```
$colors: (
  'white': #fff,
  'black': #000,
  'hot-pink':  #ff69b4,
  'pale-cornflower-blue': #abcdef
);
```
Use ```$bindings``` to create naming based on references
```
$bindings: (
  'test': color('hot-pink'),
  'button': color('pale-cornflower-blue')
);
```
#### Using
Use the ```color()``` function or some helper mixins in your scss files:
```
.button {
  border-color: color("button");
  @include color('button');
};
```
## Helper mixins

Helper mixins are included for some simple tasks like setting backgrounds and text colors.
```
.element{
  @include color('white');
  @include bg('black');
  @include border-color('test');
}
```
the ```color()``` function is more versatile and can be passed around or use with any regular CSS.
```
.icon {
  fill: color('white');
  background: darken(color('test'), 20%);
};
```

## Prototyping

Optionally the ```simple-colors.scss``` file generates CSS (regular and minified) that adds classes for each color in ```$colors``` and outputs that as a CSS file.

#### Usage

Clone and generate ```./dist/simple-colors.scss```


## Extending

Extending and modifying simple-colors is easy, write your own functions or mixins or simply convert some existing logic easily.

## Development edition

A bare bones version of simple-colors, focused on simplicity and implementation.
It  contains only the two color maps and ```color()``` function to simplify as much as possible.

#### Usage

Clone and import ```./dist/_simple-colors-mini.scss```

## Authors

* [billiebobbel23](https://github.com/BillieBobbel23/)
