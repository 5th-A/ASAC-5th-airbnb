import { useState } from 'react'
import example from './category.json'

function ButtonComponent({ button }) {
  return (
    <li style={{ listStyleType: 'none', margin: '0 10px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          key={button.id}
          className='w-10 h-[49px] flex-col justify-start items-center gap-2 inline-flex'
        >
          <div className='w-6 h-6 justify-center items-center inline-flex' />
          <div className='flex-col justify-start items-start gap-4 flex'>
            <div className="text-neutral-500 text-sm font-['SF Pro']">{button.text}</div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Category() {
  const [buttonInfo, setButtonInfo] = useState(example)

  return (
    <div style={{ width: '1440', height: '90' }}>
      <div style={{ display: 'flex', width: '80%', height: '78' }}>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
          }}
        >
          {buttonInfo.map((button, idx) => (
            <ButtonComponent key={idx} button={button} />
          ))}
        </ul>
        <div style={{ width: '20%' }}>
          <button>filter</button>
        </div>
      </div>
    </div>
  )
}
