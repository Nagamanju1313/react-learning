const apiRequest = async (url = '', optionsObj = {}, errMsg = null)=>{
    try{
        const response = await fetch(url,optionsObj);
        if(!response.ok) throw Error("API Request is not working");
    }catch(err){
        errMsg = err.message;
    }finally{
        return errMsg
    }
}
export default apiRequest;