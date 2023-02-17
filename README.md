# Publishing new version

## Generating documentation

1. Install typedoc
2. Install typedoc-plugin-markdown
3. Install typedoc-plygin-missing-exports
4. Run `bash npx typedoc --plugin typedoc-plugin-markdown --plugin typedoc-plugin-missing-exports`

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

## NamedGrid

- [ ] Do we need context consume in Grid if it's used on top level only?
- [ ] Make it take in breakpoints - find usecase first

# Core Library

## Wrapper

## Event management

## State observation

## Component initialization

## Utility

### mergeDicts(a,b)

recursively merging all properties of both dictionaries into a
advantage is that if both dictionaries have for example {style: {}}, it will be merged insted of overwritten

### checkStates(name, props)

checks if the name & setName are present in props and adds it there if not -- useful for controlled component initialisation

# Components

For full list of props please see generated documentation in [./docs]

## Data Components

All data components require data prop.\
Data is usually a list of objects (list of rows) unless stated otherwise.

## Table

React table component to conveniently display out of the box data.

### Table Props

data - required - list of records (objects or lists) - data for visualisation\
header - list of iHeader type (see [./docs])
displayHeader - boolean that blanket hides header if needed

### Table Example

```javascript
<Table
  container={{
    // pass container props. Please be careful as container should be standard
    style: {
      // one common usecase is to pass gridArea to component
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

By default, Map generates significant amopunt of subscribers and observers to ease the development. They can be overridden by providing empty init prop.

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
and can be easilly overridden (see iMap)

> I am still deciding whether it's better to pass label and variable in props
> and override it, decision pending

### Map States

click - feature properties of currently active (clicked) polygon\
point - feature properties of currently hovered (mouseover) polygon\
controller - an object with states and functions of currently rendered maps\
controller.fitBounds - function to fit current map bounds (takes bound array [[leftTop, rightTop],[leftBottom, rightBottom]])\
controller.allLabels - all "name" properties existing in the geojson

### Map Props

Basic map usage only consists of data, colors and steps

> still deciding whether color and steps should be a config prop passed together > with values. Exposing createPalette method and leave it for a user to generate
> palette might just be a simpler solution

data - geojson with feature properties\
colors - a list of colors in hex or rgb\
steps - a list of color steps\
!important Since colors are fit in the gaps, there should be 1 more color than steps

### Map Example

```tsx
function App() {
  // define separately or get from config
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

  return (
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
  )
}
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

# Contribution

## Follow library structure to benefit from core functions

## Follow library structure to integrate efficiently
