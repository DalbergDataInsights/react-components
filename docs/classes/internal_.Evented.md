[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Evented

# Class: Evented

[<internal>](../modules/internal_.md).Evented

Evented

## Hierarchy

- **`Evented`**

  ↳ [`Control`](internal_.Control.md)

  ↳ [`Map`](internal_.Map.md)

## Table of contents

### Constructors

- [constructor](internal_.Evented.md#constructor)

### Methods

- [fire](internal_.Evented.md#fire)
- [off](internal_.Evented.md#off)
- [on](internal_.Evented.md#on)
- [once](internal_.Evented.md#once)

## Constructors

### constructor

• **new Evented**()

## Methods

### fire

▸ **fire**(`type`, `properties?`): [`Evented`](internal_.Evented.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `properties?` | `Object` |

#### Returns

[`Evented`](internal_.Evented.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1929

___

### off

▸ **off**(`type?`, `listener?`): [`Evented`](internal_.Evented.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `any` |
| `listener?` | [`EventedListener`](../modules/internal_.md#eventedlistener) |

#### Returns

[`Evented`](internal_.Evented.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1924

___

### on

▸ **on**(`type`, `listener`): [`Evented`](internal_.Evented.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventedListener`](../modules/internal_.md#eventedlistener) |

#### Returns

[`Evented`](internal_.Evented.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1922

___

### once

▸ **once**(`type`, `listener`): [`Evented`](internal_.Evented.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventedListener`](../modules/internal_.md#eventedlistener) |

#### Returns

[`Evented`](internal_.Evented.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1926
