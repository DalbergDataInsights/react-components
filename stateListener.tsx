import { ChangeEvent, useEffect, useRef } from "react"

export interface iObserver {
  args: Array<string>
  func: (args: Record<string | number, unknown>) => void
  prop: string | unknown
}

interface StateProps<T> {
  observers: Array<iObserver>
}

const useDidMountEffect = (func: Function, deps: Array<unknown>) => {
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) func()
    else didMount.current = true
  }, deps)
}

export const useStateListener = <T extends unknown>({
  observers,
  ...props
}: StateProps<T>) => {
  // const handler = ({ subscribers, ...props }) => {
  const uniqueDependencies = [
    ...new Set(
      observers.map((e) => props[e.prop as keyof typeof props] || e.prop)
    ),
  ]

  uniqueDependencies.forEach((dep) => {
    const handler = () => {
      for (const s of observers) {
        const args = {}
        s["args"].forEach((a) => {
          args[a as keyof typeof args] = props[a as keyof typeof args]
        })
        s["func"](args)
      }
    }
    useDidMountEffect(handler, [dep])
  })
}
