import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipboard-paste',
  templateUrl: './clipboard-paste.component.html',
  styleUrls: ['./clipboard-paste.component.css'],
})
export class ClipboardPasteComponent implements OnInit {
  constructor() {}

  keyArray: string[] = [];

  ngOnInit(): void {
    document.addEventListener('keydown', (event: any) => {
      if (event.key == 'Control' || event.key == 'v') {
        this.keyArray.push(event.key);
        if (this.keyArray.includes('Control') && this.keyArray.includes('v')) {
          this.pasteFunction();
        }
      }
    });

    console.log(navigator);
    
    // const copyBtn = document.getElementById('copy-btn');
    // const pasteBtn = document.getElementById('paste-btn');

    // copyBtn!.onclick = function () {
    //   const content = document.getElementById('copy-text')!.innerHTML;
    //   navigator.clipboard.writeText(content);
    // };

    // pasteBtn?.addEventListener('click', async (event) => {
    //   const data = await navigator.clipboard.read();
    //   const clipboardContent = data[0];
    //   const type = clipboardContent.types[0];

    //   if (type == 'text/plain') {
    //     const blob = await clipboardContent.getType('text/plain');
    //     var text = await blob.text();
    //     var p = document.createElement('p');
    //     p.innerHTML = text;

    //     document.getElementById('paste-here')?.appendChild(p);
    //   } else {
    //     const blob = await clipboardContent.getType('image/png');
    //     const url = window.URL.createObjectURL(blob);
    //     const image = document.createElement('img');
    //     image.src = url;
    //     image.style.maxWidth = '300px';
    //     document.getElementById('paste-here')?.appendChild(image);
    //   }
    // });
  }

 async pasteFunction() {
    this.keyArray = [];
    let child=document.getElementById('paste-here')
    // child!.style.maxWidth= '500px'
    // child!.style.height='100%'
    // child!.style.border='3px dashed grey'
    if(child?.firstChild){
      child!.removeChild(child?.firstChild)
    }
    console.log(child);
    console.log('paste fution called');
    if(navigator){
      console.log(navigator.clipboard);
      
    }
    
    const data = await window.navigator.clipboard.read();
    console.log(data[0]);
    
    const clipboardContent = data[0];
    console.log(clipboardContent);
    
    const type = clipboardContent.types[0];
    const blob = await clipboardContent.getType('image/png');
    const url = window.URL.createObjectURL(blob);
    
    const image = document.createElement('img');
    image.src = url;
    image.style.maxWidth = '100%';
    document.getElementById('paste-here')?.appendChild(image);
  }


  // download_div(){

  //   html2canvas(this.screen.nativeElement).then(canvas=>{
  //     this.base_64URL=canvas.toDataURL()
  //     console.log(this.base_64URL);
  //     let fileName = this.getFileName(this.base_64URL)
  //     saveAs(this.base_64URL, fileName)
      
  //   })
  // }
  // getFileName(str:any){
  //   return str.substring(str.lastIndexOf('/')+1)
  // }
}
