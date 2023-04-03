import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})
export class DragDropComponent implements OnInit {
  constructor() {}

  dragArea: any;
  file: any;
  button :any
  input: any
  ngOnInit(): void {
    this.dragArea = document.querySelector('.dragArea');
//     this.button = document.getElementById('button')

//     this.button.onClick=()=>{
//       this.input.click()
//     }
// let file

    // this.input.addEventListener('change', () =>{
    //   file= this.files[0]
    // })

    this.dragArea?.addEventListener('dragover', (event: any) => {
      event.preventDefault();
      console.log('file is inside drag', event);
    });

    

    this.dragArea!.addEventListener('dragleave', (event: any) => {
      console.log('file is leaving', event);
    });

    this.dragArea.addEventListener('drop', (event: any) => {
      event.preventDefault();
      console.log('file is droped', event);
      this.file = event.dataTransfer.files[0];

      console.log(this.file);

      let filetype = this.file.type;
      let validExtension = ['imgage/jpeg', 'image/jpg', 'image/png'];
      if (validExtension.indexOf(filetype)) {
        console.log(true);

        let fileReader = new FileReader();

        fileReader.onload = () => {
          let fileURL = fileReader.result;
          console.log(fileURL);

          let imageTag= `<img src=${fileURL} style="width:100%" />`
          this.dragArea.innerHTML=imageTag
        };

        fileReader.readAsDataURL(this.file)
      }else{
        alert("file os not a matching type")
      }
    });
  }

  upload(event: any) {}
}

