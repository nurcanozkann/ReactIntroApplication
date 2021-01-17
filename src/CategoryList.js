import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount(){
    this.getCategories();
  }

  // fetch: apiye ulaşır
  getCategories = () => {
    debugger;
    fetch("http://localhost:3000/categories")
    .then(response => response.json())
    .then(data=>this.setState({categories:data}));
  }

  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2> 
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
              key={category.id}
              onClick={() => this.props.changeCategory(category)}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
