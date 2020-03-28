import React, {Fragment} from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost'
import Header from './componentes/Header';
import Clientes from './componentes/Clientes';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EditarCliente from './componentes/EditarCliente';
import NuevoCliente from './componentes/NuevoCliente';

const cliente = new ApolloClient({
    uri: "http://127.0.0.1:8000/graphql",
    onError: (
        {networkError, graphQLErrors}
    ) => {
        console.log('graphQLErrors', graphQLErrors);
        console.log('networkError', networkError);
    }
});

function App() {
    return (
        <ApolloProvider client={cliente}>
            <Router>
                <Fragment>
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={Clientes} />
                            <Route exact path='/cliente/editar/:id' component={EditarCliente} />
                            <Route exact path='/cliente/nuevo' component={NuevoCliente} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </ApolloProvider>
    );
}

export default App;
