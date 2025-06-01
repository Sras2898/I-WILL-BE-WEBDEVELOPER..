let currentplayer = "X";
let arr = Array(9).fill(null);


function checkWinner() {
    if (
        (arr[0] !== null&& arr[0]  && arr[1] == arr[1]) ||
        (arr[3] !== null&& arr[4]  && arr[4] == arr[5]) ||
        (arr[6] !== null&& arr[7]  && arr[7] == arr[8]) ||
        (arr[0] !== null&& arr[3]  && arr[3] == arr[6]) ||
        (arr[1] !== null&& arr[4]  && arr[4] == arr[7]) ||
        (arr[2] !== null&& arr[5]  && arr[5] == arr[8]) ||
        (arr[0] !== null&& arr[4]  && arr[4] == arr[8]) ||
        (arr[2] !== null&& arr[4]  && arr[4] == arr[6]) 
        {
            document.Write(`winner is ${currentplayer}`);
                return;
        } 
        arr.(!arr.some(e => e === null) ){
         document.write("It's a draw!");
            return;
        }
     }
            
        


function handleclick(el)  {
    if(arr[id] !== null) {
        return; // Cell already filled

    const id = Number(el.id);
    array[id] = currentplayer;
    el.innerText = currentplayer; 
    checkWinner();  
    currentplayer = currentplayer === "X" ? "O" : "X";

}