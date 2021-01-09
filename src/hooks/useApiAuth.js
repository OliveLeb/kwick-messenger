import { useState } from "react";
import { useLocalStorage, validationForm } from "../utils/utils";


export const useApiAuth = (service,nameOrId,pwdOrToken, submit,message) => {

    const [errorMessage, setErrorMessage] = useState({type:'',message:''});

        const callApi = async () => {
            
            try {
                const data = await service(nameOrId,pwdOrToken,encodeURI(message));
                console.log(data)
                // IF OK? LOGIN
                if(data.data.result.status === 'done') {
                    
                    if(submit !== null){
                        const date = Date.now();
                        if(String(service).includes('logout')) useLocalStorage.delete();
                        else useLocalStorage.set(nameOrId,data.data.result.id,data.data.result.token,date);
                        submit(data.data.result.id,data.data.result.token,nameOrId);
                    } 
                    else return;
                }
                
//                submit !== null && data.data.result.status === 'done' && submit(data.data.result,nameOrId);

                // IF ERROR
                else if(data.data.result.status === 'failure') {
                    if(data.data.result.message.includes('user')) setErrorMessage({type:'username',message:'Username non valide.'});
                    if(data.data.result.message.includes('password')) setErrorMessage({type:'password',message:'Mot de passe non valide.'})
                    if(data.data.result.message.includes('login')) setErrorMessage({type:'username',message:'Username déjà enregistré.'})
                    
                }
            }
            catch(err) {
                console.log(err)
            }

        };

        const submitForm = (e) => {
            e.preventDefault();
            // CHECK IF FIELDS EMPTY, IF NOT CALL API
            let error = validationForm(nameOrId,pwdOrToken,callApi);
            if(error) setErrorMessage(error);
        };


    return [submitForm,errorMessage];

};

