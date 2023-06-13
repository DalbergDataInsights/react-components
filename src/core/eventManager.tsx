import { useCallback, ChangeEvent } from "react"
import { iSubscriber } from "./interface"

export const useEventManagement = ({
  subscribers,
}: {
  subscribers: Array<iSubscriber>
}) => {
  function subscribe(
    subscribers: Array<iSubscriber>,
    on: string,
    event: ChangeEvent<HTMLInputElement>
  ) {
    subscribers.forEach((s) => {
      if (s.on == on) {
        s.func(event)
      }
    })
  }
  function generateHandler(on: string) {
    const handler = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        event?.preventDefault()
        subscribe(subscribers, on, event)
      },
      [subscribers]
    )
    return handler
  }

  return {
    onClick: generateHandler("click"),
    onChange: generateHandler("change"),
    onMove: generateHandler("move"),
    onSearch: generateHandler("search"),
    onLeave: generateHandler("leave"),
  }
}
