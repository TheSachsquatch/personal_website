import './App.css';
const Links = (props) => {
		return (
				<div>
					<a href={props.link} target="_blank"> {props.name}</a>		
				</div>
		);
}
export default Links;