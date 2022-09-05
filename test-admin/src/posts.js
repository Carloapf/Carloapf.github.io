import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, Edit, EditButton,Create,SimpleForm,ReferenceInput,TextInput} from 'react-admin';

export const PostList = porps => (
    <List>
       <Datagrid>
           <TextField source="id" />
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
           <EditButton />
        </Datagrid>
    </List>
); 
export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);
export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);