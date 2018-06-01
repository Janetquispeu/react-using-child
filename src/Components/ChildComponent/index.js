import * as React from 'react';
import ImageComponent from '../ImageComponent';
import './index.css';

export class ChildComponent extends React.Component<{},{}> {
	constructor(props) {
		super(props);
	}
  render () {
		console.log(this.props);
		const { nameCompany } = this.props;
		const name = "React";
		return(
			<div className="b-modal-container">
				<div>
					<h1>{this.props.title}</h1>
				</div>
				<div className="b-modal-container-body">
					<ImageComponent {...this.props}/>
					{nameCompany}
					{this.props.children()}
					<div render={(name)=> {return this.props.steps[0](name)}}></div>
				</div>
				<div className="b-modal-container-buttons">
					<button>Cerrar</button>
					<button>Enviar</button>
				</div>
			</div>
		);
	}
}
