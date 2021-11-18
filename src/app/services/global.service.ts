import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from '../components/dialog-message/dialog-message.component';
import { DialogQuestionComponent } from '../components/dialog-question/dialog-question.component';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(
    private http: HttpClient,
    private dialogMessage: MatDialog,
    private dialogQuestion: MatDialog
  ) {}

  public showMessage(mensagem: string, titulo: string = 'Atenção!') {
    const dialogRef = this.dialogMessage.open(DialogMessageComponent, {
      data: { mensagem: mensagem, titulo: titulo },
    });
  }

  public showQuestion(mensagem: string, titulo: string = 'Atenção!') {
    return new Promise((resolve) => {
      const dialogRef = this.dialogQuestion.open(DialogQuestionComponent, {
        data: { mensagem: mensagem, titulo: titulo },
      });
      dialogRef.afterClosed().subscribe((result: any) => {
        resolve(result);
      });
    });
}

  public abrirModal(
    component: any,
    params: any,
    height?: string,
    width?: string,
    disableClose?: boolean
  ) {
    return new Promise((resolve) => {
      const dialogRef = this.dialogQuestion.open(component, {
        data: { params: params },
        height: height ? height : 'auto',
        width: width ? width : 'auto',
        scrollStrategy: new NoopScrollStrategy(),
        disableClose: disableClose ? disableClose : false,
      });
      dialogRef.afterClosed().subscribe((result: any) => {
        resolve(result);
      });
    });
  }

  public copyObj(object: any) {
    return JSON.parse(JSON.stringify(object));
  }

  getVersao() {
    return '0.0.1';
  }

  strToDate(data: string) {
    return new Date(
      Number(data.substr(6, 4)),
      Number(data.substr(3, 2)) - 1,
      Number(data.substr(0, 2))
    );
  }

  strToDateTime(data: string, time: string) {
    return new Date(
      Number(data.substr(6, 4)),
      Number(data.substr(3, 2)) - 1,
      Number(data.substr(0, 2)),
      Number(time.substr(0, 2)),
      Number(time.substr(3, 2))
    );
  }

  onlyNumbers(texto: any) {
    return /^\d+$/.test(texto);
  }

  logout() {
    localStorage.clear();  
  }

  downloadAnexoContent(anexo: any, tipo: string, filename: string) {
    let blob = this.b64toBlob(anexo, tipo);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  abrirAnexo(ext: any, anexo: any) {
    let contentType = ext;
    let b64Data = anexo;
    let blob = this.b64toBlob(b64Data, contentType);
    let url = window.URL.createObjectURL(blob);
    window.open(url);
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 600000);
  }

  b64toBlob(b64Data: any, contentType: any, sliceSize: any | null = null) {
    contentType = contentType || '';
    sliceSize = sliceSize || 1024;

    let byteCharacters = atob(b64Data);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);
      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      let byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    let blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}
