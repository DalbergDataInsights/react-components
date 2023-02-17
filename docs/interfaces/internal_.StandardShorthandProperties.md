[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / StandardShorthandProperties

# Interface: StandardShorthandProperties<TLength, TTime\>

[<internal>](../modules/internal_.md).StandardShorthandProperties

## Type parameters

| Name | Type |
| :------ | :------ |
| `TLength` | `string` & {} \| ``0`` |
| `TTime` | `string` & {} |

## Hierarchy

- **`StandardShorthandProperties`**

  ↳ [`StandardProperties`](internal_.StandardProperties.md)

## Table of contents

### Properties

- [all](internal_.StandardShorthandProperties.md#all)
- [animation](internal_.StandardShorthandProperties.md#animation)
- [background](internal_.StandardShorthandProperties.md#background)
- [backgroundPosition](internal_.StandardShorthandProperties.md#backgroundposition)
- [border](internal_.StandardShorthandProperties.md#border)
- [borderBlock](internal_.StandardShorthandProperties.md#borderblock)
- [borderBlockEnd](internal_.StandardShorthandProperties.md#borderblockend)
- [borderBlockStart](internal_.StandardShorthandProperties.md#borderblockstart)
- [borderBottom](internal_.StandardShorthandProperties.md#borderbottom)
- [borderColor](internal_.StandardShorthandProperties.md#bordercolor)
- [borderImage](internal_.StandardShorthandProperties.md#borderimage)
- [borderInline](internal_.StandardShorthandProperties.md#borderinline)
- [borderInlineEnd](internal_.StandardShorthandProperties.md#borderinlineend)
- [borderInlineStart](internal_.StandardShorthandProperties.md#borderinlinestart)
- [borderLeft](internal_.StandardShorthandProperties.md#borderleft)
- [borderRadius](internal_.StandardShorthandProperties.md#borderradius)
- [borderRight](internal_.StandardShorthandProperties.md#borderright)
- [borderStyle](internal_.StandardShorthandProperties.md#borderstyle)
- [borderTop](internal_.StandardShorthandProperties.md#bordertop)
- [borderWidth](internal_.StandardShorthandProperties.md#borderwidth)
- [columnRule](internal_.StandardShorthandProperties.md#columnrule)
- [columns](internal_.StandardShorthandProperties.md#columns)
- [flex](internal_.StandardShorthandProperties.md#flex)
- [flexFlow](internal_.StandardShorthandProperties.md#flexflow)
- [font](internal_.StandardShorthandProperties.md#font)
- [gap](internal_.StandardShorthandProperties.md#gap)
- [grid](internal_.StandardShorthandProperties.md#grid)
- [gridArea](internal_.StandardShorthandProperties.md#gridarea)
- [gridColumn](internal_.StandardShorthandProperties.md#gridcolumn)
- [gridRow](internal_.StandardShorthandProperties.md#gridrow)
- [gridTemplate](internal_.StandardShorthandProperties.md#gridtemplate)
- [lineClamp](internal_.StandardShorthandProperties.md#lineclamp)
- [listStyle](internal_.StandardShorthandProperties.md#liststyle)
- [margin](internal_.StandardShorthandProperties.md#margin)
- [mask](internal_.StandardShorthandProperties.md#mask)
- [maskBorder](internal_.StandardShorthandProperties.md#maskborder)
- [motion](internal_.StandardShorthandProperties.md#motion)
- [offset](internal_.StandardShorthandProperties.md#offset)
- [outline](internal_.StandardShorthandProperties.md#outline)
- [overflow](internal_.StandardShorthandProperties.md#overflow)
- [overscrollBehavior](internal_.StandardShorthandProperties.md#overscrollbehavior)
- [padding](internal_.StandardShorthandProperties.md#padding)
- [placeItems](internal_.StandardShorthandProperties.md#placeitems)
- [placeSelf](internal_.StandardShorthandProperties.md#placeself)
- [textDecoration](internal_.StandardShorthandProperties.md#textdecoration)
- [textEmphasis](internal_.StandardShorthandProperties.md#textemphasis)
- [transition](internal_.StandardShorthandProperties.md#transition)

## Properties

### all

• `Optional` **all**: [`Globals`](../modules/internal_.md#globals)

The **`all`** shorthand CSS property resets all of an element's properties except `unicode-bidi`, `direction`, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.

**Syntax**: `initial | inherit | unset | revert | revert-layer`

**Initial value**: There is no practical initial value for it.

| Chrome | Firefox | Safari  | Edge | IE  |
| :----: | :-----: | :-----: | :--: | :-: |
| **37** | **27**  | **9.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/all

#### Defined in

node_modules/csstype/index.d.ts:5083

___

### animation

• `Optional` **animation**: [`Animation`](../modules/internal_.md#animation)<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/animation

#### Defined in

node_modules/csstype/index.d.ts:5096

___

### background

• `Optional` **background**: [`Background`](../modules/internal_.md#background)<`TLength`\>

The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.

**Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background

#### Defined in

node_modules/csstype/index.d.ts:5108

___

### backgroundPosition

• `Optional` **backgroundPosition**: [`BackgroundPosition`](../modules/internal_.md#backgroundposition)<`TLength`\>

The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.

**Syntax**: `<bg-position>#`

**Initial value**: `0% 0%`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/background-position

#### Defined in

node_modules/csstype/index.d.ts:5122

___

### border

• `Optional` **border**: [`Border`](../modules/internal_.md#border)<`TLength`\>

The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border

#### Defined in

node_modules/csstype/index.d.ts:5134

___

### borderBlock

• `Optional` **borderBlock**: [`BorderBlock`](../modules/internal_.md#borderblock)<`TLength`\>

The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block

#### Defined in

node_modules/csstype/index.d.ts:5146

___

### borderBlockEnd

• `Optional` **borderBlockEnd**: [`BorderBlockEnd`](../modules/internal_.md#borderblockend)<`TLength`\>

The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-end

#### Defined in

node_modules/csstype/index.d.ts:5158

___

### borderBlockStart

• `Optional` **borderBlockStart**: [`BorderBlockStart`](../modules/internal_.md#borderblockstart)<`TLength`\>

The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-block-start

#### Defined in

node_modules/csstype/index.d.ts:5170

___

### borderBottom

• `Optional` **borderBottom**: [`BorderBottom`](../modules/internal_.md#borderbottom)<`TLength`\>

The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-bottom

#### Defined in

node_modules/csstype/index.d.ts:5182

___

### borderColor

• `Optional` **borderColor**: [`BorderColor`](../modules/internal_.md#bordercolor)

The **`border-color`** shorthand CSS property sets the color of an element's border.

**Syntax**: `<color>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-color

#### Defined in

node_modules/csstype/index.d.ts:5194

___

### borderImage

• `Optional` **borderImage**: [`BorderImage`](../modules/internal_.md#borderimage)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

| Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
| :-----: | :-------: | :-----: | :----: | :----: |
| **16**  |  **15**   |  **6**  | **12** | **11** |
| 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-image

#### Defined in

node_modules/csstype/index.d.ts:5207

___

### borderInline

• `Optional` **borderInline**: [`BorderInline`](../modules/internal_.md#borderinline)<`TLength`\>

The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline

#### Defined in

node_modules/csstype/index.d.ts:5219

___

### borderInlineEnd

• `Optional` **borderInlineEnd**: [`BorderInlineEnd`](../modules/internal_.md#borderinlineend)<`TLength`\>

The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-end

#### Defined in

node_modules/csstype/index.d.ts:5231

___

### borderInlineStart

• `Optional` **borderInlineStart**: [`BorderInlineStart`](../modules/internal_.md#borderinlinestart)<`TLength`\>

The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-inline-start

#### Defined in

node_modules/csstype/index.d.ts:5243

___

### borderLeft

• `Optional` **borderLeft**: [`BorderLeft`](../modules/internal_.md#borderleft)<`TLength`\>

The **`border-left`** shorthand CSS property sets all the properties of an element's left border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-left

#### Defined in

node_modules/csstype/index.d.ts:5255

___

### borderRadius

• `Optional` **borderRadius**: [`BorderRadius`](../modules/internal_.md#borderradius)<`TLength`\>

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-radius

#### Defined in

node_modules/csstype/index.d.ts:5268

___

### borderRight

• `Optional` **borderRight**: [`BorderRight`](../modules/internal_.md#borderright)<`TLength`\>

The **`border-right`** shorthand CSS property sets all the properties of an element's right border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-right

#### Defined in

node_modules/csstype/index.d.ts:5280

___

### borderStyle

• `Optional` **borderStyle**: [`BorderStyle`](../modules/internal_.md#borderstyle)

The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.

**Syntax**: `<line-style>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-style

#### Defined in

node_modules/csstype/index.d.ts:5292

___

### borderTop

• `Optional` **borderTop**: [`BorderTop`](../modules/internal_.md#bordertop)<`TLength`\>

The **`border-top`** shorthand CSS property sets all the properties of an element's top border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-top

#### Defined in

node_modules/csstype/index.d.ts:5304

___

### borderWidth

• `Optional` **borderWidth**: [`BorderWidth`](../modules/internal_.md#borderwidth)<`TLength`\>

The **`border-width`** shorthand CSS property sets the width of an element's border.

**Syntax**: `<line-width>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/border-width

#### Defined in

node_modules/csstype/index.d.ts:5316

___

### columnRule

• `Optional` **columnRule**: [`ColumnRule`](../modules/internal_.md#columnrule)<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/column-rule

#### Defined in

node_modules/csstype/index.d.ts:5329

___

### columns

• `Optional` **columns**: [`Columns`](../modules/internal_.md#columns)<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **50** | **52**  |  **9**  | **12** | **10** |
|        |         | 3 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/columns

#### Defined in

node_modules/csstype/index.d.ts:5342

___

### flex

• `Optional` **flex**: [`Flex`](../modules/internal_.md#flex)<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/flex

#### Defined in

node_modules/csstype/index.d.ts:5355

___

### flexFlow

• `Optional` **flexFlow**: [`FlexFlow`](../modules/internal_.md#flexflow)

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **28**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/flex-flow

#### Defined in

node_modules/csstype/index.d.ts:5368

___

### font

• `Optional` **font**: [`Font`](../modules/internal_.md#font)

The **`font`** CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.

**Syntax**: `[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/font

#### Defined in

node_modules/csstype/index.d.ts:5380

___

### gap

• `Optional` **gap**: [`Gap`](../modules/internal_.md#gap)<`TLength`\>

The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.

**Syntax**: `<'row-gap'> <'column-gap'>?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/gap

#### Defined in

node_modules/csstype/index.d.ts:5392

___

### grid

• `Optional` **grid**: [`Grid`](../modules/internal_.md#grid)

The **`grid`** CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.

**Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid

#### Defined in

node_modules/csstype/index.d.ts:5404

___

### gridArea

• `Optional` **gridArea**: [`GridArea`](../modules/internal_.md#gridarea)

The **`grid-area`** CSS shorthand property specifies a grid item's size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-area

#### Defined in

node_modules/csstype/index.d.ts:5416

___

### gridColumn

• `Optional` **gridColumn**: [`GridColumn`](../modules/internal_.md#gridcolumn)

The **`grid-column`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-column

#### Defined in

node_modules/csstype/index.d.ts:5428

___

### gridRow

• `Optional` **gridRow**: [`GridRow`](../modules/internal_.md#gridrow)

The **`grid-row`** CSS shorthand property specifies a grid item's size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-row

#### Defined in

node_modules/csstype/index.d.ts:5440

___

### gridTemplate

• `Optional` **gridTemplate**: [`GridTemplate`](../modules/internal_.md#gridtemplate)

The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.

**Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/grid-template

#### Defined in

node_modules/csstype/index.d.ts:5452

___

### lineClamp

• `Optional` **lineClamp**: [`LineClamp`](../modules/internal_.md#lineclamp)

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Defined in

node_modules/csstype/index.d.ts:5458

___

### listStyle

• `Optional` **listStyle**: [`ListStyle`](../modules/internal_.md#liststyle)

The **`list-style`** CSS shorthand property allows you to set all the list style properties at once.

**Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/list-style

#### Defined in

node_modules/csstype/index.d.ts:5470

___

### margin

• `Optional` **margin**: [`Margin`](../modules/internal_.md#margin)<`TLength`\>

The **`margin`** CSS shorthand property sets the margin area on all four sides of an element.

**Syntax**: `[ <length> | <percentage> | auto ]{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/margin

#### Defined in

node_modules/csstype/index.d.ts:5482

___

### mask

• `Optional` **mask**: [`Mask`](../modules/internal_.md#mask)<`TLength`\>

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `<mask-layer>#`

| Chrome | Firefox | Safari  | Edge  | IE  |
| :----: | :-----: | :-----: | :---: | :-: |
| **1**  |  **2**  | **3.1** | 12-79 | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask

#### Defined in

node_modules/csstype/index.d.ts:5494

___

### maskBorder

• `Optional` **maskBorder**: [`MaskBorder`](../modules/internal_.md#maskborder)

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

|              Chrome              | Firefox |               Safari               | Edge | IE  |
| :------------------------------: | :-----: | :--------------------------------: | :--: | :-: |
| **1** _(-webkit-mask-box-image)_ |   No    | **3.1** _(-webkit-mask-box-image)_ | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/mask-border

#### Defined in

node_modules/csstype/index.d.ts:5506

___

### motion

• `Optional` **motion**: [`Offset`](../modules/internal_.md#offset)<`TLength`\>

The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`

|    Chrome     | Firefox | Safari | Edge | IE  |
| :-----------: | :-----: | :----: | :--: | :-: |
|    **55**     | **72**  | **16** | n/a  | No  |
| 46 _(motion)_ |         |        |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset

#### Defined in

node_modules/csstype/index.d.ts:5519

___

### offset

• `Optional` **offset**: [`Offset`](../modules/internal_.md#offset)<`TLength`\>

The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`

|    Chrome     | Firefox | Safari | Edge | IE  |
| :-----------: | :-----: | :----: | :--: | :-: |
|    **55**     | **72**  | **16** | n/a  | No  |
| 46 _(motion)_ |         |        |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/offset

#### Defined in

node_modules/csstype/index.d.ts:5532

___

### outline

• `Optional` **outline**: [`Outline`](../modules/internal_.md#outline)<`TLength`\>

The **`outline`** CSS shorthand property set all the outline properties in a single declaration.

**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/outline

#### Defined in

node_modules/csstype/index.d.ts:5544

___

### overflow

• `Optional` **overflow**: [`Overflow`](../modules/internal_.md#overflow)

The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.

**Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overflow

#### Defined in

node_modules/csstype/index.d.ts:5558

___

### overscrollBehavior

• `Optional` **overscrollBehavior**: [`OverscrollBehavior`](../modules/internal_.md#overscrollbehavior)

The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.

**Syntax**: `[ contain | none | auto ]{1,2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  | **16** | **18** | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior

#### Defined in

node_modules/csstype/index.d.ts:5572

___

### padding

• `Optional` **padding**: [`Padding`](../modules/internal_.md#padding)<`TLength`\>

The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.

**Syntax**: `[ <length> | <percentage> ]{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/padding

#### Defined in

node_modules/csstype/index.d.ts:5584

___

### placeItems

• `Optional` **placeItems**: [`PlaceItems`](../modules/internal_.md#placeitems)

The CSS **`place-items`** shorthand property allows you to align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.

**Syntax**: `<'align-items'> <'justify-items'>?`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **59** | **45**  | **11** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/place-items

#### Defined in

node_modules/csstype/index.d.ts:5596

___

### placeSelf

• `Optional` **placeSelf**: [`PlaceSelf`](../modules/internal_.md#placeself)

The **`place-self`** CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the `align-self` and `justify-self` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.

**Syntax**: `<'align-self'> <'justify-self'>?`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **59** | **45**  | **11** | n/a  | No  |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/place-self

#### Defined in

node_modules/csstype/index.d.ts:5608

___

### textDecoration

• `Optional` **textDecoration**: [`TextDecoration`](../modules/internal_.md#textdecoration)<`TLength`\>

The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.

**Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-decoration

#### Defined in

node_modules/csstype/index.d.ts:5620

___

### textEmphasis

• `Optional` **textEmphasis**: [`TextEmphasis`](../modules/internal_.md#textemphasis)

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

|  Chrome  | Firefox | Safari | Edge | IE  |
| :------: | :-----: | :----: | :--: | :-: |
|  **99**  | **46**  | **7**  | n/a  | No  |
| 25 _-x-_ |         |        |      |     |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/text-emphasis

#### Defined in

node_modules/csstype/index.d.ts:5633

___

### transition

• `Optional` **transition**: [`Transition`](../modules/internal_.md#transition)<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`See`**

https://developer.mozilla.org/docs/Web/CSS/transition

#### Defined in

node_modules/csstype/index.d.ts:5646
