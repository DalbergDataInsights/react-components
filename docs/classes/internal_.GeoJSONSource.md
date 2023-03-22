[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GeoJSONSource

# Class: GeoJSONSource

[<internal>](../modules/internal_.md).GeoJSONSource

GeoJSONSource

## Implements

- [`GeoJSONSourceRaw`](../interfaces/internal_.GeoJSONSourceRaw.md)

## Table of contents

### Constructors

- [constructor](internal_.GeoJSONSource.md#constructor)

### Properties

- [type](internal_.GeoJSONSource.md#type)

### Methods

- [getClusterChildren](internal_.GeoJSONSource.md#getclusterchildren)
- [getClusterExpansionZoom](internal_.GeoJSONSource.md#getclusterexpansionzoom)
- [getClusterLeaves](internal_.GeoJSONSource.md#getclusterleaves)
- [setData](internal_.GeoJSONSource.md#setdata)

## Constructors

### constructor

• **new GeoJSONSource**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GeoJSONSourceOptions`](../interfaces/internal_.GeoJSONSourceOptions.md) |

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1405

## Properties

### type

• **type**: ``"geojson"``

#### Implementation of

[GeoJSONSourceRaw](../interfaces/internal_.GeoJSONSourceRaw.md).[type](../interfaces/internal_.GeoJSONSourceRaw.md#type)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1403

## Methods

### getClusterChildren

▸ **getClusterChildren**(`clusterId`, `callback`): [`GeoJSONSource`](internal_.GeoJSONSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | `number` |
| `callback` | (`error`: `any`, `features`: [`Feature`](../interfaces/internal_.Feature.md)<[`Geometry`](../modules/internal_.md#geometry), [`GeoJsonProperties`](../modules/internal_.md#geojsonproperties)\>[]) => `void` |

#### Returns

[`GeoJSONSource`](internal_.GeoJSONSource.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1411

___

### getClusterExpansionZoom

▸ **getClusterExpansionZoom**(`clusterId`, `callback`): [`GeoJSONSource`](internal_.GeoJSONSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | `number` |
| `callback` | (`error`: `any`, `zoom`: `number`) => `void` |

#### Returns

[`GeoJSONSource`](internal_.GeoJSONSource.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1409

___

### getClusterLeaves

▸ **getClusterLeaves**(`cluserId`, `limit`, `offset`, `callback`): [`GeoJSONSource`](internal_.GeoJSONSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluserId` | `number` |
| `limit` | `number` |
| `offset` | `number` |
| `callback` | (`error`: `any`, `features`: [`Feature`](../interfaces/internal_.Feature.md)<[`Geometry`](../modules/internal_.md#geometry), [`GeoJsonProperties`](../modules/internal_.md#geojsonproperties)\>[]) => `void` |

#### Returns

[`GeoJSONSource`](internal_.GeoJSONSource.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1416

___

### setData

▸ **setData**(`data`): [`GeoJSONSource`](internal_.GeoJSONSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `String` \| [`Feature`](../interfaces/internal_.Feature.md)<[`Geometry`](../modules/internal_.md#geometry), [`GeoJsonProperties`](../modules/internal_.md#geojsonproperties)\> \| [`FeatureCollection`](../interfaces/internal_.FeatureCollection.md)<[`Geometry`](../modules/internal_.md#geometry), [`GeoJsonProperties`](../modules/internal_.md#geojsonproperties)\> |

#### Returns

[`GeoJSONSource`](internal_.GeoJSONSource.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1407
