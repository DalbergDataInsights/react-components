[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MultiLineString

# Interface: MultiLineString

[<internal>](../modules/internal_.md).MultiLineString

MultiLineString geometry object.
https://tools.ietf.org/html/rfc7946#section-3.1.5

## Hierarchy

- [`GeoJsonObject`](internal_.GeoJsonObject.md)

  ↳ **`MultiLineString`**

## Table of contents

### Properties

- [bbox](internal_.MultiLineString.md#bbox)
- [coordinates](internal_.MultiLineString.md#coordinates)
- [type](internal_.MultiLineString.md#type)

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

### coordinates

• **coordinates**: [`Position`](../modules/internal_.md#position-2)[][]

#### Defined in

node_modules/@types/geojson/index.d.ts:115

___

### type

• **type**: ``"MultiLineString"``

Specifies the type of GeoJSON object.

#### Overrides

[GeoJsonObject](internal_.GeoJsonObject.md).[type](internal_.GeoJsonObject.md#type)

#### Defined in

node_modules/@types/geojson/index.d.ts:114
