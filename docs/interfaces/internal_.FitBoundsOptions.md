[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / FitBoundsOptions

# Interface: FitBoundsOptions

[<internal>](../modules/internal_.md).FitBoundsOptions

FlyToOptions

## Hierarchy

- [`FlyToOptions`](internal_.FlyToOptions.md)

  ↳ **`FitBoundsOptions`**

## Table of contents

### Properties

- [animate](internal_.FitBoundsOptions.md#animate)
- [around](internal_.FitBoundsOptions.md#around)
- [bearing](internal_.FitBoundsOptions.md#bearing)
- [center](internal_.FitBoundsOptions.md#center)
- [curve](internal_.FitBoundsOptions.md#curve)
- [duration](internal_.FitBoundsOptions.md#duration)
- [easing](internal_.FitBoundsOptions.md#easing)
- [essential](internal_.FitBoundsOptions.md#essential)
- [linear](internal_.FitBoundsOptions.md#linear)
- [maxDuration](internal_.FitBoundsOptions.md#maxduration)
- [maxZoom](internal_.FitBoundsOptions.md#maxzoom)
- [minZoom](internal_.FitBoundsOptions.md#minzoom)
- [offset](internal_.FitBoundsOptions.md#offset)
- [padding](internal_.FitBoundsOptions.md#padding)
- [pitch](internal_.FitBoundsOptions.md#pitch)
- [screenSpeed](internal_.FitBoundsOptions.md#screenspeed)
- [speed](internal_.FitBoundsOptions.md#speed)
- [zoom](internal_.FitBoundsOptions.md#zoom)

## Properties

### animate

• `Optional` **animate**: `boolean`

When set to false, no animation happens

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[animate](internal_.FlyToOptions.md#animate)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2068

___

### around

• `Optional` **around**: [`LngLatLike`](../modules/internal_.md#lnglatlike)

If zooming, the zoom center (defaults to map center)

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[around](internal_.FlyToOptions.md#around)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2089

___

### bearing

• `Optional` **bearing**: `number`

Map rotation bearing in degrees counter-clockwise from north

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[bearing](internal_.FlyToOptions.md#bearing)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2085

___

### center

• `Optional` **center**: [`LngLatLike`](../modules/internal_.md#lnglatlike)

Map center

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[center](internal_.FlyToOptions.md#center)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2081

___

### curve

• `Optional` **curve**: `number`

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[curve](internal_.FlyToOptions.md#curve)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2110

___

### duration

• `Optional` **duration**: `number`

Number in milliseconds

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[duration](internal_.FlyToOptions.md#duration)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2059

___

### easing

• `Optional` **easing**: (`time`: `number`) => `number`

#### Type declaration

▸ (`time`): `number`

A function taking a time in the range 0..1 and returning a number where 0 is the initial
state and 1 is the final state.

##### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

##### Returns

`number`

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[easing](internal_.FlyToOptions.md#easing)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2064

___

### essential

• `Optional` **essential**: `boolean`

If `true`, then the animation is considered essential and will not be affected by `prefers-reduced-motion`.
Otherwise, the transition will happen instantly if the user has enabled the `reduced motion` accesibility feature in their operating system.

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[essential](internal_.FlyToOptions.md#essential)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2073

___

### linear

• `Optional` **linear**: `boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2125

___

### maxDuration

• `Optional` **maxDuration**: `number`

#### Overrides

[FlyToOptions](internal_.FlyToOptions.md).[maxDuration](internal_.FlyToOptions.md#maxduration)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2128

___

### maxZoom

• `Optional` **maxZoom**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2127

___

### minZoom

• `Optional` **minZoom**: `number`

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[minZoom](internal_.FlyToOptions.md#minzoom)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2111

___

### offset

• `Optional` **offset**: [`PointLike`](../modules/internal_.md#pointlike)

point, origin of movement relative to map center

#### Overrides

[FlyToOptions](internal_.FlyToOptions.md).[offset](internal_.FlyToOptions.md#offset)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2126

___

### padding

• `Optional` **padding**: `number` \| [`PaddingOptions`](internal_.PaddingOptions.md)

Dimensions in pixels applied on each side of the viewport for shifting the vanishing point.

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[padding](internal_.FlyToOptions.md#padding)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2091

___

### pitch

• `Optional` **pitch**: `number`

Map angle in degrees at which the camera is looking at the ground

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[pitch](internal_.FlyToOptions.md#pitch)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2087

___

### screenSpeed

• `Optional` **screenSpeed**: `number`

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[screenSpeed](internal_.FlyToOptions.md#screenspeed)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2113

___

### speed

• `Optional` **speed**: `number`

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[speed](internal_.FlyToOptions.md#speed)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2112

___

### zoom

• `Optional` **zoom**: `number`

Map zoom level

#### Inherited from

[FlyToOptions](internal_.FlyToOptions.md).[zoom](internal_.FlyToOptions.md#zoom)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2083
