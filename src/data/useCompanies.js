import { useState} from 'react';
import companies from "./mockData/companies";
import companyCategories from "./mockData/companyCategories";

const useCompanies = (slug) => {
    let filteredCompanies = companies;

    const category = companyCategories.find(x => x.slug === slug);

    if (typeof category !== 'undefined'){
        filteredCompanies = filteredCompanies.filter(x => x.company_category_id === category.id)
    }

    const [state] = useState(filteredCompanies);
    return state;
};

export default useCompanies;
