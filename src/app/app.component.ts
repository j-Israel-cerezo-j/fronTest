import { Component , OnInit,ViewChild,ElementRef ,Renderer2} from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import{TestService} from './services/walmart/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  //Arreglos que van a tener los datos ingresados por el usuario en el boton
  basicBasketDataSource1Array:string[]=[]
  miFuenteDeDatos:string[]=[]
  msjVacio:any
  msjVacio2:any

  personForm: FormGroup;



  constructor(
    public fb:FormBuilder,
    public testService: TestService
    ){

  }

  //Recuperacion o referencia al elemneto html
  @ViewChild('nameProduc2') myInput:ElementRef;
  //metodo encargado de agregar el nuevo refistro del elemento a su arreglo correspondiente
  onClickAddCanasta2() {
    //recuperacion del nuevo registro
    var nanmeProduct=this.myInput.nativeElement.value
    //agregar el nuevo elemento al arreglo correspondiente
    if(nanmeProduct!=""){
      this.miFuenteDeDatos.push(nanmeProduct);
      this.msjVacio2=""
    }
    else{
      this.msjVacio2="Favor de llenar la casilla del nombre del producto"
   }
  }

   //Recuperacion o referencia al elemneto html
   @ViewChild('nameProduc1') inputNameBasketBasic1:ElementRef;
   //metodo encargado de agregar el nuevo refistro del elemento a su arreglo correspondiente
   onClickAddBasicBasket() {
     //recuperacion del nuevo registro
     var nanmeProduct=this.inputNameBasketBasic1.nativeElement.value
     if(nanmeProduct!=""){
      //agregar el nuevo elemento al arreglo correspondiente
      this.basicBasketDataSource1Array.push(nanmeProduct);
      this.msjVacio=""
     }else{
        this.msjVacio="Favor de llenar la casilla del nombre del producto"
     }

   }


  ngOnInit(): void {

  }

  guardar():void{
    alert("Enviando")
    this.testService.saverProducts(this.basicBasketDataSource1Array,this.miFuenteDeDatos).subscribe(
      resp=>{
        alert("Exito")
      },
      error=>{console.log(error)}

    )
    // this.personaService.savePersona(this.personForm.value).subscribe(resp=>{
    //   this.personForm.reset();
    // },

    // error =>{console.log(error)}
    // )
  }
}
function agregarRegistro() {
  throw new Error('Function not implemented.');
}

