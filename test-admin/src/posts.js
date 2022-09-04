import * as React from "react";
import { 
    List, 
    Datagrid, 
    TextField, 
    ReferenceField, 
    EditButton, 
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
} from 'react-admin';

export const PostList = porps => (
    {/* ... */}
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