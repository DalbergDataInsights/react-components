[@dalbergdatainsights/react-components](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ImageData

# Interface: ImageData

[<internal>](../modules/internal_.md).ImageData

The underlying pixel data of an area of a <canvas> element. It is created using the ImageData() constructor or creator methods on the CanvasRenderingContext2D object associated with a canvas: createImageData() and getImageData(). It can also be used to set a part of the canvas by using putImageData().

## Table of contents

### Properties

- [colorSpace](internal_.ImageData.md#colorspace)
- [data](internal_.ImageData.md#data)
- [height](internal_.ImageData.md#height)
- [width](internal_.ImageData.md#width)

## Properties

### colorSpace

• `Readonly` **colorSpace**: [`PredefinedColorSpace`](../modules/internal_.md#predefinedcolorspace)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9072

___

### data

• `Readonly` **data**: `Uint8ClampedArray`

Returns the one-dimensional array containing the data in RGBA order, as integers in the range 0 to 255.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9074

___

### height

• `Readonly` **height**: `number`

Returns the actual dimensions of the data in the ImageData object, in pixels.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9076

___

### width

• `Readonly` **width**: `number`

Returns the actual dimensions of the data in the ImageData object, in pixels.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9078
