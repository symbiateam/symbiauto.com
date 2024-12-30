import * as React from "react"

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    className={className}
    ref={ref}
    {...props}
  />
))
Button.displayName = "Button"

export { Button }