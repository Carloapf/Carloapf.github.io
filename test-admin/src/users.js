import * as React from "react";
//import { List, Datagrid, TextField, EmailField } from 'react-admin';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            
            <EmailField source="email" />
            
            <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);