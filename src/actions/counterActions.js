
export const INCREASE = "increase";
export const DECREASE = "decrease";

export  function increaseTodo(){  
    console.log("increaseTodo")  
    return {
        type:INCREASE
    }
}

export function decreaseTodo(){
    return{
        type:DECREASE        
    }
}