[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GeometryCollection

# Interface: GeometryCollection<G\>

[<internal>](../modules/internal_.md).GeometryCollection

Geometry Collection
https://tools.ietf.org/html/rfc7946#section-3.1.8

## Type parameters

| Name | Type |
| :------ | :------ |
| `G` | extends [`Geometry`](../modules/internal_.md#geometry) = [`Geometry`](../modules/internal_.md#geometry) |

## Hierarchy

- [`GeoJsonObject`](internal_.GeoJsonObject.md)

  ↳ **`GeometryCollection`**

## Table of contents

### Properties

- [bbox](internal_.GeometryCollection.md#bbox)
- [geometries](internal_.GeometryCollection.md#geometries)
- [type](internal_.GeometryCollection.md#type)

## Properties

### bbox

• `Optional` **bbox**: [`BBox`](../modules/internal_.md#bbox)

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
The value of the bbox member is an array of length 2*n where n is the number of dimensions
represented in the contained geometries, with all axes of the most southwesterly point
followed by all axes of the more northeasterly point.
The axes order of a bbox follows the axes order of geometries.
https://tools.ietf.org/html/rfc7946#section-5

#### Inherited from

[GeoJsonObject](internal_.GeoJsonObject.md).[bbox](internal_.GeoJsonObject.md#bbox)

#### Defined in

node_modules/@types/geojson/index.d.ts:67

___

### geometries

• **geometries**: `G`[]

#### Defined in

node_modules/@types/geojson/index.d.ts:142

___

### type

• **type**: ``"GeometryCollection"``

Specifies the type of GeoJSON object.

#### Overrides

[GeoJsonObject](internal_.GeoJsonObject.md).[type](internal_.GeoJsonObject.md#type)

#### Defined in

node_modules/@types/geojson/index.d.ts:141
