[@dalbergdatainsights/react-components](README.md) / Exports

# @dalbergdatainsights/react-components

## Table of contents

### Modules

- [&lt;internal\&gt;](modules/internal_.md)

### Interfaces

- [iObserver](interfaces/iObserver.md)
- [iSubscriber](interfaces/iSubscriber.md)

### Variables

- [ComponentContext](modules.md#componentcontext)

### Functions

- [ComponentContextProvider](modules.md#componentcontextprovider)
- [NamedGrid](modules.md#namedgrid)
- [Table](modules.md#table)
- [Wrapper](modules.md#wrapper)
- [useEventManagement](modules.md#useeventmanagement)
- [useStateListener](modules.md#usestatelistener)

## Variables

### ComponentContext

• `Const` **ComponentContext**: [`Context`](interfaces/internal_.Context.md)<{ `container`: {} = {} }\>

#### Defined in

[core/context.tsx:3](https://github.com/DalbergDataInsights/react-components/blob/2626a4c/core/context.tsx#L3)

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

[core/context.tsx:4](https://github.com/DalbergDataInsights/react-components/blob/2626a4c/core/context.tsx#L4)

___

### NamedGrid

▸ **NamedGrid**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iNamedGrid`](interfaces/internal_.iNamedGrid.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[layouts.tsx:7](https://github.com/DalbergDataInsights/react-components/blob/2626a4c/layouts.tsx#L7)

___

### Table

▸ **Table**(`props`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iTable`](interfaces/internal_.iTable.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[components.tsx:6](https://github.com/DalbergDataInsights/react-components/blob/2626a4c/components.tsx#L6)

___

### Wrapper

▸ **Wrapper**(`«destructured»`): [`Element`](interfaces/internal_.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[core/wrapper.tsx:17](https://github.com/DalbergDataInsights/react-components/blob/2626a4c/core/wrapper.tsx#L17)

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

#### Defined in

[core/eventManager.tsx:8](https://github.com/DalbergDataInsights/react-components/blob/2626a4c/core/eventManager.tsx#L8)

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

[core/stateListener.tsx:22](https://github.com/DalbergDataInsights/react-components/blob/2626a4c/core/stateListener.tsx#L22)
