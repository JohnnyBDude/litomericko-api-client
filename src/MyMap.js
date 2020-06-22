import React, {useEffect} from 'react';
import './MyMap.css'

import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import companies from "./data/mockData/companies";

const litomericeCenter = [50.534, 14.131]

// const getCompanies = async () => {
//     const categories = await axios(companyCategoriesUrl);
//     const companies = await axios.post(companiesUrl, {categories: categories.data})
//     //console.log(categories.data)
//     console.log(companies.data);
// }

const MyMap = () => {

    // useEffect(() => {
    //         const categories = getCompanies();
    //         console.log(categories);
    //         //setCompanies(getCompanies());
    //     }, []
    // )
    // ;

    return (<Map center={litomericeCenter} zoom={15}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {companies.map(c => <CompanyMarker key={c.id} company={c}/>)}
    </Map>);
}

const formatPosition = (company) => {
    return [company.latitude, company.longitude]
}

const CompanyMarker = ({company}) => {
    return (
        <Marker position={formatPosition(company)} >
            <Popup>{company.title}</Popup>
        </Marker>
    )
}

// const [categories, setCategories] = useState([]);
//
// useEffect(async () => {
//     const result = await axios(categoriesUrl);
//     console.log(result);
//     setCategories(result.data);
// }, []);
//
//
// return (
//     <ul>
//         {categories.map(cat => (<li key={cat.id}>{cat.title}</li>))}
//     </ul>
// );

export default MyMap;
