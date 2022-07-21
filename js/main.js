

/* 
onclick on the button --> show the div with only the common things

highlight the image of the clicked button 

show the data of the highlighted image
*/


//get buttons
let allThreeBtns = document.querySelectorAll('.custom-btn');

//get modal
let myModal = document.querySelector('.overlay');

allThreeBtns.forEach(element => {
   element.addEventListener('click',(e)=>{

      //collect data from inputs

      let myDataObject = {vendorsValue:document.querySelector('.my-input1').value,
                          mediaValue:document.querySelector('.my-input2').value,
                          corpValue:document.querySelector('.my-input3').value,
                          teamValue:document.querySelector('.my-input4').value
                        };
                       
      //distructing object
      let {vendorsValue,mediaValue,corpValue,teamValue} = myDataObject;

      //validation
      let errorMsg = document.querySelector('.error')
      if(vendorsValue==""||mediaValue==""||corpValue==""||teamValue=="")
      {

errorMsg.style.opacity = "1"
      }
      else
      {
         errorMsg.style.opacity = "0"

         //clear inputs

         clearInputs()


  //calculs
 

  let sum = Number(vendorsValue)  + Number(mediaValue)  + Number(corpValue)  + Number(teamValue) ;
  let brex = Math.ceil(sum* 0.3) ;
  let stripe = Math.ceil(sum *2.9) ;
  let amex = Math.ceil(sum * 1.3) ;
  let unlimitedRewards = Math.ceil(sum * 1.1) ;
  let lifetimeRewards = Math.ceil(sum *1.2) ;
  




  //put unlimitedRewards and lifetimeRewards in Dom

  document.querySelector('.type-result2 h5').innerHTML = `$${unlimitedRewards}`;
  document.querySelector('.type-result3 h5').innerHTML = `$${lifetimeRewards}`;


   
  //showing the modal
  myModal.style.display = "flex";
  //get images
  let allThreeImages = document.querySelectorAll('.image-placeholder');
let allThreeImagesArray =  Array.from(allThreeImages);


//right arrow
let slideRightArrow = document.querySelector('.right-arrow');

 //left arrow
 let slideLeftArrow = document.querySelector('.left-arrow');




  for(let i=0;i<allThreeBtns.length;i++)
  {


  
     if(e.target == allThreeBtns[i])
     {
        //slide right
        slideRightArrow.addEventListener('click',()=>{
           
        i++;
        if(i>2)
        {
           i=0
        }
           allThreeImagesArray[i].classList.add('highlighted-image')
           $(allThreeImagesArray[i]).siblings().removeClass( "highlighted-image" )  //jquery siblings
  

           if(allThreeImagesArray[0]==allThreeImagesArray[i])
           {
              
              document.querySelector('.type-result1 h4').innerHTML = 'Brex buisness card';
              document.querySelector('.type-result1 h5').innerHTML = `$${brex}`;
            
           }
           else if(allThreeImagesArray[1]==allThreeImagesArray[i])
           {
             
              document.querySelector('.type-result1 h4').innerHTML = 'Stripe buisness card';
              document.querySelector('.type-result1 h5').innerHTML = `$${stripe}`;
              
           }
           else if(allThreeImagesArray[2]==allThreeImagesArray[i])
           {
              
              document.querySelector('.type-result1 h4').innerHTML = 'Amex buisness card';
              document.querySelector('.type-result1 h5').innerHTML = `$${amex}`;
           }

        })

         //slide left
         slideLeftArrow.addEventListener('click',()=>{
           
        i--;
        if(i<0)
        {
           i=2
        }
           allThreeImagesArray[i].classList.add('highlighted-image')
           $(allThreeImagesArray[i]).siblings().removeClass( "highlighted-image" )  //jquery siblings
  

           if(allThreeImagesArray[0]==allThreeImagesArray[i])
           {
              
              document.querySelector('.type-result1 h4').innerHTML = 'Brex buisness card';
              document.querySelector('.type-result1 h5').innerHTML = `$${brex}`;
           }
           else if(allThreeImagesArray[1]==allThreeImagesArray[i])
           {
             
              document.querySelector('.type-result1 h4').innerHTML = 'Stripe buisness card';
              document.querySelector('.type-result1 h5').innerHTML = `$${stripe}`;
              
           }
           else if(allThreeImagesArray[2]==allThreeImagesArray[i])
           {
              
              document.querySelector('.type-result1 h4').innerHTML = 'Amex buisness card';
              document.querySelector('.type-result1 h5').innerHTML = `$${amex}`;
           }

        })
      
 
        //add highlight to the clicked btn and change content of modal depends on which button is clicked
        
        allThreeImagesArray[i].classList.add('highlighted-image')
        $(allThreeImagesArray[i]).siblings().removeClass( "highlighted-image" )  //jquery siblings


        if(allThreeImagesArray[0]==allThreeImagesArray[i])
        {
          
           document.querySelector('.type-result1 h4').innerHTML = 'Brex buisness card';
           document.querySelector('.type-result1 h5').innerHTML = `$${brex}`;
           
        }
        else if(allThreeImagesArray[1]==allThreeImagesArray[i])
        {
           
           document.querySelector('.type-result1 h4').innerHTML = 'Stripe buisness card';
           document.querySelector('.type-result1 h5').innerHTML = `$${stripe}`;
         
        }
        else if(allThreeImagesArray[2]==allThreeImagesArray[i])
        {
          
           document.querySelector('.type-result1 h4').innerHTML = 'Amex buisness card';
           document.querySelector('.type-result1 h5').innerHTML = `$${amex}`;
           
          
        }

     }

  }

      }
    

    
   })
});

//exit icon and esc button on keyboard

let myExitIcon = document.querySelector('.my-exit-icon')
myExitIcon.addEventListener('click',()=>{

   myModal.style.display = "none";

})

document.addEventListener('keyup', (e)=>{

if(e.key == 'Escape')
{
   myModal.style.display = "none";
}
})


//clear inputs
function clearInputs()
{
   document.querySelector('.my-input1').value = '';
   document.querySelector('.my-input2').value ='';
  document.querySelector('.my-input3').value ='';
   document.querySelector('.my-input4').value ='';
}




