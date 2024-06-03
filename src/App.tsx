import BasicInformation from "./components/BasicInformation"
import FormTask from "./components/FormTask"

const App = () => {

  

  return (
    <div className=" bg-amber-100">
      <div className="flex flex-col bg-white rounded-2xl w-full h-full px-10 mt-4 gap-5">
        <BasicInformation />
        <FormTask />
      </div>
    </div>
  )
}

export default App