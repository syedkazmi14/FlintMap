var size = 0;
var placement = 'point';

var style_SipiPartners_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#6dd9d9";
    var bufferWidth = 1.2000000000000002;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("field_1") !== null) {
        labelText = String(feature.get("field_1"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(93,136,183,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(85,200,234,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
