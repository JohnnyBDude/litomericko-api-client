import React from "react";
import Card from "react-bootstrap/Card";

const CompanyCard = ({company}) => {
    return (
        <Card>
            <a href={`/podniky/detail/${company.id}`}>
                <Card.Header> {company.title}</Card.Header>
            </a>
            <Card.Body>
                {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
                <Card.Text>
                    {truncate(company.description)}
                </Card.Text>
            </Card.Body>
            < Card.Img
                variant="bottom"
                src={company.image_url}
            />
        </Card>
    )
};

const truncate = (input) => input.length > 200 ? `${input.substring(0, 200)}...` : input;

export default CompanyCard;
