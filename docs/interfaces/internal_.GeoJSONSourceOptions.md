[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GeoJSONSourceOptions

# Interface: GeoJSONSourceOptions

[<internal>](../modules/internal_.md).GeoJSONSourceOptions

## Hierarchy

- **`GeoJSONSourceOptions`**

  ↳ [`GeoJSONSourceRaw`](internal_.GeoJSONSourceRaw.md)

## Table of contents

### Properties

- [attribution](internal_.GeoJSONSourceOptions.md#attribution)
- [buffer](internal_.GeoJSONSourceOptions.md#buffer)
- [cluster](internal_.GeoJSONSourceOptions.md#cluster)
- [clusterMaxZoom](internal_.GeoJSONSourceOptions.md#clustermaxzoom)
- [clusterMinPoints](internal_.GeoJSONSourceOptions.md#clusterminpoints)
- [clusterProperties](internal_.GeoJSONSourceOptions.md#clusterproperties)
- [clusterRadius](internal_.GeoJSONSourceOptions.md#clusterradius)
- [data](internal_.GeoJSONSourceOptions.md#data)
- [filter](internal_.GeoJSONSourceOptions.md#filter)
- [generateId](internal_.GeoJSONSourceOptions.md#generateid)
- [lineMetrics](internal_.GeoJSONSourceOptions.md#linemetrics)
- [maxzoom](internal_.GeoJSONSourceOptions.md#maxzoom)
- [promoteId](internal_.GeoJSONSourceOptions.md#promoteid)
- [tolerance](internal_.GeoJSONSourceOptions.md#tolerance)

## Properties

### attribution

• `Optional` **attribution**: `string`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1434

___

### buffer

• `Optional` **buffer**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1436

___

### cluster

• `Optional` **cluster**: `number` \| `boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1440

___

### clusterMaxZoom

• `Optional` **clusterMaxZoom**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1444

___

### clusterMinPoints

• `Optional` **clusterMinPoints**: `number`

Minimum number of points necessary to form a cluster if clustering is enabled. Defaults to `2`.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1449

___

### clusterProperties

• `Optional` **clusterProperties**: `object`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1451

___

### clusterRadius

• `Optional` **clusterRadius**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1442

___

### data

• `Optional` **data**: `string` \| [`Geometry`](../modules/internal_.md#geometry) \| [`Feature`](internal_.Feature.md)<[`Geometry`](../modules/internal_.md#geometry), { `[name: string]`: `any`;  }\> \| [`FeatureCollection`](internal_.FeatureCollection.md)<[`Geometry`](../modules/internal_.md#geometry), { `[name: string]`: `any`;  }\>

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1425

___

### filter

• `Optional` **filter**: `any`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1459

___

### generateId

• `Optional` **generateId**: `boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1455

___

### lineMetrics

• `Optional` **lineMetrics**: `boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1453

___

### maxzoom

• `Optional` **maxzoom**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1432

___

### promoteId

• `Optional` **promoteId**: [`PromoteIdSpecification`](../modules/internal_.md#promoteidspecification)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1457

___

### tolerance

• `Optional` **tolerance**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1438
