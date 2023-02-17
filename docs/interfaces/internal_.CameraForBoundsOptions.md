[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CameraForBoundsOptions

# Interface: CameraForBoundsOptions

[<internal>](../modules/internal_.md).CameraForBoundsOptions

CameraOptions

## Hierarchy

- [`CameraOptions`](internal_.CameraOptions.md)

  ↳ **`CameraForBoundsOptions`**

## Table of contents

### Properties

- [around](internal_.CameraForBoundsOptions.md#around)
- [bearing](internal_.CameraForBoundsOptions.md#bearing)
- [center](internal_.CameraForBoundsOptions.md#center)
- [maxZoom](internal_.CameraForBoundsOptions.md#maxzoom)
- [offset](internal_.CameraForBoundsOptions.md#offset)
- [padding](internal_.CameraForBoundsOptions.md#padding)
- [pitch](internal_.CameraForBoundsOptions.md#pitch)
- [zoom](internal_.CameraForBoundsOptions.md#zoom)

## Properties

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

### maxZoom

• `Optional` **maxZoom**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2096

___

### offset

• `Optional` **offset**: [`PointLike`](../modules/internal_.md#pointlike)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2095

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
