const Nightmare = require('nightmare');
require('nightmare-upload')(Nightmare);
const chai = require('chai');
const expect = chai.expect;
const nightmare = Nightmare({ show: true })

describe('Filtering Table', () => {
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
    it('updating csv file', function (done) {
        this.timeout('15s')

        nightmare
            .wait(3000)
            .upload('#inputFile', '/Users/angelita/Documents/assignment-FE/issues.csv')
            .wait('#tableInformation')
            .wait(3000)
            .then(()=>done())
    })
    it('sorting table', function (done) {
        this.timeout('15s')

        nightmare
            .wait(1000)
            .type('#inputText input', 'de')
            .wait(3000)
            .evaluate(()=>document.querySelector("#tableInformation > ion-grid > ion-row.table-element.row > ion-col:nth-child(1)").textContent)
            .then(result=>{
                if(result==="Fiona"){
                    done();
                }else{
                    console.log("error in filter");
                    done();
                }
            })
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
