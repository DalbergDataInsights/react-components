[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MapTouchEvent

# Class: MapTouchEvent

[<internal>](../modules/internal_.md).MapTouchEvent

## Hierarchy

- [`MapboxEvent`](internal_.MapboxEvent.md)<`TouchEvent`\>

  ↳ **`MapTouchEvent`**

## Table of contents

### Constructors

- [constructor](internal_.MapTouchEvent.md#constructor)

### Properties

- [defaultPrevented](internal_.MapTouchEvent.md#defaultprevented)
- [lngLat](internal_.MapTouchEvent.md#lnglat)
- [lngLats](internal_.MapTouchEvent.md#lnglats)
- [originalEvent](internal_.MapTouchEvent.md#originalevent)
- [point](internal_.MapTouchEvent.md#point)
- [points](internal_.MapTouchEvent.md#points)
- [target](internal_.MapTouchEvent.md#target)
- [type](internal_.MapTouchEvent.md#type)

### Methods

- [preventDefault](internal_.MapTouchEvent.md#preventdefault)

## Constructors

### constructor

• **new MapTouchEvent**()

#### Inherited from

[MapboxEvent](internal_.MapboxEvent.md).[constructor](internal_.MapboxEvent.md#constructor)

## Properties

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1985

___

### lngLat

• **lngLat**: [`LngLat`](internal_.LngLat.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1980

___

### lngLats

• **lngLats**: [`LngLat`](internal_.LngLat.md)[]

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1982

___

### originalEvent

• **originalEvent**: `TouchEvent`

#### Inherited from

[MapboxEvent](internal_.MapboxEvent.md).[originalEvent](internal_.MapboxEvent.md#originalevent)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1951

___

### point

• **point**: [`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1979

___

### points

• **points**: [`Point`](internal_.Point.md)[]

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1981

___

### target

• **target**: [`Map`](internal_.Map.md)

#### Inherited from

[MapboxEvent](internal_.MapboxEvent.md).[target](internal_.MapboxEvent.md#target)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1950

___

### type

• **type**: ``"touchcancel"`` \| ``"touchend"`` \| ``"touchstart"``

#### Overrides

[MapboxEvent](internal_.MapboxEvent.md).[type](internal_.MapboxEvent.md#type)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1977

## Methods

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1984
