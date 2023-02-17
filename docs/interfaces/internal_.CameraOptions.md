[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CameraOptions

# Interface: CameraOptions

[<internal>](../modules/internal_.md).CameraOptions

CameraOptions

## Hierarchy

- **`CameraOptions`**

  ↳ [`FlyToOptions`](internal_.FlyToOptions.md)

  ↳ [`CameraForBoundsOptions`](internal_.CameraForBoundsOptions.md)

  ↳ [`EaseToOptions`](internal_.EaseToOptions.md)

## Table of contents

### Properties

- [around](internal_.CameraOptions.md#around)
- [bearing](internal_.CameraOptions.md#bearing)
- [center](internal_.CameraOptions.md#center)
- [padding](internal_.CameraOptions.md#padding)
- [pitch](internal_.CameraOptions.md#pitch)
- [zoom](internal_.CameraOptions.md#zoom)

## Properties

### around

• `Optional` **around**: [`LngLatLike`](../modules/internal_.md#lnglatlike)

If zooming, the zoom center (defaults to map center)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2089

___

### bearing

• `Optional` **bearing**: `number`

Map rotation bearing in degrees counter-clockwise from north

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2085

___

### center

• `Optional` **center**: [`LngLatLike`](../modules/internal_.md#lnglatlike)

Map center

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2081

___

### padding

• `Optional` **padding**: `number` \| [`PaddingOptions`](internal_.PaddingOptions.md)

Dimensions in pixels applied on each side of the viewport for shifting the vanishing point.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2091

___

### pitch

• `Optional` **pitch**: `number`

Map angle in degrees at which the camera is looking at the ground

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2087

___

### zoom

• `Optional` **zoom**: `number`

Map zoom level

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2083
