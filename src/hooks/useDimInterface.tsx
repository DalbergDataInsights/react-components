export interface useDimInterface {
    getter: string | ((arg: any) => void)
    on: string
    radiusOffset: number
}