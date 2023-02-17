[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Point

# Class: Point

[<internal>](../modules/internal_.md).Point

Point

## Table of contents

### Constructors

- [constructor](internal_.Point.md#constructor)

### Properties

- [x](internal_.Point.md#x)
- [y](internal_.Point.md#y)

### Methods

- [add](internal_.Point.md#add)
- [angle](internal_.Point.md#angle)
- [angleTo](internal_.Point.md#angleto)
- [angleWidth](internal_.Point.md#anglewidth)
- [angleWithSep](internal_.Point.md#anglewithsep)
- [clone](internal_.Point.md#clone)
- [dist](internal_.Point.md#dist)
- [distSqr](internal_.Point.md#distsqr)
- [div](internal_.Point.md#div)
- [equals](internal_.Point.md#equals)
- [mag](internal_.Point.md#mag)
- [matMult](internal_.Point.md#matmult)
- [mult](internal_.Point.md#mult)
- [perp](internal_.Point.md#perp)
- [rotate](internal_.Point.md#rotate)
- [round](internal_.Point.md#round)
- [sub](internal_.Point.md#sub)
- [unit](internal_.Point.md#unit)
- [convert](internal_.Point.md#convert)

## Constructors

### constructor

• **new Point**(`x`, `y`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1742

## Properties

### x

• **x**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1739

___

### y

• **y**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1740

## Methods

### add

▸ **add**(`p`): [`Point`](internal_.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](internal_.Point.md) |

#### Returns

[`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1746

___

### angle

▸ **angle**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1772

___

### angleTo

▸ **angleTo**(`p`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](internal_.Point.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1774

___

### angleWidth

▸ **angleWidth**(`p`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](internal_.Point.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1776

___

### angleWithSep

▸ **angleWithSep**(`x`, `y`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1778

___

### clone

▸ **clone**(): [`Point`](internal_.Point.md)

#### Returns

[`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1744

___

### dist

▸ **dist**(`p`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](internal_.Point.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1768

___

### distSqr

▸ **distSqr**(`p`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](internal_.Point.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1770

___

### div

▸ **div**(`k`): [`Point`](internal_.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `number` |

#### Returns

[`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1752

___

### equals

▸ **equals**(`p`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](internal_.Point.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1766

___

### mag

▸ **mag**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1764

___

### matMult

▸ **matMult**(`m`): [`Point`](internal_.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `number` |

#### Returns

[`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1756

___

### mult

▸ **mult**(`k`): [`Point`](internal_.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `number` |

#### Returns

[`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1750

___

### perp

▸ **perp**(): [`Point`](internal_.Point.md)

#### Returns

[`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1760

___

### rotate

▸ **rotate**(`a`): [`Point`](internal_.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

[`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1754

___

### round

▸ **round**(): [`Point`](internal_.Point.md)

#### Returns

[`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1762

___

### sub

▸ **sub**(`p`): [`Point`](internal_.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](internal_.Point.md) |

#### Returns

[`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1748

___

### unit

▸ **unit**(): [`Point`](internal_.Point.md)

#### Returns

[`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1758

___

### convert

▸ `Static` **convert**(`a`): [`Point`](internal_.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PointLike`](../modules/internal_.md#pointlike) |

#### Returns

[`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1780
