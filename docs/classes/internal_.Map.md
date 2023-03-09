[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Map

# Class: Map

[<internal>](../modules/internal_.md).Map

Map

## Hierarchy

- [`Evented`](internal_.Evented.md)

  ↳ **`Map`**

## Table of contents

### Constructors

- [constructor](internal_.Map.md#constructor)

### Properties

- [boxZoom](internal_.Map.md#boxzoom)
- [doubleClickZoom](internal_.Map.md#doubleclickzoom)
- [dragPan](internal_.Map.md#dragpan)
- [dragRotate](internal_.Map.md#dragrotate)
- [keyboard](internal_.Map.md#keyboard)
- [repaint](internal_.Map.md#repaint)
- [scrollZoom](internal_.Map.md#scrollzoom)
- [showCollisionBoxes](internal_.Map.md#showcollisionboxes)
- [showPadding](internal_.Map.md#showpadding)
- [showTerrainWireframe](internal_.Map.md#showterrainwireframe)
- [showTileBoundaries](internal_.Map.md#showtileboundaries)
- [touchPitch](internal_.Map.md#touchpitch)
- [touchZoomRotate](internal_.Map.md#touchzoomrotate)

### Methods

- [addControl](internal_.Map.md#addcontrol)
- [addImage](internal_.Map.md#addimage)
- [addLayer](internal_.Map.md#addlayer)
- [addSource](internal_.Map.md#addsource)
- [areTilesLoaded](internal_.Map.md#aretilesloaded)
- [cameraForBounds](internal_.Map.md#cameraforbounds)
- [easeTo](internal_.Map.md#easeto)
- [fire](internal_.Map.md#fire)
- [fitBounds](internal_.Map.md#fitbounds)
- [fitScreenCoordinates](internal_.Map.md#fitscreencoordinates)
- [flyTo](internal_.Map.md#flyto)
- [getBearing](internal_.Map.md#getbearing)
- [getBounds](internal_.Map.md#getbounds)
- [getCanvas](internal_.Map.md#getcanvas)
- [getCanvasContainer](internal_.Map.md#getcanvascontainer)
- [getCenter](internal_.Map.md#getcenter)
- [getContainer](internal_.Map.md#getcontainer)
- [getFeatureState](internal_.Map.md#getfeaturestate)
- [getFilter](internal_.Map.md#getfilter)
- [getFog](internal_.Map.md#getfog)
- [getFreeCameraOptions](internal_.Map.md#getfreecameraoptions)
- [getLayer](internal_.Map.md#getlayer)
- [getLayoutProperty](internal_.Map.md#getlayoutproperty)
- [getLight](internal_.Map.md#getlight)
- [getMaxBounds](internal_.Map.md#getmaxbounds)
- [getMaxPitch](internal_.Map.md#getmaxpitch)
- [getMaxZoom](internal_.Map.md#getmaxzoom)
- [getMinPitch](internal_.Map.md#getminpitch)
- [getMinZoom](internal_.Map.md#getminzoom)
- [getPadding](internal_.Map.md#getpadding)
- [getPaintProperty](internal_.Map.md#getpaintproperty)
- [getPitch](internal_.Map.md#getpitch)
- [getProjection](internal_.Map.md#getprojection)
- [getRenderWorldCopies](internal_.Map.md#getrenderworldcopies)
- [getSource](internal_.Map.md#getsource)
- [getStyle](internal_.Map.md#getstyle)
- [getTerrain](internal_.Map.md#getterrain)
- [getZoom](internal_.Map.md#getzoom)
- [hasControl](internal_.Map.md#hascontrol)
- [hasImage](internal_.Map.md#hasimage)
- [isEasing](internal_.Map.md#iseasing)
- [isMoving](internal_.Map.md#ismoving)
- [isRotating](internal_.Map.md#isrotating)
- [isSourceLoaded](internal_.Map.md#issourceloaded)
- [isStyleLoaded](internal_.Map.md#isstyleloaded)
- [isZooming](internal_.Map.md#iszooming)
- [jumpTo](internal_.Map.md#jumpto)
- [listImages](internal_.Map.md#listimages)
- [loadImage](internal_.Map.md#loadimage)
- [loaded](internal_.Map.md#loaded)
- [moveLayer](internal_.Map.md#movelayer)
- [off](internal_.Map.md#off)
- [on](internal_.Map.md#on)
- [once](internal_.Map.md#once)
- [panBy](internal_.Map.md#panby)
- [panTo](internal_.Map.md#panto)
- [project](internal_.Map.md#project)
- [queryRenderedFeatures](internal_.Map.md#queryrenderedfeatures)
- [querySourceFeatures](internal_.Map.md#querysourcefeatures)
- [queryTerrainElevation](internal_.Map.md#queryterrainelevation)
- [remove](internal_.Map.md#remove)
- [removeControl](internal_.Map.md#removecontrol)
- [removeFeatureState](internal_.Map.md#removefeaturestate)
- [removeImage](internal_.Map.md#removeimage)
- [removeLayer](internal_.Map.md#removelayer)
- [removeSource](internal_.Map.md#removesource)
- [resetNorth](internal_.Map.md#resetnorth)
- [resetNorthPitch](internal_.Map.md#resetnorthpitch)
- [resize](internal_.Map.md#resize)
- [rotateTo](internal_.Map.md#rotateto)
- [setBearing](internal_.Map.md#setbearing)
- [setCenter](internal_.Map.md#setcenter)
- [setFeatureState](internal_.Map.md#setfeaturestate)
- [setFilter](internal_.Map.md#setfilter)
- [setFog](internal_.Map.md#setfog)
- [setFreeCameraOptions](internal_.Map.md#setfreecameraoptions)
- [setLayerZoomRange](internal_.Map.md#setlayerzoomrange)
- [setLayoutProperty](internal_.Map.md#setlayoutproperty)
- [setLight](internal_.Map.md#setlight)
- [setMaxBounds](internal_.Map.md#setmaxbounds)
- [setMaxPitch](internal_.Map.md#setmaxpitch)
- [setMaxZoom](internal_.Map.md#setmaxzoom)
- [setMinPitch](internal_.Map.md#setminpitch)
- [setMinZoom](internal_.Map.md#setminzoom)
- [setPadding](internal_.Map.md#setpadding)
- [setPaintProperty](internal_.Map.md#setpaintproperty)
- [setPitch](internal_.Map.md#setpitch)
- [setProjection](internal_.Map.md#setprojection)
- [setRenderWorldCopies](internal_.Map.md#setrenderworldcopies)
- [setStyle](internal_.Map.md#setstyle)
- [setTerrain](internal_.Map.md#setterrain)
- [setZoom](internal_.Map.md#setzoom)
- [snapToNorth](internal_.Map.md#snaptonorth)
- [stop](internal_.Map.md#stop)
- [triggerRepaint](internal_.Map.md#triggerrepaint)
- [unproject](internal_.Map.md#unproject)
- [updateImage](internal_.Map.md#updateimage)
- [zoomIn](internal_.Map.md#zoomin)
- [zoomOut](internal_.Map.md#zoomout)
- [zoomTo](internal_.Map.md#zoomto)

## Constructors

### constructor

• **new Map**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`MapboxOptions`](../interfaces/internal_.MapboxOptions.md) |

#### Overrides

[Evented](internal_.Evented.md).[constructor](internal_.Evented.md#constructor)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:203

## Properties

### boxZoom

• **boxZoom**: [`BoxZoomHandler`](internal_.BoxZoomHandler.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:587

___

### doubleClickZoom

• **doubleClickZoom**: [`DoubleClickZoomHandler`](internal_.DoubleClickZoomHandler.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:595

___

### dragPan

• **dragPan**: [`DragPanHandler`](internal_.DragPanHandler.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:591

___

### dragRotate

• **dragRotate**: [`DragRotateHandler`](internal_.DragRotateHandler.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:589

___

### keyboard

• **keyboard**: [`KeyboardHandler`](internal_.KeyboardHandler.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:593

___

### repaint

• **repaint**: `boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:444

___

### scrollZoom

• **scrollZoom**: [`ScrollZoomHandler`](internal_.ScrollZoomHandler.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:585

___

### showCollisionBoxes

• **showCollisionBoxes**: `boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:431

___

### showPadding

• **showPadding**: `boolean`

Gets and sets a Boolean indicating whether the map will visualize
the padding offsets.

**`Name`**

showPadding

**`Instance`**

**`Memberof`**

Map

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:442

___

### showTerrainWireframe

• **showTerrainWireframe**: `boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:398

___

### showTileBoundaries

• **showTileBoundaries**: `boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:429

___

### touchPitch

• **touchPitch**: [`TouchPitchHandler`](internal_.TouchPitchHandler.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:599

___

### touchZoomRotate

• **touchZoomRotate**: [`TouchZoomRotateHandler`](internal_.TouchZoomRotateHandler.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:597

## Methods

### addControl

▸ **addControl**(`control`, `position?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `control` | [`Control`](internal_.Control.md) \| [`IControl`](../interfaces/internal_.IControl.md) |
| `position?` | ``"top-right"`` \| ``"top-left"`` \| ``"bottom-right"`` \| ``"bottom-left"`` |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:205

___

### addImage

▸ **addImage**(`name`, `image`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `image` | `HTMLImageElement` \| [`ImageData`](../modules/internal_.md#imagedata) \| [`ImageBitmap`](../modules/internal_.md#imagebitmap) \| [`ArrayBufferView`](../interfaces/internal_.ArrayBufferView.md) \| { `data`: `Uint8Array` \| `Uint8ClampedArray` ; `height`: `number` ; `width`: `number`  } |
| `options?` | `Object` |
| `options.content?` | [`number`, `number`, `number`, `number`] |
| `options.pixelRatio?` | `number` |
| `options.sdf?` | `boolean` |
| `options.stretchX?` | [`number`, `number`][] |
| `options.stretchY?` | [`number`, `number`][] |

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:323

___

### addLayer

▸ **addLayer**(`layer`, `before?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`AnyLayer`](../modules/internal_.md#anylayer) |
| `before?` | `string` |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:352

___

### addSource

▸ **addSource**(`id`, `source`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `source` | [`AnySourceData`](../modules/internal_.md#anysourcedata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:313

___

### areTilesLoaded

▸ **areTilesLoaded**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:317

___

### cameraForBounds

▸ **cameraForBounds**(`bounds`, `options?`): [`CameraForBoundsResult`](../modules/internal_.md#cameraforboundsresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`LngLatBoundsLike`](../modules/internal_.md#lnglatboundslike) |
| `options?` | [`CameraForBoundsOptions`](../interfaces/internal_.CameraForBoundsOptions.md) |

#### Returns

[`CameraForBoundsResult`](../modules/internal_.md#cameraforboundsresult)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:505

___

### easeTo

▸ **easeTo**(`options`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EaseToOptions`](../interfaces/internal_.EaseToOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:552

___

### fire

▸ **fire**(`type`, `properties?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `properties?` | `Object` |

#### Returns

[`Map`](internal_.Map.md)

#### Inherited from

[Evented](internal_.Evented.md).[fire](internal_.Evented.md#fire)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1929

___

### fitBounds

▸ **fitBounds**(`bounds`, `options?`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`LngLatBoundsLike`](../modules/internal_.md#lnglatboundslike) |
| `options?` | [`FitBoundsOptions`](../interfaces/internal_.FitBoundsOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:507

___

### fitScreenCoordinates

▸ **fitScreenCoordinates**(`p0`, `p1`, `bearing`, `options?`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p0` | [`PointLike`](../modules/internal_.md#pointlike) |
| `p1` | [`PointLike`](../modules/internal_.md#pointlike) |
| `bearing` | `number` |
| `options?` | [`AnimationOptions`](../interfaces/internal_.AnimationOptions.md) & [`CameraOptions`](../interfaces/internal_.CameraOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:509

___

### flyTo

▸ **flyTo**(`options`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FlyToOptions`](../interfaces/internal_.FlyToOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:554

___

### getBearing

▸ **getBearing**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:464

___

### getBounds

▸ **getBounds**(): [`LngLatBounds`](internal_.LngLatBounds.md)

#### Returns

[`LngLatBounds`](internal_.LngLatBounds.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:223

___

### getCanvas

▸ **getCanvas**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:421

___

### getCanvasContainer

▸ **getCanvasContainer**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:419

___

### getCenter

▸ **getCenter**(): [`LngLat`](internal_.LngLat.md)

#### Returns

[`LngLat`](internal_.LngLat.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:446

___

### getContainer

▸ **getContainer**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:417

___

### getFeatureState

▸ **getFeatureState**(`feature`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | [`MapboxGeoJSONFeature`](../modules/internal_.md#mapboxgeojsonfeature) \| [`FeatureIdentifier`](../interfaces/internal_.FeatureIdentifier.md) |

#### Returns

`Object`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:413

___

### getFilter

▸ **getFilter**(`layer`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `string` |

#### Returns

`any`[]

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:364

___

### getFog

▸ **getFog**(): [`Fog`](../interfaces/internal_.Fog.md)

#### Returns

[`Fog`](../interfaces/internal_.Fog.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:601

___

### getFreeCameraOptions

▸ **getFreeCameraOptions**(): [`FreeCameraOptions`](internal_.FreeCameraOptions.md)

Returns position and orientation of the camera entity.

**`Memberof`**

Map#

#### Returns

[`FreeCameraOptions`](internal_.FreeCameraOptions.md)

The camera state

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:525

___

### getLayer

▸ **getLayer**(`id`): [`AnyLayer`](../modules/internal_.md#anylayer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`AnyLayer`](../modules/internal_.md#anylayer)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:358

___

### getLayoutProperty

▸ **getLayoutProperty**(`layer`, `name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `string` |
| `name` | `string` |

#### Returns

`any`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:372

___

### getLight

▸ **getLight**(): [`Light`](../interfaces/internal_.Light.md)

#### Returns

[`Light`](../interfaces/internal_.Light.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:376

___

### getMaxBounds

▸ **getMaxBounds**(): [`LngLatBounds`](internal_.LngLatBounds.md)

#### Returns

[`LngLatBounds`](internal_.LngLatBounds.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:225

___

### getMaxPitch

▸ **getMaxPitch**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:243

___

### getMaxZoom

▸ **getMaxZoom**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:235

___

### getMinPitch

▸ **getMinPitch**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:239

___

### getMinZoom

▸ **getMinZoom**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:231

___

### getPadding

▸ **getPadding**(): [`PaddingOptions`](../interfaces/internal_.PaddingOptions.md)

Returns the current padding applied around the map viewport.

**`Memberof`**

Map#

#### Returns

[`PaddingOptions`](../interfaces/internal_.PaddingOptions.md)

The current padding around the map viewport.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:474

___

### getPaintProperty

▸ **getPaintProperty**(`layer`, `name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `string` |
| `name` | `string` |

#### Returns

`any`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:368

___

### getPitch

▸ **getPitch**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:501

___

### getProjection

▸ **getProjection**(): [`Projection`](../interfaces/internal_.Projection.md)

#### Returns

[`Projection`](../interfaces/internal_.Projection.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:604

___

### getRenderWorldCopies

▸ **getRenderWorldCopies**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:245

___

### getSource

▸ **getSource**(`id`): [`AnySourceImpl`](../modules/internal_.md#anysourceimpl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`AnySourceImpl`](../modules/internal_.md#anysourceimpl)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:321

___

### getStyle

▸ **getStyle**(): [`Style`](../interfaces/internal_.Style.md)

#### Returns

[`Style`](../interfaces/internal_.Style.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:309

___

### getTerrain

▸ **getTerrain**(): [`TerrainSpecification`](../interfaces/internal_.TerrainSpecification.md)

#### Returns

[`TerrainSpecification`](../interfaces/internal_.TerrainSpecification.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:396

___

### getZoom

▸ **getZoom**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:454

___

### hasControl

▸ **hasControl**(`control`): `boolean`

Checks if a control exists on the map.

**`Example`**

```ts

```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `control` | [`IControl`](../interfaces/internal_.IControl.md) | The [IControl](../interfaces/internal_.IControl.md) to check. |

#### Returns

`boolean`

True if map contains control.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:219

___

### hasImage

▸ **hasImage**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:344

___

### isEasing

▸ **isEasing**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:556

___

### isMoving

▸ **isMoving**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:253

___

### isRotating

▸ **isRotating**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:257

___

### isSourceLoaded

▸ **isSourceLoaded**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:315

___

### isStyleLoaded

▸ **isStyleLoaded**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:311

___

### isZooming

▸ **isZooming**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:255

___

### jumpTo

▸ **jumpTo**(`options`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CameraOptions`](../interfaces/internal_.CameraOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:517

___

### listImages

▸ **listImages**(): `string`[]

#### Returns

`string`[]

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:350

___

### loadImage

▸ **loadImage**(`url`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `callback` | (`error?`: [`Error`](../modules/internal_.md#error), `result?`: `HTMLImageElement` \| [`ImageBitmap`](../modules/internal_.md#imagebitmap)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:348

___

### loaded

▸ **loaded**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:423

___

### moveLayer

▸ **moveLayer**(`id`, `beforeId?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `beforeId?` | `string` |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:354

___

### off

▸ **off**<`T`\>(`type`, `layer`, `listener`): [`Map`](internal_.Map.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapLayerEventType`](../modules/internal_.md#maplayereventtype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `layer` | `string` \| readonly `string`[] |
| `listener` | (`ev`: [`MapLayerEventType`](../modules/internal_.md#maplayereventtype)[`T`] & [`EventData`](../modules/internal_.md#eventdata)) => `void` |

#### Returns

[`Map`](internal_.Map.md)

#### Overrides

[Evented](internal_.Evented.md).[off](internal_.Evented.md#off)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:577

▸ **off**<`T`\>(`type`, `listener`): [`Map`](internal_.Map.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapEventType`](../modules/internal_.md#mapeventtype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `listener` | (`ev`: [`MapEventType`](../modules/internal_.md#mapeventtype)[`T`] & [`EventData`](../modules/internal_.md#eventdata)) => `void` |

#### Returns

[`Map`](internal_.Map.md)

#### Overrides

Evented.off

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:582

▸ **off**(`type`, `listener`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (`ev`: `any`) => `void` |

#### Returns

[`Map`](internal_.Map.md)

#### Overrides

Evented.off

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:583

___

### on

▸ **on**<`T`\>(`type`, `layer`, `listener`): [`Map`](internal_.Map.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapLayerEventType`](../modules/internal_.md#maplayereventtype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `layer` | `string` \| readonly `string`[] |
| `listener` | (`ev`: [`MapLayerEventType`](../modules/internal_.md#maplayereventtype)[`T`] & [`EventData`](../modules/internal_.md#eventdata)) => `void` |

#### Returns

[`Map`](internal_.Map.md)

#### Overrides

[Evented](internal_.Evented.md).[on](internal_.Evented.md#on)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:560

▸ **on**<`T`\>(`type`, `listener`): [`Map`](internal_.Map.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapEventType`](../modules/internal_.md#mapeventtype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `listener` | (`ev`: [`MapEventType`](../modules/internal_.md#mapeventtype)[`T`] & [`EventData`](../modules/internal_.md#eventdata)) => `void` |

#### Returns

[`Map`](internal_.Map.md)

#### Overrides

Evented.on

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:565

▸ **on**(`type`, `listener`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (`ev`: `any`) => `void` |

#### Returns

[`Map`](internal_.Map.md)

#### Overrides

Evented.on

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:566

___

### once

▸ **once**<`T`\>(`type`, `layer`, `listener`): [`Map`](internal_.Map.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapLayerEventType`](../modules/internal_.md#maplayereventtype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `layer` | `string` \| readonly `string`[] |
| `listener` | (`ev`: [`MapLayerEventType`](../modules/internal_.md#maplayereventtype)[`T`] & [`EventData`](../modules/internal_.md#eventdata)) => `void` |

#### Returns

[`Map`](internal_.Map.md)

#### Overrides

[Evented](internal_.Evented.md).[once](internal_.Evented.md#once)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:568

▸ **once**<`T`\>(`type`, `listener`): [`Map`](internal_.Map.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapEventType`](../modules/internal_.md#mapeventtype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `listener` | (`ev`: [`MapEventType`](../modules/internal_.md#mapeventtype)[`T`] & [`EventData`](../modules/internal_.md#eventdata)) => `void` |

#### Returns

[`Map`](internal_.Map.md)

#### Overrides

Evented.once

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:573

▸ **once**(`type`, `listener`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | (`ev`: `any`) => `void` |

#### Returns

[`Map`](internal_.Map.md)

#### Overrides

Evented.once

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:574

▸ **once**<`T`\>(`type`): `Promise`<[`MapEventType`](../modules/internal_.md#mapeventtype)[`T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`MapEventType`](../modules/internal_.md#mapeventtype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |

#### Returns

`Promise`<[`MapEventType`](../modules/internal_.md#mapeventtype)[`T`]\>

#### Overrides

Evented.once

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:575

___

### panBy

▸ **panBy**(`offset`, `options?`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`PointLike`](../modules/internal_.md#pointlike) |
| `options?` | [`AnimationOptions`](../interfaces/internal_.AnimationOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:450

___

### panTo

▸ **panTo**(`lnglat`, `options?`, `eventdata?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lnglat` | [`LngLatLike`](../modules/internal_.md#lnglatlike) |
| `options?` | [`AnimationOptions`](../interfaces/internal_.AnimationOptions.md) |
| `eventdata?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:452

___

### project

▸ **project**(`lnglat`): [`Point`](internal_.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lnglat` | [`LngLatLike`](../modules/internal_.md#lnglatlike) |

#### Returns

[`Point`](internal_.Point.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:249

___

### queryRenderedFeatures

▸ **queryRenderedFeatures**(`pointOrBox?`, `options?`): [`MapboxGeoJSONFeature`](../modules/internal_.md#mapboxgeojsonfeature)[]

Returns an array of GeoJSON Feature objects representing visible features that satisfy the query parameters.

The properties value of each returned feature object contains the properties of its source feature. For GeoJSON sources, only string and numeric property values are supported (i.e. null, Array, and Object values are not supported).

Each feature includes top-level layer, source, and sourceLayer properties. The layer property is an object representing the style layer to which the feature belongs. Layout and paint properties in this object contain values which are fully evaluated for the given zoom level and feature.

Only features that are currently rendered are included. Some features will not be included, like:

- Features from layers whose visibility property is "none".
- Features from layers whose zoom range excludes the current zoom level.
- Symbol features that have been hidden due to text or icon collision.

Features from all other layers are included, including features that may have no visible contribution to the rendered result; for example, because the layer's opacity or color alpha component is set to 0.

The topmost rendered feature appears first in the returned array, and subsequent features are sorted by descending z-order. Features that are rendered multiple times (due to wrapping across the antimeridian at low zoom levels) are returned only once (though subject to the following caveat).

Because features come from tiled vector data or GeoJSON data that is converted to tiles internally, feature geometries may be split or duplicated across tile boundaries and, as a result, features may appear multiple times in query results. For example, suppose there is a highway running through the bounding rectangle of a query. The results of the query will be those parts of the highway that lie within the map tiles covering the bounding rectangle, even if the highway extends into other tiles, and the portion of the highway within each map tile will be returned as a separate feature. Similarly, a point feature near a tile boundary may appear in multiple tiles due to tile buffering.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointOrBox?` | [`PointLike`](../modules/internal_.md#pointlike) \| [[`PointLike`](../modules/internal_.md#pointlike), [`PointLike`](../modules/internal_.md#pointlike)] | The geometry of the query region: either a single point or southwest and northeast points describing a bounding box. Omitting this parameter (i.e. calling Map#queryRenderedFeatures with zero arguments, or with only a options argument) is equivalent to passing a bounding box encompassing the entire map viewport. |
| `options?` | { `filter?`: `any`[] ; `layers?`: `string`[]  } & [`FilterOptions`](../interfaces/internal_.FilterOptions.md) |  |

#### Returns

[`MapboxGeoJSONFeature`](../modules/internal_.md#mapboxgeojsonfeature)[]

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:281

___

### querySourceFeatures

▸ **querySourceFeatures**(`sourceID`, `parameters?`): [`MapboxGeoJSONFeature`](../modules/internal_.md#mapboxgeojsonfeature)[]

Returns an array of GeoJSON Feature objects representing features within the specified vector tile or GeoJSON source that satisfy the query parameters.

In contrast to Map#queryRenderedFeatures, this function returns all features matching the query parameters, whether or not they are rendered by the current style (i.e. visible). The domain of the query includes all currently-loaded vector tiles and GeoJSON source tiles: this function does not check tiles outside the currently visible viewport.

Because features come from tiled vector data or GeoJSON data that is converted to tiles internally, feature geometries may be split or duplicated across tile boundaries and, as a result, features may appear multiple times in query results. For example, suppose there is a highway running through the bounding rectangle of a query. The results of the query will be those parts of the highway that lie within the map tiles covering the bounding rectangle, even if the highway extends into other tiles, and the portion of the highway within each map tile will be returned as a separate feature. Similarly, a point feature near a tile boundary may appear in multiple tiles due to tile buffering.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceID` | `string` | The ID of the vector tile or GeoJSON source to query. |
| `parameters?` | { `filter?`: `any`[] ; `sourceLayer?`: `string`  } & [`FilterOptions`](../interfaces/internal_.FilterOptions.md) |  |

#### Returns

[`MapboxGeoJSONFeature`](../modules/internal_.md#mapboxgeojsonfeature)[]

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:296

___

### queryTerrainElevation

▸ **queryTerrainElevation**(`lngLat`, `options?`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lngLat` | [`LngLatLike`](../modules/internal_.md#lnglatlike) | The coordinate to query |
| `options?` | [`ElevationQueryOptions`](../modules/internal_.md#elevationqueryoptions) | Optional {ElevationQueryOptions} |

#### Returns

`number`

The elevation in meters at mean sea level or null

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:406

___

### remove

▸ **remove**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:425

___

### removeControl

▸ **removeControl**(`control`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `control` | [`Control`](internal_.Control.md) \| [`IControl`](../interfaces/internal_.IControl.md) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:210

___

### removeFeatureState

▸ **removeFeatureState**(`target`, `key?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`MapboxGeoJSONFeature`](../modules/internal_.md#mapboxgeojsonfeature) \| [`FeatureIdentifier`](../interfaces/internal_.FeatureIdentifier.md) |
| `key?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:415

___

### removeImage

▸ **removeImage**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:346

___

### removeLayer

▸ **removeLayer**(`id`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:356

___

### removeSource

▸ **removeSource**(`id`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:319

___

### resetNorth

▸ **resetNorth**(`options?`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AnimationOptions`](../interfaces/internal_.AnimationOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:495

___

### resetNorthPitch

▸ **resetNorthPitch**(`options?`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AnimationOptions`](../interfaces/internal_.AnimationOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:497

___

### resize

▸ **resize**(`eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:221

___

### rotateTo

▸ **rotateTo**(`bearing`, `options?`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bearing` | `number` |
| `options?` | [`AnimationOptions`](../interfaces/internal_.AnimationOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:493

___

### setBearing

▸ **setBearing**(`bearing`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bearing` | `number` |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:466

___

### setCenter

▸ **setCenter**(`center`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `center` | [`LngLatLike`](../modules/internal_.md#lnglatlike) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:448

___

### setFeatureState

▸ **setFeatureState**(`feature`, `state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | [`MapboxGeoJSONFeature`](../modules/internal_.md#mapboxgeojsonfeature) \| [`FeatureIdentifier`](../interfaces/internal_.FeatureIdentifier.md) |
| `state` | `Object` |

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:408

___

### setFilter

▸ **setFilter**(`layer`, `filter?`, `options?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `string` |
| `filter?` | `boolean` \| `any`[] |
| `options?` | [`FilterOptions`](../interfaces/internal_.FilterOptions.md) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:360

___

### setFog

▸ **setFog**(`fog`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fog` | [`Fog`](../interfaces/internal_.Fog.md) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:602

___

### setFreeCameraOptions

▸ **setFreeCameraOptions**(`options`, `eventData?`): [`Map`](internal_.Map.md)

FreeCameraOptions provides more direct access to the underlying camera entity.
For backwards compatibility the state set using this API must be representable with
`CameraOptions` as well. Parameters are clamped into a valid range or discarded as invalid
if the conversion to the pitch and bearing presentation is ambiguous. For example orientation
can be invalid if it leads to the camera being upside down, the quaternion has zero length,
or the pitch is over the maximum pitch limit.

**`Memberof`**

Map#

**`Fires`**

movestart

**`Fires`**

zoomstart

**`Fires`**

pitchstart

**`Fires`**

rotate

**`Fires`**

move

**`Fires`**

zoom

**`Fires`**

pitch

**`Fires`**

moveend

**`Fires`**

zoomend

**`Fires`**

pitchend

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`FreeCameraOptions`](internal_.FreeCameraOptions.md) | FreeCameraOptions object |
| `eventData?` | [`Object`](../modules/internal_.md#object) | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

[`Map`](internal_.Map.md)

`this`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:550

___

### setLayerZoomRange

▸ **setLayerZoomRange**(`layerId`, `minzoom`, `maxzoom`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerId` | `string` |
| `minzoom` | `number` |
| `maxzoom` | `number` |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:362

___

### setLayoutProperty

▸ **setLayoutProperty**(`layer`, `name`, `value`, `options?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `string` |
| `name` | `string` |
| `value` | `any` |
| `options?` | [`FilterOptions`](../interfaces/internal_.FilterOptions.md) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:370

___

### setLight

▸ **setLight**(`light`, `options?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `light` | [`Light`](../interfaces/internal_.Light.md) |
| `options?` | [`FilterOptions`](../interfaces/internal_.FilterOptions.md) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:374

___

### setMaxBounds

▸ **setMaxBounds**(`lnglatbounds?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lnglatbounds?` | [`LngLatBoundsLike`](../modules/internal_.md#lnglatboundslike) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:227

___

### setMaxPitch

▸ **setMaxPitch**(`maxPitch?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxPitch?` | `number` |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:241

___

### setMaxZoom

▸ **setMaxZoom**(`maxZoom?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxZoom?` | `number` |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:233

___

### setMinPitch

▸ **setMinPitch**(`minPitch?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `minPitch?` | `number` |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:237

___

### setMinZoom

▸ **setMinZoom**(`minZoom?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `minZoom?` | `number` |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:229

___

### setPadding

▸ **setPadding**(`padding`, `eventData?`): [`Map`](internal_.Map.md)

Sets the padding in pixels around the viewport.

Equivalent to `jumpTo({padding: padding})`.

**`Memberof`**

Map#

**`Fires`**

movestart

**`Fires`**

moveend

**`Example`**

```ts
// Sets a left padding of 300px, and a top padding of 50px
map.setPadding({ left: 300, top: 50 });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `padding` | [`PaddingOptions`](../interfaces/internal_.PaddingOptions.md) | The desired padding. Format: { left: number, right: number, top: number, bottom: number } |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

[`Map`](internal_.Map.md)

`this`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:491

___

### setPaintProperty

▸ **setPaintProperty**(`layer`, `name`, `value`, `options?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `string` |
| `name` | `string` |
| `value` | `any` |
| `options?` | [`FilterOptions`](../interfaces/internal_.FilterOptions.md) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:366

___

### setPitch

▸ **setPitch**(`pitch`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pitch` | `number` |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:503

___

### setProjection

▸ **setProjection**(`projection`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `projection` | `string` \| [`Projection`](../interfaces/internal_.Projection.md) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:605

___

### setRenderWorldCopies

▸ **setRenderWorldCopies**(`renderWorldCopies?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderWorldCopies?` | `boolean` |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:247

___

### setStyle

▸ **setStyle**(`style`, `options?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `string` \| [`Style`](../interfaces/internal_.Style.md) |
| `options?` | `Object` |
| `options.diff?` | `boolean` |
| `options.localIdeographFontFamily?` | `string` |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:304

___

### setTerrain

▸ **setTerrain**(`terrain?`): [`Map`](internal_.Map.md)

Sets the terrain property of the style.

**`Example`**

```ts
map.addSource('mapbox-dem', {
    'type': 'raster-dem',
    'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
    'tileSize': 512,
    'maxzoom': 14
});
// add the DEM source as a terrain layer with exaggerated height
map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `terrain?` | [`TerrainSpecification`](../interfaces/internal_.TerrainSpecification.md) | Terrain properties to set. Must conform to the [Mapbox Style Specification](https://www.mapbox.com/mapbox-gl-style-spec/#terrain). If `null` or `undefined` is provided, function removes terrain. |

#### Returns

[`Map`](internal_.Map.md)

`this`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:394

___

### setZoom

▸ **setZoom**(`zoom`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoom` | `number` |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:456

___

### snapToNorth

▸ **snapToNorth**(`options?`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AnimationOptions`](../interfaces/internal_.AnimationOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:499

___

### stop

▸ **stop**(): [`Map`](internal_.Map.md)

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:558

___

### triggerRepaint

▸ **triggerRepaint**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:427

___

### unproject

▸ **unproject**(`point`): [`LngLat`](internal_.LngLat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`PointLike`](../modules/internal_.md#pointlike) |

#### Returns

[`LngLat`](internal_.LngLat.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:251

___

### updateImage

▸ **updateImage**(`name`, `image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `image` | `HTMLImageElement` \| [`ImageData`](../modules/internal_.md#imagedata) \| [`ImageBitmap`](../modules/internal_.md#imagebitmap) \| [`ArrayBufferView`](../interfaces/internal_.ArrayBufferView.md) \| { `data`: `Uint8Array` \| `Uint8ClampedArray` ; `height`: `number` ; `width`: `number`  } |

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:334

___

### zoomIn

▸ **zoomIn**(`options?`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AnimationOptions`](../interfaces/internal_.AnimationOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:460

___

### zoomOut

▸ **zoomOut**(`options?`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`AnimationOptions`](../interfaces/internal_.AnimationOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:462

___

### zoomTo

▸ **zoomTo**(`zoom`, `options?`, `eventData?`): [`Map`](internal_.Map.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoom` | `number` |
| `options?` | [`AnimationOptions`](../interfaces/internal_.AnimationOptions.md) |
| `eventData?` | [`EventData`](../modules/internal_.md#eventdata) |

#### Returns

[`Map`](internal_.Map.md)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:458
