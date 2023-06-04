export default(signIN=false,action)=>{
    console.log('in signIN reducer',signIN,action)
    switch(action.type){
        case'SIGN_IN':return true;

        case 'SIGN_OUT': return false;

        default: return false;
    }
}