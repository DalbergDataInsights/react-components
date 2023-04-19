export interface iLifeCycle {
  children: (data: any) => React.ReactNode
  query: any 
  variables?: { 
    [key: string]: any 
  }
  processor?: (args: { data: any }) => any
  processorArgs?: {
    [key: string]: any
  }
  loader?: React.ReactNode
  noData?: React.ReactNode
  errorMessage?: (e: any) => string
  debug?: boolean
}

export interface iNoDataMessage {
    message: string
    props?: any
}