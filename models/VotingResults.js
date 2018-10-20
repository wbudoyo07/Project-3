const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const votingResultsSchema = new Schema ({
    vote : {
        type: Number,
        required: true
    },
    Categories: {
        type: String,
        require: true
    },
    Options: {
        type: String,
        require: true
    }
});

const VotingResults = mongoose.model("VotingResults", votingResultsSchema);

module.exports = VotingResults;