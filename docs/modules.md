[@dalbergdatainsights/react-components](README.md) / Exports

# @dalbergdatainsights/react-components

## Table of contents

### Modules

- [&lt;internal\&gt;](modules/internal_.md)

### Interfaces

- [iObserver](interfaces/iObserver.md)
- [iSubscriber](interfaces/iSubscriber.md)
- [iWrapper](interfaces/iWrapper.md)

### Variables

- [ComponentContext](modules.md#componentcontext)

### Functions

- [ComponentContextProvider](modules.md#componentcontextprovider)
- [Dropdown](modules.md#dropdown)
- [Map](modules.md#map)
- [MapAttributionControl](modules.md#mapattributioncontrol)
- [MapFullscreenControl](modules.md#mapfullscreencontrol)
- [MapGeolocateControl](modules.md#mapgeolocatecontrol)
- [MapLegend](modules.md#maplegend)
- [MapNavigationControl](modules.md#mapnavigationcontrol)
- [MapScaleControl](modules.md#mapscalecontrol)
- [NamedGrid](modules.md#namedgrid)
- [Table](modules.md#table)
- [ToggleButtonGroup](modules.md#togglebuttongroup)
- [Wrapper](modules.md#wrapper)
- [useEventManagement](modules.md#useeventmanagement)
- [useStateListener](modules.md#usestatelistener)

## Variables

### ComponentContext

• `Const` **ComponentContext**: [`Context`](interfaces/internal_.Context.md)<{ `container`: {} = {} }\>

#### Defined in

[core/context.tsx:3](https://github.com/DalbergDataInsights/react-components/blob/d32d0bb/core/context.tsx#L3)

## Functions

### ComponentContextProvider

▸ **ComponentContextProvider**(`«destructured»`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `children` | [`ReactNode`](modules/internal_.md#reactnode) |
| › `config` | `Object` |
| › `config.container` | `Object` |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[core/context.tsx:4](https://github.com/DalbergDataInsights/react-components/blob/d32d0bb/core/context.tsx#L4)

___

### Dropdown

▸ **Dropdown**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iDropdown`](interfaces/internal_.iDropdown.md) & [`iWrapper`](interfaces/iWrapper.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[components.tsx:34](https://github.com/DalbergDataInsights/react-components/blob/d32d0bb/components.tsx#L34)

___

### Map

▸ **Map**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iMap`](interfaces/internal_.iMap.md) & [`iWrapper`](interfaces/iWrapper.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[components.tsx:21](https://github.com/DalbergDataInsights/react-components/blob/d32d0bb/components.tsx#L21)

___

### MapAttributionControl

▸ **MapAttributionControl**(`props`): [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AttributionControlProps`](modules/internal_.md#attributioncontrolprops) |

#### Returns

[`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### MapFullscreenControl

▸ **MapFullscreenControl**(`props`): [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FullscreenControlProps`](modules/internal_.md#fullscreencontrolprops) |

#### Returns

[`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### MapGeolocateControl

▸ **MapGeolocateControl**(`props`): [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GeolocateControlProps`](modules/internal_.md#geolocatecontrolprops) & [`RefAttributes`](interfaces/internal_.RefAttributes.md)<[`GeolocateControlRef`](modules/internal_.md#geolocatecontrolref)\> |

#### Returns

[`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### MapLegend

▸ **MapLegend**(`props`): [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`MapLegendProps`](interfaces/internal_.MapLegendProps.md) |

#### Returns

[`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### MapNavigationControl

▸ **MapNavigationControl**(`props`): [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`NavigationControlProps`](modules/internal_.md#navigationcontrolprops) |

#### Returns

[`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### MapScaleControl

▸ **MapScaleControl**(`props`): [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ScaleControlProps`](modules/internal_.md#scalecontrolprops) |

#### Returns

[`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### NamedGrid

▸ **NamedGrid**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iNamedGrid`](interfaces/internal_.iNamedGrid.md) & [`iWrapper`](interfaces/iWrapper.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[layouts.tsx:7](https://github.com/DalbergDataInsights/react-components/blob/d32d0bb/layouts.tsx#L7)

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

[components.tsx:6](https://github.com/DalbergDataInsights/react-components/blob/d32d0bb/components.tsx#L6)

___

### ToggleButtonGroup

▸ **ToggleButtonGroup**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iToggleButtonGroup`](interfaces/internal_.iToggleButtonGroup.md) & [`iWrapper`](interfaces/iWrapper.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[components.tsx:29](https://github.com/DalbergDataInsights/react-components/blob/d32d0bb/components.tsx#L29)

___

### Wrapper

▸ **Wrapper**(`props`): [`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iWrapper`](interfaces/iWrapper.md) |

#### Returns

[`ReactElement`](interfaces/internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

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

[core/eventManager.tsx:8](https://github.com/DalbergDataInsights/react-components/blob/d32d0bb/core/eventManager.tsx#L8)

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

[core/stateListener.tsx:22](https://github.com/DalbergDataInsights/react-components/blob/d32d0bb/core/stateListener.tsx#L22)
