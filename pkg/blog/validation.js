const { Validator } = require('node-input-validator');

const Post = {
    
    // category: 'required|string',
    title: 'required|string',
    paragraph: 'required|string',
    min : 'required|integer',
    persons:'required|integer',
};

const PostPartial = {
   
    category: 'string',
    title: 'string',
    paragraph: 'string',
    min : 'integer',
    persons:'integer',
  
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema); // this is where the validation is set up
    let e = await v.check(); // this is where the validation hapens
    if (!e) {
        throw {
            code: 400,
            error: v.errors
        };
    }
};

module.exports = {
    Post,
    PostPartial,
    validate
};