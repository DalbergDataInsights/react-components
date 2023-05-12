- [Dalberg Data Insights React Components Library](#dalberg-data-insights-react-components-library)
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
  * [Hooks](#hooks)
    + [useDim](#usedim)
- [Components](#components)
  * [StatusColor Component](#statuscolor-component)
    + [StatusColor Props](#statuscolor-props)
    + [StatusColor Props Passthrough](#statuscolor-props-passthrough)
    + [StatusColor Example](#statuscolor-example)
  * [DropdownButton Component](#dropdownbutton-component)
    + [DropdownButton States](#dropdownbutton-states)
    + [DropdownButton Props](#dropdownbutton-props)
    + [DropdownButton Props Passthrough](#dropdownbutton-props-passthrough)
    + [DropdownButton Example](#dropdownbutton-example)
  * [Toggle Button Component](#toggle-button-component)
    + [Toggle Button States](#toggle-button-states)
    + [Toggle Button Props](#toggle-button-props)
    + [Toggle Button Props Passthrough](#toggle-button-props-passthrough)
    + [Toggle Button Example](#toggle-button-example)
  * [Table](#table-1)
    + [Table Props](#table-props)
    + [Table Props Passthrough](#table-props-passthrough)
    + [Table Example](#table-example)
  * [Map](#map)
    + [Map Assumptions](#map-assumptions)
    + [Map States](#map-states)
    + [Map Props](#map-props)
    + [Map Props Passthrough](#map-props-passthrough)
    + [Map Layers Model](#map-layers-model)
    + [Tooltip](#tooltip)
    + [Map Example](#map-example)
  * [Progress Circle](#progress-circle)
    + [Progress Circle Props](#progress-circle-props)
    + [Progress Circle Props Passthrough](#progress-circle-props-passthrough)
    + [ProgressCircle Example](#progresscircle-example)
  * [Progress Bar](#progress-bar)
    + [Progress Bar Props](#progress-bar-props)
    + [Progress Bar Props Passthrough](#progress-bar-props-passthrough)
    + [Progress Bar Example Usage](#progress-bar-example-usage)
  * [Line Chart](#line-chart)
    + [Line Chart Props](#line-chart-props)
    + [Line Chart Props Passthrough](#line-chart-props-passthrough)
    + [Line Chart Example](#line-chart-example)
  * [Chart](#chart)
    + [Chart Props](#chart-props)
    + [Chart Props Passthrough](#chart-props-passthrough)
    + [Line Chart Example](#line-chart-example-1)
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

- [ ] come up with better props drill ideas
- [ ] decide on the GridLayout directly into the container / new component
- [ ] decide on the container defaults locations
- [ ] Wrapper component still rerenders => research React docs for causes
- [ ] Hover and focus application is problematic
- [ ] Integrating tailwind in the framework would be beneficial, but requires className merge tech

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
Events are then packed in a single function that is subscribing to a certain event type.

Common events currently include:

- click: onClick -> usually sets "click" state
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

State events are triggered when a dependency is changing instead of when a common event is occurring. You can pass any external or internal prop. The powerful difference between the state observers is that instead of an event, the event handler can request arguments from within the component without hoarding states in the parent component.

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
With a list of utility methods, you can overwrite an init function by either importing the component directly or passing an **init** prop in the body of the component.

```jsx
<Component  init={(subs, obs, props) => { ...custom logic here}}/>
```

Most of the interactions, however, can be achieved with props passthrough, config context and event management system.

## Props passthrough

You can pass the "props" prop to any component. Each component states which props are
passed through. Usually, component hierarchy consists of a container - a div in a wrapper
component that contains component metadata and initializes event and state listeners and a component-specific structure that starts with a same name component frame (e.g. table for Table, map for Map) and children components where applicable (e.g. header, row, cell for Table, option for Switch etc)

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

recursively merging all properties of both dictionaries into an
advantage is that if both dictionaries have for example {style: {}}, it will be merged instead of overwritten

### checkStates(name, props)

checks if the name & setName are present in props and adds it there if not -- useful for controlled component initialization

## Hooks

### useDim

useDim hook gets updated component prop on window load and resize. Commonly used within the framework to respond to the viewport or container values.

```jsx
import { useDim } from "../../hooks/useDim"

export const Component = () => {
  // by default it will return width and height of the component
  const { ref, prop: {width, height} } = useDim()
  // but it can be anything with a custom getter - for example a radius of an svg circle
  const { ref: refCircle, prop: {width, height} } = useDim({ getter: (c) => c.r.baseVal.value })

  return (
    <>
      <div
      // pass to a div directly
      ref={ref}>
        <svg>
          <circle
            cx={"50%"}
            cy={"50%"}
            r={"calc(50% - 0.5rem)"}
            // you need to pass ref to the target component
            ref={refCircle}
          />
        </svg>
      </div>
    </>
  )
}


```


# Components

For the full list of props please see generated documentation in [./docs]

## StatusColor Component

Span of a given size and color to imitate the semaphore status. Animated and centered inside the container.

### StatusColor Props

- color: the color of the circle

### StatusColor Props Passthrough

It is necessary to mention that this component edits default container properties, initializing wrapper and flexbox to make sure it's tightly centered in the middle of the wrapper.

- size - diameter of the span
- circle - span props

### StatusColor Example

```jsx
<Status
  color={"#F6BC8E"}
  // pass size directly in the component to make it bigger
  size="2rem"
  props={{
    // alternatively size in the root props if you want to make it bigger
    // size: "2rem",
    // style it like a square with rounded corners and longer transition
    circle: { style: { borderRadius: "0.25rem", transition: "1.5s" } },
  }}
/>
```

## DropdownButton Component

React select that exposes click and point properties. Allows for custom tooltips of each value/component name.

### DropdownButton States

- click - feature properties of the currently active (clicked) button
- point - feature properties of the currently hovered (mouseover) button

### DropdownButton Props

- options - list of iDropdownOptions objects with at least value, possibly name and selected boolean

  - value: string
  - selected: boolean
  - label?: string
  - name?: string
  - tooltip?: string

- label - string to append to a selected label

### DropdownButton Props Passthrough

- dropdown - root component (div)
- button - container for label and arrow icon (div)
- label - label and selected name (div)
- icon - an svg container (mui SvgIcon)
- menu - container with dropdown options (div)
- option - item in the menu (a)

It is essential for the integrity of the component to not overwrite the display: flex and flex-flow CSS.

### DropdownButton Example

```jsx
<Dropdown
  label="Coverage: "
  options={[
    { value: "BCG", name: "BCG" },
    { value: "VAR", name: "VAR", selected: true, label: "(1)" },
    { value: "PENTA1", name: "Penta 1" },
    { value: "PENTA3", name: "Penta 3", tooltip: "Second Penta vaccine" },
  ]}
/>
```

## Toggle Button Component

Switch/Radio style button with one active button at a time.

### Toggle Button States

- click - feature properties of the currently active (clicked) button
- point - feature properties of the currently hovered (mouseover) button

### Toggle Button Props

- options - list of iToggleButtonOption objects with at least value, possibly name and selected boolean

### Toggle Button Props Passthrough

- group - root component (div)
- button - option (button)
- click - CSS of the clicked button (merge with button)
- point - CSS of the pointed button (merge with button)

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

React table component to conveniently display out-of-the-box data.

### Table Props

- data - required - list of records (objects or lists) - data for visualization\
- header - list of iHeader type (see [./docs])
- displayHeader - boolean that blanket hides header if needed

### Table Props Passthrough

- table - table container (MUI Grid container)
- head - table head row (MUI Grid items row-wise for the first row)
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

By default, Map generates a significant amount of subscribers and observers to ease the development. They can be overridden by providing an empty init prop.

### Map Assumptions

By default, the label is called "name" (e.g. org unit name)
By default, the value is called "value"
You can add more keys in properties to enrich map tooltips as
currently tooltips are being rendered as

```
label: name
variable: value units
```

current tooltips are generated using the method that takes in corresponding info state
and can be easily overridden (see iMap)

> I am still deciding whether it's better to pass label/name and variable in props
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

- data - geojson with feature properties\
- colors - a list of colors in hex or rgb\
- steps - a list of color steps\
  !important Since colors fit in the gaps, there should be 1 more color than the steps

### Map Props Passthrough

- map - root map component (react-map-gl Map)
- layers - each map layer
- tooltip - both point and click tooltips (Tooltip component, wrapper for rendering function)

### Map Layers Model

Generally speaking, we are following MapboxGL layer model. To create a new layer, add a layer of the following format under layers in the props passthrough:

```js
[layer-id] : {
  type: [layer-type],
  paint: {
    ...[paint-props]
  },
  layout: {
    ...[layout-props]
  },
  filter: [layer-filter]
}
```

The filter should be an expression-type prop that is following MapboxGL model ["==", "name", f(states)] with one exception: the third argument is a function of states that returns value to compare the expression to. States include click, point etc.

The data layer is a bit of a special case. You can still pass every layer-specific property like layout, but you want to leave paint-[type]-color property to be generated automatically based on steps, colors and value columns.


```js
[layer-id] : {
  type: [layer-type],
  paint: {
    ...[paint-props]
  },
  layout: {
    ...[layout-props]
  },
  filter: [layer-filter],
  // data-specific-props
  steps: [steps],
  colors: [colors],
  naColor: [naColor | "#BFBFBF"],
  valueColumn: [valueColumn | "value"]
}
```

Usually, you don't want colors or steps fixed in your layout props if you are not working with monotoneous same-type data across the entire application and instead pass dynamic steps or colors or both in your component props instead.

The downside of adding layers is that if any layers beyond defaults need to be added, a user has to specify all layers that they want to be displayed - that generate redundancy. See an example below.

```js
<Map
  {...props}
  // this layer will be added to the default layers list
  props={{
    layers: {
      label: {
        type: "symbol",
        layout: {
          "text-field": ["get", "name"],
          "text-offset": [0, 0.6],
          "text-anchor": "center",
          "text-size": 10,
        },
      },
    },
  }}
  // you have to specify all layers that need to be displayed
  layers={["outline", "blur", "highlight", "label"]}

  />
```

Available layers are:
data - choropleth by default (mandatory)
outline - border around each polygon (enabled)
blur - blur all other polygons when one of them is clicked (enabled)
highlight - highlight border around the clicked polygon (enabled)
label - display name of the polygon (disabled)

### Tooltip

The tooltip has at least 5 values it sources from the geojson data: label, variable, name, value and units.

- name - name of the highlighted area
- label - name description/ highlighted area level
- variable - value description
- units - value suffix

These variables can be added to the geojson as given in the example below:

```jsx
const geoData = geoJson.features.map((e) => ({
  ...e,
  properties: {
    ...e.properties,
    variable: "BCG",
    units: "%",
    label: "Region"
  },
}))

return  (
  <div>
    <Map
      data = {{...geoJson, features: geoData }}
      colors = {colors}
      steps={steps}
    />
  <div/>
)

```

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

For examples of creating custom events you can read components/Map/logic files,
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

## Progress Circle

React component built around SVG to help visualize data conveniently . Has the ability to visualize infinite progress and render customized content at the center.

### Progress Circle Props

- value - required - the proportion of the whole to be represented.
- color?: string
- minValue?: number
- maxValue?: number
- suffix?: string | any
- props?: Any

### Progress Circle Props Passthrough

- circle - the SVG element representing the whole
- total - the SVG element representing the total
- progress - the SVG element representing the progress
- value - the element containing the value
- counter - a counter value to aid in animations (from react-countup)

### ProgressCircle Example

```jsx
// progress into my savings
<ProgressCircle value={100} minValue={10} maxValue={150} suffix={"$"} />
```

## Progress Bar

React component that displays a progress bar based on a given value\

### Progress Bar Props

- value - required - represents the current value of the progress bar.
- color - optional - sets the color of the progress bar. The default value is "#7AA995".
- maxValue – optional - sets the maximum value of the progress bar. The default value is 100.
- minValue - optional - sets the minimum value of the progress bar. The default value is 0.
- suffix – optional - sets the suffix to be added to the value displayed in the progress bar. The default value is "%".
- props – optional – allows for additional properties to be passed to the element

### Progress Bar Props Passthrough

- bar – root component (div)
- total – container for current progress (div)
- progress – style formatting on current progress
- labels – container for the labels(div)
- label – style formatting on each label

### Progress Bar Example Usage

```jsx
  <ProgressBar
    value="85"
    props={{
        // root component container
        bar: {
          style: {
            padding: 0,
            margin: 0,
          },
        },
        // total div wraps progress bar
        total: {
        },
        progress: {
        // progress bar is set to a % of a total div
        },
        labels: {
        // holds the progress bar labels (min and max value)
        },
        label: {
        // additive styling formats for the labels used (min, max, progress value)
        },
        value: {
        // specific styling for progress value
        }
      }}
    />
```

## Line Chart

React component built on top of the [Recharts](https://recharts.org/en-US) library to help visualize data on a line chart.

### Line Chart Props
- data - required : List of objects of  rows
- traces - required: an object to specify the data elements {
    dataKey: string
    stroke: string
    activeDot?: any
  }[]
- children - Additional Chart components like   `<XAxis />`, `<YAxis />`, `<CartesianGrid />` and `<Legend />`  with their respective customized properties.
- props - optional: allows for passing additional properties to the component

### Line Chart Props Passthrough

- chart - `<ResponsiveContainer />` element properties
- trace - `<Line />` element properties
- tooltip - `<Tooltip />` element properties

### Line Chart Example

```jsx
  import { ChartLegend, ChartGrid } from '@dalbergdatainsights/react-components'
  // visualizing the monthly vaccination levels for two drugs x and y.
  const data = [
            { "pe": "Jan", "x": 4, "y": 8 },
            { "pe": "Feb", "x": 5, "y": 16 },
            { "pe": "Mar", "x": 8, "y": 32 },
            { "pe": "Apr", "x": 20, "y": 48 },
            { "pe": "May", "x": 35, "y": 56 },
            { "pe": "Jun", "x": 37, "y": 69 },
            { "pe": "Jul", "x": 45, "y": 78 },
            { "pe": "Aug", "x": 39, "y": 89 },
            { "pe": "Sep", "x": 46, "y": 88 },
            { "pe": "Oct", "x": 53, "y": 94 },
            { "pe": "Nov", "x": 54, "y": 96 },
            { "pe": "Dec", "x": 60, "y": 100 },
            ]
  // plot
  <LineChart data={data}
    X={'pe'}
    traces={[
      {dataKey: "x", stroke: "#D1D1D6"},
      {dataKey: "y", stroke: "#8E8E93"},
    ]}
  >
    <ChartLegend />
    <ChartGrid />
  </LineChart>
  ```

## Chart

React component built on top of the [Recharts](https://recharts.org/en-US) library to help visualize data on a chart.

### Chart Props
- data - required: list of objects of rows
- traces - optional: list of objects to specify which data columns to visualize with dataKey at the very least {
    dataKey: string
  }[] (see iTrace)
- axis - optional: a list of exact length 2 [xaxis, yaxis] - properties to unwrap in X and Y axis in the component. Can pass [undefined, {xaxis}] to remove one of them (see iAxis)
- children - Additional Chart components like   `<XAxis />`, `<YAxis />`, `<CartesianGrid />` and `<Legend />`  with their respective customized properties.
- props - optional: allows for passing additional properties to the component

### Chart Props Passthrough

- chart: `<ResponsiveContainer />` element properties
- trace: `<Line />` element properties
- tooltip: `<Tooltip />` element properties
- x/yaxis: `<XAxis />` and `<YAxis />`

### Line Chart Example

```jsx
  import { ChartLegend, ChartGrid, Chart } from '@dalbergdatainsights/react-components'
  // visualizing the monthly vaccination levels for two drugs x and y.
  const data = [
            { "pe": "Jan", "x": 4, "y": 8 },
            { "pe": "Feb", "x": 5, "y": 16 },
            { "pe": "Mar", "x": 8, "y": 32 },
            { "pe": "Apr", "x": 20, "y": 48 },
            { "pe": "May", "x": 35, "y": 56 },
            { "pe": "Jun", "x": 37, "y": 69 },
            { "pe": "Jul", "x": 45, "y": 78 },
            { "pe": "Aug", "x": 39, "y": 89 },
            { "pe": "Sep", "x": 46, "y": 88 },
            { "pe": "Oct", "x": 53, "y": 94 },
            { "pe": "Nov", "x": 54, "y": 96 },
            { "pe": "Dec", "x": 60, "y": 100 },
            ]
  <Chart
    // Linechart, see recharts to see available charts
    type="Line"
    data={data}
    traces={[
      {dataKey: "x", stroke: "#D1D1D6"},
      {dataKey: "y", stroke: "#8E8E93"},
    ]}
    // XAxis pe, YAxis display with no label
    axis={[{dataKey: "pe"}, {}]}
  >
    <ChartLegend />
    <ChartGrid />
  </Chart>
  ```

# Layouts

## NamedGrid

The component that allows mapping areas of the screen arbitrarily. More on CSS grids and grid templates can be read here: https://css-tricks.com/wp-content/uploads/2022/02/css-grid-poster.png

## NamedGrid Props

- areas: list of lists of grid areas (see example)
- columns: list of column sizes
- rows: list of row sizes

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

Make sure that you follow the philosophy and the assumptions of the framework

## Embed your code

1. Add component folder
2. Separate component render, logic, config
3. Define component manifest
4. Instantiate export with the wrapper from related file (components/core/layouts)
5. Add a README section for the component
6. Generate a new table of content (https://ecotrust-canada.github.io/markdown-toc/)
7. Generate documentation
8. Iterate a version

## Generating documentation

1. Install typedoc
2. Install typedoc-plugin-markdown
3. Install typedoc-plugin-missing-exports
4. Run `npx typedoc --plugin typedoc-plugin-markdown --plugin typedoc-plugin-missing-exports`
5. If (4) does not work, try `npx typedoc --plugin typedoc-plugin-markdown --skipErrorChecking`

> Don't forget to increment your version before publishing!
