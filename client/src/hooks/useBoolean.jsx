import React, { useRef, useState } from 'react'

function useBoolean(initialValue) {
    const [value, setValue] = useState(initialValue)

    const updatevalue = useRef({
        toggle: ()=> setValue(oldValue=> !oldValue),
        on: ()=> setValue(true),
        off: ()=> setValue(false)
    })
  return [value, updatevalue.current]

}

export default useBoolean