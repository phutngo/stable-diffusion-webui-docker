require('dotenv').config()
var paperspace_node = require("paperspace-node");
var paperspace = paperspace_node({
    apiKey: process.env.PAPERSPACE_API_KEY, // <- paste your api key here
});

var version = paperspace_node.VERSION;

console.log("paperspace-node version: " + version);

const machineId = "pskghfnwz";

paperspace.machines.start(
    {
        machineId: machineId,
    },
    function (err, res) {
        // handle error or result
        if (err) {
            console.log("start err: " + err);
            return;
        }

        if (res) {
            console.log("start res: ", res);
            console.log("waitingFor machine to be ready...: ", res);
            paperspace.machines.waitfor(
                {
                    machineId: machineId,
                    state: "ready",
                },
                function (err, res) {
                    if (err) {
                        console.log("waitFor err: " + err);
                        return;
                    }

                    if (res) {
                        console.log("waitFor res: ", res);
                        return;
                    }
                }
            );

            return;
        }

    }
);

// paperspace.machines.stop(
//     {
//         machineId: machineId,
//     },
//     function (err, res) {
//         // handle error or result
//         console.log("err: " + err);
//         console.log("res: " + res);
//     }
// );

// paperspace.machines.list(function (err, res) {
//     // handle error or result

//     if (err) {
//         console.log("err: " + err);
//         return;
//     }

//     if (res) {
//         console.log("res: ", res);
//         return;
//     }

// });