[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Control

# Class: Control

[<internal>](../modules/internal_.md).Control

Control

## Hierarchy

- [`Evented`](internal_.Evented.md)

  ↳ **`Control`**

  ↳↳ [`GeolocateControl`](internal_.GeolocateControl.md)

## Implements

- [`IControl`](../interfaces/internal_.IControl.md)

## Table of contents

### Constructors

- [constructor](internal_.Control.md#constructor)

### Properties

- [getDefaultPosition](internal_.Control.md#getdefaultposition)

### Methods

- [fire](internal_.Control.md#fire)
- [off](internal_.Control.md#off)
- [on](internal_.Control.md#on)
- [onAdd](internal_.Control.md#onadd)
- [onRemove](internal_.Control.md#onremove)
- [once](internal_.Control.md#once)

## Constructors

### constructor

• **new Control**()

#### Inherited from

[Evented](internal_.Evented.md).[constructor](internal_.Evented.md#constructor)

## Properties

### getDefaultPosition

• `Optional` **getDefaultPosition**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Implementation of

[IControl](../interfaces/internal_.IControl.md).[getDefaultPosition](../interfaces/internal_.IControl.md#getdefaultposition)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1130

## Methods

### fire

▸ **fire**(`type`, `properties?`): [`Control`](internal_.Control.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `properties?` | `Object` |

#### Returns

[`Control`](internal_.Control.md)

#### Inherited from

[Evented](internal_.Evented.md).[fire](internal_.Evented.md#fire)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1929

___

### off

▸ **off**(`type?`, `listener?`): [`Control`](internal_.Control.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `any` |
| `listener?` | [`EventedListener`](../modules/internal_.md#eventedlistener) |

#### Returns

[`Control`](internal_.Control.md)

#### Inherited from

[Evented](internal_.Evented.md).[off](internal_.Evented.md#off)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1924

___

### on

▸ **on**(`type`, `listener`): [`Control`](internal_.Control.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventedListener`](../modules/internal_.md#eventedlistener) |

#### Returns

[`Control`](internal_.Control.md)

#### Inherited from

[Evented](internal_.Evented.md).[on](internal_.Evented.md#on)

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

#### Implementation of

[IControl](../interfaces/internal_.IControl.md).[onAdd](../interfaces/internal_.IControl.md#onadd)

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

#### Implementation of

[IControl](../interfaces/internal_.IControl.md).[onRemove](../interfaces/internal_.IControl.md#onremove)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1129

___

### once

▸ **once**(`type`, `listener`): [`Control`](internal_.Control.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventedListener`](../modules/internal_.md#eventedlistener) |

#### Returns

[`Control`](internal_.Control.md)

#### Inherited from

[Evented](internal_.Evented.md).[once](internal_.Evented.md#once)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1926
