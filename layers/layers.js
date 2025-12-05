var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_nzibatiSerhedler_2 = new ol.format.GeoJSON();
var features_nzibatiSerhedler_2 = format_nzibatiSerhedler_2.readFeatures(json_nzibatiSerhedler_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nzibatiSerhedler_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nzibatiSerhedler_2.addFeatures(features_nzibatiSerhedler_2);
var lyr_nzibatiSerhedler_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nzibatiSerhedler_2, 
                style: style_nzibatiSerhedler_2,
                popuplayertitle: 'İnzibatiSerhedler',
                interactive: true,
                title: '<img src="styles/legend/nzibatiSerhedler_2.png" /> İnzibatiSerhedler'
            });
var format_QazPaylayiciStansiya_3 = new ol.format.GeoJSON();
var features_QazPaylayiciStansiya_3 = format_QazPaylayiciStansiya_3.readFeatures(json_QazPaylayiciStansiya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QazPaylayiciStansiya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QazPaylayiciStansiya_3.addFeatures(features_QazPaylayiciStansiya_3);
var lyr_QazPaylayiciStansiya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QazPaylayiciStansiya_3, 
                style: style_QazPaylayiciStansiya_3,
                popuplayertitle: 'Qaz Paylayici Stansiya',
                interactive: true,
                title: '<img src="styles/legend/QazPaylayiciStansiya_3.png" /> Qaz Paylayici Stansiya'
            });
var format_Filter_4 = new ol.format.GeoJSON();
var features_Filter_4 = format_Filter_4.readFeatures(json_Filter_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Filter_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Filter_4.addFeatures(features_Filter_4);
var lyr_Filter_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Filter_4, 
                style: style_Filter_4,
                popuplayertitle: 'Filter',
                interactive: true,
                title: '<img src="styles/legend/Filter_4.png" /> Filter'
            });
var format_Serf_Olcen_Cihazlar_5 = new ol.format.GeoJSON();
var features_Serf_Olcen_Cihazlar_5 = format_Serf_Olcen_Cihazlar_5.readFeatures(json_Serf_Olcen_Cihazlar_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Serf_Olcen_Cihazlar_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Serf_Olcen_Cihazlar_5.addFeatures(features_Serf_Olcen_Cihazlar_5);
var lyr_Serf_Olcen_Cihazlar_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Serf_Olcen_Cihazlar_5, 
                style: style_Serf_Olcen_Cihazlar_5,
                popuplayertitle: 'Serf_Olcen_Cihazlar',
                interactive: true,
                title: '<img src="styles/legend/Serf_Olcen_Cihazlar_5.png" /> Serf_Olcen_Cihazlar'
            });
var format_Baglayici_Qurgular_6 = new ol.format.GeoJSON();
var features_Baglayici_Qurgular_6 = format_Baglayici_Qurgular_6.readFeatures(json_Baglayici_Qurgular_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Baglayici_Qurgular_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baglayici_Qurgular_6.addFeatures(features_Baglayici_Qurgular_6);
var lyr_Baglayici_Qurgular_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Baglayici_Qurgular_6, 
                style: style_Baglayici_Qurgular_6,
                popuplayertitle: 'Baglayici_Qurgular',
                interactive: true,
                title: '<img src="styles/legend/Baglayici_Qurgular_6.png" /> Baglayici_Qurgular'
            });
var format_Qaz_Tenzimleyici_Menteqe_7 = new ol.format.GeoJSON();
var features_Qaz_Tenzimleyici_Menteqe_7 = format_Qaz_Tenzimleyici_Menteqe_7.readFeatures(json_Qaz_Tenzimleyici_Menteqe_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qaz_Tenzimleyici_Menteqe_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qaz_Tenzimleyici_Menteqe_7.addFeatures(features_Qaz_Tenzimleyici_Menteqe_7);
var lyr_Qaz_Tenzimleyici_Menteqe_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Qaz_Tenzimleyici_Menteqe_7, 
                style: style_Qaz_Tenzimleyici_Menteqe_7,
                popuplayertitle: 'Qaz_Tenzimleyici_Menteqe',
                interactive: true,
                title: '<img src="styles/legend/Qaz_Tenzimleyici_Menteqe_7.png" /> Qaz_Tenzimleyici_Menteqe'
            });
