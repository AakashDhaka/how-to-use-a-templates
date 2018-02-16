angular.module ("app",[])
.controller("firstctrl",firstfunction)
.factory("products",products)

function firstfunction(products)
{
    var first = this;
    
 first.list = products;
 first.items = products[0].product;
 
 console.log(first.list);
console.log("hello")
    first.changesort = function(type){
        first.sorttype = type

    }
first.changename = function(name){
    first.sortname = name
}
first.rating = function(actual,input)
   {
         console.log(actual.rating,input)
         return actual.rating>=parseInt(input)
   }
}

function products(){
    console.log("hehhehehehehhehehehehehhehe")
    return [{name:"shoes",product:[
        {name:"nike air",img:"images/nike.jpg",price:"$50",rating:"4",des:"nice shoes with good quality",company:"NIKE"},
        {name:"reebok running",img:"images/reebok.png",price:"$40",rating:"3",des:"nice shoes with good quality good for runnning too.",company:"REEBOK"},
        {name:"puma rock",img:"images/puma.png",price:"$30",rating:"2",des:"nice shoes with good quality puma is a good brand",company:"PUMA"},
        {name:"adidas ultraboost",img:"images/adidas.png",price:"$60",rating:"5",des:"nice shoes with good quality adidas is reputed company",company:"ADIDAS"}
 ] },
 {name:"television",product:[
    {name:"nike air",img:"images/nike.jpg",price:"$50",rating:"4",des:"nice shoes with good quality",company:"NIKE"},
    {name:"reebok running",img:"images/reebok.png",price:"$40",rating:"3",des:"nice shoes with good quality good for runnning too.",company:"REEBOK"},
    {name:"puma rock",img:"images/puma.png",price:"$30",rating:"2",des:"nice shoes with good quality puma is a good brand",company:"PUMA"},
    {name:"adidas ultraboost",img:"images/adidas.png",price:"$60",rating:"5",des:"nice shoes with good quality adidas is reputed company",company:"ADIDAS"}
] } ,
{name:"AC",product:[
{name:"nike air",img:"images/nike.jpg",price:"$50",rating:"4",des:"nice shoes with good quality",company:"NIKE"},
{name:"reebok running",img:"images/reebok.png",price:"$40",rating:"3",des:"nice shoes with good quality good for runnning too.",company:"REEBOK"},
{name:"puma rock",img:"images/puma.png",price:"$30",rating:"2",des:"nice shoes with good quality puma is a good brand",company:"PUMA"},
{name:"adidas ultraboost",img:"images/adidas.png",price:"$60",rating:"5",des:"nice shoes with good quality adidas is reputed company",company:"ADIDAS"}
] }  ]
console.log("chhekking")
}
