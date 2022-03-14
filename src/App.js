import AddContact from "./components/AddContact";
import "./App.css";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Contacts from "./components/Contacts";
import ContactDetail from "./components/ContactDetail";
import { connect } from "react-redux";
import Home from "./components/Home";
import ContactsFav from "./components/ContactsFav";
import Footer from "./components/Footer";


function App({ contacts }) {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Home} />
      <Route path="/contacts" exact component={Contacts} />
      <Route path="/favoritos" exact component={ContactsFav} />
      <Route exact path="/add-contact" component={AddContact} />
      <Route
        exact
        path="/contact/:id"
        //Obtenemos el 'match' con la informacion
        render={({ match, history }) => {
          //Al estado del array contacts que nos trajimos le aplicamos un find
          // para buscar el id que coindida
          const contactos = contacts.find(
            //Comparamos el id del array de contacts con el id de la informacion
            //de params, el resultado se guarda en la valiable contact
            (cont) => cont.id === parseInt(match.params.id)
          );
          console.log(contactos)
          //Le pasamos el resultado al componente ContactDetail
          return <ContactDetail contactos={contactos} push={history.push} />;
        }}
      />
      <Route  path={"/"}  component={Footer} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    contacts: state,
  };
}

export default connect(mapStateToProps, null)(App);
