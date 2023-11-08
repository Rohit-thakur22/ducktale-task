//* react icons import
import { AiOutlineCloseCircle } from "react-icons/ai";

//* types import
import { dataType } from "../types/dataType";

interface prop {
  newEmployee: dataType;
  setNewEmployee: any;
  addEmployee: any;
  setOpenAdd: any;
}
const AddData = ({
  newEmployee,
  setNewEmployee,
  addEmployee,
  setOpenAdd,
}: prop) => {
  return (
    <form
      className="w-full max-w-sm brdr p-4 h-max rounded-lg"
      onSubmit={addEmployee}
    >
      <div className="flex items-start">
        <h2 className=" flex-1 text-center text-2xl font-medium text-gray-600 mb-4">
          Add form
        </h2>
        <button onClick={() => setOpenAdd(false)}>
          <AiOutlineCloseCircle className="text-2xl" />
        </button>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Employee Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            type="text"
            value={newEmployee.name}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, name: e.target.value })
            }
            required
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-password"
          >
            Department
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            value={newEmployee.department}
            onChange={(e) =>
              setNewEmployee({
                ...newEmployee,
                department: e.target.value,
              })
            }
            required
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-password"
          >
            Salary
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
            type="number"
            value={newEmployee.salary}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, salary: e.target.value })
            }
            required
          />
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddData;
