[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ChangeEvent

# Interface: ChangeEvent<T\>

[<internal>](../modules/internal_.md).ChangeEvent

currentTarget - a reference to the element on which the event listener is registered.

target - a reference to the element from which the event was originally dispatched.
This might be a child element to the element on which the event listener is registered.
If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |

## Hierarchy

- [`SyntheticEvent`](internal_.SyntheticEvent.md)<`T`\>

  ↳ **`ChangeEvent`**

## Table of contents

### Properties

- [bubbles](internal_.ChangeEvent.md#bubbles)
- [cancelable](internal_.ChangeEvent.md#cancelable)
- [currentTarget](internal_.ChangeEvent.md#currenttarget)
- [defaultPrevented](internal_.ChangeEvent.md#defaultprevented)
- [eventPhase](internal_.ChangeEvent.md#eventphase)
- [isTrusted](internal_.ChangeEvent.md#istrusted)
- [nativeEvent](internal_.ChangeEvent.md#nativeevent)
- [target](internal_.ChangeEvent.md#target)
- [timeStamp](internal_.ChangeEvent.md#timestamp)
- [type](internal_.ChangeEvent.md#type)

### Methods

- [isDefaultPrevented](internal_.ChangeEvent.md#isdefaultprevented)
- [isPropagationStopped](internal_.ChangeEvent.md#ispropagationstopped)
- [persist](internal_.ChangeEvent.md#persist)
- [preventDefault](internal_.ChangeEvent.md#preventdefault)
- [stopPropagation](internal_.ChangeEvent.md#stoppropagation)

## Properties

### bubbles

• **bubbles**: `boolean`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[bubbles](internal_.SyntheticEvent.md#bubbles)

#### Defined in

node_modules/@types/react/index.d.ts:1189

___

### cancelable

• **cancelable**: `boolean`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[cancelable](internal_.SyntheticEvent.md#cancelable)

#### Defined in

node_modules/@types/react/index.d.ts:1190

___

### currentTarget

• **currentTarget**: `EventTarget` & `T`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[currentTarget](internal_.SyntheticEvent.md#currenttarget)

#### Defined in

node_modules/@types/react/index.d.ts:1187

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[defaultPrevented](internal_.SyntheticEvent.md#defaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1191

___

### eventPhase

• **eventPhase**: `number`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[eventPhase](internal_.SyntheticEvent.md#eventphase)

#### Defined in

node_modules/@types/react/index.d.ts:1192

___

### isTrusted

• **isTrusted**: `boolean`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[isTrusted](internal_.SyntheticEvent.md#istrusted)

#### Defined in

node_modules/@types/react/index.d.ts:1193

___

### nativeEvent

• **nativeEvent**: `Event`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[nativeEvent](internal_.SyntheticEvent.md#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1186

___

### target

• **target**: `EventTarget` & `T`

#### Overrides

[SyntheticEvent](internal_.SyntheticEvent.md).[target](internal_.SyntheticEvent.md#target)

#### Defined in

node_modules/@types/react/index.d.ts:1250

___

### timeStamp

• **timeStamp**: `number`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[timeStamp](internal_.SyntheticEvent.md#timestamp)

#### Defined in

node_modules/@types/react/index.d.ts:1199

___

### type

• **type**: `string`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[type](internal_.SyntheticEvent.md#type)

#### Defined in

node_modules/@types/react/index.d.ts:1200

## Methods

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[isDefaultPrevented](internal_.SyntheticEvent.md#isdefaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1195

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[isPropagationStopped](internal_.SyntheticEvent.md#ispropagationstopped)

#### Defined in

node_modules/@types/react/index.d.ts:1197

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[persist](internal_.SyntheticEvent.md#persist)

#### Defined in

node_modules/@types/react/index.d.ts:1198

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[preventDefault](internal_.SyntheticEvent.md#preventdefault)

#### Defined in

node_modules/@types/react/index.d.ts:1194

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[SyntheticEvent](internal_.SyntheticEvent.md).[stopPropagation](internal_.SyntheticEvent.md#stoppropagation)

#### Defined in

node_modules/@types/react/index.d.ts:1196
