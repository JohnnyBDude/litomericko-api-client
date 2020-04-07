import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import CompaniesByCategory from "./companies/CompaniesByCategory";
import Container from "react-bootstrap/Container";
import CompanyDetail from "./CompanyDetail";

function AppBody() {
    return (
            <Container>
                <Switch>
                    <Route path="/podniky/kategorie/:categorySlug">
                        <CompaniesByCategory/>
                    </Route>
                    <Route path="/podniky/detail/:companyId">
                        <CompanyDetail/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Container>
    );
}

const Home = () => {
    return `I'm baby raclette food truck brunch, YOLO dreamcatcher skateboard bicycle rights tacos helvetica microdosing.
    PBR&B VHS seitan jianbing man bun stumptown. Roof party jianbing meditation trust fund kinfolk.
    Authentic pickled truffaut hexagon selvage post-ironic,
    synth typewriter photo booth fingerstache quinoa banh mi snackwave.`
};

export default AppBody;
