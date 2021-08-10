import { createProxy } from "./patientprescription";

export class PatientprescriptionImpl {
    // constructor(){
    //     return createProxy2(this);
    // }
    prescriptionId: number;
    clientGuid: number;
    drugName: string;
    quantity: number;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
}
