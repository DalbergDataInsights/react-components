[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / LngLatBounds

# Class: LngLatBounds

[<internal>](../modules/internal_.md).LngLatBounds

LngLatBounds

## Table of contents

### Constructors

- [constructor](internal_.LngLatBounds.md#constructor)

### Properties

- [ne](internal_.LngLatBounds.md#ne)
- [sw](internal_.LngLatBounds.md#sw)

### Methods

- [contains](internal_.LngLatBounds.md#contains)
- [extend](internal_.LngLatBounds.md#extend)
- [getCenter](internal_.LngLatBounds.md#getcenter)
- [getEast](internal_.LngLatBounds.md#geteast)
- [getNorth](internal_.LngLatBounds.md#getnorth)
- [getNorthEast](internal_.LngLatBounds.md#getnortheast)
- [getNorthWest](internal_.LngLatBounds.md#getnorthwest)
- [getSouth](internal_.LngLatBounds.md#getsouth)
- [getSouthEast](internal_.LngLatBounds.md#getsoutheast)
- [getSouthWest](internal_.LngLatBounds.md#getsouthwest)
- [getWest](internal_.LngLatBounds.md#getwest)
- [isEmpty](internal_.LngLatBounds.md#isempty)
- [setNorthEast](internal_.LngLatBounds.md#setnortheast)
- [setSouthWest](internal_.LngLatBounds.md#setsouthwest)
- [toArray](internal_.LngLatBounds.md#toarray)
- [toString](internal_.LngLatBounds.md#tostring)
- [convert](internal_.LngLatBounds.md#convert)

## Constructors

### constructor

• **new LngLatBounds**(`boundsLike?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundsLike?` | [`number`, `number`, `number`, `number`] \| [[`LngLatLike`](../modules/internal_.md#lnglatlike), [`LngLatLike`](../modules/internal_.md#lnglatlike)] |

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1681

• **new LngLatBounds**(`sw`, `ne`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sw` | [`LngLatLike`](../modules/internal_.md#lnglatlike) |
| `ne` | [`LngLatLike`](../modules/internal_.md#lnglatlike) |

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1682

## Properties

### ne

• **ne**: [`LngLatLike`](../modules/internal_.md#lnglatlike)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1679

___

### sw

• **sw**: [`LngLatLike`](../modules/internal_.md#lnglatlike)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1678

## Methods

### contains

▸ **contains**(`lnglat`): `boolean`

Check if the point is within the bounding box.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lnglat` | [`LngLatLike`](../modules/internal_.md#lnglatlike) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1689

___

### extend

▸ **extend**(`obj`): [`LngLatBounds`](internal_.LngLatBounds.md)

Extend the bounds to include a given LngLat or LngLatBounds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`number`, `number`] \| [`number`, `number`, `number`, `number`] \| [`LngLat`](internal_.LngLat.md) \| { `lat`: `number` ; `lng`: `number`  } \| { `lat`: `number` ; `lon`: `number`  } \| [`LngLatBounds`](internal_.LngLatBounds.md) \| [[`LngLatLike`](../modules/internal_.md#lnglatlike), [`LngLatLike`](../modules/internal_.md#lnglatlike)] |

#### Returns

[`LngLatBounds`](internal_.LngLatBounds.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1692

___

### getCenter

▸ **getCenter**(): [`LngLat`](internal_.LngLat.md)

Get the point equidistant from this box's corners

#### Returns

[`LngLat`](internal_.LngLat.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1695

___

### getEast

▸ **getEast**(): `number`

Get east edge longitude

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1716

___

### getNorth

▸ **getNorth**(): `number`

Get north edge latitude

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1719

___

### getNorthEast

▸ **getNorthEast**(): [`LngLat`](internal_.LngLat.md)

Get northeast corner

#### Returns

[`LngLat`](internal_.LngLat.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1701

___

### getNorthWest

▸ **getNorthWest**(): [`LngLat`](internal_.LngLat.md)

Get northwest corner

#### Returns

[`LngLat`](internal_.LngLat.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1704

___

### getSouth

▸ **getSouth**(): `number`

Get south edge latitude

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1713

___

### getSouthEast

▸ **getSouthEast**(): [`LngLat`](internal_.LngLat.md)

Get southeast corner

#### Returns

[`LngLat`](internal_.LngLat.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1707

___

### getSouthWest

▸ **getSouthWest**(): [`LngLat`](internal_.LngLat.md)

Get southwest corner

#### Returns

[`LngLat`](internal_.LngLat.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1698

___

### getWest

▸ **getWest**(): `number`

Get west edge longitude

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1710

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns a boolean

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1728

___

### setNorthEast

▸ **setNorthEast**(`ne`): [`LngLatBounds`](internal_.LngLatBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ne` | [`LngLatLike`](../modules/internal_.md#lnglatlike) |

#### Returns

[`LngLatBounds`](internal_.LngLatBounds.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1684

___

### setSouthWest

▸ **setSouthWest**(`sw`): [`LngLatBounds`](internal_.LngLatBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sw` | [`LngLatLike`](../modules/internal_.md#lnglatlike) |

#### Returns

[`LngLatBounds`](internal_.LngLatBounds.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1686

___

### toArray

▸ **toArray**(): `number`[][]

Returns a LngLatBounds as an array

#### Returns

`number`[][]

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1722

___

### toString

▸ **toString**(): `string`

Return a LngLatBounds as a string

#### Returns

`string`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1725

___

### convert

▸ `Static` **convert**(`input`): [`LngLatBounds`](internal_.LngLatBounds.md)

Convert an array to a LngLatBounds object, or return an existing LngLatBounds object unchanged.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`LngLatBoundsLike`](../modules/internal_.md#lnglatboundslike) |

#### Returns

[`LngLatBounds`](internal_.LngLatBounds.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1731
