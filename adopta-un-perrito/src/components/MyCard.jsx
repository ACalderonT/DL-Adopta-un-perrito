import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = ({ srcImg, dogName, dogDescription, bgTag, textTag }) => {
	return (
		<>
			<Card className="dog-card">
				<Card.Img variant="top" src={srcImg} />
				<Card.Body className="dog-card-body">
					<Card.Title>{dogName}</Card.Title>
					<Card.Text>{dogDescription}</Card.Text>
				</Card.Body>
				<Tags bgTag={bgTag} textTag={textTag} />
			</Card>
		</>
	);
};

export default MyCard;
