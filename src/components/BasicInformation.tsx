import logo from '../assets/logo.svg'
const BasicInformation = () => {
  return (
    <div className='flex flex-col gap-2 '>
        <img src={logo} alt="" className='w-16 h-16'/>
        <h1 className="text-3xl text-current uppercase ">to do list</h1>
        <p className="text-lg text-current">Remember your task everyday</p>
    </div>
  )
}

export default BasicInformation