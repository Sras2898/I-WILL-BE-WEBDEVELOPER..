let screen = document.getElementById('screen');
buttons =  document.querySelector('button');
let screenValue = ' ';
for(item of button){
          item.addEventListener('click')  ,  (e)=>{
               buttonText = e . target.innerText;
               console.log('button text is ' ,  buttonText);
               if(buttonText == 'X'  )  {
                      buttonText= '*';
                      screen.value += buttonText;
                      screen.value = screenValue;
               }
               else if (buttonText = '=' )  {
                     screen.value= screenValue;
                }
                 else if (buttonText == '=' ){
                        screen.value = eval(screenValue);
              }
              else {
                  screenValue+= buttonText;
                  screen.value= screenValue;
              }

          } 
  }s