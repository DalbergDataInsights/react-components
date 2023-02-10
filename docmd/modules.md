[@dalbergdatainsights/react-components](README.md) / Exports

# @dalbergdatainsights/react-components

## Table of contents

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

• `Const` **ComponentContext**: `Context`<{ `container`: {} = {} }\>

#### Defined in

[core/context.tsx:3](https://github.com/DalbergDataInsights/react-components/blob/da2dd8b/core/context.tsx#L3)

## Functions

### ComponentContextProvider

▸ **ComponentContextProvider**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `children` | `ReactNode` |
| › `config` | `Object` |
| › `config.container` | `Object` |

#### Returns

`Element`

#### Defined in

[core/context.tsx:4](https://github.com/DalbergDataInsights/react-components/blob/da2dd8b/core/context.tsx#L4)

___

### NamedGrid

▸ **NamedGrid**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`Element`

#### Defined in

[layouts.tsx:7](https://github.com/DalbergDataInsights/react-components/blob/da2dd8b/layouts.tsx#L7)

___

### Table

▸ **Table**(`«destructured»`): `Element`

React table component to conveniently display data out of the box.

**`See`**

Wrapper for extended container parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `any` |

#### Returns

`Element`

#### Defined in

[components.tsx:15](https://github.com/DalbergDataInsights/react-components/blob/da2dd8b/components.tsx#L15)

___

### Wrapper

▸ **Wrapper**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |

#### Returns

`Element`

#### Defined in

[core/wrapper.tsx:17](https://github.com/DalbergDataInsights/react-components/blob/da2dd8b/core/wrapper.tsx#L17)

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

#### Defined in

[core/eventManager.tsx:8](https://github.com/DalbergDataInsights/react-components/blob/da2dd8b/core/eventManager.tsx#L8)

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

[core/stateListener.tsx:22](https://github.com/DalbergDataInsights/react-components/blob/da2dd8b/core/stateListener.tsx#L22)
