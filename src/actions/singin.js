export const signin=()=>async(dispatch)=>{
    try {
        console.log('in dispatch sign in')
        dispatch({type:'SIGN_IN',payload:null})
    } catch (e) {
        console.log('error',e)
    }
}

export const signout =()=>async(dispatch)=>{
    try{
        dispatch({type:'SIGN_OUT',payload:null})
    } catch(e){
        console.log('error',e)
    }
}