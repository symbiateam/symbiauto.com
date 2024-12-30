import * as React from "react"

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    className={className}
    ref={ref}
    {...props}
  />
))
Input.displayName = "Input"

export { Input }