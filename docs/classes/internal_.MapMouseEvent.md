[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MapMouseEvent

# Class: MapMouseEvent

[<internal>](../modules/internal_.md).MapMouseEvent

## Hierarchy

- [`MapboxEvent`](internal_.MapboxEvent.md)<`MouseEvent`\>

  ↳ **`MapMouseEvent`**

## Table of contents

### Constructors

- [constructor](internal_.MapMouseEvent.md#constructor)

### Properties

- [defaultPrevented](internal_.MapMouseEvent.md#defaultprevented)
- [lngLat](internal_.MapMouseEvent.md#lnglat)
- [originalEvent](internal_.MapMouseEvent.md#originalevent)
- [point](internal_.MapMouseEvent.md#point)
- [target](internal_.MapMouseEvent.md#target)
- [type](internal_.MapMouseEvent.md#type)

### Methods

- [preventDefault](internal_.MapMouseEvent.md#preventdefault)

## Constructors

### constructor

• **new MapMouseEvent**()

#### Inherited from

[MapboxEvent](internal_.MapboxEvent.md).[constructor](internal_.MapboxEvent.md#constructor)

## Properties

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1971

___

### lngLat

• **lngLat**: [`LngLat`](internal_.LngLat.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1968

___

### originalEvent

• **originalEvent**: `MouseEvent`

#### Inherited from

[MapboxEvent](internal_.MapboxEvent.md).[originalEvent](internal_.MapboxEvent.md#originalevent)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1951

___

### point

• **point**: [`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1967

___

### target

• **target**: [`Map`](internal_.Map.md)

#### Inherited from

[MapboxEvent](internal_.MapboxEvent.md).[target](internal_.MapboxEvent.md#target)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1950

___

### type

• **type**: ``"click"`` \| ``"dblclick"`` \| ``"mousedown"`` \| ``"mouseup"`` \| ``"mousemove"`` \| ``"mouseenter"`` \| ``"mouseleave"`` \| ``"mouseover"`` \| ``"mouseout"`` \| ``"contextmenu"``

#### Overrides

[MapboxEvent](internal_.MapboxEvent.md).[type](internal_.MapboxEvent.md#type)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1955

## Methods

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1970
