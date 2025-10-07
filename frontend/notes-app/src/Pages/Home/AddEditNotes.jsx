import React from 'react'
import TagInput from '../../Components/Input/TagInput'

const AddEditNotes = () => {
  return (
    <div>
        <div className='flex flex-col gap-2'>
            <label className="input-label">TITLE</label>
            <input
               type = "text"
               className='text-2xl text-slate-950 outline-none'
               placeholder='Go to Gym at 5'
            />
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label'>CONTENT</label>
            <textarea
              type = "text"
              className='text-sm text-slate-950 outline-none bg-slate rounded p-2 '
              rows={10}
            />
        </div>
        <div className='mt-3'>
            <label className='input-label'>TAGS</label>
            <TagInput/>
        </div>
        <button className='btn-primary mt-5 p-3' onClick={()=>{}}>
            ADD
        </button>
    </div>
  )
}

export default AddEditNotes