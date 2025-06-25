var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'BaseMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RoadsGC_1 = new ol.format.GeoJSON();
var features_RoadsGC_1 = format_RoadsGC_1.readFeatures(json_RoadsGC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadsGC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsGC_1.addFeatures(features_RoadsGC_1);
var lyr_RoadsGC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadsGC_1, 
                style: style_RoadsGC_1,
                popuplayertitle: 'RoadsGC',
                interactive: true,
                title: '<img src="styles/legend/RoadsGC_1.png" /> RoadsGC'
            });
var format_SipiPartners_2 = new ol.format.GeoJSON();
var features_SipiPartners_2 = format_SipiPartners_2.readFeatures(json_SipiPartners_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SipiPartners_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SipiPartners_2.addFeatures(features_SipiPartners_2);
var lyr_SipiPartners_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SipiPartners_2, 
                style: style_SipiPartners_2,
                popuplayertitle: 'Sipi Partners',
                interactive: true,
                title: '<img src="styles/legend/SipiPartners_2.png" /> Sipi Partners'
            });
var format_CulturalCenters_3 = new ol.format.GeoJSON();
var features_CulturalCenters_3 = format_CulturalCenters_3.readFeatures(json_CulturalCenters_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CulturalCenters_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CulturalCenters_3.addFeatures(features_CulturalCenters_3);
var lyr_CulturalCenters_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CulturalCenters_3, 
                style: style_CulturalCenters_3,
                popuplayertitle: 'Cultural Centers',
                interactive: true,
                title: '<img src="styles/legend/CulturalCenters_3.png" /> Cultural Centers'
            });
var format_LGBTQSupport_4 = new ol.format.GeoJSON();
var features_LGBTQSupport_4 = format_LGBTQSupport_4.readFeatures(json_LGBTQSupport_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LGBTQSupport_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGBTQSupport_4.addFeatures(features_LGBTQSupport_4);
var lyr_LGBTQSupport_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGBTQSupport_4, 
                style: style_LGBTQSupport_4,
                popuplayertitle: 'LGBTQ+ Support',
                interactive: true,
                title: '<img src="styles/legend/LGBTQSupport_4.png" /> LGBTQ+ Support'
            });
var format_DrugTestingCenters_5 = new ol.format.GeoJSON();
var features_DrugTestingCenters_5 = format_DrugTestingCenters_5.readFeatures(json_DrugTestingCenters_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrugTestingCenters_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrugTestingCenters_5.addFeatures(features_DrugTestingCenters_5);
var lyr_DrugTestingCenters_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrugTestingCenters_5, 
                style: style_DrugTestingCenters_5,
                popuplayertitle: 'Drug Testing Centers',
                interactive: true,
                title: '<img src="styles/legend/DrugTestingCenters_5.png" /> Drug Testing Centers'
            });
var format_SexualandReproductiveHealthCenters_6 = new ol.format.GeoJSON();
var features_SexualandReproductiveHealthCenters_6 = format_SexualandReproductiveHealthCenters_6.readFeatures(json_SexualandReproductiveHealthCenters_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SexualandReproductiveHealthCenters_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SexualandReproductiveHealthCenters_6.addFeatures(features_SexualandReproductiveHealthCenters_6);
var lyr_SexualandReproductiveHealthCenters_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SexualandReproductiveHealthCenters_6, 
                style: style_SexualandReproductiveHealthCenters_6,
                popuplayertitle: 'Sexual and Reproductive Health Centers',
                interactive: true,
                title: '<img src="styles/legend/SexualandReproductiveHealthCenters_6.png" /> Sexual and Reproductive Health Centers'
            });
var format_DomesticAbuseSupport_7 = new ol.format.GeoJSON();
var features_DomesticAbuseSupport_7 = format_DomesticAbuseSupport_7.readFeatures(json_DomesticAbuseSupport_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomesticAbuseSupport_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomesticAbuseSupport_7.addFeatures(features_DomesticAbuseSupport_7);
var lyr_DomesticAbuseSupport_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DomesticAbuseSupport_7, 
                style: style_DomesticAbuseSupport_7,
                popuplayertitle: 'Domestic Abuse Support',
                interactive: true,
                title: '<img src="styles/legend/DomesticAbuseSupport_7.png" /> Domestic Abuse Support'
            });
