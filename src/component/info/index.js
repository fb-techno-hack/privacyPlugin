import './landing.scss';
import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../lib/utils';
import SelectBox from '../select-box/index';
import { Link, Redirect } from 'react-router-dom';
import { doAddSite } from '../../util/db';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      location: '',
      education: '',
      race: '',
      age: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit(e) {
    e.preventDefault();
    doAddSite(this.state.location, this.state.education, this.state.race, this.state.age);
    this.setState({
      redirect: false,
      location: '',
      education: '',
      race: '',
      age: '',
    });
    this.props.history.push('/download');
  }

  render() {
    return (
      <div className="sign-up">
        <form className="input-forms" onSubmit={this.handleSubmit}>
          <h2 className="info">info area</h2>
          <div className="left">
            <input className="location select"
              type="text"
              name="location"
              placeholder="city"
              value={this.state.location}
              onChange={this.handleChange}
            />
            <div className='age select'>
              <SelectBox
                config={({
                  menuName: this.state.age || 'age',
                  item1: '18-21',
                  item2: '21-29',
                  item3: '30-39',
                  item4: '40-49',
                  item5: '50-59',
                  item6: '60+',
                })}
                name='age'
                onChange={this.handleChange}
              />
            </div>
            <div className='education-level select'>
              <SelectBox
                config={({
                  menuName: this.state.education || 'Education',
                  item1: 'Highschool',
                  item2: 'Some College',
                  item3: 'Associate degree',
                  item4: 'Bachelors Degree',
                  item5: 'Masters Degree',
                  item6: 'Doctoral Degree',
                })}
                name='education'
                onChange={this.handleChange}
              />
            </div>
            <div className="race select">
              <SelectBox
                config={({
                  menuName: this.state.race || 'race',
                  item1: 'white',
                  item2: 'African American',
                  item3: 'Hispanic or Latino',
                  item4: 'Pacific Islander',
                  item5: 'American Indian',
                  item6: 'Other',
                })}
                name='race'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button className="submit_btn" type="submit">Submit info</button>
        </form>
        <div className="howTo">
          <h1>Hello and welcome to Customer Data Market Place.</h1>
          <p>To start off, you need to build your self an account.  Fill in the items below in the "Info Area" and click the "Submit" button to create an accout. once you have done that, we will give you a link to the Google Chrome extention and your ID KEY that you will use to let the Extention know who is using it. after that, just enjoy the web like normal!
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
