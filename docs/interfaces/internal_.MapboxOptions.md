[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MapboxOptions

# Interface: MapboxOptions

[<internal>](../modules/internal_.md).MapboxOptions

## Table of contents

### Properties

- [accessToken](internal_.MapboxOptions.md#accesstoken)
- [antialias](internal_.MapboxOptions.md#antialias)
- [attributionControl](internal_.MapboxOptions.md#attributioncontrol)
- [bearing](internal_.MapboxOptions.md#bearing)
- [bearingSnap](internal_.MapboxOptions.md#bearingsnap)
- [bounds](internal_.MapboxOptions.md#bounds)
- [boxZoom](internal_.MapboxOptions.md#boxzoom)
- [center](internal_.MapboxOptions.md#center)
- [clickTolerance](internal_.MapboxOptions.md#clicktolerance)
- [collectResourceTiming](internal_.MapboxOptions.md#collectresourcetiming)
- [container](internal_.MapboxOptions.md#container)
- [cooperativeGestures](internal_.MapboxOptions.md#cooperativegestures)
- [crossSourceCollisions](internal_.MapboxOptions.md#crosssourcecollisions)
- [customAttribution](internal_.MapboxOptions.md#customattribution)
- [doubleClickZoom](internal_.MapboxOptions.md#doubleclickzoom)
- [dragPan](internal_.MapboxOptions.md#dragpan)
- [dragRotate](internal_.MapboxOptions.md#dragrotate)
- [fadeDuration](internal_.MapboxOptions.md#fadeduration)
- [failIfMajorPerformanceCaveat](internal_.MapboxOptions.md#failifmajorperformancecaveat)
- [fitBoundsOptions](internal_.MapboxOptions.md#fitboundsoptions)
- [hash](internal_.MapboxOptions.md#hash)
- [interactive](internal_.MapboxOptions.md#interactive)
- [keyboard](internal_.MapboxOptions.md#keyboard)
- [localFontFamily](internal_.MapboxOptions.md#localfontfamily)
- [localIdeographFontFamily](internal_.MapboxOptions.md#localideographfontfamily)
- [locale](internal_.MapboxOptions.md#locale)
- [logoPosition](internal_.MapboxOptions.md#logoposition)
- [maxBounds](internal_.MapboxOptions.md#maxbounds)
- [maxPitch](internal_.MapboxOptions.md#maxpitch)
- [maxTileCacheSize](internal_.MapboxOptions.md#maxtilecachesize)
- [maxZoom](internal_.MapboxOptions.md#maxzoom)
- [minPitch](internal_.MapboxOptions.md#minpitch)
- [minZoom](internal_.MapboxOptions.md#minzoom)
- [optimizeForTerrain](internal_.MapboxOptions.md#optimizeforterrain)
- [pitch](internal_.MapboxOptions.md#pitch)
- [pitchWithRotate](internal_.MapboxOptions.md#pitchwithrotate)
- [preserveDrawingBuffer](internal_.MapboxOptions.md#preservedrawingbuffer)
- [projection](internal_.MapboxOptions.md#projection)
- [refreshExpiredTiles](internal_.MapboxOptions.md#refreshexpiredtiles)
- [renderWorldCopies](internal_.MapboxOptions.md#renderworldcopies)
- [scrollZoom](internal_.MapboxOptions.md#scrollzoom)
- [style](internal_.MapboxOptions.md#style)
- [testMode](internal_.MapboxOptions.md#testmode)
- [touchPitch](internal_.MapboxOptions.md#touchpitch)
- [touchZoomRotate](internal_.MapboxOptions.md#touchzoomrotate)
- [trackResize](internal_.MapboxOptions.md#trackresize)
- [transformRequest](internal_.MapboxOptions.md#transformrequest)
- [worldview](internal_.MapboxOptions.md#worldview)
- [zoom](internal_.MapboxOptions.md#zoom)

## Properties

### accessToken

• `Optional` **accessToken**: `string`

If specified, map will use this token instead of the one defined in mapboxgl.accessToken.

**`Default`**

null

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:856

___

### antialias

• `Optional` **antialias**: `boolean`

If true, the gl context will be created with MSA antialiasing, which can be useful for antialiasing custom layers.
This is false by default as a performance optimization.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:613

___

### attributionControl

• `Optional` **attributionControl**: `boolean`

If true, an attribution control will be added to the map.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:616

___

### bearing

• `Optional` **bearing**: `number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:618

___

### bearingSnap

• `Optional` **bearingSnap**: `number`

Snap to north threshold in degrees.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:621

___

### bounds

• `Optional` **bounds**: [`LngLatBoundsLike`](../modules/internal_.md#lnglatboundslike)

The initial bounds of the map. If bounds is specified, it overrides center and zoom constructor options.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:624

___

### boxZoom

• `Optional` **boxZoom**: `boolean`

If true, enable the "box zoom" interaction (see BoxZoomHandler)

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:627

___

### center

• `Optional` **center**: [`LngLatLike`](../modules/internal_.md#lnglatlike)

initial map center

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:630

___

### clickTolerance

• `Optional` **clickTolerance**: `number`

The max number of pixels a user can shift the mouse pointer during a click for it to be
considered a valid click (as opposed to a mouse drag).

**`Default`**

3

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:638

___

### collectResourceTiming

• `Optional` **collectResourceTiming**: `boolean`

If `true`, Resource Timing API information will be collected for requests made by GeoJSON
and Vector Tile web workers (this information is normally inaccessible from the main
Javascript thread). Information will be returned in a `resourceTiming` property of
relevant `data` events.

**`Default`**

false

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:648

___

### container

• **container**: `string` \| `HTMLElement`

ID of the container element

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:659

___

### cooperativeGestures

• `Optional` **cooperativeGestures**: `boolean`

If `true` , scroll zoom will require pressing the ctrl or ⌘ key while scrolling to zoom map,
and touch pan will require using two fingers while panning to move the map.
Touch pitch will require three fingers to activate if enabled.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:666

___

### crossSourceCollisions

• `Optional` **crossSourceCollisions**: `boolean`

If `true`, symbols from multiple sources can collide with each other during collision
detection. If `false`, collision detection is run separately for the symbols in each source.

**`Default`**

true

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:656

___

### customAttribution

• `Optional` **customAttribution**: `string` \| `string`[]

String or strings to show in an AttributionControl.
Only applicable if options.attributionControl is `true`.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:670

___

### doubleClickZoom

• `Optional` **doubleClickZoom**: `boolean`

If true, enable the "double click to zoom" interaction (see DoubleClickZoomHandler).

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:682

___

### dragPan

• `Optional` **dragPan**: `boolean` \| [`DragPanOptions`](../modules/internal_.md#dragpanoptions)

If `true`, the "drag to pan" interaction is enabled.
An `Object` value is passed as options to [enable](../classes/internal_.DragPanHandler.md#enable).

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:676

___

### dragRotate

• `Optional` **dragRotate**: `boolean`

If true, enable the "drag to rotate" interaction (see DragRotateHandler).

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:679

___

### fadeDuration

• `Optional` **fadeDuration**: `number`

Controls the duration of the fade-in/fade-out animation for label collisions, in milliseconds.
This setting affects all symbol layers. This setting does not affect the duration of runtime
styling transitions or raster tile cross-fading.

**`Default`**

300

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:699

___

### failIfMajorPerformanceCaveat

• `Optional` **failIfMajorPerformanceCaveat**: `boolean`

If true, map creation will fail if the implementation determines that the performance of the created WebGL context would be dramatically lower than expected.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:702

___

### fitBoundsOptions

• `Optional` **fitBoundsOptions**: [`FitBoundsOptions`](internal_.FitBoundsOptions.md)

A fitBounds options object to use only when setting the bounds option.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:705

___

### hash

• `Optional` **hash**: `string` \| `boolean`

If `true`, the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL.
For example, `http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60`.
An additional string may optionally be provided to indicate a parameter-styled hash,
e.g. http://path/to/my/page.html#map=2.59/39.26/53.07/-24.1/60&foo=bar, where foo
is a custom parameter and bar is an arbitrary hash distinct from the map hash.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:690

___

### interactive

• `Optional` **interactive**: `boolean`

If false, no mouse, touch, or keyboard listeners are attached to the map, so it will not respond to input

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:708

___

### keyboard

• `Optional` **keyboard**: `boolean`

If true, enable keyboard shortcuts (see KeyboardHandler).

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:711

___

### localFontFamily

• `Optional` **localFontFamily**: `string`

Overrides the generation of all glyphs and font settings except font-weight keywords
Also overrides localIdeographFontFamily

**`Default`**

null

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:726

___

### localIdeographFontFamily

• `Optional` **localIdeographFontFamily**: `string`

If specified, defines a CSS font-family for locally overriding generation of glyphs in the
'CJK Unified Ideographs' and 'Hangul Syllables' ranges. In these ranges, font settings from
the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold).
The purpose of this option is to avoid bandwidth-intensive glyph server requests.

**`Default`**

null

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:736

___

### locale

• `Optional` **locale**: `Object`

A patch to apply to the default localization table for UI strings, e.g. control tooltips.
The `locale` object maps namespaced UI string IDs to translated strings in the target language;
see `src/ui/default_locale.js` for an example with all supported string IDs.
The object may specify all UI strings (thereby adding support for a new translation) or
only a subset of strings (thereby patching the default translation table).

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:719

___

### logoPosition

• `Optional` **logoPosition**: ``"top-left"`` \| ``"top-right"`` \| ``"bottom-left"`` \| ``"bottom-right"``

A string representing the position of the Mapbox wordmark on the map.

**`Default`**

"bottom-left"

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:743

___

### maxBounds

• `Optional` **maxBounds**: [`LngLatBoundsLike`](../modules/internal_.md#lnglatboundslike)

If set, the map is constrained to the given bounds.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:746

___

### maxPitch

• `Optional` **maxPitch**: `number`

Maximum pitch of the map.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:749

___

### maxTileCacheSize

• `Optional` **maxTileCacheSize**: `number`

The maximum number of tiles stored in the tile cache for a given source. If omitted, the
cache will be dynamically sized based on the current viewport.

**`Default`**

null

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:849

___

### maxZoom

• `Optional` **maxZoom**: `number`

Maximum zoom of the map.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:752

___

### minPitch

• `Optional` **minPitch**: `number`

Minimum pitch of the map.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:755

___

### minZoom

• `Optional` **minZoom**: `number`

Minimum zoom of the map.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:758

___

### optimizeForTerrain

• `Optional` **optimizeForTerrain**: `boolean`

If true, map will prioritize rendering for performance by reordering layers
If false, layers will always be drawn in the specified order

**`Default`**

true

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:766

___

### pitch

• `Optional` **pitch**: `number`

The initial pitch (tilt) of the map, measured in degrees away from the plane of the
screen (0-60).

**`Default`**

0

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:777

___

### pitchWithRotate

• `Optional` **pitchWithRotate**: `boolean`

If `false`, the map's pitch (tilt) control with "drag to rotate" interaction will be disabled.

**`Default`**

true

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:791

___

### preserveDrawingBuffer

• `Optional` **preserveDrawingBuffer**: `boolean`

If true, The maps canvas can be exported to a PNG using map.getCanvas().toDataURL();. This is false by default as a performance optimization.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:769

___

### projection

• `Optional` **projection**: [`Projection`](internal_.Projection.md)

A style's projection property sets which projection a map is rendered in.

**`Default`**

'mercator'

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:784

___

### refreshExpiredTiles

• `Optional` **refreshExpiredTiles**: `boolean`

If `false`, the map won't attempt to re-request tiles once they expire per their HTTP
`cacheControl`/`expires` headers.

**`Default`**

true

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:799

___

### renderWorldCopies

• `Optional` **renderWorldCopies**: `boolean`

If `true`, multiple copies of the world will be rendered, when zoomed out.

**`Default`**

true

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:806

___

### scrollZoom

• `Optional` **scrollZoom**: `boolean` \| [`InteractiveOptions`](../modules/internal_.md#interactiveoptions)

If `true`, the "scroll to zoom" interaction is enabled.
An `Object` value is passed as options to [enable](../classes/internal_.ScrollZoomHandler.md#enable).

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:812

___

### style

• `Optional` **style**: `string` \| [`Style`](internal_.Style.md)

stylesheet location

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:815

___

### testMode

• `Optional` **testMode**: `boolean`

Allows for the usage of the map in automated tests without an accessToken with custom self-hosted test fixtures.

**`Default`**

null

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:863

___

### touchPitch

• `Optional` **touchPitch**: `boolean` \| [`InteractiveOptions`](../modules/internal_.md#interactiveoptions)

If `true`, the "drag to pitch" interaction is enabled.
An `Object` value is passed as options to [enable](../classes/internal_.TouchPitchHandler.md#enable).

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:838

___

### touchZoomRotate

• `Optional` **touchZoomRotate**: `boolean` \| [`InteractiveOptions`](../modules/internal_.md#interactiveoptions)

If `true`, the "pinch to rotate and zoom" interaction is enabled.
An `Object` value is passed as options to [enable](../classes/internal_.TouchZoomRotateHandler.md#enable).

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:832

___

### trackResize

• `Optional` **trackResize**: `boolean`

If  true, the map will automatically resize when the browser window resizes

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:818

___

### transformRequest

• `Optional` **transformRequest**: [`TransformRequestFunction`](../modules/internal_.md#transformrequestfunction)

A callback run before the Map makes a request for an external URL. The callback can be
used to modify the url, set headers, or set the credentials property for cross-origin requests.

**`Default`**

null

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:826

___

### worldview

• `Optional` **worldview**: `string`

Sets the map's worldview. A worldview determines the way that certain disputed boundaries are rendered.
By default, GL JS will not set a worldview so that the worldview of Mapbox tiles will be determined by
the vector tile source's TileJSON. Valid worldview strings must be an ISO alpha-2 country code.

**`Default`**

null

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:871

___

### zoom

• `Optional` **zoom**: `number`

Initial zoom level

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:841
