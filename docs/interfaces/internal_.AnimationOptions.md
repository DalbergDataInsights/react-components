[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AnimationOptions

# Interface: AnimationOptions

[<internal>](../modules/internal_.md).AnimationOptions

AnimationOptions

## Hierarchy

- **`AnimationOptions`**

  ↳ [`FlyToOptions`](internal_.FlyToOptions.md)

  ↳ [`EaseToOptions`](internal_.EaseToOptions.md)

## Table of contents

### Properties

- [animate](internal_.AnimationOptions.md#animate)
- [duration](internal_.AnimationOptions.md#duration)
- [easing](internal_.AnimationOptions.md#easing)
- [essential](internal_.AnimationOptions.md#essential)
- [offset](internal_.AnimationOptions.md#offset)

## Properties

### animate

• `Optional` **animate**: `boolean`

When set to false, no animation happens

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2068

___

### duration

• `Optional` **duration**: `number`

Number in milliseconds

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2059

___

### easing

• `Optional` **easing**: (`time`: `number`) => `number`

#### Type declaration

▸ (`time`): `number`

A function taking a time in the range 0..1 and returning a number where 0 is the initial
state and 1 is the final state.

##### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

##### Returns

`number`

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2064

___

### essential

• `Optional` **essential**: `boolean`

If `true`, then the animation is considered essential and will not be affected by `prefers-reduced-motion`.
Otherwise, the transition will happen instantly if the user has enabled the `reduced motion` accesibility feature in their operating system.

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2073

___

### offset

• `Optional` **offset**: [`PointLike`](../modules/internal_.md#pointlike)

point, origin of movement relative to map center

#### Defined in

node_modules/@types/mapbox-gl/index.d.ts:2066
