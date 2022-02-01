import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController) {
}

peso : number;
altura: number;
imc: number;

calcularImc() : number {
  let imc =0;
  let alt = this.altura;
  let pes = this.peso;

  this.imc = pes / (alt ** 2);

  return this.imc;
}

async msgtoast(msg: string, duracao: number, posicao: any, imc:number) {
  imc : this.calcularImc()
  
  const toast = await this.toastController.create({

    header:  "O seu IMC é de: " + Math.round(this.imc).toString(),
    buttons: [
    {
      side: "start",
      icon: "star",
      text: "Resultado ->",
      handler: () => {
        console.log( "Adicionando aos favoritos - Igual o Exemplo");
      }
    },
    {
      text: "Ok"
    }
    ],
    animated: false,
    cssClass: "toastpersonalizado toast2",
    duration: duracao,
    message: msg,
    position: posicao
  });
  toast.present();
}



msgrodape() {

  this.msgtoast("Mensagem no Rodapé", 5000, "bottom", this.imc)
}

}
