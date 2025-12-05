var size = 0;
var placement = 'point';

var style_Baglayici_Qurgular_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Arial Black\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Diametr") !== null) {
        labelText = String(feature.get("Diametr"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(179,93,142,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
