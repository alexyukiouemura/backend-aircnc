const User = require('../models/User')

// index, show, store, update, destroy
module.exports = {
    async store(req, res) {
        const { email } = req.body;
    try {
        let user = await User.findOne({ email });
        if ( !user ) {
            user =  await User.create({email});
        }
        return res.json(user);
      } catch ( error ) {
        return res.json(error);
      }
    }
};