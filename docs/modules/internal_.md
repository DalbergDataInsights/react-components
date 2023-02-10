[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [Component](../classes/internal_.Component.md)

### Interfaces

- [BaseSyntheticEvent](../interfaces/internal_.BaseSyntheticEvent.md)
- [ChangeEvent](../interfaces/internal_.ChangeEvent.md)
- [ComponentLifecycle](../interfaces/internal_.ComponentLifecycle.md)
- [ConsumerProps](../interfaces/internal_.ConsumerProps.md)
- [Context](../interfaces/internal_.Context.md)
- [DeprecatedLifecycle](../interfaces/internal_.DeprecatedLifecycle.md)
- [Element](../interfaces/internal_.Element.md)
- [Error](../interfaces/internal_.Error.md)
- [ErrorInfo](../interfaces/internal_.ErrorInfo.md)
- [ExoticComponent](../interfaces/internal_.ExoticComponent.md)
- [Iterable](../interfaces/internal_.Iterable.md)
- [Iterator](../interfaces/internal_.Iterator.md)
- [IteratorReturnResult](../interfaces/internal_.IteratorReturnResult.md)
- [IteratorYieldResult](../interfaces/internal_.IteratorYieldResult.md)
- [NewLifecycle](../interfaces/internal_.NewLifecycle.md)
- [Object](../interfaces/internal_.Object.md)
- [ProviderExoticComponent](../interfaces/internal_.ProviderExoticComponent.md)
- [ProviderProps](../interfaces/internal_.ProviderProps.md)
- [ReactElement](../interfaces/internal_.ReactElement.md)
- [ReactPortal](../interfaces/internal_.ReactPortal.md)
- [StateProps](../interfaces/internal_.StateProps.md)
- [SyntheticEvent](../interfaces/internal_.SyntheticEvent.md)
- [Validator](../interfaces/internal_.Validator.md)
- [iHeader](../interfaces/internal_.iHeader.md)
- [iNamedGrid](../interfaces/internal_.iNamedGrid.md)
- [iTable](../interfaces/internal_.iTable.md)

### Type Aliases

- [Consumer](internal_.md#consumer)
- [IteratorResult](internal_.md#iteratorresult)
- [JSXElementConstructor](internal_.md#jsxelementconstructor)
- [Key](internal_.md#key)
- [Pick](internal_.md#pick)
- [PropertyKey](internal_.md#propertykey)
- [Provider](internal_.md#provider)
- [ReactFragment](internal_.md#reactfragment)
- [ReactInstance](internal_.md#reactinstance)
- [ReactNode](internal_.md#reactnode)
- [Readonly](internal_.md#readonly)
- [Record](internal_.md#record)
- [Validator](internal_.md#validator)
- [WeakValidationMap](internal_.md#weakvalidationmap)

### Functions

- [Error](internal_.md#error)
- [Object](internal_.md#object)

## Type Aliases

### Consumer

Ƭ **Consumer**<`T`\>: [`ExoticComponent`](../interfaces/internal_.ExoticComponent.md)<[`ConsumerProps`](../interfaces/internal_.ConsumerProps.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/@types/react/index.d.ts:368

___

### IteratorResult

Ƭ **IteratorResult**<`T`, `TReturn`\>: [`IteratorYieldResult`](../interfaces/internal_.IteratorYieldResult.md)<`T`\> \| [`IteratorReturnResult`](../interfaces/internal_.IteratorReturnResult.md)<`TReturn`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:41

___

### JSXElementConstructor

Ƭ **JSXElementConstructor**<`P`\>: (`props`: `P`) => [`ReactElement`](../interfaces/internal_.ReactElement.md)<`any`, `any`\> \| ``null`` \| (`props`: `P`) => [`Component`](../classes/internal_.Component.md)<`any`, `any`\>

#### Type parameters

| Name |
| :------ |
| `P` |

#### Defined in

node_modules/@types/react/index.d.ts:78

___

### Key

Ƭ **Key**: `string` \| `number`

#### Defined in

node_modules/@types/react/index.d.ts:125

___

### Pick

Ƭ **Pick**<`T`, `K`\>: { [P in K]: T[P] }

From T, pick a set of properties whose keys are in the union K

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1583

___

### PropertyKey

Ƭ **PropertyKey**: `string` \| `number` \| `symbol`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:107

___

### Provider

Ƭ **Provider**<`T`\>: [`ProviderExoticComponent`](../interfaces/internal_.ProviderExoticComponent.md)<[`ProviderProps`](../interfaces/internal_.ProviderProps.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/@types/react/index.d.ts:367

___

### ReactFragment

Ƭ **ReactFragment**: [`Iterable`](../interfaces/internal_.Iterable.md)<[`ReactNode`](internal_.md#reactnode)\>

#### Defined in

node_modules/@types/react/index.d.ts:230

___

### ReactInstance

Ƭ **ReactInstance**: [`Component`](../classes/internal_.Component.md)<`any`\> \| `Element`

#### Defined in

node_modules/@types/react/index.d.ts:428

___

### ReactNode

Ƭ **ReactNode**: [`ReactElement`](../interfaces/internal_.ReactElement.md) \| `string` \| `number` \| [`ReactFragment`](internal_.md#reactfragment) \| [`ReactPortal`](../interfaces/internal_.ReactPortal.md) \| `boolean` \| ``null`` \| `undefined`

#### Defined in

node_modules/@types/react/index.d.ts:231

___

### Readonly

Ƭ **Readonly**<`T`\>: { readonly [P in keyof T]: T[P] }

Make all properties in T readonly

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1576

___

### Record

Ƭ **Record**<`K`, `T`\>: { [P in K]: T }

Construct a type with a set of properties K of type T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `any` |
| `T` | `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1590

___

### Validator

Ƭ **Validator**<`T`\>: [`Validator`](../interfaces/internal_.Validator.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/@types/react/index.d.ts:2991

___

### WeakValidationMap

Ƭ **WeakValidationMap**<`T`\>: { [K in keyof T]?: null extends T[K] ? Validator<T[K] \| null \| undefined\> : undefined extends T[K] ? Validator<T[K] \| null \| undefined\> : Validator<T[K]\> }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/@types/react/index.d.ts:2997

## Functions

### Error

▸ **Error**(`message?`): [`Error`](internal_.md#error)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`Error`](internal_.md#error)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1060

___

### Object

▸ **Object**(): `any`

Provides functionality common to all JavaScript objects.

#### Returns

`any`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:156

▸ **Object**(`value`): `any`

Provides functionality common to all JavaScript objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:157
