[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / FreeCameraOptions

# Class: FreeCameraOptions

[<internal>](../modules/internal_.md).FreeCameraOptions

Various options for accessing physical properties of the underlying camera entity.
A direct access to these properties allows more flexible and precise controlling of the camera
while also being fully compatible and interchangeable with CameraOptions. All fields are optional.
See {@Link Camera#setFreeCameraOptions} and {@Link Camera#getFreeCameraOptions}

**`Param`**

Position of the camera in slightly modified web mercator coordinates
       - The size of 1 unit is the width of the projected world instead of the "mercator meter".
       Coordinate [0, 0, 0] is the north-west corner and [1, 1, 0] is the south-east corner.
       - Z coordinate is conformal and must respect minimum and maximum zoom values.
       - Zoom is automatically computed from the altitude (z)

**`Param`**

Orientation of the camera represented as a unit quaternion [x, y, z, w]
       in a left-handed coordinate space. Direction of the rotation is clockwise around the respective axis.
       The default pose of the camera is such that the forward vector is looking up the -Z axis and
       the up vector is aligned with north orientation of the map:
       forward: [0, 0, -1]
       up:      [0, -1, 0]
       right    [1, 0, 0]
       Orientation can be set freely but certain constraints still apply
       - Orientation must be representable with only pitch and bearing.
       - Pitch has an upper limit

## Table of contents

### Constructors

- [constructor](internal_.FreeCameraOptions.md#constructor)

### Properties

- [position](internal_.FreeCameraOptions.md#position)

### Methods

- [lookAtPoint](internal_.FreeCameraOptions.md#lookatpoint)
- [setPitchBearing](internal_.FreeCameraOptions.md#setpitchbearing)

## Constructors

### constructor

• **new FreeCameraOptions**(`position?`, `orientation?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position?` | [`MercatorCoordinate`](internal_.MercatorCoordinate.md) |
| `orientation?` | [`quat`](../modules/internal_.md#quat) |

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:900

## Properties

### position

• **position**: [`MercatorCoordinate`](internal_.MercatorCoordinate.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:902

## Methods

### lookAtPoint

▸ **lookAtPoint**(`location`, `up?`): `void`

Helper function for setting orientation of the camera by defining a focus point
on the map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`LngLatLike`](../modules/internal_.md#lnglatlike) | Location of the focus point on the map |
| `up?` | [`vec3`](../modules/internal_.md#vec3) | Up vector of the camera is required in certain scenarios where bearing can't be deduced from the viewing direction. |

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:912

___

### setPitchBearing

▸ **setPitchBearing**(`pitch`, `bearing`): `void`

Helper function for setting the orientation of the camera as a pitch and a bearing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pitch` | `number` | Pitch angle in degrees |
| `bearing` | `number` | Bearing angle in degrees |

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:920
