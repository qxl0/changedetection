import { Component, OnInit } from '@angular/core';
import { createProxy } from '../model/patientprescription';
import { PatientprescriptionImpl } from '../model/patientprescription-impl';

@Component({
  selector: 'app-patientlist',
  template: `
  <div class="container">
  <table class="table table-striped table-bordered">
      <thead>
          <tr>
              <th>prescriptionId</th>
              <th>DrugName</th>
              <th>clientGuid</th>
              <th>quantity</th>
              <th>isDirty</th>
          </tr>
      </thead>
      <tbody>
          <tr *ngFor="let pt of patients">
              <td>{{pt.prescriptionId}}</td>
              <td>{{pt.drugName}}</td>
              <td>{{pt.clientGuid}}</td>
              <td>{{pt.quantity}}</td>
              <td>{{pt.isDirty}}</td>
          </tr>
      </tbody>
  </table>
</div>
  `,
  styles: [
  ]
})
export class PatientlistComponent implements OnInit {

  patients: PatientprescriptionImpl[] = [];
  constructor() { 
      // let john = {
      // prescriptionId: 1000,
      // clientGuid: 2200,
      // drugName: 'Aspirin',
      // quantity: 3,
      // address: {
      //   street: '123 Fake Street',
      //   city: 'Faketown',
      //   state: 'Fake State',
      //   zip: '12345'
      // }
      // } as PatientprescriptionImpl;

      // let johnproxy = createProxy(john); 

      let tony = new PatientprescriptionImpl();
      tony.prescriptionId = 1001;
      tony.clientGuid = 2201;
      tony.drugName = 'Lisinol 10mg';
      tony.quantity = 2;
      tony.address = { 
        street: '456 main street',
        city: 'malvern',
        state: 'pa',
        zip: '12345'
      };
      let tonyproxy = createProxy(tony);
      console.log("tony: ", tony);
      console.log("tony:", tonyproxy.isDirty);
      this.patients.push(tony);
    //   let tp = (tony as any).createProxy(tony);
    // console.log(tp.drugname);
      //let tonyproxy = createProxy(tony);
      // console.log("john:", johnproxy.isDirty);
      // johnproxy.quantity = 4;
      // console.log("john: ", johnproxy.isDirty);
      // console.log("tony: ",tonyproxy.isDirty);
      // tonyproxy.drugName = "Zolof 15mg";
      // console.log("tony: ",tonyproxy.isDirty);
      // johnproxy.clearDirt();
      // tonyproxy.clearDirt();
      // console.log("john: ", johnproxy.isDirty);
      // console.log("tony: ",tonyproxy.isDirty);

      // console.log("tony: ",tonyproxy.isDirty);
      // tonyproxy.address.street = "999 Fake Street";
      // console.log(tonyproxy.address.city);
      // console.log(tonyproxy.address.state);
      // console.log("tony: ",tonyproxy.isDirty);
      // tonyproxy.clearDirt();
      // console.log("tony: ",tonyproxy.isDirty);

      // tonyproxy.address = {
      //   street: '999 Fake Street',
      //   city: 'malvern',
      //   state: 'pa',
      //   zip: '19355',
      // };

      // console.log(tonyproxy.isDirty);

      // this.patients.push(johnproxy);
      // this.patients.push(tonyproxy);
  }

  ngOnInit(): void {
  }

}