var format_SocialandCommunityDevelopmentServices_8 = new ol.format.GeoJSON();
var features_SocialandCommunityDevelopmentServices_8 = format_SocialandCommunityDevelopmentServices_8.readFeatures(json_SocialandCommunityDevelopmentServices_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SocialandCommunityDevelopmentServices_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SocialandCommunityDevelopmentServices_8.addFeatures(features_SocialandCommunityDevelopmentServices_8);
var lyr_SocialandCommunityDevelopmentServices_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SocialandCommunityDevelopmentServices_8, 
                style: style_SocialandCommunityDevelopmentServices_8,
                popuplayertitle: 'Social and Community Development Services',
                interactive: true,
                title: '<img src="styles/legend/SocialandCommunityDevelopmentServices_8.png" /> Social and Community Development Services'
            });
var format_MentalHealthServices_9 = new ol.format.GeoJSON();
var features_MentalHealthServices_9 = format_MentalHealthServices_9.readFeatures(json_MentalHealthServices_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MentalHealthServices_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MentalHealthServices_9.addFeatures(features_MentalHealthServices_9);
var lyr_MentalHealthServices_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MentalHealthServices_9, 
                style: style_MentalHealthServices_9,
                popuplayertitle: 'Mental Health Services',
                interactive: true,
                title: '<img src="styles/legend/MentalHealthServices_9.png" /> Mental Health Services'
            });
var format_SeniorCenters_10 = new ol.format.GeoJSON();
var features_SeniorCenters_10 = format_SeniorCenters_10.readFeatures(json_SeniorCenters_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeniorCenters_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeniorCenters_10.addFeatures(features_SeniorCenters_10);
var lyr_SeniorCenters_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeniorCenters_10, 
                style: style_SeniorCenters_10,
                popuplayertitle: 'Senior Centers',
                interactive: true,
                title: '<img src="styles/legend/SeniorCenters_10.png" /> Senior Centers'
            });
var format_CommunityGardens_11 = new ol.format.GeoJSON();
var features_CommunityGardens_11 = format_CommunityGardens_11.readFeatures(json_CommunityGardens_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityGardens_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityGardens_11.addFeatures(features_CommunityGardens_11);
var lyr_CommunityGardens_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityGardens_11, 
                style: style_CommunityGardens_11,
                popuplayertitle: 'Community Gardens',
                interactive: true,
                title: '<img src="styles/legend/CommunityGardens_11.png" /> Community Gardens'
            });
var format_ClothingAccessPoints_12 = new ol.format.GeoJSON();
var features_ClothingAccessPoints_12 = format_ClothingAccessPoints_12.readFeatures(json_ClothingAccessPoints_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClothingAccessPoints_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClothingAccessPoints_12.addFeatures(features_ClothingAccessPoints_12);
var lyr_ClothingAccessPoints_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClothingAccessPoints_12, 
                style: style_ClothingAccessPoints_12,
                popuplayertitle: 'Clothing Access Points',
                interactive: true,
                title: '<img src="styles/legend/ClothingAccessPoints_12.png" /> Clothing Access Points'
            });
var format_FoodAccessPoints_13 = new ol.format.GeoJSON();
var features_FoodAccessPoints_13 = format_FoodAccessPoints_13.readFeatures(json_FoodAccessPoints_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoodAccessPoints_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodAccessPoints_13.addFeatures(features_FoodAccessPoints_13);
var lyr_FoodAccessPoints_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FoodAccessPoints_13, 
                style: style_FoodAccessPoints_13,
                popuplayertitle: 'Food Access Points',
                interactive: true,
                title: '<img src="styles/legend/FoodAccessPoints_13.png" /> Food Access Points'
            });
