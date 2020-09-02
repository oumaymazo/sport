import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
ch:string;
max:number;
T:number[];
user:any;
news:any;
  constructor() { }

  ngOnInit(): void {
    this.news=[
      {id:1,name:'neymar',image:'assets/images/img_1.jpg',date:'19/08/2020',avatar:'assets/images/person_1.jpg'},
      {id:2,name:'messy',image:'assets/images/img_2.jpg',date:'20/08/2020',avatar:'assets/images/person_1.jpg'},
      {id:3,name:'ronaldo',image:'assets/images/img_3.jpg',date:'21/08/2020',avatar:'assets/images/person_2.jpg'}
    ];
  // this.ch=this.moyenne(10,8,10);
  // alert(this.ch);
  // this.max=this.grand([5,8,9,14,6])
  // alert(this.max)
  // this.T=this.inverse([5,4,9,12])
  // alert(this.T)
 this.user=[
    {id:1,email:"alya@gmail.com"},
    {id:2,email:"hamza@gmail.com"},
    {id:3,email:"alyaoumayma"}
  ]
  // this.ch=this.validEmail(this.user);
  // alert(this.ch);

  }
moyenne(m:number,p:number,i:number){
let moy=(m*2+p*3+i*4)/9
if (moy>0 && moy<8) {
  return("trop faible")
}
else if (moy>=8 && moy<10){
return("faibel")
}
else if (moy>=10 && moy<13){
  return("assez bien")
}
else if (moy>=13 && moy<16){
    return("bien")
}
else if (moy>=16 && moy<19){
      return("tres bien")
}
else if (moy>=19 && moy<20){
        return("excellent")
}

}
grand(T:number[])
{
let max=T[0] ;
for (let i = 1; i < T.length; i++) {
if (max<T[i]) {
  max=T[i];
}  
}
return max;
}
inverse(T:number[]){
  let M=Array();
  let j=0;
  for (let i =T.length-1; i>=0; i--) {
    M[T.length-1-i]=T[i]  ;

  }
  
  return M;
}
validEmail(user:any){
  
  for (let i  = 0; i < user.length; i ++) {
    let idU=user[i].id;
    let isValid=this.validateEmail(user[i].email)
    if (isValid){
      
      alert (`utilisateur numéro  ${idU}  est ${isValid}`)
    }
    else {
      return (`utilisateur numéro ${idU}  est ${isValid}`)
    }
  }
  
}
validateEmail(email:string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email));
}
negatif(T:number[]){
  let M=Array();
  for (let i = 0; i < T.length; i++) {
if(T[i]<0){
M.push(T[i]);
}    
  }

}
fusion(T:number[],N:number[]){
  for (let i = 0; i < N.length; i++) {
T.push(N[i])  ;  
  }
}
}
