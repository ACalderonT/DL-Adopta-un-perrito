import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
	const headerTitle = "Adopta un perrito";
	return (
		<>
			<Container fluid className="g-3">
				<Row>
					<Header title={headerTitle} />
				</Row>

				<Row xs={1} md={4} className="g-3 m-4">
					<Col>
						<MyCard
							srcImg={
								"https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
							}
							dogName={"Laica"}
							dogDescription={
								"Dolor quis exercitation excepteur aliquip aute mollit pariatur excepteur ipsum nostrud exercitation aute ex ea. Exercitation aute mollit nostrud incididunt nostrud aute do laborum ut nulla ad. Ex in est voluptate aliqua occaecat sunt occaecat ullamco incididunt tempor tempor id. Id dolor commodo aliquip magna Lorem reprehenderit Lorem sunt ex velit."
							}
							bgTag={"info"}
							textTag={"Perrito 1"}
						/>
					</Col>

					<Col>
						<MyCard
							srcImg={
								"https://cdn.pixabay.com/photo/2016/03/27/21/16/pet-1284307_1280.jpg"
							}
							dogName={"Boby"}
							dogDescription={
								"Veniam dolor culpa labore consectetur sint ex anim quis eiusmod. Laboris sunt pariatur consectetur voluptate. Ex dolore magna deserunt proident est anim nostrud sint esse aliquip. Nulla nisi et magna nostrud fugiat ad. In deserunt velit dolore quis cupidatat. Adipisicing qui ipsum ipsum ex. Dolor nisi ut sit qui sit est exercitation est qui Lorem ea tempor ex."
							}
							bgTag={"success"}
							textTag={"Perrito 2"}
						/>
					</Col>
					<Col>
						<MyCard
							srcImg={
								"https://cdn.pixabay.com/photo/2017/06/24/09/13/continental-bulldog-2437110_1280.jpg"
							}
							dogName={"Sasha"}
							dogDescription={
								"Laborum aute nisi sit quis sit ullamco excepteur aute consectetur. Sit sint excepteur labore irure pariatur. Dolor voluptate exercitation laborum consequat qui esse reprehenderit. Sunt commodo Lorem ad et. Eiusmod adipisicing duis aliqua dolor qui id deserunt. Pariatur do laborum adipisicing commodo aliquip qui. Consectetur in ut irure adipisicing ut ipsum magna eiusmod fugiat."
							}
							bgTag={"danger"}
							textTag={"Perrito 3"}
						/>
					</Col>
					<Col>
						<MyCard
							srcImg={
								"https://cdn.pixabay.com/photo/2017/07/31/21/15/dog-2561134_1280.jpg"
							}
							dogName={"Negra"}
							dogDescription={
								"Eu incididunt pariatur qui esse et cupidatat qui sit occaecat anim nisi ut dolor ullamco. Eiusmod anim non nulla non exercitation id eiusmod anim nisi aliquip cupidatat ex laborum aliquip. Laborum enim tempor velit exercitation in dolore sint ad consequat aliquip. Fugiat excepteur proident Lorem nulla adipisicing irure ut in non non labore sunt consectetur consequat. Ullamco tempor fugiat officia labore. Consectetur consectetur ipsum veniam reprehenderit est est ad sunt duis ut aliquip minim incididunt."
							}
							bgTag={"warning"}
							textTag={"Perrito 4"}
						/>
					</Col>
				</Row>

				<Row>
					<Footer />
				</Row>
			</Container>
		</>
	);
}

export default App;
