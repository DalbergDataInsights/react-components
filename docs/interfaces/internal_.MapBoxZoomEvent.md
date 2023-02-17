[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MapBoxZoomEvent

# Interface: MapBoxZoomEvent

[<internal>](../modules/internal_.md).MapBoxZoomEvent

## Hierarchy

- [`MapboxEvent`](../classes/internal_.MapboxEvent.md)<`MouseEvent`\>

  ↳ **`MapBoxZoomEvent`**

## Table of contents

### Properties

- [boxZoomBounds](internal_.MapBoxZoomEvent.md#boxzoombounds)
- [originalEvent](internal_.MapBoxZoomEvent.md#originalevent)
- [target](internal_.MapBoxZoomEvent.md#target)
- [type](internal_.MapBoxZoomEvent.md#type)

## Properties

### boxZoomBounds

• **boxZoomBounds**: [`LngLatBounds`](../classes/internal_.LngLatBounds.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2000

___

### originalEvent

• **originalEvent**: `MouseEvent`

#### Inherited from

[MapboxEvent](../classes/internal_.MapboxEvent.md).[originalEvent](../classes/internal_.MapboxEvent.md#originalevent)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1951

___

### target

• **target**: [`Map`](../classes/internal_.Map.md)

#### Inherited from

[MapboxEvent](../classes/internal_.MapboxEvent.md).[target](../classes/internal_.MapboxEvent.md#target)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1950

___

### type

• **type**: ``"boxzoomcancel"`` \| ``"boxzoomstart"`` \| ``"boxzoomend"``

#### Overrides

[MapboxEvent](../classes/internal_.MapboxEvent.md).[type](../classes/internal_.MapboxEvent.md#type)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1998
