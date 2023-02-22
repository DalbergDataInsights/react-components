- [Consuming packages](#consuming-packages)
- [Developer TODO and Roadmap](#developer-todo-and-roadmap)
  * [NamedGrid](#namedgrid)
  * [Table](#table)
- [Core Library](#core-library)
  * [Wrapper](#wrapper)
  * [Event management](#event-management)
  * [State observation](#state-observation)
  * [Component initialization](#component-initialization)
  * [Props passthrough](#props-passthrough)
  * [Component styling](#component-styling)
  * [Utility](#utility)
    + [mergeDicts(a,b)](#mergedicts-a-b-)
    + [checkStates(name, props)](#checkstates-name--props-)
- [Components](#components)
  * [Toggle Button Component](#toggle-button-component)
    + [Toggle Button States](#toggle-button-states)
    + [Toggle Button Props](#toggle-button-props)
    + [Toggle Button Example](#toggle-button-example)
  * [Table](#table-1)
    + [Table Props](#table-props)
    + [Table Props Passthrough](#table-props-passthrough)
    + [Table Example](#table-example)
  * [Map](#map)
    + [Map Assumptions](#map-assumptions)
    + [Map States](#map-states)
    + [Map Props](#map-props)
    + [Map Example](#map-example)
- [Layouts](#layouts)
  * [NamedGrid](#namedgrid-1)
  * [NamedGrid Props](#namedgrid-props)
  * [NameGrid Example](#namegrid-example)
- [Contribution](#contribution)
  * [Integrate with framework](#integrate-with-framework)
  * [Embed your code](#embed-your-code)
  * [Generating documentation](#generating-documentation)


# Consuming packages

1. In your project, create .npmrc

```ini
registry=https://registry.npmjs.org

@dalbergdatainsights:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<your auth token>
always-auth=true
```

2. Get your GitHub token and plug it in
3. Add .npmrc to your .gitignore, don't push your token!

# Developer TODO and Roadmap

- [ ] come up with a better props drill ideas
- [ ] decide on the GridLayout directly into the container / new component
- [ ] decide on the container defaults locations
- [ ] Wrapper component still rerenders => research React docs for causes

## NamedGrid

- [ ] Do we need context consume in Grid if it's used on top level only?
- [ ] Make it take in breakpoints - find usecase first

## Table

- [ ] Move component logic separately
- [ ] Add sort
- [ ] Add highlight

# Core Library

## Wrapper

## Event management

An easier way of creating and assigning common events to components.
Events are then packed in a single function that is subscribing on a certain event type.

Common events currently include:

- click: onClick -> usually sets click state
- change: onChange -> triggers when active state changes (for dropdown)
- move: onMove -> usually sets point state

To register your own event, pass a list of subscribers in the prop of any component.

```js
<Component
  {...props}
  subscribers={[
    {
      // fire on click
      on: "click",
      // console.log the click event (will contain click target)
      func: (event) => {
        console.log(event)
      },
    },
  ]}
/>
```

## State observation

State events are triggered when a dependency is changing instead of when a common event is occurring. You can pass any external or internal prop. The powerful difference of the state observers is that instead of event, the event handler can request arguments from withing the component without hoarding states in the parent component.

```js
// example from map click handler
<Component
  {...props}
  observers={[
    {
      // fire when "click" state of the component changes
      prop: "click",
      // request internal props to be passed as args to the handler
      args: ["controller", "click", "bounds", "data"],
      func: (args) => {
        // click was requested above
        // don't forget to avoid unnecessary rerendering
        if (args.click) {
          const newBound = getBound(args.click?.feature?.geometry.coordinates)
          const noClickRegions = args.controller.allLabels.filter(
            (l) => l !== args.click.name
          )
          // you can even set new properties to states!
          args.click["noClick"] = noClickRegions
          // and access functions that would usually be enabled only with refs!
          args.controller?.fitBounds(newBound)
        } else {
          args.controller?.fitBounds(args.bounds)
        }
      },
    },
  ]}
/>
```

## Component initialization

Every component is initialized with an init function that is executed in the body of a wrapper component before events and states are registered.
With a list of utility methods, you can overwrite an init function by either importing component directly or passing an **init** prop in the body of the component.

```jsx
<Component  init={(subs, obs, props) => { ...custom logic here}}/>
```

Most of the interactions, however can be achieved with props passthrough, config context and event management system.

## Props passthrough

You can pass "props" prop to any component. Each component states which props are
passed through. Usually component hierarchy consists of container - a div in a wrapper
component that contains component metadata and initializes event and state listeners and component-specific structure that starts with a same name component frame (e.g. table for Table, map for Map) and children components where applicable (e.g. header, row, cell for Table, option for Switch etc)

## Component styling

Every component comes with default styling. The user can overwrite entire styling sheets by passing the config in the context in a format of

```js
  {
    ComponentName: {
      // normal props
      props: {
        // props passthrough
      }
    }
    OtherComponentName: {...}
  }
```

Alternatively, each component CSS can be overwritten by passing props separately.
Default props are overwritten by context props that are overwritten by local props.

## Utility

### mergeDicts(a,b)

recursively merging all properties of both dictionaries into a
advantage is that if both dictionaries have for example {style: {}}, it will be merged instead of overwritten

### checkStates(name, props)

checks if the name & setName are present in props and adds it there if not -- useful for controlled component initialization

# Components

For full list of props please see generated documentation in [./docs]

## Toggle Button Component

Switch/Radio style button with one active button at a time.

### Toggle Button States

- click - feature properties of currently active (clicked) button
- point - feature properties of currently hovered (mouseover) button

### Toggle Button Props

- options - list of iToggleButtonOption objects with at least value, possibly name and active boolean

### Toggle Button Example

```jsx
<ToggleButtonGroup
  options={[
    // pass config options here
    {
      name: "Region",
      value: "1",
    },
    // pass active if you want this one to be selected by default
    {
      name: "District",
      value: "2",
      selected: true,
    },

    {
      name: "Centre",
      value: "3",
    },
    // you can change the css or the layout by passing components
    props: {
      // wrapper container
      container: {
        style: {
          padding: 0
        }
      }
      // root component element
      group: {
        // properties of a group element e.g. group is a div
        style: {
          // will make the buttons flow vertically
          flexDirection: "column"
        }
      },
      button: {
        // add button props
        type: "button",
        formtarget: "form-id",
        style: {
          // add button styling
        }
      },
      point: {
        style: {
          // additive style to the pointed at button
        }
      },
      click: {
        style: {
          // additive style to the clicked at button
        }
      }
    }
  ]}
/>
```

---

## Table

React table component to conveniently display out of the box data.

### Table Props

- data - required - list of records (objects or lists) - data for visualization\
- header - list of iHeader type (see [./docs])
- displayHeader - boolean that blanket hides header if needed

### Table Props Passthrough

- table - table container (MUI Grid container)
- head - table head row (MUI Grid items row-wise for first row)
- row - table row (MUI Grid items row-wise)
- cell - each table cell (cell renderer)

### Table Example

```javascript
<Table
  container={{
    // pass container props. Please be careful as container should be standard
    style: {
      // one common use case is to pass gridArea to component
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
      type: "text",
      hidden: false, // set this to true if you want to hide the column
      // you can pass custom here, then you need to pass renderer
      // renderer: (props) => <div>{props.data {data is a value of a cell}</div> example of simple div around the value
      // props: {},  any props you want to send to each cell of a given column
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

## Map

React map component built around react-map-gl & mapbox-gl to rapidly
develop map components.

By default, Map generates significant amount of subscribers and observers to ease the development. They can be overridden by providing empty init prop.

### Map Assumptions

By default, label is called "name" (e.g. org unit name)
By default, value is called "value"
You can add more keys in properties to enrich map tooltips as
currently tooltips are being rendered as

```
label: name
variable: value units
```

current tooltips are generated using method that take in corresponding info state
and can be easily overridden (see iMap)

> I am still deciding whether it's better to pass label and variable in props
> and override it, decision pending

### Map States

- click - feature properties of currently active (clicked) polygon\
- point - feature properties of currently hovered (mouseover) polygon\
- controller - an object with states and functions of currently rendered maps\
  - controller.fitBounds - function to fit current map bounds (takes bound array [[leftTop, rightTop],[leftBottom, rightBottom]])\
  - controller.allLabels - all "name" properties existing in the geojson

### Map Props

Basic map usage only consists of data, colors and steps

> still deciding whether color and steps should be a config prop passed together > with values. Exposing createPalette method and leave it for a user to generate
> palette might just be a simpler solution

data - geojson with feature properties\
colors - a list of colors in hex or rgb\
steps - a list of color steps\
!important Since colors are fit in the gaps, there should be 1 more color than steps

### Map Example

```jsx

const colors = [
  "#000000",
  "#006837",
  "#a50026",
  "#d73027",
  "#f46d43",
  "#fdae61",
  "#fee08b",
  "#ffffbf",
  "#d9ef8b",
  "#66bd63",
  "#1a9850",
  "#006837",
]
const steps = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


<div style={{ height: "100vh", width: "100vw" }}>
  // consume config here
  <ComponentContextProvider config={appConfig}>
    // data here is geojson that contains at least name and value feature
    properties
    <Map data={data} colors={colors} steps={steps}>
      // you can pass extra children to the map // since legend is only
      connected to a map with colors and not logic, it makes sense to pass
      it separately
      <MapLegend colors={colors} steps={steps} />
      // controls are reexported from react-map-gl
      <MapFullscreenControl />
    </Map>
  </ComponentContextProvider>
</div>

```

For examples of creating custom events you can read components/Map/logic file,
there is an example coming from the default logic of the map

```javascript
const useMapStates = (subscribers, observers, props) => {
  // adding states
  checkState("point", props)
  checkState("click", props)
  // adding onMove sub
  subscribers.unshift({
    on: "move",
    func: (event) => {
      const featureData = getInfoFromMapEvent(event)
      props["setPoint"](featureData)
    },
  })

  subscribers.unshift({
    on: "click",
    func: (event) => {
      let featureData = getInfoFromMapEvent(event)
      if (featureData) {
        featureData =
          props.click?.name === featureData.name ? undefined : featureData
      }
      props["setClick"](featureData)
    },
  })

  observers.unshift({
    args: ["controller", "click", "bounds", "data"],
    func: (args) => {
      if (args.click) {
        const newBound = getBound(args.click?.feature?.geometry.coordinates)
        const noClickRegions = args.controller.allLabels.filter(
          (l) => l !== args.click.name
        )
        args.click["noClick"] = noClickRegions
        args.controller?.fitBounds(newBound)
      } else {
        args.controller?.fitBounds(args.bounds)
      }
    },
    prop: "click",
  })
}
```

# Layouts

## NamedGrid

Component that allows to map areas of the screen arbitrary. More on css grids and grid templates can be red here: https://css-tricks.com/wp-content/uploads/2022/02/css-grid-poster.png

## NamedGrid Props

areas - list of lists of grid areas (see example)
columns - list of column sizes
rows - list of row sizes
sizes support all grid sizes, including common px, rem, vh as well as relative as fr
children and style are passed through as usual

## NameGrid Example

```jsx
<ComponentContextProvider config={{}}>
  <div style={{ height: "100vh", width: "100vw", backgroundColor: "white" }}>
    <NamedGrid
      columns={["5fr", "3fr", "4fr"]} // divide into 5,3 and 4 fractions of the screen
      rows={["2fr", "5fr", "5fr", "1fr"]} // divide into 2, 5, 5, 1 fraction
      // define grid areas to attach components do
      areas={[
        ["area1", "area3"],
        ["area2", "area3"],
        ["footer", "footer"],
      ]}
    >
      <Table
        data={[{ index: 2, name: "orange", value: 0.52, qt: 20 }]}
        // unmarked components will go in the first available area, but only in 1 slot
      />
      <Table
        // you can pass gridArea to any component's style
        container={{
          style: { gridArea: "area3" },
        }}
        data={[
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
          { index: 2, name: "apple", value: 0.52, qt: 20 },
        ]}
      />
      <Table data={[{ index: 2, name: "lemon", value: 0.52, qt: 20 }]} />
      <Empty
        gridArea="footer"
        color="yellow"
        // or define a component that takes gridArea in props
      />
    </NamedGrid>
  </div>
</ComponentContextProvider>
```

# Contribution

## Integrate with framework

Make sure that you follow philosophy and the assumptions of the framework

## Embed your code

1. Add component folder
2. Separate component render, logic, config
3. Define component manifest
4. Instantiate export with wrapper from related file (components/core/layouts)
5. Add README section for the component

## Generating documentation

1. Install typedoc
2. Install typedoc-plugin-markdown
3. Install typedoc-plugin-missing-exports
4. Run `npx typedoc --plugin typedoc-plugin-markdown --plugin typedoc-plugin-missing-exports`

> Don't forget to increment your version before publishing!
