var expect = require("chai").expect;
var request = require("request");

describe("Test endpoint", function () {
    var url = "http://localhost:3000/api/transanction";

    describe.skip("Creation of testEntry", function () {
        var entryId = '';
        it("returns status 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it("creates transaction", function (done) {
            var formData = {
                "name": "TestName",
                "email": "TestEmail@gmail.com",
                "type": 1,
                "name": "TestName",
                "email": "TestEmail@gmail.com",
                "type": 1,
            };
            request.post({
                    url: url,
                    form: userid
                },
                function (err, httpResponse, body) {
                    expect(JSON.parse(body).name).to.equal(formData.name);
                    expect(JSON.parse(body).email).to.equal(formData.email);
                    expect(JSON.parse(body).type).to.equal(formData.type);
                    expect(JSON.parse(body).name).to.equal(userid.name);
                    expect(JSON.parse(body).email).to.equal(userid.email);
                    expect(JSON.parse(body).type).to.equal(userid.type);
                    entryId = JSON.parse(body)._id;
                    done();
                });
        });
        it("deletes transaction", function (done) {
            setTimeout(function () {
                request.delete(url + '/' + entryId, function (err, response, body) {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
            }, 20);
        });
    });
});
