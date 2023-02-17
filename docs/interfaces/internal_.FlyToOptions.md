[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / FlyToOptions

# Interface: FlyToOptions

[<internal>](../modules/internal_.md).FlyToOptions

FlyToOptions

## Hierarchy

- [`AnimationOptions`](internal_.AnimationOptions.md)

- [`CameraOptions`](internal_.CameraOptions.md)

  ↳ **`FlyToOptions`**

  ↳↳ [`FitBoundsOptions`](internal_.FitBoundsOptions.md)

## Table of contents

### Properties

- [animate](internal_.FlyToOptions.md#animate)
- [around](internal_.FlyToOptions.md#around)
- [bearing](internal_.FlyToOptions.md#bearing)
- [center](internal_.FlyToOptions.md#center)
- [curve](internal_.FlyToOptions.md#curve)
- [duration](internal_.FlyToOptions.md#duration)
- [easing](internal_.FlyToOptions.md#easing)
- [essential](internal_.FlyToOptions.md#essential)
- [maxDuration](internal_.FlyToOptions.md#maxduration)
- [minZoom](internal_.FlyToOptions.md#minzoom)
- [offset](internal_.FlyToOptions.md#offset)
- [padding](internal_.FlyToOptions.md#padding)
- [pitch](internal_.FlyToOptions.md#pitch)
- [screenSpeed](internal_.FlyToOptions.md#screenspeed)
- [speed](internal_.FlyToOptions.md#speed)
- [zoom](internal_.FlyToOptions.md#zoom)

## Properties

### animate

• `Optional` **animate**: `boolean`

When set to false, no animation happens

#### Inherited from

[AnimationOptions](internal_.AnimationOptions.md).[animate](internal_.AnimationOptions.md#animate)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2068

___

### around

• `Optional` **around**: [`LngLatLike`](../modules/internal_.md#lnglatlike)

If zooming, the zoom center (defaults to map center)

#### Inherited from

[CameraOptions](internal_.CameraOptions.md).[around](internal_.CameraOptions.md#around)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2089

___

### bearing

• `Optional` **bearing**: `number`

Map rotation bearing in degrees counter-clockwise from north

#### Inherited from

[CameraOptions](internal_.CameraOptions.md).[bearing](internal_.CameraOptions.md#bearing)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2085

___

### center

• `Optional` **center**: [`LngLatLike`](../modules/internal_.md#lnglatlike)

Map center

#### Inherited from

[CameraOptions](internal_.CameraOptions.md).[center](internal_.CameraOptions.md#center)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2081

___

### curve

• `Optional` **curve**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2110

___

### duration

• `Optional` **duration**: `number`

Number in milliseconds

#### Inherited from

[AnimationOptions](internal_.AnimationOptions.md).[duration](internal_.AnimationOptions.md#duration)

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

[AnimationOptions](internal_.AnimationOptions.md).[easing](internal_.AnimationOptions.md#easing)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2064

___

### essential

• `Optional` **essential**: `boolean`

If `true`, then the animation is considered essential and will not be affected by `prefers-reduced-motion`.
Otherwise, the transition will happen instantly if the user has enabled the `reduced motion` accesibility feature in their operating system.

#### Inherited from

[AnimationOptions](internal_.AnimationOptions.md).[essential](internal_.AnimationOptions.md#essential)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2073

___

### maxDuration

• `Optional` **maxDuration**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2114

___

### minZoom

• `Optional` **minZoom**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2111

___

### offset

• `Optional` **offset**: [`PointLike`](../modules/internal_.md#pointlike)

point, origin of movement relative to map center

#### Inherited from

[AnimationOptions](internal_.AnimationOptions.md).[offset](internal_.AnimationOptions.md#offset)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2066

___

### padding

• `Optional` **padding**: `number` \| [`PaddingOptions`](internal_.PaddingOptions.md)

Dimensions in pixels applied on each side of the viewport for shifting the vanishing point.

#### Inherited from

[CameraOptions](internal_.CameraOptions.md).[padding](internal_.CameraOptions.md#padding)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2091

___

### pitch

• `Optional` **pitch**: `number`

Map angle in degrees at which the camera is looking at the ground

#### Inherited from

[CameraOptions](internal_.CameraOptions.md).[pitch](internal_.CameraOptions.md#pitch)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2087

___

### screenSpeed

• `Optional` **screenSpeed**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2113

___

### speed

• `Optional` **speed**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2112

___

### zoom

• `Optional` **zoom**: `number`

Map zoom level

#### Inherited from

[CameraOptions](internal_.CameraOptions.md).[zoom](internal_.CameraOptions.md#zoom)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2083
