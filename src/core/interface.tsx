import { ChangeEvent } from "react"

export interface iWrapper {
  Component: React.FC<any>
  defaults: any
  name: string
  init?: ({}: iReactive) => void
}

export interface iReactive {
  subscribers?: iSubscriber[]
  observers?: iObserver[]
  props?: {
    container?: any
    controller?: any
    key?: any
    [key: string]: any
  } & any
}

export interface iObserver {
  args: Array<string>
  func: (args: Record<string | number, unknown>) => void
  prop: string | unknown
}

export interface iSubscriber {
  on: string
  func: (event: ChangeEvent<HTMLInputElement>) => void
}
