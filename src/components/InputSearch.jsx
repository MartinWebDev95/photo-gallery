'use client'

const InputSearch = () => {
  return (
    <form className='flex items-center gap-4 lg:gap-6 w-full lg:w-[600px]'>
      <input 
        type="text" 
        name="search" 
        id="search" 
        placeholder='Search photos... '
        className='neomorphism_inset placeholder:text-black px-8 py-4 w-full'
      />

      <button type='submit' className='neomorphism px-8 py-4'>
        Search
      </button>
    </form>
  )
}

export default InputSearch