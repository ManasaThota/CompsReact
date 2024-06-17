import React from 'react'
import className from 'classnames';


const Button = ({ 
    children ,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) => {
  const classes = className(rest.className, 'flex flex-center px-3 py-1.5 border m-0.5',{
    'border border-blue-600 bg-blue-500 text-white' : primary,
    'border border-gray-900 bg-gray-900 text-white' : secondary,
    'border border-green-500 bg-green-500 text-white' : success,
    'border border-yellow-400 bg-yellow-400 text-white' : warning,
    'border border-red-500 bg-red-500 text-white' : danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger
  })
  return (
   <button {...rest} className={classes}>{children}</button>
  )
}

export default Button