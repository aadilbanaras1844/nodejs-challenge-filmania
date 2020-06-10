
const { userModel } = require("../models");
const { encryptPassword, comparePassword } = require("./../helpers");


module.exports.createUser = ( params ) => {
    return new Promise(async function(resolve, reject){

        try {
            let user = await userModel.findOne({ email: params.email });
            if (user) return reject(new Error("User already registered."));

            const newUser = new userModel( params );
            newUser.password = await encryptPassword(newUser.password);

            const userAdded = await newUser.save();
            const token = newUser.generateAuthToken();
            return resolve({user: userAdded, token})              
        } catch (error) {
            return reject(error)
        }
      

    })
};

module.exports.loginUser = ( email, password ) => {
    return new Promise(async function(resolve, reject){

        //find an existing user
        let user = await userModel.findOne({ email: email });
        if (!user) return reject(new Error("User not found"));
        const passwordMatch = await comparePassword(password, user.password);
        if( passwordMatch ){
            const token = user.generateAuthToken();
            
            return resolve({
                token: token,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.contact_email,
                is_organiser: user.is_organiser,
                is_traveller: user.is_traveller
            }) 
       }
       else {
        return reject(new Error("Password mismatch"));
       }

    })
};

