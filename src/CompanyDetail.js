import React from "react";
import {useParams} from "react-router-dom";
import companies from "./data/mockData/companies";

const CompanyDetail = () => {
    let {companyId} = useParams();
    let companiesById = {}
    companies.forEach(x => {
        companiesById[x.id] = x;
    });
    const company = companiesById[companyId];
    return (
        <>
            <h1>{company.title}</h1>
            <p>
                {company.description}
            </p>
            <p>
                <strong> adresa: </strong> {company.address}
            </p>
            <p>
                <strong> oteviraci hodiny: </strong> {company.business_hours}
            </p>
            <p>
                <strong> telefon: </strong> {company.phone_number}
            </p>
            <p>
                <strong> email: </strong> {company.email}
            </p>

            <img src={company.image_url}/>
        </>
    )
};

const truncate = (input) => input.length > 200 ? `${input.substring(0, 200)}...` : input;

export default CompanyDetail;
