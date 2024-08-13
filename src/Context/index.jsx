import { useContext, createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [num, setNum] = useState(0);
  const apiUrl = "https://mis.kfs-hiet.edu.eg";
  // const apiUrl = 'http://localhost/kfs';
  // const apiUrl = 'http://192.168.1.69/kfs';

  const getSeeting = async () => {
    const response = await axios.get(`${apiUrl}/api/website/daycare_settiengs`);
    return response.data;
  };
  const getDepartments = async () => {
    const response = await axios.get(`${apiUrl}/api/website/departments`);
    return response.data;
  };
  const getUnits = async () => {
    const response = await axios.get(`${apiUrl}/api/website/units`);
    return response.data;
  };
  const { data: units, error: unitsError, isLoading: isLoadingUnits, } = useQuery("units", getUnits);
  const { data: seeting, error: seetingError, isLoading: isLoadingSeeting } = useQuery('seeting', getSeeting);
  const { data: departments, error: departmentsError, isLoading: isLoadingDepartments, } = useQuery("departments", getDepartments);

  return (
    <AuthContext.Provider value={{ num, seeting, seetingError, isLoadingSeeting, apiUrl, departments, departmentsError, isLoadingDepartments, units, unitsError, isLoadingUnits }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useGlobalState() {
  return useContext(AuthContext);
}
