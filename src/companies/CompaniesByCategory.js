import React from 'react';
import {useParams} from "react-router-dom";
import useCompanies from "../data/useCompanies";
import CompanyCard from "../CompanyCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CompaniesByCategory = () => {
    let {categorySlug} = useParams();
    const companies = useCompanies(categorySlug);
    return (
        <>
            <h1>
                Podniky - {categorySlug}
            </h1>
            <Row>
                {companies.map(x =>
                    <>
                        <Col sm={6} md={4} lg={3} xl={3}>
                            <CompanyCard key={x.id} company={x}/>
                        </Col>
                        <br/>
                    </>
                )}
            </Row>
        </>
    )
};


export default CompaniesByCategory