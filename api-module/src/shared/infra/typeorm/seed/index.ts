import parameters from "./parameters";
import users from "./users";

parameters().then(() => 
    console.log(new Date(), "- Create parameters sucess!\n"))
        .catch((err) => 
            console.log(new Date(), "- Create parameters failed!\n", err))

users().then(() => 
    console.log(new Date(), "- Create users sucess!\n"))
        .catch((err) => 
            console.log(new Date(), "- Create users failed!\n", err))
