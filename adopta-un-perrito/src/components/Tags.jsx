import Badge from "react-bootstrap/Badge";

const Tags = ({ bgTag, textTag }) => {
	return (
		<>
			<Badge bg={bgTag}>{textTag}</Badge>
		</>
	);
};

export default Tags;
