import BasicInformation from "./components/BasicInformation"
import Calendar from "./components/Calendar"
import FormTask from "./components/FormTask"
import ListTask from "./components/ListTask"

const App = () => {

  

  return (
    <div className=" bg-amber-100">
      {/* flex flex-col justify-center items-center */}
      <div className="flex flex-col bg-white rounded-2xl w-full h-full px-10 mt-4 gap-5">
        <BasicInformation />
        <FormTask />
        {/* <Calendar /> */}
        <p>Aqui se ira listando las tareas por hacer las cuales estaran pendientes para posteriormente <var className = 'text-cyan-500'>eliminarlas cuando se completen.</var></p>
        <ListTask/>
      </div>
    </div>
  )
}

export default App