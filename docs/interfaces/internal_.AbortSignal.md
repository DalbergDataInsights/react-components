[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AbortSignal

# Interface: AbortSignal

[<internal>](../modules/internal_.md).AbortSignal

A signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required via an AbortController object.

## Hierarchy

- `EventTarget`

  ↳ **`AbortSignal`**

## Table of contents

### Properties

- [aborted](internal_.AbortSignal.md#aborted)
- [onabort](internal_.AbortSignal.md#onabort)
- [reason](internal_.AbortSignal.md#reason)

### Methods

- [addEventListener](internal_.AbortSignal.md#addeventlistener)
- [dispatchEvent](internal_.AbortSignal.md#dispatchevent)
- [removeEventListener](internal_.AbortSignal.md#removeeventlistener)
- [throwIfAborted](internal_.AbortSignal.md#throwifaborted)

## Properties

### aborted

• `Readonly` **aborted**: `boolean`

Returns true if this AbortSignal's AbortController has signaled to abort, and false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2061

___

### onabort

• **onabort**: ``null`` \| (`this`: [`AbortSignal`](../modules/internal_.md#abortsignal), `ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2062

___

### reason

• `Readonly` **reason**: `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2063

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](../modules/internal_.md#abortsignal), `ev`: [`AbortSignalEventMap`](internal_.AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2065

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2066

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5309

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](../modules/internal_.md#abortsignal), `ev`: [`AbortSignalEventMap`](internal_.AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2067

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2068

___

### throwIfAborted

▸ **throwIfAborted**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2064
