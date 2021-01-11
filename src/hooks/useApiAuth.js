import { useLocalStorage, validationForm } from "../utils/utils";


export const useApiAuth = (service,nameOrId,pwdOrToken, submit,message, handleErrors) => {

    
        const callApi = async () => {
            
            try {
                const data = await service(nameOrId,pwdOrToken,encodeURI(message));
                // IF OK? LOGIN
                if(data.data.result.status === 'done') {
                    
                    if(submit){
                        const date = Date.now();
                        if(String(service).includes('logout')) useLocalStorage.delete();
                        else useLocalStorage.set(nameOrId,data.data.result.id,data.data.result.token,date);
                        submit(data.data.result.id,data.data.result.token,nameOrId);
                    } 
                    else return;
                }
                // IF ERROR
                else if(data.data.result.status === 'failure') {
                    if(data.data.result.message.includes('user')) handleErrors('username','Username non valide.');
                    if(data.data.result.message.includes('password')) handleErrors('password','Mot de passe non valide.');
                    if(data.data.result.message.includes('login')) handleErrors('username','Username déjà enregistré.');
                }
            }
            catch(err) {
                console.log(err)
            }

        };

        const submitForm = (e) => {
            if(e) e.preventDefault();
            // CHECK IF FIELDS EMPTY, IF NOT CALL API
            let error = validationForm(nameOrId,pwdOrToken,callApi);
            if(error) handleErrors(error.type,error.message);
        };


    return [submitForm];

};

