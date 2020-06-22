import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import CompaniesByCategory from "./companies/CompaniesByCategory";
import Container from "react-bootstrap/Container";
import CompanyDetail from "./CompanyDetail";
import Test from "./Test";
import MyMap from "./MyMap";

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
                <Route path="/test">
                    <Test/>
                </Route>
                <Route path="/mapa">
                    <MyMap/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Container>
    );
}

const Home = () => {
    return (
        <>
            <h1>Vítejte na experimentálním klientu litomericko-api</h1>
            <p>Jde pouze o funkční prototyp</p>
            <ul>
                <li>Funguje katalog podniků - v tuto chvíli bez mapy</li>
                <li>Nefunguje vyhledávání</li>
            </ul>
            <p>
                Podněty a dotazy uvítáme na
                <a href="mailto:team@litohub.cz"> team@litohub.cz </a>
                nebo na stránkách projektu na GitHubu -
                <a href={"https://github.com/JohnnyBDude/litomericko-api-client"}> github.com/JohnnyBDude/litomericko-api-client </a>
            </p>
            <p>
                Zapojit se do vývoje a diskuze o budoucí podobě můžeš na
                    Discordovém diskuzním serveru Litohubu, kanál
                <a href={"https://discord.gg/A43H3AT"}>
                    <strong> #litaksipomaha</strong>
                </a>
            </p>
        </>
    )
};

export default AppBody;
