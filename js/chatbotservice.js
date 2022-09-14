const responseObj = {
    Chifrudo: "OH porra",
    pat: "Tira a mão de mim",
};

const fetchResponse = (userInput) => {
    return new Promise((res, reject) => {
        try {
            setTimeout(() => {
                res(responseObj[userInput]);
            }, 1200);
        } catch (error) {
            reject(error);
        }
    });
};

const chatBotService = {
    getBotResponse(userInput){
        return fetchResponse(userInput); 
    }
};

export default chatBotService;