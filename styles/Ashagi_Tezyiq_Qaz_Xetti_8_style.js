var size = 0;
var placement = 'point';

var style_Ashagi_Tezyiq_Qaz_Xetti_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "15.600000000000001px \'Arial\', sans-serif";
    var labelFill = "#ece716";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("Xaric_Diam") !== null) {
        labelText = String(feature.get("Xaric_Diam"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(206,238,23,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
