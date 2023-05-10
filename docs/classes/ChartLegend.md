[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / ChartLegend

# Class: ChartLegend

## Hierarchy

- `PureComponent`<`Props`, `State`\>

  ↳ **`ChartLegend`**

## Table of contents

### Constructors

- [constructor](ChartLegend.md#constructor)

### Properties

- [context](ChartLegend.md#context)
- [getBBoxSnapshot](ChartLegend.md#getbboxsnapshot)
- [getDefaultPosition](ChartLegend.md#getdefaultposition)
- [props](ChartLegend.md#props)
- [refs](ChartLegend.md#refs)
- [state](ChartLegend.md#state)
- [updateBBox](ChartLegend.md#updatebbox)
- [wrapperNode](ChartLegend.md#wrappernode)
- [contextType](ChartLegend.md#contexttype)
- [defaultProps](ChartLegend.md#defaultprops)
- [displayName](ChartLegend.md#displayname)

### Methods

- [UNSAFE\_componentWillMount](ChartLegend.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](ChartLegend.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](ChartLegend.md#unsafe_componentwillupdate)
- [componentDidCatch](ChartLegend.md#componentdidcatch)
- [componentDidMount](ChartLegend.md#componentdidmount)
- [componentDidUpdate](ChartLegend.md#componentdidupdate)
- [componentWillMount](ChartLegend.md#componentwillmount)
- [componentWillReceiveProps](ChartLegend.md#componentwillreceiveprops)
- [componentWillUnmount](ChartLegend.md#componentwillunmount)
- [componentWillUpdate](ChartLegend.md#componentwillupdate)
- [forceUpdate](ChartLegend.md#forceupdate)
- [getBBox](ChartLegend.md#getbbox)
- [getSnapshotBeforeUpdate](ChartLegend.md#getsnapshotbeforeupdate)
- [render](ChartLegend.md#render)
- [setState](ChartLegend.md#setstate)
- [shouldComponentUpdate](ChartLegend.md#shouldcomponentupdate)
- [getWithHeight](ChartLegend.md#getwithheight)

## Constructors

### constructor

• **new ChartLegend**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Props` \| `Readonly`<`Props`\> |

#### Inherited from

PureComponent<Props, State\>.constructor

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:467

• **new ChartLegend**(`props`, `context`)

**`Deprecated`**

**`See`**

https://legacy.reactjs.org/docs/legacy-context.html

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Props` |
| `context` | `any` |

#### Inherited from

PureComponent<Props, State\>.constructor

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:472

## Properties

### context

• **context**: `unknown`

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`See`**

https://react.dev/reference/react/Component#context

#### Inherited from

PureComponent.context

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:465

___

### getBBoxSnapshot

• `Private` **getBBoxSnapshot**: `any`

#### Defined in

node_modules/recharts/types/component/Legend.d.ts:46

___

### getDefaultPosition

• `Private` **getDefaultPosition**: `any`

#### Defined in

node_modules/recharts/types/component/Legend.d.ts:47

___

### props

• `Readonly` **props**: `Readonly`<`Props`\>

#### Inherited from

PureComponent.props

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:485

___

### refs

• **refs**: `Object`

**`Deprecated`**

https://legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

▪ [key: `string`]: `ReactInstance`

#### Inherited from

PureComponent.refs

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:491

___

### state

• **state**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `boxHeight` | `number` |
| `boxWidth` | `number` |

#### Overrides

PureComponent.state

#### Defined in

node_modules/recharts/types/component/Legend.d.ts:39

___

### updateBBox

• `Private` **updateBBox**: `any`

#### Defined in

node_modules/recharts/types/component/Legend.d.ts:48

___

### wrapperNode

• `Private` **wrapperNode**: `any`

#### Defined in

node_modules/recharts/types/component/Legend.d.ts:31

___

### contextType

▪ `Static` `Optional` **contextType**: `Context`<`any`\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`See`**

https://react.dev/reference/react/Component#static-contexttype

#### Inherited from

PureComponent.contextType

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:448

___

### defaultProps

▪ `Static` **defaultProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `align` | `string` |
| `iconSize` | `number` |
| `layout` | `string` |
| `verticalAlign` | `string` |

#### Defined in

node_modules/recharts/types/component/Legend.d.ts:25

___

### displayName

▪ `Static` **displayName**: `string`

#### Defined in

node_modules/recharts/types/component/Legend.d.ts:24

## Methods

### UNSAFE\_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use componentDidMount or the constructor instead

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

PureComponent.UNSAFE\_componentWillMount

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:682

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use static getDerivedStateFromProps instead

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`Props`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

PureComponent.UNSAFE\_componentWillReceiveProps

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:714

___

### UNSAFE\_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use getSnapshotBeforeUpdate instead

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`Props`\> |
| `nextState` | `Readonly`<`State`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

PureComponent.UNSAFE\_componentWillUpdate

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:742

___

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Inherited from

PureComponent.componentDidCatch

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:611

___

### componentDidMount

▸ **componentDidMount**(): `void`

#### Returns

`void`

#### Overrides

PureComponent.componentDidMount

#### Defined in

node_modules/recharts/types/component/Legend.d.ts:43

___

### componentDidUpdate

▸ **componentDidUpdate**(): `void`

#### Returns

`void`

#### Overrides

PureComponent.componentDidUpdate

#### Defined in

node_modules/recharts/types/component/Legend.d.ts:44

___

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

PureComponent.componentWillMount

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:668

___

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`Props`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

PureComponent.componentWillReceiveProps

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:697

___

### componentWillUnmount

▸ `Optional` **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

PureComponent.componentWillUnmount

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:606

___

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`Props`\> |
| `nextState` | `Readonly`<`State`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

PureComponent.componentWillUpdate

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:727

___

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

PureComponent.forceUpdate

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:482

___

### getBBox

▸ **getBBox**(): `DOMRect`

#### Returns

`DOMRect`

#### Defined in

node_modules/recharts/types/component/Legend.d.ts:45

___

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`<`Props`\> |
| `prevState` | `Readonly`<`State`\> |

#### Returns

`any`

#### Inherited from

PureComponent.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:647

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

PureComponent.render

#### Defined in

node_modules/recharts/types/component/Legend.d.ts:49

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `State` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | ``null`` \| `State` \| (`prevState`: `Readonly`<`State`\>, `props`: `Readonly`<`Props`\>) => ``null`` \| `State` \| `Pick`<`State`, `K`\> \| `Pick`<`State`, `K`\> |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

PureComponent.setState

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:477

___

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`Props`\> |
| `nextState` | `Readonly`<`State`\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

PureComponent.shouldComponentUpdate

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:601

___

### getWithHeight

▸ `Static` **getWithHeight**(`item`, `chartWidth`): { `height`: `any` ; `width?`: `undefined`  } \| { `height?`: `undefined` ; `width`: `any`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |
| `chartWidth` | `number` |

#### Returns

{ `height`: `any` ; `width?`: `undefined`  } \| { `height?`: `undefined` ; `width`: `any`  }

#### Defined in

node_modules/recharts/types/component/Legend.d.ts:32