var format_Ashagi_Tezyiq_Qaz_Xetti_8 = new ol.format.GeoJSON();
var features_Ashagi_Tezyiq_Qaz_Xetti_8 = format_Ashagi_Tezyiq_Qaz_Xetti_8.readFeatures(json_Ashagi_Tezyiq_Qaz_Xetti_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ashagi_Tezyiq_Qaz_Xetti_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ashagi_Tezyiq_Qaz_Xetti_8.addFeatures(features_Ashagi_Tezyiq_Qaz_Xetti_8);
var lyr_Ashagi_Tezyiq_Qaz_Xetti_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ashagi_Tezyiq_Qaz_Xetti_8, 
                style: style_Ashagi_Tezyiq_Qaz_Xetti_8,
                popuplayertitle: 'Ashagi_Tezyiq_Qaz_Xetti',
                interactive: true,
                title: '<img src="styles/legend/Ashagi_Tezyiq_Qaz_Xetti_8.png" /> Ashagi_Tezyiq_Qaz_Xetti'
            });
var format_Orta_Tezyiq_Qaz_Xetti_9 = new ol.format.GeoJSON();
var features_Orta_Tezyiq_Qaz_Xetti_9 = format_Orta_Tezyiq_Qaz_Xetti_9.readFeatures(json_Orta_Tezyiq_Qaz_Xetti_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Orta_Tezyiq_Qaz_Xetti_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orta_Tezyiq_Qaz_Xetti_9.addFeatures(features_Orta_Tezyiq_Qaz_Xetti_9);
var lyr_Orta_Tezyiq_Qaz_Xetti_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Orta_Tezyiq_Qaz_Xetti_9, 
                style: style_Orta_Tezyiq_Qaz_Xetti_9,
                popuplayertitle: 'Orta_Tezyiq_Qaz_Xetti',
                interactive: true,
                title: '<img src="styles/legend/Orta_Tezyiq_Qaz_Xetti_9.png" /> Orta_Tezyiq_Qaz_Xetti'
            });
var format_Yuksek_Tezyiq_Qaz_Xetti_10 = new ol.format.GeoJSON();
var features_Yuksek_Tezyiq_Qaz_Xetti_10 = format_Yuksek_Tezyiq_Qaz_Xetti_10.readFeatures(json_Yuksek_Tezyiq_Qaz_Xetti_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yuksek_Tezyiq_Qaz_Xetti_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yuksek_Tezyiq_Qaz_Xetti_10.addFeatures(features_Yuksek_Tezyiq_Qaz_Xetti_10);
var lyr_Yuksek_Tezyiq_Qaz_Xetti_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yuksek_Tezyiq_Qaz_Xetti_10, 
                style: style_Yuksek_Tezyiq_Qaz_Xetti_10,
                popuplayertitle: 'Yuksek_Tezyiq_Qaz_Xetti',
                interactive: true,
                title: '<img src="styles/legend/Yuksek_Tezyiq_Qaz_Xetti_10.png" /> Yuksek_Tezyiq_Qaz_Xetti'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_nzibatiSerhedler_2.setVisible(true);lyr_QazPaylayiciStansiya_3.setVisible(true);lyr_Filter_4.setVisible(true);lyr_Serf_Olcen_Cihazlar_5.setVisible(true);lyr_Baglayici_Qurgular_6.setVisible(true);lyr_Qaz_Tenzimleyici_Menteqe_7.setVisible(true);lyr_Ashagi_Tezyiq_Qaz_Xetti_8.setVisible(true);lyr_Orta_Tezyiq_Qaz_Xetti_9.setVisible(true);lyr_Yuksek_Tezyiq_Qaz_Xetti_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleRoad_1,lyr_nzibatiSerhedler_2,lyr_QazPaylayiciStansiya_3,lyr_Filter_4,lyr_Serf_Olcen_Cihazlar_5,lyr_Baglayici_Qurgular_6,lyr_Qaz_Tenzimleyici_Menteqe_7,lyr_Ashagi_Tezyiq_Qaz_Xetti_8,lyr_Orta_Tezyiq_Qaz_Xetti_9,lyr_Yuksek_Tezyiq_Qaz_Xetti_10];
