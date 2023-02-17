[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GeolocateControl

# Class: GeolocateControl

[<internal>](../modules/internal_.md).GeolocateControl

Geolocate

## Hierarchy

- [`Control`](internal_.Control.md)

  ↳ **`GeolocateControl`**

## Table of contents

### Constructors

- [constructor](internal_.GeolocateControl.md#constructor)

### Properties

- [getDefaultPosition](internal_.GeolocateControl.md#getdefaultposition)

### Methods

- [fire](internal_.GeolocateControl.md#fire)
- [off](internal_.GeolocateControl.md#off)
- [on](internal_.GeolocateControl.md#on)
- [onAdd](internal_.GeolocateControl.md#onadd)
- [onRemove](internal_.GeolocateControl.md#onremove)
- [once](internal_.GeolocateControl.md#once)
- [trigger](internal_.GeolocateControl.md#trigger)

## Constructors

### constructor

• **new GeolocateControl**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.fitBoundsOptions?` | [`FitBoundsOptions`](../interfaces/internal_.FitBoundsOptions.md) |
| `options.geolocation?` | [`Geolocation`](../modules/internal_.md#geolocation) |
| `options.positionOptions?` | [`PositionOptions`](internal_.PositionOptions.md) |
| `options.showAccuracyCircle?` | `boolean` |
| `options.showUserHeading?` | `boolean` |
| `options.showUserLocation?` | `boolean` |
| `options.trackUserLocation?` | `boolean` |

#### Overrides

[Control](internal_.Control.md).[constructor](internal_.Control.md#constructor)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1154

## Properties

### getDefaultPosition

• `Optional` **getDefaultPosition**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Inherited from

[Control](internal_.Control.md).[getDefaultPosition](internal_.Control.md#getdefaultposition)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1130

## Methods

### fire

▸ **fire**(`type`, `properties?`): [`GeolocateControl`](internal_.GeolocateControl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `properties?` | `Object` |

#### Returns

[`GeolocateControl`](internal_.GeolocateControl.md)

#### Inherited from

[Control](internal_.Control.md).[fire](internal_.Control.md#fire)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1929

___

### off

▸ **off**(`type?`, `listener?`): [`GeolocateControl`](internal_.GeolocateControl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `any` |
| `listener?` | [`EventedListener`](../modules/internal_.md#eventedlistener) |

#### Returns

[`GeolocateControl`](internal_.GeolocateControl.md)

#### Inherited from

[Control](internal_.Control.md).[off](internal_.Control.md#off)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1924

___

### on

▸ **on**(`type`, `listener`): [`GeolocateControl`](internal_.GeolocateControl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventedListener`](../modules/internal_.md#eventedlistener) |

#### Returns

[`GeolocateControl`](internal_.GeolocateControl.md)

#### Inherited from

[Control](internal_.Control.md).[on](internal_.Control.md#on)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1922

___

### onAdd

▸ **onAdd**(`map`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Map`](internal_.Map.md) |

#### Returns

`HTMLElement`

#### Inherited from

[Control](internal_.Control.md).[onAdd](internal_.Control.md#onadd)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1128

___

### onRemove

▸ **onRemove**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Map`](internal_.Map.md) |

#### Returns

`void`

#### Inherited from

[Control](internal_.Control.md).[onRemove](internal_.Control.md#onremove)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1129

___

### once

▸ **once**(`type`, `listener`): [`GeolocateControl`](internal_.GeolocateControl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventedListener`](../modules/internal_.md#eventedlistener) |

#### Returns

[`GeolocateControl`](internal_.GeolocateControl.md)

#### Inherited from

[Control](internal_.Control.md).[once](internal_.Control.md#once)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1926

___

### trigger

▸ **trigger**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1163
