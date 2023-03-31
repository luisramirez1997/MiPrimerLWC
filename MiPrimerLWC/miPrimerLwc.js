import { LightningElement,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';

import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';




export default class MiPrimerLwc extends LightningElement {

 // Expose a field to make it available in the template
nameField = NAME_FIELD;
firstName = FIRSTNAME_FIELD;
lastName = LASTNAME_FIELD;

// Flexipage provides recordId and objectApiName
@api recordId;
@api objectApiName;





}