var format_RecoveryCenters_14 = new ol.format.GeoJSON();
var features_RecoveryCenters_14 = format_RecoveryCenters_14.readFeatures(json_RecoveryCenters_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RecoveryCenters_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecoveryCenters_14.addFeatures(features_RecoveryCenters_14);
var lyr_RecoveryCenters_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecoveryCenters_14, 
                style: style_RecoveryCenters_14,
                popuplayertitle: 'Recovery Centers',
                interactive: true,
                title: '<img src="styles/legend/RecoveryCenters_14.png" /> Recovery Centers'
            });
var format_WaterTestingCenters_15 = new ol.format.GeoJSON();
var features_WaterTestingCenters_15 = format_WaterTestingCenters_15.readFeatures(json_WaterTestingCenters_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterTestingCenters_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterTestingCenters_15.addFeatures(features_WaterTestingCenters_15);
var lyr_WaterTestingCenters_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterTestingCenters_15, 
                style: style_WaterTestingCenters_15,
                popuplayertitle: 'Water Testing Centers',
                interactive: true,
                title: '<img src="styles/legend/WaterTestingCenters_15.png" /> Water Testing Centers'
            });
var format_CareerBuildingServices_16 = new ol.format.GeoJSON();
var features_CareerBuildingServices_16 = format_CareerBuildingServices_16.readFeatures(json_CareerBuildingServices_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CareerBuildingServices_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CareerBuildingServices_16.addFeatures(features_CareerBuildingServices_16);
var lyr_CareerBuildingServices_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CareerBuildingServices_16, 
                style: style_CareerBuildingServices_16,
                popuplayertitle: 'Career Building Services',
                interactive: true,
                title: '<img src="styles/legend/CareerBuildingServices_16.png" /> Career Building Services'
            });
var format_FamilySupport_17 = new ol.format.GeoJSON();
var features_FamilySupport_17 = format_FamilySupport_17.readFeatures(json_FamilySupport_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FamilySupport_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FamilySupport_17.addFeatures(features_FamilySupport_17);
var lyr_FamilySupport_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FamilySupport_17, 
                style: style_FamilySupport_17,
                popuplayertitle: 'Family Support',
                interactive: true,
                title: '<img src="styles/legend/FamilySupport_17.png" /> Family Support'
            });
var format_YouthSupport_18 = new ol.format.GeoJSON();
var features_YouthSupport_18 = format_YouthSupport_18.readFeatures(json_YouthSupport_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YouthSupport_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YouthSupport_18.addFeatures(features_YouthSupport_18);
var lyr_YouthSupport_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YouthSupport_18, 
                style: style_YouthSupport_18,
                popuplayertitle: 'Youth Support',
                interactive: true,
                title: '<img src="styles/legend/YouthSupport_18.png" /> Youth Support'
            });
var format_HealthIntermediaries_19 = new ol.format.GeoJSON();
var features_HealthIntermediaries_19 = format_HealthIntermediaries_19.readFeatures(json_HealthIntermediaries_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthIntermediaries_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthIntermediaries_19.addFeatures(features_HealthIntermediaries_19);
var lyr_HealthIntermediaries_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthIntermediaries_19, 
                style: style_HealthIntermediaries_19,
                popuplayertitle: 'Health Intermediaries',
                interactive: true,
                title: '<img src="styles/legend/HealthIntermediaries_19.png" /> Health Intermediaries'
            });
var format_HousingDevelopmentServices_20 = new ol.format.GeoJSON();
var features_HousingDevelopmentServices_20 = format_HousingDevelopmentServices_20.readFeatures(json_HousingDevelopmentServices_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HousingDevelopmentServices_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HousingDevelopmentServices_20.addFeatures(features_HousingDevelopmentServices_20);
var lyr_HousingDevelopmentServices_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HousingDevelopmentServices_20, 
                style: style_HousingDevelopmentServices_20,
                popuplayertitle: 'Housing Development Services',
                interactive: true,
                title: '<img src="styles/legend/HousingDevelopmentServices_20.png" /> Housing Development Services'
            });
