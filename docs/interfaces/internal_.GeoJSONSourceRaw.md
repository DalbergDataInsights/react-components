[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GeoJSONSourceRaw

# Interface: GeoJSONSourceRaw

[<internal>](../modules/internal_.md).GeoJSONSourceRaw

GeoJSONSource

## Hierarchy

- [`Source`](internal_.Source.md)

- [`GeoJSONSourceOptions`](internal_.GeoJSONSourceOptions.md)

  ↳ **`GeoJSONSourceRaw`**

## Implemented by

- [`GeoJSONSource`](../classes/internal_.GeoJSONSource.md)

## Table of contents

### Properties

- [attribution](internal_.GeoJSONSourceRaw.md#attribution)
- [buffer](internal_.GeoJSONSourceRaw.md#buffer)
- [cluster](internal_.GeoJSONSourceRaw.md#cluster)
- [clusterMaxZoom](internal_.GeoJSONSourceRaw.md#clustermaxzoom)
- [clusterMinPoints](internal_.GeoJSONSourceRaw.md#clusterminpoints)
- [clusterProperties](internal_.GeoJSONSourceRaw.md#clusterproperties)
- [clusterRadius](internal_.GeoJSONSourceRaw.md#clusterradius)
- [data](internal_.GeoJSONSourceRaw.md#data)
- [filter](internal_.GeoJSONSourceRaw.md#filter)
- [generateId](internal_.GeoJSONSourceRaw.md#generateid)
- [lineMetrics](internal_.GeoJSONSourceRaw.md#linemetrics)
- [maxzoom](internal_.GeoJSONSourceRaw.md#maxzoom)
- [promoteId](internal_.GeoJSONSourceRaw.md#promoteid)
- [tolerance](internal_.GeoJSONSourceRaw.md#tolerance)
- [type](internal_.GeoJSONSourceRaw.md#type)

## Properties

### attribution

• `Optional` **attribution**: `string`

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[attribution](internal_.GeoJSONSourceOptions.md#attribution)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1434

___

### buffer

• `Optional` **buffer**: `number`

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[buffer](internal_.GeoJSONSourceOptions.md#buffer)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1436

___

### cluster

• `Optional` **cluster**: `number` \| `boolean`

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[cluster](internal_.GeoJSONSourceOptions.md#cluster)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1440

___

### clusterMaxZoom

• `Optional` **clusterMaxZoom**: `number`

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[clusterMaxZoom](internal_.GeoJSONSourceOptions.md#clustermaxzoom)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1444

___

### clusterMinPoints

• `Optional` **clusterMinPoints**: `number`

Minimum number of points necessary to form a cluster if clustering is enabled. Defaults to `2`.

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[clusterMinPoints](internal_.GeoJSONSourceOptions.md#clusterminpoints)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1449

___

### clusterProperties

• `Optional` **clusterProperties**: `object`

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[clusterProperties](internal_.GeoJSONSourceOptions.md#clusterproperties)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1451

___

### clusterRadius

• `Optional` **clusterRadius**: `number`

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[clusterRadius](internal_.GeoJSONSourceOptions.md#clusterradius)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1442

___

### data

• `Optional` **data**: `string` \| [`Geometry`](../modules/internal_.md#geometry) \| [`Feature`](internal_.Feature.md)<[`Geometry`](../modules/internal_.md#geometry), { `[name: string]`: `any`;  }\> \| [`FeatureCollection`](internal_.FeatureCollection.md)<[`Geometry`](../modules/internal_.md#geometry), { `[name: string]`: `any`;  }\>

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[data](internal_.GeoJSONSourceOptions.md#data)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1425

___

### filter

• `Optional` **filter**: `any`

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[filter](internal_.GeoJSONSourceOptions.md#filter)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1459

___

### generateId

• `Optional` **generateId**: `boolean`

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[generateId](internal_.GeoJSONSourceOptions.md#generateid)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1455

___

### lineMetrics

• `Optional` **lineMetrics**: `boolean`

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[lineMetrics](internal_.GeoJSONSourceOptions.md#linemetrics)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1453

___

### maxzoom

• `Optional` **maxzoom**: `number`

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[maxzoom](internal_.GeoJSONSourceOptions.md#maxzoom)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1432

___

### promoteId

• `Optional` **promoteId**: [`PromoteIdSpecification`](../modules/internal_.md#promoteidspecification)

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[promoteId](internal_.GeoJSONSourceOptions.md#promoteid)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1457

___

### tolerance

• `Optional` **tolerance**: `number`

#### Inherited from

[GeoJSONSourceOptions](internal_.GeoJSONSourceOptions.md).[tolerance](internal_.GeoJSONSourceOptions.md#tolerance)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1438

___

### type

• **type**: ``"geojson"``

#### Overrides

[Source](internal_.Source.md).[type](internal_.Source.md#type)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1399
