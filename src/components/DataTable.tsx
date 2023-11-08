//* React imports
import { useState } from "react";

//* React icons imports
import { GrEdit } from "react-icons/gr";
import { ImBin } from "react-icons/im";

//* components imports
import UpdateData from "./UpdateData";
import AddData from "./AddData";

//* mock data import
import { initialEmployees } from "../data/mockdata";

//* types imports
import { dataType } from "../types/dataType";

//* ---------Main Code start here -------------
function DataTable() {
  //* states
  const [employees, setEmployees] = useState<dataType[]>(initialEmployees);
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openUpdate, setOpenUpdate] = useState<boolean>(false);
  const [newEmployee, setNewEmployee] = useState<dataType>({
    name: "",
    department: "",
    salary: "",
  });
  const [updateEmployee, setUpdateEmployee] = useState<dataType>({
    id: "",
    name: "",
    department: "",
    salary: "",
  });
  const [departmentFilter, setDepartmentFilter] = useState<any>("All");
  const [sortOrder, setSortOrder] = useState("dsc");

  //* Function To add new employee
  const addEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newEmployee.name && newEmployee.department && newEmployee.salary) {
      const newId = employees.length + 1;
      setEmployees([...employees, { id: newId, ...newEmployee }]);
      setNewEmployee({ name: "", department: "", salary: "" });
    }
  };

  //* Function To Update employee
  const updateEmployeeData = () => {
    const updatedEmployees = employees.map((employee: any) => {
      if (employee.id === updateEmployee.id) {
        return updateEmployee;
      }
      return employee;
    });
    setEmployees(updatedEmployees);
    setUpdateEmployee({ id: "", name: "", department: "", salary: "" });
  };

  //* Function To delete employee
  const deleteEmployee = (id: number) => {
    const updatedEmployees = employees.filter(
      (employee: any) => employee.id !== id
    );
    setEmployees(updatedEmployees);
    alert("deleted");
  };

  //* Function To Filter employee by his department
  const filterByDepartment = () => {
    if (departmentFilter === "All") {
      return employees;
    }
    return employees.filter(
      (employee: any) => employee.department === departmentFilter
    );
  };

  //* Function To Sort employee by his Salary
  const sortEmployees = (sortedValue: string) => {
    setSortOrder(sortedValue);
    const sortedEmployees = [...employees].sort((a: dataType, b: dataType) => {
      if (sortedValue === "asc") {
        return (a.salary as number) - (b.salary as number);
      } else {
        return (b.salary as number) - (a.salary as number);
      }
    });
    setEmployees(sortedEmployees);
  };

  //* Our Ui part starts here
  return (
    <div className="">
      <header className="flex flex-col md:flex-row justify-start gap-5 items-center">
        <div className="inline-block relative w-64">
          <label>
            Filter by Department:
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              <option value={"All"}>All</option>
              <option value={"BackEnd"}>BackEnd</option>
              <option value={"FrontEnd"}>FrontEnd</option>
            </select>
          </label>
        </div>
        <div className="">
          <label>
            Sort by Salary:
            <select
              className="inline- block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={sortOrder}
              onChange={(e) => {
                sortEmployees(e.target.value);
              }}
            >
              <option value="desc">DSC</option>
              <option value="asc">ASC</option>
            </select>
          </label>
        </div>
      </header>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center min-h-screen gap-5 md:pt-20">
        <div className="border border-gray-700 h-max rounded-md shadow-lg p-4 max-w-2xl w-full space-y-5">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <h1 className="flex-1 text-2xl  font-medium">Employees Data</h1>{" "}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => {
                setOpenAdd(true);
                if (openUpdate) {
                  setOpenUpdate(false);
                }
              }}
            >
              Add New
            </button>
          </div>
          <table className="w-full p-4">
            <thead className="bg-gray-100">
              <tr className="text-left  md:text-xl p-4">
                <th>Employee Name</th>
                <th>Department</th>
                <th>Salary</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filterByDepartment().map((employee: dataType) => (
                <tr key={employee.id} className="brdr capitalize">
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>{employee.salary}</td>
                  <td className="flex justify-evenly items-center h-full">
                    <button
                      onClick={() => {
                        if (openAdd) {
                          setOpenAdd(false);
                        }
                        setOpenUpdate(true);
                        setUpdateEmployee(employee);
                      }}
                    >
                      <GrEdit />
                    </button>
                    <button
                      onClick={() => {
                        deleteEmployee(employee.id as number);
                      }}
                    >
                      <ImBin />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {openUpdate && (
          <UpdateData
            setOpenUpdate={setOpenUpdate}
            updateEmployee={updateEmployee}
            setUpdateEmployee={setUpdateEmployee}
            updateEmployeeData={updateEmployeeData}
          />
        )}
        {openAdd && (
          <AddData
            setOpenAdd={setOpenAdd}
            newEmployee={newEmployee}
            setNewEmployee={setNewEmployee}
            addEmployee={addEmployee}
          />
        )}
      </div>
    </div>
  );
}

export default DataTable;