lyr_nzibatiSerhedler_2.set('fieldAliases', {'fid': 'fid', 'Ad': 'Ad', 'Sahe': 'Sahe', 'Melumat': 'Melumat', 'Qeyd': 'Qeyd', });
lyr_QazPaylayiciStansiya_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Ad': 'Ad', 'Erazi': 'Ərazi', 'QPS_Data': 'QPS məlumatları', 'Qeyd': 'Qeyd', 'Kordinat_X': 'Kordinat X', 'Kordinat_Y': 'Kordinat Y', 'Sekil_Link': 'Sekil', 'Data_Collector': 'Sahə məlumatı toplayan', });
lyr_Filter_4.set('fieldAliases', {'fid': 'fid', 'Ad': 'Ad', 'Erazi': 'Erazi', 'Qeyd': 'Qeyd', 'Kordinat_Y': 'Kordinat_Y', 'Kordinat_X': 'Kordinat_X', });
lyr_Serf_Olcen_Cihazlar_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Ad': 'Ad', 'Erazi': 'Ərazi', 'Saygc_Mark': 'Sayğacın Növü (Markası)', 'Saygac_Tip': 'Sayğacın Tipi', 'Saygc_Nomr': 'Sayğacın Nömrəsi', 'Dat_Colltr': 'Sahə məlumatı toplayan', 'GİS_Engin': 'CİS mühəndisi', 'Dat_Col_Da': 'Sahə məlumat toplama tarixi', 'Qeyd': 'Qeyd', 'Kordinat_X': 'Kordinat X', 'Kordinat_Y': 'Kordinat Y', 'Qur_Tarixi': 'Quraşdırılma tarixi', 'SAP_Nomres': 'SAP nömrəsi', 'Sekil_Link': 'Sekil', });
lyr_Baglayici_Qurgular_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Ad': 'Ad', 'Ərazi': 'Ərazi', 'Tipi': 'Tipi', 'Materiali': 'Material', 'Diametr': 'Diametr', 'Hundurluk': 'Hündürlük', 'Dat_Colktr': 'Sahə məlumatı toplayan', 'CIS_Engine': 'CİS mühəndisi', 'Dat_Col_Da': 'Sahə məlumat toplama tarixi', 'Kordinat_X': 'Kordinat X', 'Kordinat_Y': 'Kordinat Y', 'SAP_Nomres': 'SAP nömrəsi', 'Qeyd': 'Qeyd', 'Sekil_Link': 'Sekil', 'Derinlik': 'Derinlik', });
lyr_Qaz_Tenzimleyici_Menteqe_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Ad': 'Ad', 'Erazi': 'Ərazi', 'Data_Coltr': 'Sahə məlumatı toplayan', 'CİS_Engin': 'CİS mühəndisi', 'Dat_Col_Da': 'Sahə məlumat toplama tarixi', 'QTM_Tipi': 'Qaz Tənzimləyici Məntəqə Tipləri', 'Giris_Tezy': 'Giriş Təzyiqi  xx MPa', 'Cixis_Tezy': 'Çıxış Təzyiqi xx MPa', 'Eha_Ab_Say': 'Əhali Abonent sayı', 'Q_Eh_A_Say': 'Qeyri Əhali Abonent sayı', 'Tot_Ab_Say': 'Ümumi Abonent sayı', 'Qida_Kemer': 'Qidalandığı Kəmər-Mənbə', 'Qeyd': 'Qeyd', 'Qur_Akt_No': 'Quraşdırılma Akt Nömrəsi', 'Qur_Tarixi': 'Quraşdırılma Tarixi', 'Kordinat_X': 'Kordinat X', 'Kordinat_Y': 'Kordinat Y', 'SAP_Nomres': 'SAP nömrəsi', 'Sekil_Link': 'Sekil', });
lyr_Ashagi_Tezyiq_Qaz_Xetti_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Ad': 'Ad', 'Erazi': 'Ərazi', 'Teyinati': 'Təyinatı', 'Menbe': 'Mənbə', 'QazX_Mater': 'Qaz xəttinin materialı', 'Xaric_Diam': 'Xarici diametri, m', 'Derinlik': 'Dərinlik, m', 'Hundurluk': 'Hündürlük, m', 'Uzunluq': 'Uzunluq, m', 'Qeyd': 'Qeyd', 'QazX_Tipi': 'Qaz xəttinin tipi', 'Istsmr_Vez': 'İstismar vəziyyəti', 'Esas_Istif': 'Əsas istifadəçi', 'Dat_Colctr': 'Sahə məlumatı toplayan', 'CIS_Engine': 'CİS mühəndisi', 'Data_Colle': 'Sahə məlumat toplama tarixi', 'Maneeler': 'Təbii və Sünii maneələr', 'Layihe_Tes': 'Layihə təşkilatı', '?cra_Teshk': 'İcraçı təşkilat(boru tikintisi)', 'Qur_Tarixi': 'Quraşdırılma tarixi', 'Bas_Kord_X': 'Başlanğıc X Kordinat', 'Bas_Kord_Y': 'Başlanğıc Y Kordinat', 'Bits_Krd_X': 'Bitiş X kordinat', 'Bits_Krd_Y': 'Bitiş Y kordinat', '?sts_V_Tar': 'İstismara verilmə tarixi', 'Kecid_Tipi': 'Keçid tipi', 'Sekil_Link': 'Sekil', 'Extra_Uzunluq': 'Əlavə uzunluq', });
lyr_Orta_Tezyiq_Qaz_Xetti_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Ad': 'Ad', 'Erazi': 'Ərazi', 'Teyinati': 'Təyinatı', 'Menbe': 'Mənbə', 'QazX_Mater': 'Qaz xəttinin materialı', 'Xaric_Diam': 'Xarici diametri, m', 'Derinlik': 'Dərinlik, m', 'Hundurluk': 'Hündürlük, m', 'Uzunluq': 'Uzunluq, m', 'Qeyd': 'Qeyd', 'QazX_Tipi': 'Qaz xəttinin tipi', 'Istsmr_Vez': 'İstismar vəziyyəti', 'Esas_Istif': 'Əsas istifadəçi', 'Dat_Colctr': 'Sahə məlumatı toplayan', 'CIS_Engine': 'CİS mühəndisi', 'Data_Colle': 'Sahə məlumat toplama tarixi', 'Maneeler': 'Təbii və Sünii maneələr', 'Layihe_Tes': 'Layihə təşkilatı', '?cra_Teshk': 'İcraçı təşkilat(boru tikintisi)', 'Qur_Tarixi': 'Quraşdırılma tarixi', 'Bas_Kord_X': 'Başlanğıc X Kordinat', 'Bas_Kord_Y': 'Başlanğıc Y Kordinat', 'Bits_Krd_X': 'Bitiş X kordinat', 'Bits_Krd_Y': 'Bitiş Y kordinat', '?sts_V_Tar': 'İstismara verilmə tarixi', 'Kecid_Tipi': 'Keçid Tipi', 'Sekil_Link': 'Sekil', 'Extra_Uzunluq': 'Əlavə uzunluq', });
lyr_Yuksek_Tezyiq_Qaz_Xetti_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Ad': 'Ad', 'Erazi': 'Ərazi', 'Teyinati': 'Teyinati', 'Menbe': 'Mənbə', 'QazX_Mater': 'Qaz xəttinin materialı', 'Xaric_Diam': 'Xarici diametri, m', 'Derinlik': 'Dərinlik, m', 'Hundurluk': 'Hündürlük, m', 'Uzunluq': 'Uzunluq, m', 'Qeyd': 'Qeyd', 'QazX_Tipi': 'Qaz xəttinin tipi', 'Istsmr_Vez': 'İstismar vəziyyəti', 'Esas_Istif': 'Əsas istifadəçi', 'Dat_Colctr': 'Sahə məlumatı toplayan', 'CIS_Engine': 'CİS mühəndisi', 'Data_Colle': 'Sahə məlumat toplama tarixi', 'Maneeler': 'Təbii və Sünii maneələr', 'Layihe_Tes': 'Layihə təşkilatı', '?cra_Teshk': 'İcraçı təşkilat(boru tikintisi)', 'Qur_Tarixi': 'Quraşdırılma tarixi', 'Bas_Kord_X': 'Başlanğıc X Kordinat', 'Bas_Kord_Y': 'Başlanğıc Y Kordinat', 'Bits_Krd_X': 'Bitiş X kordinat', 'Bits_Krd_Y': 'Bitiş Y kordinat', '?sts_V_Tar': 'İstismara verilmə tarixi', 'Kecid_Tipi': 'Keçid Tipi', 'Sekil_Link': 'Sekil', 'Extra_Uzunluq': 'Əlavə uzunluq', });
lyr_nzibatiSerhedler_2.set('fieldImages', {'fid': 'TextEdit', 'Ad': 'TextEdit', 'Sahe': 'TextEdit', 'Melumat': 'TextEdit', 'Qeyd': 'TextEdit', });
lyr_QazPaylayiciStansiya_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Ad': 'TextEdit', 'Erazi': 'TextEdit', 'QPS_Data': 'TextEdit', 'Qeyd': 'TextEdit', 'Kordinat_X': 'TextEdit', 'Kordinat_Y': 'TextEdit', 'Sekil_Link': 'ExternalResource', 'Data_Collector': 'ValueMap', });
lyr_Filter_4.set('fieldImages', {'fid': 'TextEdit', 'Ad': 'TextEdit', 'Erazi': 'TextEdit', 'Qeyd': 'TextEdit', 'Kordinat_Y': 'TextEdit', 'Kordinat_X': 'TextEdit', });
lyr_Serf_Olcen_Cihazlar_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Ad': 'TextEdit', 'Erazi': 'TextEdit', 'Saygc_Mark': 'TextEdit', 'Saygac_Tip': 'ValueMap', 'Saygc_Nomr': 'TextEdit', 'Dat_Colltr': 'ValueMap', 'GİS_Engin': 'TextEdit', 'Dat_Col_Da': 'DateTime', 'Qeyd': 'TextEdit', 'Kordinat_X': 'TextEdit', 'Kordinat_Y': 'TextEdit', 'Qur_Tarixi': 'DateTime', 'SAP_Nomres': 'TextEdit', 'Sekil_Link': 'ExternalResource', });
lyr_Baglayici_Qurgular_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Ad': 'TextEdit', 'Ərazi': 'TextEdit', 'Tipi': 'ValueMap', 'Materiali': 'ValueMap', 'Diametr': 'ValueMap', 'Hundurluk': 'ValueMap', 'Dat_Colktr': 'ValueMap', 'CIS_Engine': 'TextEdit', 'Dat_Col_Da': 'DateTime', 'Kordinat_X': 'TextEdit', 'Kordinat_Y': 'TextEdit', 'SAP_Nomres': 'TextEdit', 'Qeyd': 'TextEdit', 'Sekil_Link': 'ExternalResource', 'Derinlik': 'ValueMap', });
lyr_Qaz_Tenzimleyici_Menteqe_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Ad': 'TextEdit', 'Erazi': 'TextEdit', 'Data_Coltr': 'ValueMap', 'CİS_Engin': 'TextEdit', 'Dat_Col_Da': 'DateTime', 'QTM_Tipi': 'ValueMap', 'Giris_Tezy': 'TextEdit', 'Cixis_Tezy': 'TextEdit', 'Eha_Ab_Say': 'TextEdit', 'Q_Eh_A_Say': 'TextEdit', 'Tot_Ab_Say': 'TextEdit', 'Qida_Kemer': 'TextEdit', 'Qeyd': 'TextEdit', 'Qur_Akt_No': 'TextEdit', 'Qur_Tarixi': 'DateTime', 'Kordinat_X': 'TextEdit', 'Kordinat_Y': 'TextEdit', 'SAP_Nomres': 'TextEdit', 'Sekil_Link': 'ExternalResource', });
lyr_Ashagi_Tezyiq_Qaz_Xetti_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Ad': 'TextEdit', 'Erazi': 'TextEdit', 'Teyinati': 'ValueMap', 'Menbe': 'TextEdit', 'QazX_Mater': 'ValueMap', 'Xaric_Diam': 'ValueMap', 'Derinlik': 'ValueMap', 'Hundurluk': 'ValueMap', 'Uzunluq': 'TextEdit', 'Qeyd': 'TextEdit', 'QazX_Tipi': 'ValueMap', 'Istsmr_Vez': 'ValueMap', 'Esas_Istif': 'ValueMap', 'Dat_Colctr': 'ValueMap', 'CIS_Engine': 'TextEdit', 'Data_Colle': 'DateTime', 'Maneeler': 'TextEdit', 'Layihe_Tes': 'TextEdit', '?cra_Teshk': 'TextEdit', 'Qur_Tarixi': 'DateTime', 'Bas_Kord_X': 'TextEdit', 'Bas_Kord_Y': 'TextEdit', 'Bits_Krd_X': 'TextEdit', 'Bits_Krd_Y': 'TextEdit', '?sts_V_Tar': 'DateTime', 'Kecid_Tipi': 'ValueMap', 'Sekil_Link': 'ExternalResource', 'Extra_Uzunluq': 'TextEdit', });
lyr_Orta_Tezyiq_Qaz_Xetti_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Ad': 'TextEdit', 'Erazi': 'TextEdit', 'Teyinati': 'ValueMap', 'Menbe': 'TextEdit', 'QazX_Mater': 'ValueMap', 'Xaric_Diam': 'ValueMap', 'Derinlik': 'ValueMap', 'Hundurluk': 'ValueMap', 'Uzunluq': 'TextEdit', 'Qeyd': 'TextEdit', 'QazX_Tipi': 'ValueMap', 'Istsmr_Vez': 'ValueMap', 'Esas_Istif': 'ValueMap', 'Dat_Colctr': 'ValueMap', 'CIS_Engine': 'TextEdit', 'Data_Colle': 'DateTime', 'Maneeler': 'TextEdit', 'Layihe_Tes': 'TextEdit', '?cra_Teshk': 'TextEdit', 'Qur_Tarixi': 'DateTime', 'Bas_Kord_X': 'TextEdit', 'Bas_Kord_Y': 'TextEdit', 'Bits_Krd_X': 'TextEdit', 'Bits_Krd_Y': 'TextEdit', '?sts_V_Tar': 'DateTime', 'Kecid_Tipi': 'ValueMap', 'Sekil_Link': 'ExternalResource', 'Extra_Uzunluq': 'TextEdit', });
lyr_Yuksek_Tezyiq_Qaz_Xetti_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Ad': 'TextEdit', 'Erazi': 'TextEdit', 'Teyinati': 'TextEdit', 'Menbe': 'TextEdit', 'QazX_Mater': 'ValueMap', 'Xaric_Diam': 'ValueMap', 'Derinlik': 'ValueMap', 'Hundurluk': 'ValueMap', 'Uzunluq': 'TextEdit', 'Qeyd': 'TextEdit', 'QazX_Tipi': 'ValueMap', 'Istsmr_Vez': 'ValueMap', 'Esas_Istif': 'ValueMap', 'Dat_Colctr': 'ValueMap', 'CIS_Engine': 'TextEdit', 'Data_Colle': 'DateTime', 'Maneeler': 'TextEdit', 'Layihe_Tes': 'TextEdit', '?cra_Teshk': 'TextEdit', 'Qur_Tarixi': 'DateTime', 'Bas_Kord_X': 'TextEdit', 'Bas_Kord_Y': 'TextEdit', 'Bits_Krd_X': 'TextEdit', 'Bits_Krd_Y': 'TextEdit', '?sts_V_Tar': 'DateTime', 'Kecid_Tipi': 'ValueMap', 'Sekil_Link': 'ExternalResource', 'Extra_Uzunluq': 'TextEdit', });
lyr_nzibatiSerhedler_2.set('fieldLabels', {'fid': 'no label', 'Ad': 'no label', 'Sahe': 'no label', 'Melumat': 'no label', 'Qeyd': 'no label', });
lyr_QazPaylayiciStansiya_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Ad': 'no label', 'Erazi': 'no label', 'QPS_Data': 'no label', 'Qeyd': 'no label', 'Kordinat_X': 'no label', 'Kordinat_Y': 'no label', 'Sekil_Link': 'no label', 'Data_Collector': 'no label', });
lyr_Filter_4.set('fieldLabels', {'fid': 'no label', 'Ad': 'no label', 'Erazi': 'no label', 'Qeyd': 'no label', 'Kordinat_Y': 'no label', 'Kordinat_X': 'no label', });
lyr_Serf_Olcen_Cihazlar_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Ad': 'no label', 'Erazi': 'no label', 'Saygc_Mark': 'no label', 'Saygac_Tip': 'no label', 'Saygc_Nomr': 'no label', 'Dat_Colltr': 'no label', 'GİS_Engin': 'no label', 'Dat_Col_Da': 'no label', 'Qeyd': 'no label', 'Kordinat_X': 'no label', 'Kordinat_Y': 'no label', 'Qur_Tarixi': 'no label', 'SAP_Nomres': 'no label', 'Sekil_Link': 'no label', });
lyr_Baglayici_Qurgular_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Ad': 'no label', 'Ərazi': 'no label', 'Tipi': 'no label', 'Materiali': 'no label', 'Diametr': 'no label', 'Hundurluk': 'no label', 'Dat_Colktr': 'no label', 'CIS_Engine': 'no label', 'Dat_Col_Da': 'no label', 'Kordinat_X': 'no label', 'Kordinat_Y': 'no label', 'SAP_Nomres': 'no label', 'Qeyd': 'no label', 'Sekil_Link': 'no label', 'Derinlik': 'no label', });
lyr_Qaz_Tenzimleyici_Menteqe_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Ad': 'no label', 'Erazi': 'no label', 'Data_Coltr': 'no label', 'CİS_Engin': 'no label', 'Dat_Col_Da': 'no label', 'QTM_Tipi': 'no label', 'Giris_Tezy': 'no label', 'Cixis_Tezy': 'no label', 'Eha_Ab_Say': 'no label', 'Q_Eh_A_Say': 'no label', 'Tot_Ab_Say': 'no label', 'Qida_Kemer': 'no label', 'Qeyd': 'no label', 'Qur_Akt_No': 'no label', 'Qur_Tarixi': 'no label', 'Kordinat_X': 'no label', 'Kordinat_Y': 'no label', 'SAP_Nomres': 'no label', 'Sekil_Link': 'no label', });
lyr_Ashagi_Tezyiq_Qaz_Xetti_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Ad': 'no label', 'Erazi': 'no label', 'Teyinati': 'no label', 'Menbe': 'no label', 'QazX_Mater': 'no label', 'Xaric_Diam': 'no label', 'Derinlik': 'no label', 'Hundurluk': 'no label', 'Uzunluq': 'no label', 'Qeyd': 'no label', 'QazX_Tipi': 'no label', 'Istsmr_Vez': 'no label', 'Esas_Istif': 'no label', 'Dat_Colctr': 'no label', 'CIS_Engine': 'no label', 'Data_Colle': 'no label', 'Maneeler': 'no label', 'Layihe_Tes': 'no label', '?cra_Teshk': 'no label', 'Qur_Tarixi': 'no label', 'Bas_Kord_X': 'no label', 'Bas_Kord_Y': 'no label', 'Bits_Krd_X': 'no label', 'Bits_Krd_Y': 'no label', '?sts_V_Tar': 'no label', 'Kecid_Tipi': 'no label', 'Sekil_Link': 'no label', 'Extra_Uzunluq': 'no label', });
lyr_Orta_Tezyiq_Qaz_Xetti_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Ad': 'no label', 'Erazi': 'no label', 'Teyinati': 'no label', 'Menbe': 'no label', 'QazX_Mater': 'no label', 'Xaric_Diam': 'no label', 'Derinlik': 'no label', 'Hundurluk': 'no label', 'Uzunluq': 'no label', 'Qeyd': 'no label', 'QazX_Tipi': 'no label', 'Istsmr_Vez': 'no label', 'Esas_Istif': 'no label', 'Dat_Colctr': 'no label', 'CIS_Engine': 'no label', 'Data_Colle': 'no label', 'Maneeler': 'no label', 'Layihe_Tes': 'no label', '?cra_Teshk': 'no label', 'Qur_Tarixi': 'no label', 'Bas_Kord_X': 'no label', 'Bas_Kord_Y': 'no label', 'Bits_Krd_X': 'no label', 'Bits_Krd_Y': 'no label', '?sts_V_Tar': 'no label', 'Kecid_Tipi': 'no label', 'Sekil_Link': 'no label', 'Extra_Uzunluq': 'no label', });
lyr_Yuksek_Tezyiq_Qaz_Xetti_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Ad': 'no label', 'Erazi': 'no label', 'Teyinati': 'no label', 'Menbe': 'no label', 'QazX_Mater': 'no label', 'Xaric_Diam': 'no label', 'Derinlik': 'no label', 'Hundurluk': 'no label', 'Uzunluq': 'no label', 'Qeyd': 'no label', 'QazX_Tipi': 'no label', 'Istsmr_Vez': 'no label', 'Esas_Istif': 'no label', 'Dat_Colctr': 'no label', 'CIS_Engine': 'no label', 'Data_Colle': 'no label', 'Maneeler': 'no label', 'Layihe_Tes': 'no label', '?cra_Teshk': 'no label', 'Qur_Tarixi': 'no label', 'Bas_Kord_X': 'no label', 'Bas_Kord_Y': 'no label', 'Bits_Krd_X': 'no label', 'Bits_Krd_Y': 'no label', '?sts_V_Tar': 'no label', 'Kecid_Tipi': 'no label', 'Sekil_Link': 'no label', 'Extra_Uzunluq': 'no label', });
lyr_Yuksek_Tezyiq_Qaz_Xetti_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});