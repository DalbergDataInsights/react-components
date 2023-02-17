[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / VendorShorthandProperties

# Interface: VendorShorthandProperties<TLength, TTime\>

[<internal>](../modules/internal_.md).VendorShorthandProperties

## Type parameters

| Name | Type |
| :------ | :------ |
| `TLength` | `string` & {} \| ``0`` |
| `TTime` | `string` & {} |

## Hierarchy

- **`VendorShorthandProperties`**

  ↳ [`VendorProperties`](internal_.VendorProperties.md)

## Table of contents

### Properties

- [MozAnimation](internal_.VendorShorthandProperties.md#mozanimation)
- [MozBorderImage](internal_.VendorShorthandProperties.md#mozborderimage)
- [MozColumnRule](internal_.VendorShorthandProperties.md#mozcolumnrule)
- [MozColumns](internal_.VendorShorthandProperties.md#mozcolumns)
- [MozTransition](internal_.VendorShorthandProperties.md#moztransition)
- [WebkitAnimation](internal_.VendorShorthandProperties.md#webkitanimation)
- [WebkitBorderBefore](internal_.VendorShorthandProperties.md#webkitborderbefore)
- [WebkitBorderImage](internal_.VendorShorthandProperties.md#webkitborderimage)
- [WebkitBorderRadius](internal_.VendorShorthandProperties.md#webkitborderradius)
- [WebkitColumnRule](internal_.VendorShorthandProperties.md#webkitcolumnrule)
- [WebkitColumns](internal_.VendorShorthandProperties.md#webkitcolumns)
- [WebkitFlex](internal_.VendorShorthandProperties.md#webkitflex)
- [WebkitFlexFlow](internal_.VendorShorthandProperties.md#webkitflexflow)
- [WebkitMask](internal_.VendorShorthandProperties.md#webkitmask)
- [WebkitMaskBoxImage](internal_.VendorShorthandProperties.md#webkitmaskboximage)
- [WebkitTextEmphasis](internal_.VendorShorthandProperties.md#webkittextemphasis)
- [WebkitTextStroke](internal_.VendorShorthandProperties.md#webkittextstroke)
- [WebkitTransition](internal_.VendorShorthandProperties.md#webkittransition)
- [msContentZoomLimit](internal_.VendorShorthandProperties.md#mscontentzoomlimit)
- [msContentZoomSnap](internal_.VendorShorthandProperties.md#mscontentzoomsnap)
- [msFlex](internal_.VendorShorthandProperties.md#msflex)
- [msScrollLimit](internal_.VendorShorthandProperties.md#msscrolllimit)
- [msScrollSnapX](internal_.VendorShorthandProperties.md#msscrollsnapx)
- [msScrollSnapY](internal_.VendorShorthandProperties.md#msscrollsnapy)
- [msTransition](internal_.VendorShorthandProperties.md#mstransition)

## Properties

### MozAnimation

• `Optional` **MozAnimation**: [`Animation`](../modules/internal_.md#animation)<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Defined in

node_modules/csstype/index.d.ts:7446

___

### MozBorderImage

• `Optional` **MozBorderImage**: [`BorderImage`](../modules/internal_.md#borderimage)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Defined in

node_modules/csstype/index.d.ts:7452

___

### MozColumnRule

• `Optional` **MozColumnRule**: [`ColumnRule`](../modules/internal_.md#columnrule)<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Defined in

node_modules/csstype/index.d.ts:7458

___

### MozColumns

• `Optional` **MozColumns**: [`Columns`](../modules/internal_.md#columns)<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Defined in

node_modules/csstype/index.d.ts:7464

___

### MozTransition

• `Optional` **MozTransition**: [`Transition`](../modules/internal_.md#transition)<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Defined in

node_modules/csstype/index.d.ts:7470

___

### WebkitAnimation

• `Optional` **WebkitAnimation**: [`Animation`](../modules/internal_.md#animation)<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Defined in

node_modules/csstype/index.d.ts:7518

___

### WebkitBorderBefore

• `Optional` **WebkitBorderBefore**: [`WebkitBorderBefore`](../modules/internal_.md#webkitborderbefore)<`TLength`\>

The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.

**Syntax**: `<'border-width'> || <'border-style'> || <color>`

#### Defined in

node_modules/csstype/index.d.ts:7524

___

### WebkitBorderImage

• `Optional` **WebkitBorderImage**: [`BorderImage`](../modules/internal_.md#borderimage)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Defined in

node_modules/csstype/index.d.ts:7530

___

### WebkitBorderRadius

• `Optional` **WebkitBorderRadius**: [`BorderRadius`](../modules/internal_.md#borderradius)<`TLength`\>

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

#### Defined in

node_modules/csstype/index.d.ts:7536

___

### WebkitColumnRule

• `Optional` **WebkitColumnRule**: [`ColumnRule`](../modules/internal_.md#columnrule)<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Defined in

node_modules/csstype/index.d.ts:7542

___

### WebkitColumns

• `Optional` **WebkitColumns**: [`Columns`](../modules/internal_.md#columns)<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Defined in

node_modules/csstype/index.d.ts:7548

___

### WebkitFlex

• `Optional` **WebkitFlex**: [`Flex`](../modules/internal_.md#flex)<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Defined in

node_modules/csstype/index.d.ts:7554

___

### WebkitFlexFlow

• `Optional` **WebkitFlexFlow**: [`FlexFlow`](../modules/internal_.md#flexflow)

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

#### Defined in

node_modules/csstype/index.d.ts:7560

___

### WebkitMask

• `Optional` **WebkitMask**: [`WebkitMask`](../modules/internal_.md#webkitmask)<`TLength`\>

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`

#### Defined in

node_modules/csstype/index.d.ts:7566

___

### WebkitMaskBoxImage

• `Optional` **WebkitMaskBoxImage**: [`MaskBorder`](../modules/internal_.md#maskborder)

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

#### Defined in

node_modules/csstype/index.d.ts:7572

___

### WebkitTextEmphasis

• `Optional` **WebkitTextEmphasis**: [`TextEmphasis`](../modules/internal_.md#textemphasis)

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

#### Defined in

node_modules/csstype/index.d.ts:7578

___

### WebkitTextStroke

• `Optional` **WebkitTextStroke**: [`WebkitTextStroke`](../modules/internal_.md#webkittextstroke)<`TLength`\>

The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.

**Syntax**: `<length> || <color>`

#### Defined in

node_modules/csstype/index.d.ts:7584

___

### WebkitTransition

• `Optional` **WebkitTransition**: [`Transition`](../modules/internal_.md#transition)<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Defined in

node_modules/csstype/index.d.ts:7590

___

### msContentZoomLimit

• `Optional` **msContentZoomLimit**: [`MsContentZoomLimit`](../modules/internal_.md#mscontentzoomlimit)

The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.

**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`

#### Defined in

node_modules/csstype/index.d.ts:7476

___

### msContentZoomSnap

• `Optional` **msContentZoomSnap**: [`MsContentZoomSnap`](../modules/internal_.md#mscontentzoomsnap)

The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.

**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`

#### Defined in

node_modules/csstype/index.d.ts:7482

___

### msFlex

• `Optional` **msFlex**: [`Flex`](../modules/internal_.md#flex)<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Defined in

node_modules/csstype/index.d.ts:7488

___

### msScrollLimit

• `Optional` **msScrollLimit**: [`MsScrollLimit`](../modules/internal_.md#msscrolllimit)

The **\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.

**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`

#### Defined in

node_modules/csstype/index.d.ts:7494

___

### msScrollSnapX

• `Optional` **msScrollSnapX**: [`MsScrollSnapX`](../modules/internal_.md#msscrollsnapx)

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`

#### Defined in

node_modules/csstype/index.d.ts:7500

___

### msScrollSnapY

• `Optional` **msScrollSnapY**: [`MsScrollSnapY`](../modules/internal_.md#msscrollsnapy)

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`

#### Defined in

node_modules/csstype/index.d.ts:7506

___

### msTransition

• `Optional` **msTransition**: [`Transition`](../modules/internal_.md#transition)<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Defined in

node_modules/csstype/index.d.ts:7512