var format_HomelessnessSupport_21 = new ol.format.GeoJSON();
var features_HomelessnessSupport_21 = format_HomelessnessSupport_21.readFeatures(json_HomelessnessSupport_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HomelessnessSupport_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HomelessnessSupport_21.addFeatures(features_HomelessnessSupport_21);
var lyr_HomelessnessSupport_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HomelessnessSupport_21, 
                style: style_HomelessnessSupport_21,
                popuplayertitle: 'Homelessness Support',
                interactive: true,
                title: '<img src="styles/legend/HomelessnessSupport_21.png" /> Homelessness Support'
            });
var format_SmallBusinessNonProfitSupport_22 = new ol.format.GeoJSON();
var features_SmallBusinessNonProfitSupport_22 = format_SmallBusinessNonProfitSupport_22.readFeatures(json_SmallBusinessNonProfitSupport_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmallBusinessNonProfitSupport_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmallBusinessNonProfitSupport_22.addFeatures(features_SmallBusinessNonProfitSupport_22);
var lyr_SmallBusinessNonProfitSupport_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmallBusinessNonProfitSupport_22, 
                style: style_SmallBusinessNonProfitSupport_22,
                popuplayertitle: 'Small Business/Non-Profit Support',
                interactive: true,
                title: '<img src="styles/legend/SmallBusinessNonProfitSupport_22.png" /> Small Business/Non-Profit Support'
            });
var format_CommunityMakerspace_23 = new ol.format.GeoJSON();
var features_CommunityMakerspace_23 = format_CommunityMakerspace_23.readFeatures(json_CommunityMakerspace_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityMakerspace_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityMakerspace_23.addFeatures(features_CommunityMakerspace_23);
var lyr_CommunityMakerspace_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityMakerspace_23, 
                style: style_CommunityMakerspace_23,
                popuplayertitle: 'Community Makerspace',
                interactive: true,
                title: '<img src="styles/legend/CommunityMakerspace_23.png" /> Community Makerspace'
            });
var format_LanguageLiteracyAdultEducationCenters_24 = new ol.format.GeoJSON();
var features_LanguageLiteracyAdultEducationCenters_24 = format_LanguageLiteracyAdultEducationCenters_24.readFeatures(json_LanguageLiteracyAdultEducationCenters_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LanguageLiteracyAdultEducationCenters_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LanguageLiteracyAdultEducationCenters_24.addFeatures(features_LanguageLiteracyAdultEducationCenters_24);
var lyr_LanguageLiteracyAdultEducationCenters_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LanguageLiteracyAdultEducationCenters_24, 
                style: style_LanguageLiteracyAdultEducationCenters_24,
                popuplayertitle: 'Language Literacy/Adult Education Centers',
                interactive: true,
                title: '<img src="styles/legend/LanguageLiteracyAdultEducationCenters_24.png" /> Language Literacy/Adult Education Centers'
            });

