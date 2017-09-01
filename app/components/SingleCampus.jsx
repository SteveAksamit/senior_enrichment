import React, { Component } from 'react';
import axios from 'axios';
import store, { fetchCampus, deleteCampus } from '../store';
import { Link } from 'react-router-dom';


export default class SingleCampus extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.handleDeleteCampus = this.handleDeleteCampus.bind(this)
  }

  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    store.dispatch(fetchCampus(campusId));
    this.unsubscribe = store.subscribe(() =>
      this.setState(store.getState())
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleDeleteCampus() {
    const campId = this.state.singleCampus.selectedCampus.id;
    store.dispatch(deleteCampus(campId));
    this.props.history.push('/campuses');
  }

  render() {
    const campus = this.state.singleCampus.selectedCampus;
    return (
        <div>
          <div className="header">
            <h1 className="header-heading">Campus Details</h1>
          </div>
          <hr />
          <h3>Campus Name:   {campus.name} </h3>
          <h3>Campus Location:   {campus.location}</h3>
          <h3>Enrolled Students:</h3>
            <ol className="list-group">
            {this.state.students.filter(student =>
              campus.id === student.campusId).map(student => {
              return (
                <li key={student.id}>
                  <Link to={`/students/${student.id}`}>{student.name}</Link>
                </li>
              );
            })
            }
            </ol>
          <p><Link to={'/editcampus'} className="btn">Edit Campus</Link></p>
          <p><Link to={'/addstudenttocampus'} className="btn">Add Student To Campus</Link></p>
          <p><a href="#" value ={campus.id} className="btn" onClick={this.handleDeleteCampus}>Delete Campus</a></p>

          <hr />
        </div>
    );
  }
}


