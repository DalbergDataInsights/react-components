[@dalbergdatainsights/react-components](README.md) / Exports

# @dalbergdatainsights/react-components

## Table of contents

### Modules

- [&lt;internal\&gt;](modules/internal_.md)

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
- [useEventManagement](modules.md#useeventmanagement)
- [useStateListener](modules.md#usestatelistener)

## Variables

### ComponentContext

• `Const` **ComponentContext**: [`Context`](interfaces/internal_.Context.md)<{}\>

#### Defined in

[src/core/context.tsx:7](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/core/context.tsx#L7)

## Functions

### ComponentContextProvider

▸ **ComponentContextProvider**(`«destructured»`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `children` | [`ReactNode`](modules/internal_.md#reactnode) |
| › `config` | [`iConfig`](interfaces/internal_.iConfig.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[src/core/context.tsx:8](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/core/context.tsx#L8)

___

### Dropdown

▸ **Dropdown**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iDropdown`](interfaces/internal_.iDropdown.md) & [`iReactive`](interfaces/iReactive.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[src/components.tsx:40](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/components.tsx#L40)

___

### Map

▸ **Map**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iMap`](interfaces/internal_.iMap.md) & [`iReactive`](interfaces/iReactive.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[src/components.tsx:22](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/components.tsx#L22)

___

### MapAttributionControl

▸ **MapAttributionControl**(`props`): ``null`` \| [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AttributionControlProps`](modules/internal_.md#attributioncontrolprops) |

#### Returns

``null`` \| [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### MapColorLegend

▸ **MapColorLegend**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iMapColorLegend`](interfaces/internal_.iMapColorLegend.md) & [`iReactive`](interfaces/iReactive.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[src/components.tsx:27](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/components.tsx#L27)

___

### MapFullscreenControl

▸ **MapFullscreenControl**(`props`): ``null`` \| [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FullscreenControlProps`](modules/internal_.md#fullscreencontrolprops) |

#### Returns

``null`` \| [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### MapGeolocateControl

▸ **MapGeolocateControl**(`props`): ``null`` \| [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GeolocateControlProps`](modules/internal_.md#geolocatecontrolprops) & [`RefAttributes`](interfaces/internal_.RefAttributes.md)<[`GeolocateControlRef`](modules/internal_.md#geolocatecontrolref)\> |

#### Returns

``null`` \| [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### MapNavigationControl

▸ **MapNavigationControl**(`props`): ``null`` \| [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`NavigationControlProps`](modules/internal_.md#navigationcontrolprops) |

#### Returns

``null`` \| [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### MapScaleControl

▸ **MapScaleControl**(`props`): ``null`` \| [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ScaleControlProps`](modules/internal_.md#scalecontrolprops) |

#### Returns

``null`` \| [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### NamedArea

▸ **NamedArea**(`«destructured»`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`iNamedGridArea`](interfaces/internal_.iNamedGridArea.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[src/layouts/NamedGrid/namedGridAreaElement.tsx:3](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/layouts/NamedGrid/namedGridAreaElement.tsx#L3)

___

### NamedGrid

▸ **NamedGrid**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iNamedGrid`](interfaces/internal_.iNamedGrid.md) & [`iReactive`](interfaces/iReactive.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[src/layouts.tsx:8](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/layouts.tsx#L8)

___

### ProgressBar

▸ **ProgressBar**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iProgressBar`](interfaces/internal_.iProgressBar.md) & [`iReactive`](interfaces/iReactive.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[src/components.tsx:48](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/components.tsx#L48)

___

### ProgressCircle

▸ **ProgressCircle**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iProgressCircle`](interfaces/internal_.iProgressCircle.md) & [`iReactive`](interfaces/iReactive.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[src/components.tsx:66](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/components.tsx#L66)

___

### StatusColor

▸ **StatusColor**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iStatusColor`](interfaces/internal_.iStatusColor.md) & [`iReactive`](interfaces/iReactive.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[src/components.tsx:57](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/components.tsx#L57)

___

### Table

▸ **Table**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iTable`](interfaces/internal_.iTable.md) & [`iWrapper`](interfaces/iWrapper.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[src/components.tsx:7](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/components.tsx#L7)

___

### ToggleButtonGroup

▸ **ToggleButtonGroup**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iToggleButtonGroup`](interfaces/internal_.iToggleButtonGroup.md) & [`iReactive`](interfaces/iReactive.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[src/components.tsx:35](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/components.tsx#L35)

___

### Wrapper

▸ **Wrapper**(`props`): ``null`` \| [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iWrapper`](interfaces/iWrapper.md) & [`iReactive`](interfaces/iReactive.md) |

#### Returns

``null`` \| [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

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

[src/core/util.tsx:26](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/core/util.tsx#L26)

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

[src/core/util.tsx:64](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/core/util.tsx#L64)

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

[src/core/util.tsx:39](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/core/util.tsx#L39)

___

### mergeDicts

▸ **mergeDicts**(`a`, `b`, `path?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `a` | `Object` | `undefined` |
| `b` | `Object` | `undefined` |
| `path` | `undefined` \| `string`[] | `undefined` |

#### Returns

`Object`

#### Defined in

[src/core/util.tsx:4](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/core/util.tsx#L4)

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
| `onChange` | (`event`: [`ChangeEvent`](interfaces/internal_.ChangeEvent.md)<`HTMLInputElement`\>) => `void` |
| `onClick` | (`event`: [`ChangeEvent`](interfaces/internal_.ChangeEvent.md)<`HTMLInputElement`\>) => `void` |
| `onMove` | (`event`: [`ChangeEvent`](interfaces/internal_.ChangeEvent.md)<`HTMLInputElement`\>) => `void` |

#### Defined in

[src/core/eventManager.tsx:4](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/core/eventManager.tsx#L4)

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
| `«destructured»` | [`StateProps`](interfaces/internal_.StateProps.md)<`T`\> |

#### Returns

`void`

#### Defined in

[src/core/stateListener.tsx:17](https://github.com/DalbergDataInsights/react-components/blob/eddc6af/src/core/stateListener.tsx#L17)
