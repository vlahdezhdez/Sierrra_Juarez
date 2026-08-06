ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-11873250.818307, 3696917.353890, -11798894.586445, 3737721.423910]);
var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Crecimientourbano2026_2 = new ol.format.GeoJSON();
var features_Crecimientourbano2026_2 = format_Crecimientourbano2026_2.readFeatures(json_Crecimientourbano2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crecimientourbano2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crecimientourbano2026_2.addFeatures(features_Crecimientourbano2026_2);
var lyr_Crecimientourbano2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Crecimientourbano2026_2, 
                style: style_Crecimientourbano2026_2,
                popuplayertitle: 'Crecimiento urbano 2026',
                interactive: true,
                title: '<img src="styles/legend/Crecimientourbano2026_2.png" /> Crecimiento urbano 2026'
            });
var format_Crecimientourbano2000_3 = new ol.format.GeoJSON();
var features_Crecimientourbano2000_3 = format_Crecimientourbano2000_3.readFeatures(json_Crecimientourbano2000_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crecimientourbano2000_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crecimientourbano2000_3.addFeatures(features_Crecimientourbano2000_3);
var lyr_Crecimientourbano2000_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Crecimientourbano2000_3, 
                style: style_Crecimientourbano2000_3,
                popuplayertitle: 'Crecimiento urbano 2000',
                interactive: true,
                title: '<img src="styles/legend/Crecimientourbano2000_3.png" /> Crecimiento urbano 2000'
            });
var format_Bancosdematerial_4 = new ol.format.GeoJSON();
var features_Bancosdematerial_4 = format_Bancosdematerial_4.readFeatures(json_Bancosdematerial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bancosdematerial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bancosdematerial_4.addFeatures(features_Bancosdematerial_4);
var lyr_Bancosdematerial_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bancosdematerial_4, 
                style: style_Bancosdematerial_4,
                popuplayertitle: 'Bancos de material ',
                interactive: true,
                title: '<img src="styles/legend/Bancosdematerial_4.png" /> Bancos de material '
            });
var format_Centrodepoblacin_5 = new ol.format.GeoJSON();
var features_Centrodepoblacin_5 = format_Centrodepoblacin_5.readFeatures(json_Centrodepoblacin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrodepoblacin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrodepoblacin_5.addFeatures(features_Centrodepoblacin_5);
var lyr_Centrodepoblacin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centrodepoblacin_5, 
                style: style_Centrodepoblacin_5,
                popuplayertitle: 'Centro de población',
                interactive: false,
                title: '<img src="styles/legend/Centrodepoblacin_5.png" /> Centro de población'
            });
var format_Tiraderos_6 = new ol.format.GeoJSON();
var features_Tiraderos_6 = format_Tiraderos_6.readFeatures(json_Tiraderos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tiraderos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tiraderos_6.addFeatures(features_Tiraderos_6);
cluster_Tiraderos_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Tiraderos_6
});
var lyr_Tiraderos_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Tiraderos_6, 
                style: style_Tiraderos_6,
                popuplayertitle: 'Tiraderos',
                interactive: true,
                title: '<img src="styles/legend/Tiraderos_6.png" /> Tiraderos'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Crecimientourbano2026_2.setVisible(true);lyr_Crecimientourbano2000_3.setVisible(true);lyr_Bancosdematerial_4.setVisible(true);lyr_Centrodepoblacin_5.setVisible(true);lyr_Tiraderos_6.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_GoogleSatellite_1,lyr_Crecimientourbano2026_2,lyr_Crecimientourbano2000_3,lyr_Bancosdematerial_4,lyr_Centrodepoblacin_5,lyr_Tiraderos_6];
lyr_Crecimientourbano2026_2.set('fieldAliases', {'fid': 'fid', 'anio': 'Año', 'tipo': 'tipo', 'clase': 'clase', 'area_ha': 'area_ha', });
lyr_Crecimientourbano2000_3.set('fieldAliases', {'fid': 'fid', 'anio': 'Año', 'tipo': 'tipo', 'clase': 'clase', 'area_ha': 'area_ha', });
lyr_Bancosdematerial_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Empresa': 'Empresa', 'Proyecto': 'Proyecto', 'Mineral': 'Mineral', 'TIPO': 'TIPO', 'Ha': 'Ha', 'Clasificac': 'Clasificac', 'CieloAbier': 'CieloAbier', 'ID_': 'ID_', 'Cobre': 'Cobre', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'area_ha': 'Superficie (Hectárea)', });
lyr_Centrodepoblacin_5.set('fieldAliases', {'fid': 'fid', 'USO': 'USO', 'Nombre_USO': 'Nombre_USO', 'Clave_USO': 'Clave_USO', 'ID': 'ID', 'PLAN_Parci': 'PLAN_Parci', 'GlobalID': 'GlobalID', });
lyr_Tiraderos_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Nombre', });
lyr_Crecimientourbano2026_2.set('fieldImages', {'fid': 'TextEdit', 'anio': 'TextEdit', 'tipo': 'Hidden', 'clase': 'Hidden', 'area_ha': 'TextEdit', });
lyr_Crecimientourbano2000_3.set('fieldImages', {'fid': 'TextEdit', 'anio': 'TextEdit', 'tipo': 'Hidden', 'clase': 'Hidden', 'area_ha': 'TextEdit', });
lyr_Bancosdematerial_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Empresa': 'TextEdit', 'Proyecto': 'TextEdit', 'Mineral': 'TextEdit', 'TIPO': 'TextEdit', 'Ha': 'TextEdit', 'Clasificac': 'TextEdit', 'CieloAbier': 'TextEdit', 'ID_': 'TextEdit', 'Cobre': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_Centrodepoblacin_5.set('fieldImages', {'fid': 'TextEdit', 'USO': 'TextEdit', 'Nombre_USO': 'TextEdit', 'Clave_USO': 'TextEdit', 'ID': 'TextEdit', 'PLAN_Parci': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_Tiraderos_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_Crecimientourbano2026_2.set('fieldLabels', {'fid': 'no label', 'anio': 'inline label - visible with data', 'tipo': 'no label', 'clase': 'no label', 'area_ha': 'no label', });
lyr_Crecimientourbano2000_3.set('fieldLabels', {'fid': 'no label', 'anio': 'inline label - visible with data', 'tipo': 'no label', 'clase': 'no label', 'area_ha': 'no label', });
lyr_Bancosdematerial_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Empresa': 'no label', 'Proyecto': 'no label', 'Mineral': 'no label', 'TIPO': 'no label', 'Ha': 'no label', 'Clasificac': 'no label', 'CieloAbier': 'no label', 'ID_': 'no label', 'Cobre': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'area_ha': 'inline label - visible with data', });
lyr_Centrodepoblacin_5.set('fieldLabels', {'fid': 'no label', 'USO': 'no label', 'Nombre_USO': 'no label', 'Clave_USO': 'no label', 'ID': 'no label', 'PLAN_Parci': 'no label', 'GlobalID': 'no label', });
lyr_Tiraderos_6.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - visible with data', });
lyr_Tiraderos_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});