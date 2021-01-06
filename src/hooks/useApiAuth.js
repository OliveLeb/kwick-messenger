

export const useApiAuth = (service,nameOrId,pwdOrToken, submit,message) => {

        const callApi = async () => {
            try {
                const data = await service(nameOrId,pwdOrToken,encodeURI(message));
                console.log(data);
                submit !== null && submit(data.data.result,nameOrId);
            }
            catch(err) {
                console.log(err)
            }

        };

        const submitForm = (e) => {
            e.preventDefault();
            callApi();
        };


    return [submitForm];

};

