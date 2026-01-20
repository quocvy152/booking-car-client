declare module 'rc-slider' {
  import { Component } from 'react'

  export interface SliderProps {
    min?: number
    max?: number
    value?: number | number[]
    defaultValue?: number | number[]
    step?: number | null
    marks?: Record<number, React.ReactNode | { style?: React.CSSProperties; label?: React.ReactNode }>
    included?: boolean
    disabled?: boolean
    dots?: boolean
    range?: boolean
    reverse?: boolean
    vertical?: boolean
    allowCross?: boolean
    pushable?: boolean | number
    tooltip?: boolean | { formatter?: (value: number) => React.ReactNode }
    onChange?: (value: number | number[]) => void
    onBeforeChange?: (value: number | number[]) => void
    onAfterChange?: (value: number | number[]) => void
    handle?: (props: any) => React.ReactNode
    trackStyle?: React.CSSProperties | React.CSSProperties[]
    handleStyle?: React.CSSProperties | React.CSSProperties[]
    railStyle?: React.CSSProperties
    dotStyle?: React.CSSProperties
    activeDotStyle?: React.CSSProperties
    className?: string
    prefixCls?: string
  }

  export default class Slider extends Component<SliderProps> {}
}

