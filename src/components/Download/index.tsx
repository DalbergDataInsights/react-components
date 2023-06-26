import { DownloadComponent } from "./downloadComponent"
import { defaults } from "./downloadConfig"

export const manifest = {
  name: "Download",
  version: "1.0",
  defaults: defaults,
  Component: DownloadComponent,
}

export type { iDownload } from "./downloadInterface"
