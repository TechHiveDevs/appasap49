
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditComments(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="body" variant="outlined"   />
<ReferenceInput label="blogs" source="blogsid" reference="blogs">
        <AutocompleteInput variant="outlined" /* optionText="blogs"   */ />
      </ReferenceInput>
    
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}