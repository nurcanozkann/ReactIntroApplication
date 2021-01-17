import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="form1">Form Demo 1</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="form2">Form Demo 2</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">GitHub</NavLink>
              </NavItem>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// export: public anlamına geliyor, yani diğer taraflardan erişilebilir anlamında
// extends: bir kalıtımdır. Component'en miras almıştır
// render: Component tekrardan çalıştırır. Ama sadece değişen kısmı
// props: bir componenten diğerine taşınan data veye eventtir.
// state: Bir componentin datasıdır. Component özel data tutmak isnilirse state e data tutulur.
// map : bir döngüdür. Eleman sayısını tek tek döner. Ama döndüğü elemanların tamamımını yeni bir nesne yapıp yeni bir array döndürür
// setState : stateteki herhangi bir nesnenin değiştirilmesini sağlar.
// export default class Navi extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Navi Component</h2>
//             </div>
//         )
//     }
// }
