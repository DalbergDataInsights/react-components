[@dalbergdatainsights/react-components](README.md) / Exports

# @dalbergdatainsights/react-components

## Table of contents

### Classes

- [ChartGrid](classes/ChartGrid.md)
- [ChartLegend](classes/ChartLegend.md)

### Interfaces

- [iObserver](interfaces/iObserver.md)
- [iReactive](interfaces/iReactive.md)
- [iSubscriber](interfaces/iSubscriber.md)
- [iWrapper](interfaces/iWrapper.md)

### Variables

- [ComponentContext](modules.md#componentcontext)

### Functions

- [ComponentContextProvider](modules.md#componentcontextprovider)
- [Dropdown](modules.md#dropdown)
- [LineChart](modules.md#linechart)
- [Map](modules.md#map)
- [MapAttributionControl](modules.md#mapattributioncontrol)
- [MapColorLegend](modules.md#mapcolorlegend)
- [MapFullscreenControl](modules.md#mapfullscreencontrol)
- [MapGeolocateControl](modules.md#mapgeolocatecontrol)
- [MapNavigationControl](modules.md#mapnavigationcontrol)
- [MapScaleControl](modules.md#mapscalecontrol)
- [NamedArea](modules.md#namedarea)
- [NamedGrid](modules.md#namedgrid)
- [ProgressBar](modules.md#progressbar)
- [ProgressCircle](modules.md#progresscircle)
- [StatusColor](modules.md#statuscolor)
- [Table](modules.md#table)
- [ToggleButtonGroup](modules.md#togglebuttongroup)
- [Wrapper](modules.md#wrapper)
- [checkState](modules.md#checkstate)
- [getBounds](modules.md#getbounds)
- [getColor](modules.md#getcolor)
- [mergeDicts](modules.md#mergedicts)
- [useDim](modules.md#usedim)
- [useEventManagement](modules.md#useeventmanagement)
- [useStateListener](modules.md#usestatelistener)

## Variables

### ComponentContext

• `Const` **ComponentContext**: `Context`<{}\>

#### Defined in

[src/core/context.tsx:7](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/core/context.tsx#L7)

## Functions

### ComponentContextProvider

▸ **ComponentContextProvider**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `children` | `ReactNode` |
| › `config` | `iConfig` |

#### Returns

`Element`

#### Defined in

[src/core/context.tsx:8](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/core/context.tsx#L8)

___

### Dropdown

▸ **Dropdown**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `iDropdown` & [`iReactive`](interfaces/iReactive.md) |

#### Returns

`Element`

#### Defined in

[src/components.tsx:40](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/components.tsx#L40)

___

### LineChart

▸ **LineChart**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `iLineChart` & [`iReactive`](interfaces/iReactive.md) |

#### Returns

`Element`

#### Defined in

[src/components.tsx:76](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/components.tsx#L76)

___

### Map

▸ **Map**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `iMap` & [`iReactive`](interfaces/iReactive.md) |

#### Returns

`Element`

#### Defined in

[src/components.tsx:22](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/components.tsx#L22)

___

### MapAttributionControl

▸ **MapAttributionControl**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `AttributionControlProps` |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:345

___

### MapColorLegend

▸ **MapColorLegend**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `iMapColorLegend` & [`iReactive`](interfaces/iReactive.md) |

#### Returns

`Element`

#### Defined in

[src/components.tsx:27](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/components.tsx#L27)

___

### MapFullscreenControl

▸ **MapFullscreenControl**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `FullscreenControlProps` |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:345

___

### MapGeolocateControl

▸ **MapGeolocateControl**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `GeolocateControlProps` & `RefAttributes`<`GeolocateControlRef`\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:345

___

### MapNavigationControl

▸ **MapNavigationControl**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `NavigationControlProps` |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:345

___

### MapScaleControl

▸ **MapScaleControl**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ScaleControlProps` |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:345

___

### NamedArea

▸ **NamedArea**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `iNamedGridArea` |

#### Returns

`Element`

#### Defined in

[src/layouts/NamedGrid/namedGridAreaElement.tsx:3](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/layouts/NamedGrid/namedGridAreaElement.tsx#L3)

___

### NamedGrid

▸ **NamedGrid**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `iNamedGrid` & [`iReactive`](interfaces/iReactive.md) |

#### Returns

`Element`

#### Defined in

[src/layouts.tsx:8](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/layouts.tsx#L8)

___

### ProgressBar

▸ **ProgressBar**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `iProgressBar` & [`iReactive`](interfaces/iReactive.md) |

#### Returns

`Element`

#### Defined in

[src/components.tsx:48](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/components.tsx#L48)

___

### ProgressCircle

▸ **ProgressCircle**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `iProgressCircle` & [`iReactive`](interfaces/iReactive.md) |

#### Returns

`Element`

#### Defined in

[src/components.tsx:66](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/components.tsx#L66)

___

### StatusColor

▸ **StatusColor**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `iStatusColor` & [`iReactive`](interfaces/iReactive.md) |

#### Returns

`Element`

#### Defined in

[src/components.tsx:57](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/components.tsx#L57)

___

### Table

▸ **Table**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `iTable` & [`iReactive`](interfaces/iReactive.md) |

#### Returns

`Element`

#### Defined in

[src/components.tsx:7](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/components.tsx#L7)

___

### ToggleButtonGroup

▸ **ToggleButtonGroup**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `iToggleButtonGroup` & [`iReactive`](interfaces/iReactive.md) |

#### Returns

`Element`

#### Defined in

[src/components.tsx:35](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/components.tsx#L35)

___

### Wrapper

▸ **Wrapper**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`iWrapper`](interfaces/iWrapper.md) & [`iReactive`](interfaces/iReactive.md) |

#### Returns

`Element`

#### Defined in

[src/core/wrapper.tsx:10](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/core/wrapper.tsx#L10)

___

### checkState

▸ **checkState**(`stateString`, `props`, `initValue?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateString` | `string` |
| `props` | `any` |
| `initValue` | `Object` |

#### Returns

`void`

#### Defined in

[src/core/util.tsx:43](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/core/util.tsx#L43)

___

### getBounds

▸ **getBounds**(`coordinates`): `number`[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `coordinates` | `any` |

#### Returns

`number`[][]

#### Defined in

[src/core/util.tsx:81](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/core/util.tsx#L81)

___

### getColor

▸ **getColor**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `colors` | `string`[] |
| › `naColor` | `string` |
| › `steps` | `number`[] |
| › `value` | `number` |

#### Returns

`string`

#### Defined in

[src/core/util.tsx:56](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/core/util.tsx#L56)

___

### mergeDicts

▸ **mergeDicts**(`dict1`, `dict2`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dict1` | `any` |
| `dict2` | `any` |

#### Returns

`any`

#### Defined in

[src/core/util.tsx:4](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/core/util.tsx#L4)

___

### useDim

▸ **useDim**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `prop` | `number` |
| `ref` | `MutableRefObject`<``null``\> |

#### Defined in

[src/hooks/useDim.tsx:3](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/hooks/useDim.tsx#L3)

___

### useEventManagement

▸ **useEventManagement**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `subscribers` | [`iSubscriber`](interfaces/iSubscriber.md)[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `onChange` | (`event`: `ChangeEvent`<`HTMLInputElement`\>) => `void` |
| `onClick` | (`event`: `ChangeEvent`<`HTMLInputElement`\>) => `void` |
| `onMove` | (`event`: `ChangeEvent`<`HTMLInputElement`\>) => `void` |

#### Defined in

[src/core/eventManager.tsx:4](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/core/eventManager.tsx#L4)

___

### useStateListener

▸ **useStateListener**<`T`\>(`«destructured»`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `StateProps`<`T`\> |

#### Returns

`void`

#### Defined in

[src/core/stateListener.tsx:17](https://github.com/DalbergDataInsights/react-components/blob/ec29d2b/src/core/stateListener.tsx#L17)