lyr_BaseMap_0.setVisible(true);lyr_RoadsGC_1.setVisible(true);lyr_SipiPartners_2.setVisible(true);lyr_CulturalCenters_3.setVisible(true);lyr_LGBTQSupport_4.setVisible(true);lyr_DrugTestingCenters_5.setVisible(true);lyr_SexualandReproductiveHealthCenters_6.setVisible(true);lyr_DomesticAbuseSupport_7.setVisible(true);lyr_SocialandCommunityDevelopmentServices_8.setVisible(true);lyr_MentalHealthServices_9.setVisible(true);lyr_SeniorCenters_10.setVisible(true);lyr_CommunityGardens_11.setVisible(true);lyr_ClothingAccessPoints_12.setVisible(true);lyr_FoodAccessPoints_13.setVisible(true);lyr_RecoveryCenters_14.setVisible(true);lyr_WaterTestingCenters_15.setVisible(true);lyr_CareerBuildingServices_16.setVisible(true);lyr_FamilySupport_17.setVisible(true);lyr_YouthSupport_18.setVisible(true);lyr_HealthIntermediaries_19.setVisible(true);lyr_HousingDevelopmentServices_20.setVisible(true);lyr_HomelessnessSupport_21.setVisible(true);lyr_SmallBusinessNonProfitSupport_22.setVisible(true);lyr_CommunityMakerspace_23.setVisible(true);lyr_LanguageLiteracyAdultEducationCenters_24.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_RoadsGC_1,lyr_SipiPartners_2,lyr_CulturalCenters_3,lyr_LGBTQSupport_4,lyr_DrugTestingCenters_5,lyr_SexualandReproductiveHealthCenters_6,lyr_DomesticAbuseSupport_7,lyr_SocialandCommunityDevelopmentServices_8,lyr_MentalHealthServices_9,lyr_SeniorCenters_10,lyr_CommunityGardens_11,lyr_ClothingAccessPoints_12,lyr_FoodAccessPoints_13,lyr_RecoveryCenters_14,lyr_WaterTestingCenters_15,lyr_CareerBuildingServices_16,lyr_FamilySupport_17,lyr_YouthSupport_18,lyr_HealthIntermediaries_19,lyr_HousingDevelopmentServices_20,lyr_HomelessnessSupport_21,lyr_SmallBusinessNonProfitSupport_22,lyr_CommunityMakerspace_23,lyr_LanguageLiteracyAdultEducationCenters_24];
lyr_RoadsGC_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TLID': 'TLID', 'TFIDL': 'TFIDL', 'TFIDR': 'TFIDR', 'MTFCC': 'MTFCC', 'FULLNAME': 'FULLNAME', 'SMID': 'SMID', 'LFROMADD': 'LFROMADD', 'LTOADD': 'LTOADD', 'RFROMADD': 'RFROMADD', 'RTOADD': 'RTOADD', 'ZIPL': 'ZIPL', 'ZIPR': 'ZIPR', 'FEATCAT': 'FEATCAT', 'HYDROFLG': 'HYDROFLG', 'RAILFLG': 'RAILFLG', 'ROADFLG': 'ROADFLG', 'OLFFLG': 'OLFFLG', 'PASSFLG': 'PASSFLG', 'EXTTYP': 'EXTTYP', 'TTYP': 'TTYP', 'DECKEDROAD': 'DECKEDROAD', 'ARTPATH': 'ARTPATH', 'PERSIST': 'PERSIST', 'GCSEFLG': 'GCSEFLG', 'OFFSETL': 'OFFSETL', 'OFFSETR': 'OFFSETR', 'TNIDF': 'TNIDF', 'TNIDT': 'TNIDT', });
lyr_SipiPartners_2.set('fieldAliases', {'field_1': 'field_1', 'Service Type': 'Service Type', 'Organization': 'Organization', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CulturalCenters_3.set('fieldAliases', {'Service Type': 'Service Type', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_LGBTQSupport_4.set('fieldAliases', {'org': 'org', 'sertype': 'sertype', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_DrugTestingCenters_5.set('fieldAliases', {'org': 'org', 'sertype': 'sertype', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SexualandReproductiveHealthCenters_6.set('fieldAliases', {'org': 'org', 'sertype': 'sertype', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_DomesticAbuseSupport_7.set('fieldAliases', {'org': 'org', 'sertype': 'sertype', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SocialandCommunityDevelopmentServices_8.set('fieldAliases', {'Org': 'Org', 'sertype': 'sertype', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MentalHealthServices_9.set('fieldAliases', {'org': 'org', 'sertype': 'sertype', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SeniorCenters_10.set('fieldAliases', {'org': 'org', 'service type': 'service type', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CommunityGardens_11.set('fieldAliases', {'organizations': 'organizations', 'service type': 'service type', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ClothingAccessPoints_12.set('fieldAliases', {'organization': 'organization', 'Service type': 'Service type', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_FoodAccessPoints_13.set('fieldAliases', {'Organization': 'Organization', 'Service Type': 'Service Type', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RecoveryCenters_14.set('fieldAliases', {'Organization': 'Organization', 'Service type': 'Service type', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_WaterTestingCenters_15.set('fieldAliases', {'Orgs': 'Orgs', 'Service Type': 'Service Type', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CareerBuildingServices_16.set('fieldAliases', {'Organization': 'Organization', 'Service Type': 'Service Type', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_FamilySupport_17.set('fieldAliases', {'Organization': 'Organization', 'Service Type': 'Service Type', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_YouthSupport_18.set('fieldAliases', {'Organization': 'Organization', 'Service Type': 'Service Type', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_HealthIntermediaries_19.set('fieldAliases', {'org': 'org', 'service type': 'service type', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_HousingDevelopmentServices_20.set('fieldAliases', {'Organization': 'Organization', 'Service type': 'Service type', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_HomelessnessSupport_21.set('fieldAliases', {'org': 'org', 'service type': 'service type', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SmallBusinessNonProfitSupport_22.set('fieldAliases', {'Org': 'Org', 'Service Type': 'Service Type', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CommunityMakerspace_23.set('fieldAliases', {'Org': 'Org', 'Service Type': 'Service Type', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_LanguageLiteracyAdultEducationCenters_24.set('fieldAliases', {'Org': 'Org', 'Service Type': 'Service Type', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RoadsGC_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TLID': 'TextEdit', 'TFIDL': 'TextEdit', 'TFIDR': 'TextEdit', 'MTFCC': 'TextEdit', 'FULLNAME': 'TextEdit', 'SMID': 'TextEdit', 'LFROMADD': 'TextEdit', 'LTOADD': 'TextEdit', 'RFROMADD': 'TextEdit', 'RTOADD': 'TextEdit', 'ZIPL': 'TextEdit', 'ZIPR': 'TextEdit', 'FEATCAT': 'TextEdit', 'HYDROFLG': 'TextEdit', 'RAILFLG': 'TextEdit', 'ROADFLG': 'TextEdit', 'OLFFLG': 'TextEdit', 'PASSFLG': 'TextEdit', 'EXTTYP': 'TextEdit', 'TTYP': 'TextEdit', 'DECKEDROAD': 'TextEdit', 'ARTPATH': 'TextEdit', 'PERSIST': 'TextEdit', 'GCSEFLG': 'TextEdit', 'OFFSETL': 'TextEdit', 'OFFSETR': 'TextEdit', 'TNIDF': 'TextEdit', 'TNIDT': 'TextEdit', });
lyr_SipiPartners_2.set('fieldImages', {'field_1': 'TextEdit', 'Service Type': 'TextEdit', 'Organization': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CulturalCenters_3.set('fieldImages', {'Service Type': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_LGBTQSupport_4.set('fieldImages', {'org': 'TextEdit', 'sertype': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_DrugTestingCenters_5.set('fieldImages', {'org': 'TextEdit', 'sertype': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SexualandReproductiveHealthCenters_6.set('fieldImages', {'org': 'TextEdit', 'sertype': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_DomesticAbuseSupport_7.set('fieldImages', {'org': 'TextEdit', 'sertype': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SocialandCommunityDevelopmentServices_8.set('fieldImages', {'Org': 'TextEdit', 'sertype': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MentalHealthServices_9.set('fieldImages', {'org': 'TextEdit', 'sertype': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SeniorCenters_10.set('fieldImages', {'org': 'TextEdit', 'service type': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CommunityGardens_11.set('fieldImages', {'organizations': 'TextEdit', 'service type': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ClothingAccessPoints_12.set('fieldImages', {'organization': 'TextEdit', 'Service type': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_FoodAccessPoints_13.set('fieldImages', {'Organization': 'TextEdit', 'Service Type': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_RecoveryCenters_14.set('fieldImages', {'Organization': 'TextEdit', 'Service type': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_WaterTestingCenters_15.set('fieldImages', {'Orgs': 'TextEdit', 'Service Type': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CareerBuildingServices_16.set('fieldImages', {'Organization': 'TextEdit', 'Service Type': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_FamilySupport_17.set('fieldImages', {'Organization': 'TextEdit', 'Service Type': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_YouthSupport_18.set('fieldImages', {'Organization': 'TextEdit', 'Service Type': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_HealthIntermediaries_19.set('fieldImages', {'org': 'TextEdit', 'service type': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_HousingDevelopmentServices_20.set('fieldImages', {'Organization': 'TextEdit', 'Service type': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_HomelessnessSupport_21.set('fieldImages', {'org': 'TextEdit', 'service type': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SmallBusinessNonProfitSupport_22.set('fieldImages', {'Org': 'TextEdit', 'Service Type': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CommunityMakerspace_23.set('fieldImages', {'Org': 'TextEdit', 'Service Type': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_LanguageLiteracyAdultEducationCenters_24.set('fieldImages', {'Org': 'TextEdit', 'Service Type': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_RoadsGC_1.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TLID': 'no label', 'TFIDL': 'no label', 'TFIDR': 'no label', 'MTFCC': 'no label', 'FULLNAME': 'no label', 'SMID': 'no label', 'LFROMADD': 'no label', 'LTOADD': 'no label', 'RFROMADD': 'no label', 'RTOADD': 'no label', 'ZIPL': 'no label', 'ZIPR': 'no label', 'FEATCAT': 'no label', 'HYDROFLG': 'no label', 'RAILFLG': 'no label', 'ROADFLG': 'no label', 'OLFFLG': 'no label', 'PASSFLG': 'no label', 'EXTTYP': 'no label', 'TTYP': 'no label', 'DECKEDROAD': 'no label', 'ARTPATH': 'no label', 'PERSIST': 'no label', 'GCSEFLG': 'no label', 'OFFSETL': 'no label', 'OFFSETR': 'no label', 'TNIDF': 'no label', 'TNIDT': 'no label', });
lyr_SipiPartners_2.set('fieldLabels', {'field_1': 'no label', 'Service Type': 'no label', 'Organization': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_CulturalCenters_3.set('fieldLabels', {'Service Type': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_LGBTQSupport_4.set('fieldLabels', {'org': 'no label', 'sertype': 'no label', 'address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_DrugTestingCenters_5.set('fieldLabels', {'org': 'no label', 'sertype': 'no label', 'address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_SexualandReproductiveHealthCenters_6.set('fieldLabels', {'org': 'no label', 'sertype': 'no label', 'address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_DomesticAbuseSupport_7.set('fieldLabels', {'org': 'no label', 'sertype': 'no label', 'address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_SocialandCommunityDevelopmentServices_8.set('fieldLabels', {'Org': 'no label', 'sertype': 'no label', 'address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_MentalHealthServices_9.set('fieldLabels', {'org': 'no label', 'sertype': 'no label', 'address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_SeniorCenters_10.set('fieldLabels', {'org': 'no label', 'service type': 'no label', 'address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_CommunityGardens_11.set('fieldLabels', {'organizations': 'no label', 'service type': 'no label', 'address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_ClothingAccessPoints_12.set('fieldLabels', {'organization': 'no label', 'Service type': 'no label', 'address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_FoodAccessPoints_13.set('fieldLabels', {'Organization': 'no label', 'Service Type': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_RecoveryCenters_14.set('fieldLabels', {'Organization': 'no label', 'Service type': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_WaterTestingCenters_15.set('fieldLabels', {'Orgs': 'no label', 'Service Type': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_CareerBuildingServices_16.set('fieldLabels', {'Organization': 'no label', 'Service Type': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_FamilySupport_17.set('fieldLabels', {'Organization': 'no label', 'Service Type': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_YouthSupport_18.set('fieldLabels', {'Organization': 'no label', 'Service Type': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_HealthIntermediaries_19.set('fieldLabels', {'org': 'no label', 'service type': 'no label', 'address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_HousingDevelopmentServices_20.set('fieldLabels', {'Organization': 'no label', 'Service type': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_HomelessnessSupport_21.set('fieldLabels', {'org': 'no label', 'service type': 'no label', 'address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_SmallBusinessNonProfitSupport_22.set('fieldLabels', {'Org': 'no label', 'Service Type': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_CommunityMakerspace_23.set('fieldLabels', {'Org': 'no label', 'Service Type': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_LanguageLiteracyAdultEducationCenters_24.set('fieldLabels', {'Org': 'no label', 'Service Type': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_LanguageLiteracyAdultEducationCenters_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});