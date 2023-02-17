[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EaseToOptions

# Interface: EaseToOptions

[<internal>](../modules/internal_.md).EaseToOptions

EaseToOptions

## Hierarchy

- [`AnimationOptions`](internal_.AnimationOptions.md)

- [`CameraOptions`](internal_.CameraOptions.md)

  ↳ **`EaseToOptions`**

## Table of contents

### Properties

- [animate](internal_.EaseToOptions.md#animate)
- [around](internal_.EaseToOptions.md#around)
- [bearing](internal_.EaseToOptions.md#bearing)
- [center](internal_.EaseToOptions.md#center)
- [delayEndEvents](internal_.EaseToOptions.md#delayendevents)
- [duration](internal_.EaseToOptions.md#duration)
- [easing](internal_.EaseToOptions.md#easing)
- [essential](internal_.EaseToOptions.md#essential)
- [offset](internal_.EaseToOptions.md#offset)
- [padding](internal_.EaseToOptions.md#padding)
- [pitch](internal_.EaseToOptions.md#pitch)
- [zoom](internal_.EaseToOptions.md#zoom)

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

### delayEndEvents

• `Optional` **delayEndEvents**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2121

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

### zoom

• `Optional` **zoom**: `number`

Map zoom level

#### Inherited from

[CameraOptions](internal_.CameraOptions.md).[zoom](internal_.CameraOptions.md#zoom)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2083
