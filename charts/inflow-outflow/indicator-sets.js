
let indicatorSets = {
    "ACID": "Water",
    "ETOX": "Water",
    "EUTR": "Water",
    "GHG": "Air",
    "MGHG": "Air",
    "OGHG": "Air",
    "HCAN": "Health",
    "HNCN": "Health",
    "HTOX": "Health",
    "HRSP": "Air",
    "OZON": "Air",
    "SMOG": "Air",
    "NNRG": "Energy",
    "RNRG": "Energy",
    "ENRG": "Energy",
    "LAND": "Land",
    "WATR": "Water",
    "MNRL": "Land",
    "PEST": "Land",
    "METL": "Land",
    "HAPS": "Air",
    "VADD": "Wealth",
    "JOBS": "Wealth",
    "CRHW": "Land",
    "CMSW": "Land",
    "FMSW": "Land",
    "CCDD": "Land",
}
$(document).ready(function() {

    // `hashChangeEvent` event reside in multiple widgets. 
    // Called by goHash within localsite.js
    document.addEventListener('hashChangeEvent', function (elem) {
        if (location.host.indexOf('localhost') >= 0) {
            //alert('hashChangeEvent'); // Invoked twice by iogrid inflow-outflow chart
        }
    }, false);
            
});