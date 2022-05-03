import React from "react";
import styles from "./Form.module.sass";


class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { target } = event;
        this.setState({
            [target.name]: target.value,
        });
    }

    handleSubmit() {
        console.log(this.state);
    }

    render() {
        const { firstName, lastName } = this.state;
        // const values = [
        //     firstName,
        //     lastName
        // ];

        // const valuesList = values.map(item => {
        //     return (
        //         <li>{item}</li>
        //     );
        // })
        return (
            <div className={styles.container}>
                <h1>Sample</h1>
                <p>login:   <input name="firstName" type="text" value={firstName} onChange={this.handleChange}/></p>
                <p>password:   <input name="lastName" type="text" value={lastName} onChange={this.handleChange}/></p>
                <button type="submit" onClick={this.handleSubmit} className={styles.button}>Wyślij</button>
                {/* <p>Submitted values: {valuesList}</p> */}
            </div>
        );
    }
}

export default Form;