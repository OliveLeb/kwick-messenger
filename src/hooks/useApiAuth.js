

export const useApiAuth = (service,nameOrId,pwdOrToken, submit) => {

        const callApi = async () => {
            try {
                const data = await service(nameOrId,pwdOrToken);
                console.log(data);
                submit(data.data.result,nameOrId);
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

