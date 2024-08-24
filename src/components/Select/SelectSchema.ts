  
export interface SelectSchema<T extends string> {
    options?: string[],
    value?: T,
    onChange?: (val: T) => void,
    className?: string,
    name?: string
}
  