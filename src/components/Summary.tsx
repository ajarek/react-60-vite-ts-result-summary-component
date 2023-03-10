import Items from './Items'

const Summary = () => {
  return (
    <div className='summary'>
      <h3>Summary</h3>
      <Items />
      <div className='btn'>
        <button onClick={() => location.reload()}>Continue</button>
      </div>
    </div>
  )
}

export default Summary
