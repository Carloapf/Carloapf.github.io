import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

//const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="users" list={UserList} recordRepresentation="name" />
          <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
      </Admin>
  );

export default App;