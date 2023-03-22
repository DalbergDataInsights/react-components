[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Geolocation

# Interface: Geolocation

[<internal>](../modules/internal_.md).Geolocation

An object able to programmatically obtain the position of the device. It gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location.

## Table of contents

### Methods

- [clearWatch](internal_.Geolocation.md#clearwatch)
- [getCurrentPosition](internal_.Geolocation.md#getcurrentposition)
- [watchPosition](internal_.Geolocation.md#watchposition)

## Methods

### clearWatch

▸ **clearWatch**(`watchId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `watchId` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5662

___

### getCurrentPosition

▸ **getCurrentPosition**(`successCallback`, `errorCallback?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `successCallback` | [`PositionCallback`](internal_.PositionCallback.md) |
| `errorCallback?` | ``null`` \| [`PositionErrorCallback`](internal_.PositionErrorCallback.md) |
| `options?` | [`PositionOptions`](internal_.PositionOptions-1.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5663

___

### watchPosition

▸ **watchPosition**(`successCallback`, `errorCallback?`, `options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `successCallback` | [`PositionCallback`](internal_.PositionCallback.md) |
| `errorCallback?` | ``null`` \| [`PositionErrorCallback`](internal_.PositionErrorCallback.md) |
| `options?` | [`PositionOptions`](internal_.PositionOptions-1.md) |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5664
