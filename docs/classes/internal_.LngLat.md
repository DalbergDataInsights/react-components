[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / LngLat

# Class: LngLat

[<internal>](../modules/internal_.md).LngLat

LngLat

## Table of contents

### Constructors

- [constructor](internal_.LngLat.md#constructor)

### Properties

- [lat](internal_.LngLat.md#lat)
- [lng](internal_.LngLat.md#lng)

### Methods

- [distanceTo](internal_.LngLat.md#distanceto)
- [toArray](internal_.LngLat.md#toarray)
- [toBounds](internal_.LngLat.md#tobounds)
- [toString](internal_.LngLat.md#tostring)
- [wrap](internal_.LngLat.md#wrap)
- [convert](internal_.LngLat.md#convert)

## Constructors

### constructor

• **new LngLat**(`lng`, `lat`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lng` | `number` |
| `lat` | `number` |

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1654

## Properties

### lat

• **lat**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1652

___

### lng

• **lng**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1651

## Methods

### distanceTo

▸ **distanceTo**(`lngLat`): `number`

Returns the approximate distance between a pair of coordinates in meters
Uses the Haversine Formula (from R.W. Sinnott, "Virtues of the Haversine", Sky and Telescope, vol. 68, no. 2, 1984, p. 159)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lngLat` | [`LngLat`](internal_.LngLat.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1667

___

### toArray

▸ **toArray**(): `number`[]

Return a LngLat as an array

#### Returns

`number`[]

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1660

___

### toBounds

▸ **toBounds**(`radius`): [`LngLatBounds`](internal_.LngLatBounds.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

[`LngLatBounds`](internal_.LngLatBounds.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1669

___

### toString

▸ **toString**(): `string`

Return a LngLat as a string

#### Returns

`string`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1663

___

### wrap

▸ **wrap**(): [`LngLat`](internal_.LngLat.md)

Return a new LngLat object whose longitude is wrapped to the range (-180, 180).

#### Returns

[`LngLat`](internal_.LngLat.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1657

___

### convert

▸ `Static` **convert**(`input`): [`LngLat`](internal_.LngLat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`LngLatLike`](../modules/internal_.md#lnglatlike) |

#### Returns

[`LngLat`](internal_.LngLat.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1671
