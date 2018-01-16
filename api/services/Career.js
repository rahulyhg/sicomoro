var schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: Number,
    dob: Date,
    address: String,
    postCode: String,
    state: String,
    website: String,
    resume: String,
    position: String,
    Salary: Number,
    jobCategory: String
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Career', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    //send carrer form 
    //input: _id
    careerFormEmail: function (data, callback) {
        Career.findOne({
            _id: data._id
        }).exec(function (error, created) {
            if (error, created == undefined) {
                console.log("User >>>>>> User.findOneAndUpdate >>> error", error);
                callback(error, null);
            } else {
                // console.log("User >>> welcomeEmail >>> User.findOneAndUpdate >>> error", created);
                var emailData = {};
                emailData.email = created.email;
                emailData.subject = "";
                emailData.filename = "career.ejs";
                emailData.from = "harsh@wohlig.com"
                emailData.firstname = created.name;
                emailData.mobile = created.mobile;
                emailData.dob = created.dob;
                emailData.address = created.address;
                emailData.postCode = created.postCode;
                emailData.state = created.state;
                emailData.website = created.website;
                emailData.position = created.position;
                emailData.Salary = created.Salary;
                emailData.jobCategory = created.jobCategory;
                Config.careerFormEmail(emailData, function (err, response) {
                    if (err) {
                        console.log("error in email", err);
                        callback("emailError", null);
                    } else if (response) {
                        var sendData = {};
                        sendData._id = created._id;
                        sendData.email = created.email;
                        sendData.firstName = created.name;
                        emailData.filename = created.resume;
                        callback(null, sendData);
                    } else {
                        callback("errorOccur", null);
                    }
                });
            }
        })
    }
};
module.exports = _.assign(module.exports, exports, model);