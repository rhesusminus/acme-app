import React, { ComponentProps, FC } from 'react'

export const Overlay: FC<ComponentProps<'div'>> = props =>
  React.createElement(props.onClick ? 'button' : 'div', {
    className: `fixed inset-0 bg-black opacity-50 h-full w-full cursor-default`,
    ...props
  })
