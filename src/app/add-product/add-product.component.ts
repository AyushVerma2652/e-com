import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productform;
  message;
  selectedFile;
  prodImg;
  imgURL;
  constructor(private fb : FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.initForm();
    document.body.classList.add('bg-p')
  }

  ngOnDestroy(){
    document.body.classList.remove('bg-p')
  }

  initForm(){
    this.productform = this.fb.group({
      productname: '',
      category:'',
      price: '', 
    })
  }

  userSubmit(formdata){
    formdata.image = this.prodImg;
  console.log(formdata)
  this.productService.addproductdetail(formdata).subscribe((response) => {
    console.log(response);
  })

  }

  onFileChange(event){
    let formdata = new FormData();
    this.selectedFile = event.target.files[0];
    this.prodImg = this.selectedFile.name;
    this.preview(event.target.files);
    formdata.append('image', this.selectedFile, this.selectedFile.name);
    this.productService.uploadImage(formdata).subscribe(response=>{
      console.log(response);
    });
  }

  preview(files){
    if(files.lenght===0)
    return;
  
  var mimeType = files[0].type;
  if(mimeType.match(/image\/ */)==null){
    this.message = "only image are supported"
    return;
  }
  var reader = new FileReader();
  
  reader.readAsDataURL(files[0]);
  reader.onload = (_event) =>{
    this.imgURL = reader.result;
    // console.log(this.imgURL);
  }

}

}
