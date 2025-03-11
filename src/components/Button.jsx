import React from 'react'

import { useStateContext } from '../contexts/ContextProvider'

export default function Button(props) {
  const { setIsClicked, initialState } = useStateContext()

  return (
    <button type='button' onClick={() => setIsClicked(initialState)} style={{ backgroundColor: props.bgColor, color: props.color, borderRadius: props.borderRadius}}
    className={` text-${props.size} p-3 w-${props.width} hover:drop-shadow-xl hover:bg-${props.bgHoverColor}`}>
      {props.icon}{props.text}
    </button>
  )
}
