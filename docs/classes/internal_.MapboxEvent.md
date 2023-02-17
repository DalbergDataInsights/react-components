[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MapboxEvent

# Class: MapboxEvent<TOrig\>

[<internal>](../modules/internal_.md).MapboxEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `TOrig` | `undefined` |

## Hierarchy

- **`MapboxEvent`**

  ↳ [`ErrorEvent`](internal_.ErrorEvent.md)

  ↳ [`MapContextEvent`](../interfaces/internal_.MapContextEvent.md)

  ↳ [`MapSourceDataEvent`](../interfaces/internal_.MapSourceDataEvent.md)

  ↳ [`MapStyleDataEvent`](../interfaces/internal_.MapStyleDataEvent.md)

  ↳ [`MapBoxZoomEvent`](../interfaces/internal_.MapBoxZoomEvent.md)

  ↳ [`MapTouchEvent`](internal_.MapTouchEvent.md)

  ↳ [`MapMouseEvent`](internal_.MapMouseEvent.md)

  ↳ [`MapWheelEvent`](internal_.MapWheelEvent.md)

## Table of contents

### Constructors

- [constructor](internal_.MapboxEvent.md#constructor)

### Properties

- [originalEvent](internal_.MapboxEvent.md#originalevent)
- [target](internal_.MapboxEvent.md#target)
- [type](internal_.MapboxEvent.md#type)

## Constructors

### constructor

• **new MapboxEvent**<`TOrig`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOrig` | `undefined` |

## Properties

### originalEvent

• **originalEvent**: `TOrig`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1951

___

### target

• **target**: [`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1950

___

### type

• **type**: `string`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1949
