import React, { useMemo, useState } from 'react'

const Assignment4 = () => {
  const [wordCount, setwordCount] = useState(0);
  const [paragraph, setParagraph] = useState();

  const para = "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  const wordArray = useMemo(() => {
    return para.split(" ")
  },[]);

  const handleWordCount = () => {
    let count = [];
    for (let i = 0; i < wordCount; i++) {
      count.push(wordArray[Math.floor(Math.random() * wordArray.length)])
    }
    setParagraph(count.join(" "))
  }
  return (
    <>
    <h1 className='flex items-center justify-center w-full pt-20 pb-5 font-bold'>
      Paragraph Generator
    </h1>
    <div className='flex justify-center w-full gap-2 '>
      <input
        className='border-2 w-[50%] border-black '
        type='number'
        name=''
        id=''
        value={wordCount}
        onChange={(e) => {
          setwordCount(e.target.value)
        }}
      />
      <button
        className='p-2 text-white bg-black border-2 border-black rounded-lg'
        onClick={handleWordCount}
      >
        Submit
      </button>
    </div>
    <div className='flex justify-center w-full '>
      <p className='flex items-center justify-center w-[80%] py-4'>
        {paragraph}
      </p>
    </div>
  </>
  )
}

export default Assignment4