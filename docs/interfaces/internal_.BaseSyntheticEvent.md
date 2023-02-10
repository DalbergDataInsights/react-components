[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BaseSyntheticEvent

# Interface: BaseSyntheticEvent<E, C, T\>

[<internal>](../modules/internal_.md).BaseSyntheticEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | `object` |
| `C` | `any` |
| `T` | `any` |

## Hierarchy

- **`BaseSyntheticEvent`**

  ↳ [`SyntheticEvent`](internal_.SyntheticEvent.md)

## Table of contents

### Properties

- [bubbles](internal_.BaseSyntheticEvent.md#bubbles)
- [cancelable](internal_.BaseSyntheticEvent.md#cancelable)
- [currentTarget](internal_.BaseSyntheticEvent.md#currenttarget)
- [defaultPrevented](internal_.BaseSyntheticEvent.md#defaultprevented)
- [eventPhase](internal_.BaseSyntheticEvent.md#eventphase)
- [isTrusted](internal_.BaseSyntheticEvent.md#istrusted)
- [nativeEvent](internal_.BaseSyntheticEvent.md#nativeevent)
- [target](internal_.BaseSyntheticEvent.md#target)
- [timeStamp](internal_.BaseSyntheticEvent.md#timestamp)
- [type](internal_.BaseSyntheticEvent.md#type)

### Methods

- [isDefaultPrevented](internal_.BaseSyntheticEvent.md#isdefaultprevented)
- [isPropagationStopped](internal_.BaseSyntheticEvent.md#ispropagationstopped)
- [persist](internal_.BaseSyntheticEvent.md#persist)
- [preventDefault](internal_.BaseSyntheticEvent.md#preventdefault)
- [stopPropagation](internal_.BaseSyntheticEvent.md#stoppropagation)

## Properties

### bubbles

• **bubbles**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1189

___

### cancelable

• **cancelable**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1190

___

### currentTarget

• **currentTarget**: `C`

#### Defined in

node_modules/@types/react/index.d.ts:1187

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1191

___

### eventPhase

• **eventPhase**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1192

___

### isTrusted

• **isTrusted**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1193

___

### nativeEvent

• **nativeEvent**: `E`

#### Defined in

node_modules/@types/react/index.d.ts:1186

___

### target

• **target**: `T`

#### Defined in

node_modules/@types/react/index.d.ts:1188

___

### timeStamp

• **timeStamp**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1199

___

### type

• **type**: `string`

#### Defined in

node_modules/@types/react/index.d.ts:1200

## Methods

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1195

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1197

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1198

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1194

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1196
