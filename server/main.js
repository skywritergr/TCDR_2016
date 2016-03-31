exports.getStuff = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving stuff: ' + id);
};

exports.postStuff = function(req, res) {
    var sample = req.body;
    console.log('Adding example: ' + JSON.stringify(sample));
}

exports.updateStuff = function(req, res) {
    var id = req.params.id;
    console.log('Updating sample: ' + id);
}

exports.deleteStuff = function(req, res) {
    var id = req.params.id;
    console.log('Deleting sample: ' + id);
}