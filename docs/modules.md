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

[core/context.tsx:3](https://github.com/DalbergDataInsights/react-components/blob/e91b2bd/core/context.tsx#L3)

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

[core/context.tsx:4](https://github.com/DalbergDataInsights/react-components/blob/e91b2bd/core/context.tsx#L4)

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

[layouts.tsx:7](https://github.com/DalbergDataInsights/react-components/blob/e91b2bd/layouts.tsx#L7)

___

### Table

▸ **Table**(`props`): [`Element`](interfaces/internal_.Element.md)

**`Example`**

```jsx
    <Table
   container={{
   // pass container props. Please be careful as container should be standard
     style: {
       // one common usecase is to pass gridArea to component
       gridArea: "table",
     },
   }}
   data={[
     { id: 5, name: "banana", value: 0.53, qt: 10 },
     { id: 2, name: "orange", value: 0.52, qt: 20 },
   ]}
   header={[
     // list of dictionaries [iHeader]
     {
       index: "id",
       name: "Product ID",
       type: "text", // you can pass custom here, then you need to pass renderer
       // renderer: (props) => <div>{props.data //data is a value of a cell}</div> example of simple div around the value
       // props: {}, // any props you want to send to each cell of a given column
       hidden: false, // set this to true if you want to hide the column
     },
     // limitation: you need to provide dictionaries equal to the number of column
     // if you want to change the order of columns, it should contain at least index
     {},
     {},
     {},
   ]}
   props={{
     table: {
       // passed in table container [Mui Grid]
       // xs: 2, //other mui-grid properties
       style: { backgroundColor: "white" },
     },
     row: {
       // passed to each cell that in a row [Mui Item]
     },
     cell: {
       // passed to each cell
     },
   }}
   displayHeader={true}
 />
 ```

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`iTable`](interfaces/internal_.iTable.md) |

#### Returns

[`Element`](interfaces/internal_.Element.md)

#### Defined in

[components.tsx:55](https://github.com/DalbergDataInsights/react-components/blob/e91b2bd/components.tsx#L55)

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

[core/wrapper.tsx:17](https://github.com/DalbergDataInsights/react-components/blob/e91b2bd/core/wrapper.tsx#L17)

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

[core/eventManager.tsx:8](https://github.com/DalbergDataInsights/react-components/blob/e91b2bd/core/eventManager.tsx#L8)

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

[core/stateListener.tsx:22](https://github.com/DalbergDataInsights/react-components/blob/e91b2bd/core/stateListener.tsx#L22)
