[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / CustomLayerInterface

# Interface: CustomLayerInterface

[<internal>](../modules/internal_.md).CustomLayerInterface

## Table of contents

### Properties

- [id](internal_.CustomLayerInterface.md#id)
- [renderingMode](internal_.CustomLayerInterface.md#renderingmode)
- [type](internal_.CustomLayerInterface.md#type)

### Methods

- [onAdd](internal_.CustomLayerInterface.md#onadd)
- [onRemove](internal_.CustomLayerInterface.md#onremove)
- [prerender](internal_.CustomLayerInterface.md#prerender)
- [render](internal_.CustomLayerInterface.md#render)

## Properties

### id

• **id**: `string`

A unique layer id.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2333

___

### renderingMode

• `Optional` **renderingMode**: ``"2d"`` \| ``"3d"``

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2339

___

### type

• **type**: ``"custom"``

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2336

## Methods

### onAdd

▸ `Optional` **onAdd**(`map`, `gl`): `void`

Optional method called when the layer has been added to the Map with Map#addLayer.
This gives the layer a chance to initialize gl resources and register event listeners.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`Map`](../classes/internal_.Map.md) | The Map this custom layer was just added to. |
| `gl` | `WebGLRenderingContext` | The gl context for the map. |

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2355

___

### onRemove

▸ `Optional` **onRemove**(`map`, `gl`): `void`

Optional method called when the layer has been removed from the Map with Map#removeLayer.
This gives the layer a chance to clean up gl resources and event listeners.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | [`Map`](../classes/internal_.Map.md) | The Map this custom layer was just added to. |
| `gl` | `WebGLRenderingContext` | The gl context for the map. |

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2347

___

### prerender

▸ `Optional` **prerender**(`gl`, `matrix`): `void`

Optional method called during a render frame to allow a layer to prepare resources
or render into a texture.

The layer cannot make any assumptions about the current GL state and must bind a framebuffer
before rendering.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The map's gl context. |
| `matrix` | `number`[] | The map's camera matrix. It projects spherical mercator coordinates to gl coordinates. The mercator coordinate [0, 0] represents the top left corner of the mercator world and [1, 1] represents the bottom right corner. When the renderingMode is "3d" , the z coordinate is conformal. A box with identical x, y, and z lengths in mercator units would be rendered as a cube. MercatorCoordinate .fromLatLng can be used to project a LngLat to a mercator coordinate. |

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2372

___

### render

▸ **render**(`gl`, `matrix`): `void`

Called during a render frame allowing the layer to draw into the GL context.

The layer can assume blending and depth state is set to allow the layer to properly blend
and clip other layers. The layer cannot make any other assumptions about the current GL state.

If the layer needs to render to a texture, it should implement the prerender method to do this
and only use the render method for drawing directly into the main framebuffer.

The blend function is set to gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA). This expects
colors to be provided in premultiplied alpha form where the r, g and b values are already
multiplied by the a value. If you are unable to provide colors in premultiplied form you may
want to change the blend function to
gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | `WebGLRenderingContext` | The map's gl context. |
| `matrix` | `number`[] | The map's camera matrix. It projects spherical mercator coordinates to gl coordinates. The mercator coordinate [0, 0] represents the top left corner of the mercator world and [1, 1] represents the bottom right corner. When the renderingMode is "3d" , the z coordinate is conformal. A box with identical x, y, and z lengths in mercator units would be rendered as a cube. MercatorCoordinate .fromLatLng can be used to project a LngLat to a mercator coordinate. |

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2398
