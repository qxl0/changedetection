export class PatientprescriptionImpl {
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
