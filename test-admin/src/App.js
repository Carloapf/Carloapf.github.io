import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from './Dashboard';
import authProvider from "./authProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

//const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
      <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
          <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
          <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      </Admin>
  );

export default App;