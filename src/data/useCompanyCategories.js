import  { useState} from 'react';
import companyCategories from "./mockData/companyCategories";

const useCompanyCategories = () => {
    const [categories] = useState(companyCategories);
    return categories;
};

export default useCompanyCategories;
