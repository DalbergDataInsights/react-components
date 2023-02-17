[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GeoJsonObject

# Interface: GeoJsonObject

[<internal>](../modules/internal_.md).GeoJsonObject

The base GeoJSON object.
https://tools.ietf.org/html/rfc7946#section-3
The GeoJSON specification also allows foreign members
(https://tools.ietf.org/html/rfc7946#section-6.1)
Developers should use "&" type in TypeScript or extend the interface
to add these foreign members.

## Hierarchy

- **`GeoJsonObject`**

  ↳ [`Feature`](internal_.Feature.md)

  ↳ [`Point`](internal_.Point-1.md)

  ↳ [`MultiPoint`](internal_.MultiPoint.md)

  ↳ [`LineString`](internal_.LineString.md)

  ↳ [`MultiLineString`](internal_.MultiLineString.md)

  ↳ [`Polygon`](internal_.Polygon.md)

  ↳ [`MultiPolygon`](internal_.MultiPolygon.md)

  ↳ [`GeometryCollection`](internal_.GeometryCollection.md)

  ↳ [`FeatureCollection`](internal_.FeatureCollection.md)

## Table of contents

### Properties

- [bbox](internal_.GeoJsonObject.md#bbox)
- [type](internal_.GeoJsonObject.md#type)

## Properties

### bbox

• `Optional` **bbox**: [`BBox`](../modules/internal_.md#bbox)

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections.
The value of the bbox member is an array of length 2*n where n is the number of dimensions
represented in the contained geometries, with all axes of the most southwesterly point
followed by all axes of the more northeasterly point.
The axes order of a bbox follows the axes order of geometries.
https://tools.ietf.org/html/rfc7946#section-5

#### Defined in

node_modules/@types/geojson/index.d.ts:67

___

### type

• **type**: ``"Point"`` \| ``"MultiPoint"`` \| ``"LineString"`` \| ``"MultiLineString"`` \| ``"Polygon"`` \| ``"MultiPolygon"`` \| ``"GeometryCollection"`` \| ``"Feature"`` \| ``"FeatureCollection"``

Specifies the type of GeoJSON object.

#### Defined in

node_modules/@types/geojson/index.d.ts:58
