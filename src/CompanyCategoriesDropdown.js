import React from 'react';
import './App.css';
import NavDropdown from "react-bootstrap/NavDropdown";
import useCompanyCategories from "./data/useCompanyCategories";

const CompanyCategoriesDropdown = () => {
    const categories = useCompanyCategories();

    return (
        <NavDropdown title="Podniky" id="basic-nav-dropdown">
            <NavDropdown.Item href="/podniky/kategorie/all">Vše</NavDropdown.Item>
            <NavDropdown.Divider/>
            {categories.map(category =>
                <NavDropdown.Item key={category.id} href={`/podniky/kategorie/${category.slug}`}>
                    {category.title}
                </NavDropdown.Item>
            )}
        </NavDropdown>
    );
};

export default CompanyCategoriesDropdown;
