# [simple-colors 0.3](https://github.com/BillieBobbel23/simple-colors)
Color management for atomic / modular design systems.

## Installation

#### With Git:
```git clone https://github.com/BillieBobbel23/simple-colors```

## Usage

#### Using SCSS

Import _simple-colors.scss, or directly copy the contents into your workflow.

```
@import '/simple-colors/simple-colors';
```

There are helper mixins available to get started
```
.element{
  @include color('white');
  @include bg('black');
  @include border-color('test');
}
```
Use the color() function to set values elsewhere
```
@include svg-icon($icon: 'thumbsup', $color: color('white'));
```
Or integrate it inside mixins
```
@mixin svg-icon($icon: 'thumbsup', $color: 'white'){
  fill: color($color);
};
```
## Authors

* [billiebobbel23](https://github.com/BillieBobbel23/)
