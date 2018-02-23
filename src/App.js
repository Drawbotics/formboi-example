import React, { Component } from 'react';
import { Form, Input, ErrorLabel, Label } from 'formboi';

import FormGroup from './FormGroup';


function validateForm(values) {
  console.log(values);
  const people = values.people || [];
  return Promise.resolve({
    people: people.filter(Boolean).map((p) => ({
      age: p.age < 20 ? 'Too young' : undefined,
    })),
  });
}


const Person = ({
  index,
}) => {
  return (
    <div style={{ border: '1px solid rgba(0, 0, 0, 0.2)', padding: '16px', marginBottom: '16px' }}>
      <FormGroup>
        <Label htmlFor={`people[${index}].firstName`}>First name</Label>
        <Input
          name={`people[${index}].firstName`}
          id={`people[${index}].firstName`}
          type="text"
          placeholder="First name"
          validate={(v) => v.required('This field cannot be empty')}  />
        <ErrorLabel htmlFor={`people[${index}].firstName`} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor={`people[${index}].lastName`}>Last name</Label>
        <Input
          name={`people[${index}].lastName`}
          id={`people[${index}].lastName`}
          type="text"
          placeholder="Last name"
          validate={(v) => v.required('This field cannot be empty')}  />
        <ErrorLabel htmlFor={`people[${index}].lastName`} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor={`people[${index}].age`}>Age</Label>
        <Input
          name={`people[${index}].age`}
          id={`people[${index}].age`}
          type="text"
          placeholder="Age"
          validate={(v) => v.required('This field cannot be empty').integer('Invalid field')}  />
        <ErrorLabel htmlFor={`people[${index}].age`} />
      </FormGroup>
    </div>
  );
}


class App extends Component {

  state = {
    values: '',
    errors: {},
    people: 1,
  };

  render() {
    const { values, errors, people } = this.state;
    return (
      <div style={{ width: '1000px', margin: 'auto', marginTop: '5vh' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>Formboi Example</h1>
        <div className="row">
          <div className="column">
            <Form
              enhanced
              validate={(values) => validateForm(values)}
              getSubmit={(submit) => this.submitForm = submit}
              onSubmit={(values, errors) => this.setState({ values, errors })}>
              {new Array(people).fill(0).map((_, i) => (
                <Person key={i} index={i} />
              ))}
            </Form>
            <button type="button" className="button-outline" style={{ marginRight: '15px'}} onClick={() => this.setState({ people: people + 1})}>
              Add person
            </button>
            <button type="button" onClick={() => this.submitForm()}>
              Submit
            </button>
          </div>
          <div className="column">
            <label>Result</label>
            <pre>
              {JSON.stringify({ values, errors }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  }

}


export default App;
