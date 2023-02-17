[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MercatorCoordinate

# Class: MercatorCoordinate

[<internal>](../modules/internal_.md).MercatorCoordinate

MercatorCoordinate

## Table of contents

### Constructors

- [constructor](internal_.MercatorCoordinate.md#constructor)

### Properties

- [x](internal_.MercatorCoordinate.md#x)
- [y](internal_.MercatorCoordinate.md#y)
- [z](internal_.MercatorCoordinate.md#z)

### Methods

- [meterInMercatorCoordinateUnits](internal_.MercatorCoordinate.md#meterinmercatorcoordinateunits)
- [toAltitude](internal_.MercatorCoordinate.md#toaltitude)
- [toLngLat](internal_.MercatorCoordinate.md#tolnglat)
- [fromLngLat](internal_.MercatorCoordinate.md#fromlnglat)

## Constructors

### constructor

• **new MercatorCoordinate**(`x`, `y`, `z?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z?` | `number` |

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1800

## Properties

### x

• **x**: `number`

The x component of the position.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1788

___

### y

• **y**: `number`

The y component of the position.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1791

___

### z

• `Optional` **z**: `number`

The z component of the position.

**`Default`**

0

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1798

## Methods

### meterInMercatorCoordinateUnits

▸ **meterInMercatorCoordinateUnits**(): `number`

Returns the distance of 1 meter in MercatorCoordinate units at this latitude.

For coordinates in real world units using meters, this naturally provides the
scale to transform into MercatorCoordinates.

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1814

___

### toAltitude

▸ **toAltitude**(): `number`

Returns the altitude in meters of the coordinate.

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1803

___

### toLngLat

▸ **toLngLat**(): [`LngLat`](internal_.LngLat.md)

Returns the LngLat for the coordinate.

#### Returns

[`LngLat`](internal_.LngLat.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1806

___

### fromLngLat

▸ `Static` **fromLngLat**(`lngLatLike`, `altitude?`): [`MercatorCoordinate`](internal_.MercatorCoordinate.md)

Project a LngLat to a MercatorCoordinate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lngLatLike` | [`LngLatLike`](../modules/internal_.md#lnglatlike) |
| `altitude?` | `number` |

#### Returns

[`MercatorCoordinate`](internal_.MercatorCoordinate.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1817
