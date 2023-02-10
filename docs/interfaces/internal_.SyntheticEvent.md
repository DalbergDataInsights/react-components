[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / SyntheticEvent

# Interface: SyntheticEvent<T, E\>

[<internal>](../modules/internal_.md).SyntheticEvent

currentTarget - a reference to the element on which the event listener is registered.

target - a reference to the element from which the event was originally dispatched.
This might be a child element to the element on which the event listener is registered.
If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |
| `E` | `Event` |

## Hierarchy

- [`BaseSyntheticEvent`](internal_.BaseSyntheticEvent.md)<`E`, `EventTarget` & `T`, `EventTarget`\>

  ↳ **`SyntheticEvent`**

  ↳↳ [`ChangeEvent`](internal_.ChangeEvent.md)

## Table of contents

### Properties

- [bubbles](internal_.SyntheticEvent.md#bubbles)
- [cancelable](internal_.SyntheticEvent.md#cancelable)
- [currentTarget](internal_.SyntheticEvent.md#currenttarget)
- [defaultPrevented](internal_.SyntheticEvent.md#defaultprevented)
- [eventPhase](internal_.SyntheticEvent.md#eventphase)
- [isTrusted](internal_.SyntheticEvent.md#istrusted)
- [nativeEvent](internal_.SyntheticEvent.md#nativeevent)
- [target](internal_.SyntheticEvent.md#target)
- [timeStamp](internal_.SyntheticEvent.md#timestamp)
- [type](internal_.SyntheticEvent.md#type)

### Methods

- [isDefaultPrevented](internal_.SyntheticEvent.md#isdefaultprevented)
- [isPropagationStopped](internal_.SyntheticEvent.md#ispropagationstopped)
- [persist](internal_.SyntheticEvent.md#persist)
- [preventDefault](internal_.SyntheticEvent.md#preventdefault)
- [stopPropagation](internal_.SyntheticEvent.md#stoppropagation)

## Properties

### bubbles

• **bubbles**: `boolean`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[bubbles](internal_.BaseSyntheticEvent.md#bubbles)

#### Defined in

node_modules/@types/react/index.d.ts:1189

___

### cancelable

• **cancelable**: `boolean`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[cancelable](internal_.BaseSyntheticEvent.md#cancelable)

#### Defined in

node_modules/@types/react/index.d.ts:1190

___

### currentTarget

• **currentTarget**: `EventTarget` & `T`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[currentTarget](internal_.BaseSyntheticEvent.md#currenttarget)

#### Defined in

node_modules/@types/react/index.d.ts:1187

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[defaultPrevented](internal_.BaseSyntheticEvent.md#defaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1191

___

### eventPhase

• **eventPhase**: `number`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[eventPhase](internal_.BaseSyntheticEvent.md#eventphase)

#### Defined in

node_modules/@types/react/index.d.ts:1192

___

### isTrusted

• **isTrusted**: `boolean`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[isTrusted](internal_.BaseSyntheticEvent.md#istrusted)

#### Defined in

node_modules/@types/react/index.d.ts:1193

___

### nativeEvent

• **nativeEvent**: `E`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[nativeEvent](internal_.BaseSyntheticEvent.md#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1186

___

### target

• **target**: `EventTarget`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[target](internal_.BaseSyntheticEvent.md#target)

#### Defined in

node_modules/@types/react/index.d.ts:1188

___

### timeStamp

• **timeStamp**: `number`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[timeStamp](internal_.BaseSyntheticEvent.md#timestamp)

#### Defined in

node_modules/@types/react/index.d.ts:1199

___

### type

• **type**: `string`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[type](internal_.BaseSyntheticEvent.md#type)

#### Defined in

node_modules/@types/react/index.d.ts:1200

## Methods

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[isDefaultPrevented](internal_.BaseSyntheticEvent.md#isdefaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1195

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[isPropagationStopped](internal_.BaseSyntheticEvent.md#ispropagationstopped)

#### Defined in

node_modules/@types/react/index.d.ts:1197

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[persist](internal_.BaseSyntheticEvent.md#persist)

#### Defined in

node_modules/@types/react/index.d.ts:1198

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[preventDefault](internal_.BaseSyntheticEvent.md#preventdefault)

#### Defined in

node_modules/@types/react/index.d.ts:1194

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[BaseSyntheticEvent](internal_.BaseSyntheticEvent.md).[stopPropagation](internal_.BaseSyntheticEvent.md#stoppropagation)

#### Defined in

node_modules/@types/react/index.d.ts:1196
