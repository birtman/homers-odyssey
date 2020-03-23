import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      lastname: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="signup--wrap">
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <div className="signup--form">
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Lastname</label>
              <input
                type="text"
                className="form-control"
                value={this.state.lastname}
                onChange={this.onLastNameChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.updateEmailField.bind(this)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onLastNameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
}

export default SignUp;
