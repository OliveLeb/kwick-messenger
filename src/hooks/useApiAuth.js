import { useLocalStorage, validationForm } from "../utils/utils";


export const useApiAuth = (service, user, submit,message, handleErrors) => {

        const {user_name,password,token,user_id} = user;

        const callApi = async () => {
            try {
                let data;

                if(token){
                    // send message or logout
                    data = await service(user_id,token,encodeURI(message))
                }
                else {
                    // connect or signup
                    data = await service(user_name,password,encodeURI(message));
                };

                if(data.data.result.status === 'done') {
                    const date = Date.now();
                    if(String(service).includes('logout')) {
                        useLocalStorage.delete();
                        submit();
                    }
                    else if(String(service).includes('say')) {
                        useLocalStorage.set(user_name,user_id,token,date);
                        submit({timestamp:date,content:message,user_name:user_name});
                    }
                    else {
                        useLocalStorage.set(user_name,data.data.result.id,data.data.result.token,date);
                        submit(data.data.result.id, data.data.result.token, user_name);
                    }
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
            let error = validationForm(user_name,password,message,callApi);
            if(error !== undefined && handleErrors) handleErrors(error.type,error.message);
        };


    return [submitForm];

};

