import React from 'react'

export default function Button(props) {

  return (
    <button type='button' style={{ backgroundColor: props.bgColor, color: props.color, borderRadius: props.borderRadius}}
    className={`text-${props.size} p-3 hover:drop-shadow-xl`}>
      {props.text}
    </button>
  )
}
