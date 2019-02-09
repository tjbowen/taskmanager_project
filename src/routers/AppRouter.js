import React from 'react';
import { BrowserRouter, Route, Switch,} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/Homepage';
import TodoList from '../components/TodoList';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';
import AddTagPage from '../components/AddTagPage';
import EditTodoForm  from '../components/EditToDoForm';
import EditTagPage from '../components/EditTagPage';

const routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/todos" component={TodoList} />
      <Route path="/tags" component={AddTagPage} />
      <Route path="/help" component={HelpPage} />
      <Route path ="/edit/tag/:id" component={EditTagPage} />
      <Route path="/edit/:id" component={EditTodoForm}/>
      <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default routes;