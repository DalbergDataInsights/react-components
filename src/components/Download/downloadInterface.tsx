export interface iDownload {
  data?: []
  dtype?: string
  name?: string
  Icon?: ({ props }: { props: object }) => JSX.Element
  props?: object
}
