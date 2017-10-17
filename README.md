# [simple-colors](https://github.com/BillieBobbel23/simple-colors)
Color management for atomic / modular design systems.

## Installation

#### With Git:
```git clone https://github.com/BillieBobbel23/simple-colors```

## Usage

### Using SCSS

Import or copy the contents of _simple-colors.scss into your file before any other imports or styles.
```
@import '/simple-colors/simple-colors';
@import 'other-styles';
body {margin:0;}
```

#### Customising color themes

For each color add their unique name to $colors ([chir.ag website](http://chir.ag/projects/name-that-color/#6195ED) or [npm package](https://www.npmjs.com/package/namethatcolor))
```
$colors: (
  'white': #fff,
  'black': #000,
  'hot-pink':  #ff69b4,
  'pale-cornflower-blue': #abcdef
);
```
Use either $custom-colors or create your own theme to add some labels
```
$custom-colors: (
  'test': color('hot-pink'),
  'theme-bg': color('pale-cornflower-blue')
);
```

#### Setting colors

There are helper mixins available to create some simple styles:
```
.element{
  @include color('white');
  @include bg('black');
  @include border-color('test');
}
```
or the color function that retrieves the value and can be passed around.
```
.icon {
  path: color('test');
};
@include icon('thumbs-up', color('test'));
```

## Authors

* [billiebobbel23](https://github.com/BillieBobbel23/)
