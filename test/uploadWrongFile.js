const Nightmare = require('nightmare');
require('nightmare-upload')(Nightmare);
const chai = require('chai');
const expect = chai.expect;
const nightmare = Nightmare({ show: true })

describe('Upload a incorrect file', () => {
    it('open rabobank assessment', function (done) {
        this.timeout('20s')

        nightmare
            .goto('http://localhost:8100')
            .then(()=>done())
            .catch(error => {
                console.error('Search failed:', error);
                done();
            })
    })
    it('updating wrong file', function (done) {
        this.timeout('15s')

        nightmare
            .wait(3000)
            .upload('#inputFile', '/Users/angelita/Documents/assignment-FE/assignment.txt')
            .wait('.alert-wrapper')
            .wait(3000)
            .then(()=>done())
    })
    it('closing rabobank assessment', function (done) {
        this.timeout('20s')

        nightmare
            .end()
            .then(()=>done())
            .catch(error => {
                console.error('Search failed:', error);
                done();
            })
    })
});

//.alert-wrapper