[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CustomSourceInterface

# Interface: CustomSourceInterface<T\>

[<internal>](../modules/internal_.md).CustomSourceInterface

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [attribution](internal_.CustomSourceInterface.md#attribution)
- [bounds](internal_.CustomSourceInterface.md#bounds)
- [dataType](internal_.CustomSourceInterface.md#datatype)
- [hasTile](internal_.CustomSourceInterface.md#hastile)
- [id](internal_.CustomSourceInterface.md#id)
- [loadTile](internal_.CustomSourceInterface.md#loadtile)
- [maxzoom](internal_.CustomSourceInterface.md#maxzoom)
- [minzoom](internal_.CustomSourceInterface.md#minzoom)
- [onAdd](internal_.CustomSourceInterface.md#onadd)
- [onRemove](internal_.CustomSourceInterface.md#onremove)
- [prepareTile](internal_.CustomSourceInterface.md#preparetile)
- [scheme](internal_.CustomSourceInterface.md#scheme)
- [tileSize](internal_.CustomSourceInterface.md#tilesize)
- [type](internal_.CustomSourceInterface.md#type)
- [unloadTile](internal_.CustomSourceInterface.md#unloadtile)

## Properties

### attribution

• `Optional` **attribution**: `string`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1625

___

### bounds

• `Optional` **bounds**: [`number`, `number`, `number`, `number`]

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1626

___

### dataType

• **dataType**: ``"raster"``

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1620

___

### hasTile

• `Optional` **hasTile**: (`tileID`: { `x`: `number` ; `y`: `number` ; `z`: `number`  }) => `boolean`

#### Type declaration

▸ (`tileID`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tileID` | `Object` |
| `tileID.x` | `number` |
| `tileID.y` | `number` |
| `tileID.z` | `number` |

##### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1627

___

### id

• **id**: `string`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1618

___

### loadTile

• **loadTile**: (`tileID`: { `x`: `number` ; `y`: `number` ; `z`: `number`  }, `options`: { `signal`: [`AbortSignal`](../modules/internal_.md#abortsignal)  }) => `Promise`<`T`\>

#### Type declaration

▸ (`tileID`, `options`): `Promise`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `tileID` | `Object` |
| `tileID.x` | `number` |
| `tileID.y` | `number` |
| `tileID.z` | `number` |
| `options` | `Object` |
| `options.signal` | [`AbortSignal`](../modules/internal_.md#abortsignal) |

##### Returns

`Promise`<`T`\>

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1628

___

### maxzoom

• `Optional` **maxzoom**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1622

___

### minzoom

• `Optional` **minzoom**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1621

___

### onAdd

• `Optional` **onAdd**: (`map`: [`Map`](../classes/internal_.Map.md)) => `void`

#### Type declaration

▸ (`map`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Map`](../classes/internal_.Map.md) |

##### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1631

___

### onRemove

• `Optional` **onRemove**: (`map`: [`Map`](../classes/internal_.Map.md)) => `void`

#### Type declaration

▸ (`map`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Map`](../classes/internal_.Map.md) |

##### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1632

___

### prepareTile

• `Optional` **prepareTile**: (`tileID`: { `x`: `number` ; `y`: `number` ; `z`: `number`  }) => `T`

#### Type declaration

▸ (`tileID`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tileID` | `Object` |
| `tileID.x` | `number` |
| `tileID.y` | `number` |
| `tileID.z` | `number` |

##### Returns

`T`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1629

___

### scheme

• `Optional` **scheme**: `string`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1623

___

### tileSize

• `Optional` **tileSize**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1624

___

### type

• **type**: ``"custom"``

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1619

___

### unloadTile

• `Optional` **unloadTile**: (`tileID`: { `x`: `number` ; `y`: `number` ; `z`: `number`  }) => `void`

#### Type declaration

▸ (`tileID`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tileID` | `Object` |
| `tileID.x` | `number` |
| `tileID.y` | `number` |
| `tileID.z` | `number` |

##### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1630
