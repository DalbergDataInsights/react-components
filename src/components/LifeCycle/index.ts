import { defaults } from "./lifeCycleConfig"
import { LifeCycleComponent } from "./lifeCycleComponent"

export const manifest = {
  name: "LifeCycle",
  version: "0.1",
  defaults: defaults,
  Component: LifeCycleComponent
}


export type { iLifeCycle } from "./lifeCycleInterface"