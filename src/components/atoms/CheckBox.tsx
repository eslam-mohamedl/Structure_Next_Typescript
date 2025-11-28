import React from 'react'
import Input from './Input'
import { CheckIcon } from 'lucide-react'

function CheckBox() {
  return (
          <div className="checkBox relative w-6 h-6">
            <Input className='peer appearance-none border-2 checked:bg-secondary cursor-pointer w-6 h-6 border-secondary  rounded-md' type={"checkbox"} id='terms' name='terms' />
            <CheckIcon className='absolute text-white left-1/2 top-1/2 -translate-1/2 hidden peer-checked:block pointer-events-none' size={15} />
          </div>
  )
}

export default CheckBox