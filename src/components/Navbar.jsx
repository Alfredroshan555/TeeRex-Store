import React, { Component } from "react";
import { Button, Dropdown, Menu, Icon, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExampleSizeSmall extends Component {
  state = { activeItem: "home" };
  
  

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
  render() {
    const { activeItem } = this.state;
    const tagOptions = [
      {
        key: 'Gender',
        text: 'Gender',
        value: 'Gender',
        label: { color: 'red', empty: true, circular: true },
      },
      {
        key: 'Color',
        text: 'Color',
        value: 'Color',
        label: { color: 'blue', empty: true, circular: true },
      },
      {
        key: 'Price ',
        text: 'Price ',
        value: ' Price',
        label: { color: 'black', empty: true, circular: true },
      },
      {
        key: 'Type',
        text: 'Type',
        value: 'Type',
        label: { color: 'purple', empty: true, circular: true },
      },
     
    ]
    

    return (
      <Menu size="small" fixed="top">
        <Menu.Item
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Link to="/" style={{ color: "Black" }}>
            <Icon size="large" className="home"></Icon>
          </Link>
        </Menu.Item>
        <Menu.Item position="middle">
          <h1>TeeRex Store</h1>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Dropdown
              text=""
              icon="filter"
              floating
              labeled
              button
              className="icon"
            >
              <Dropdown.Menu>
              <Input icon='search' iconPosition='left' className='search' />
             
               
                <Dropdown.Menu scrolling>
                  {tagOptions.map((option) => (
                    <Dropdown.Item key={option.value} {...option} />
                  ))}
                </Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          <Menu.Item>
            <Link to="/cart">
              <Icon size="large" className="shopping cart"></Icon>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
