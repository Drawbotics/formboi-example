import React, { Component } from 'react';
import { Form, Input, ErrorLabel, Label } from 'formboi';

import FormGroup from './FormGroup';


class App extends Component {

  state = {
    value: '',
  };

  render() {
    const { value } = this.state;
    return (
      <div style={{ width: '1000px', margin: 'auto', marginTop: '5vh' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>Formboi Example</h1>
        <div className="row">
          <div className="column">
            <Form>
              <FormGroup>
                <Label htmlFor="people[0].firstName">First name</Label>
                <Input
                  name="people[0].firstName"
                  id="people[0].firstName"
                  type="text"
                  placeholder="First name"
                  validate={(v) => v.required('This field cannot be empty')}  />
                <ErrorLabel htmlFor="people[0].firstName" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="people[0].lastName">Last name</Label>
                <Input
                  name="people[0].lastName"
                  id="people[0].lastName"
                  type="text"
                  placeholder="Last name"
                  validate={(v) => v.required('This field cannot be empty')}  />
                <ErrorLabel htmlFor="people[0].lastName" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="people[0].age">Age</Label>
                <Input
                  name="people[0].age"
                  id="people[0].age"
                  type="text"
                  placeholder="Age"
                  validate={(v) => v.required('This field cannot be empty').is('Number', 'Invalid field')}  />
                <ErrorLabel htmlFor="people[0].age" />
              </FormGroup>
            </Form>
            <button type="button" onClick={this.submitForm}>
              Submit
            </button>
          </div>
          <div className="column">
            <label>Result</label>
            <pre>
              {JSON.stringify(value)}
            </pre>
          </div>
        </div>
      </div>
    );
  }

}


export default App;
