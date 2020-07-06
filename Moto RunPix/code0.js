gdjs.MenuCode = {};
gdjs.MenuCode.GDMotoObjects1= [];
gdjs.MenuCode.GDMotoObjects2= [];
gdjs.MenuCode.GDGrama1Objects1= [];
gdjs.MenuCode.GDGrama1Objects2= [];
gdjs.MenuCode.GDcolisao1Objects1= [];
gdjs.MenuCode.GDcolisao1Objects2= [];
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];
gdjs.MenuCode.GDLOGOObjects1= [];
gdjs.MenuCode.GDLOGOObjects2= [];
gdjs.MenuCode.GDCREDITOObjects1= [];
gdjs.MenuCode.GDCREDITOObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.MenuCode.GDNewObjectObjects1});gdjs.MenuCode.eventsList0x5b7a18 = function(runtimeScene) {

{

gdjs.MenuCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CenasPr", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0x5b7a18


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDMotoObjects1.length = 0;
gdjs.MenuCode.GDMotoObjects2.length = 0;
gdjs.MenuCode.GDGrama1Objects1.length = 0;
gdjs.MenuCode.GDGrama1Objects2.length = 0;
gdjs.MenuCode.GDcolisao1Objects1.length = 0;
gdjs.MenuCode.GDcolisao1Objects2.length = 0;
gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;
gdjs.MenuCode.GDLOGOObjects1.length = 0;
gdjs.MenuCode.GDLOGOObjects2.length = 0;
gdjs.MenuCode.GDCREDITOObjects1.length = 0;
gdjs.MenuCode.GDCREDITOObjects2.length = 0;

gdjs.MenuCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
