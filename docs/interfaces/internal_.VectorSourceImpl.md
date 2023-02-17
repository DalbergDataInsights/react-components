[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / VectorSourceImpl

# Interface: VectorSourceImpl

[<internal>](../modules/internal_.md).VectorSourceImpl

## Hierarchy

- [`VectorSource`](internal_.VectorSource.md)

  ↳ **`VectorSourceImpl`**

## Table of contents

### Properties

- [attribution](internal_.VectorSourceImpl.md#attribution)
- [bounds](internal_.VectorSourceImpl.md#bounds)
- [format](internal_.VectorSourceImpl.md#format)
- [id](internal_.VectorSourceImpl.md#id)
- [maxzoom](internal_.VectorSourceImpl.md#maxzoom)
- [minzoom](internal_.VectorSourceImpl.md#minzoom)
- [name](internal_.VectorSourceImpl.md#name)
- [promoteId](internal_.VectorSourceImpl.md#promoteid)
- [scheme](internal_.VectorSourceImpl.md#scheme)
- [tiles](internal_.VectorSourceImpl.md#tiles)
- [type](internal_.VectorSourceImpl.md#type)
- [url](internal_.VectorSourceImpl.md#url)
- [vector\_layers](internal_.VectorSourceImpl.md#vector_layers)

### Methods

- [setTiles](internal_.VectorSourceImpl.md#settiles)
- [setUrl](internal_.VectorSourceImpl.md#seturl)

## Properties

### attribution

• `Optional` **attribution**: `string`

#### Inherited from

[VectorSource](internal_.VectorSource.md).[attribution](internal_.VectorSource.md#attribution)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1580

___

### bounds

• `Optional` **bounds**: `number`[]

#### Inherited from

[VectorSource](internal_.VectorSource.md).[bounds](internal_.VectorSource.md#bounds)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1576

___

### format

• `Optional` **format**: ``"pbf"``

#### Inherited from

[VectorSource](internal_.VectorSource.md).[format](internal_.VectorSource.md#format)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1569

___

### id

• `Optional` **id**: `string`

#### Inherited from

[VectorSource](internal_.VectorSource.md).[id](internal_.VectorSource.md#id)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1572

___

### maxzoom

• `Optional` **maxzoom**: `number`

#### Inherited from

[VectorSource](internal_.VectorSource.md).[maxzoom](internal_.VectorSource.md#maxzoom)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1579

___

### minzoom

• `Optional` **minzoom**: `number`

#### Inherited from

[VectorSource](internal_.VectorSource.md).[minzoom](internal_.VectorSource.md#minzoom)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1578

___

### name

• `Optional` **name**: `string`

#### Inherited from

[VectorSource](internal_.VectorSource.md).[name](internal_.VectorSource.md#name)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1573

___

### promoteId

• `Optional` **promoteId**: [`PromoteIdSpecification`](../modules/internal_.md#promoteidspecification)

#### Inherited from

[VectorSource](internal_.VectorSource.md).[promoteId](internal_.VectorSource.md#promoteid)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1581

___

### scheme

• `Optional` **scheme**: ``"xyz"`` \| ``"tms"``

#### Inherited from

[VectorSource](internal_.VectorSource.md).[scheme](internal_.VectorSource.md#scheme)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1577

___

### tiles

• `Optional` **tiles**: `string`[]

#### Inherited from

[VectorSource](internal_.VectorSource.md).[tiles](internal_.VectorSource.md#tiles)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1575

___

### type

• **type**: ``"vector"``

#### Inherited from

[VectorSource](internal_.VectorSource.md).[type](internal_.VectorSource.md#type)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1568

___

### url

• `Optional` **url**: `string`

#### Inherited from

[VectorSource](internal_.VectorSource.md).[url](internal_.VectorSource.md#url)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1571

___

### vector\_layers

• `Optional` **vector\_layers**: [`SourceVectorLayer`](../modules/internal_.md#sourcevectorlayer)[]

#### Inherited from

[VectorSource](internal_.VectorSource.md).[vector_layers](internal_.VectorSource.md#vector_layers)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1583

## Methods

### setTiles

▸ **setTiles**(`tiles`): [`VectorSourceImpl`](internal_.VectorSourceImpl.md)

Sets the source `tiles` property and re-renders the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tiles` | readonly `string`[] | An array of one or more tile source URLs, as in the TileJSON spec. |

#### Returns

[`VectorSourceImpl`](internal_.VectorSourceImpl.md)

this

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1369

___

### setUrl

▸ **setUrl**(`url`): [`VectorSourceImpl`](internal_.VectorSourceImpl.md)

Sets the source `url` property and re-renders the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | A URL to a TileJSON resource. Supported protocols are `http:`, `https:`, and `mapbox://<Tileset ID>`. |

#### Returns

[`VectorSourceImpl`](internal_.VectorSourceImpl.md)

this

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1377
