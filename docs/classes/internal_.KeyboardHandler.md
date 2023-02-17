[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / KeyboardHandler

# Class: KeyboardHandler

[<internal>](../modules/internal_.md).KeyboardHandler

KeyboardHandler

## Table of contents

### Constructors

- [constructor](internal_.KeyboardHandler.md#constructor)

### Methods

- [disable](internal_.KeyboardHandler.md#disable)
- [disableRotation](internal_.KeyboardHandler.md#disablerotation)
- [enable](internal_.KeyboardHandler.md#enable)
- [enableRotation](internal_.KeyboardHandler.md#enablerotation)
- [isActive](internal_.KeyboardHandler.md#isactive)
- [isEnabled](internal_.KeyboardHandler.md#isenabled)

## Constructors

### constructor

• **new KeyboardHandler**(`map`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`Map`](internal_.Map.md) |

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1038

## Methods

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1044

___

### disableRotation

▸ **disableRotation**(): `void`

Disables the "keyboard pan/rotate" interaction, leaving the
"keyboard zoom" interaction enabled.

**`Example`**

```ts
map.keyboard.disableRotation();
```

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1062

___

### enable

▸ **enable**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1042

___

### enableRotation

▸ **enableRotation**(): `void`

Enables the "keyboard pan/rotate" interaction.

**`Example`**

```ts
map.keyboard.enable();
  map.keyboard.enableRotation();
```

#### Returns

`void`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1071

___

### isActive

▸ **isActive**(): `boolean`

Returns true if the handler is enabled and has detected the start of a
zoom/rotate gesture.

#### Returns

`boolean`

`true` if the handler is enabled and has detected the
start of a zoom/rotate gesture.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1053

___

### isEnabled

▸ **isEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:1040
