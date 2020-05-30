import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';

import { faBoxOpen, faRupeeSign, faTrashAlt, faDice } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productform;
  message;
  //selectedFile;
  prodImgs = [];
  imgURL;
  description= [];

  delete = faTrashAlt;
  box = faBoxOpen;
  dice = faDice;
  money = faRupeeSign;
 

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
      look:'',
      brand:'',
      subcategory:'',
      details:'',
    })
  }

  userSubmit(formdata){
    if(this.productform.invalid){
      alert('invalid form')
      return;
    }
    formdata.description = this.description;
    formdata.images = this.prodImgs;
  console.log(formdata)
  this.productService.addproductdetail(formdata).subscribe((response) => {
    console.log(response);
  })

  }

  onFileChange(event){
    
   // this.selectedFile = event.target.files[0];
    let selectedFiles = [];
    for (let file of event.target.files){
      let formdata = new FormData();
      this.prodImgs.push(file.name)
      this.preview(event.target.files);
    
    formdata.append('image', file, file.name);
    this.productService.uploadImage(formdata).subscribe(response=>{
      console.log(response);
    });
  }
  }

  addDescription(){
    this.description.push(['', '']);
    console.log(this.description);
  }

  removeDescription(index){
    this.description.splice(index, 1);
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
getControl(){
  return this.productform.controls;
}



}
