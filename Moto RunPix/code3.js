gdjs.GanhouCode = {};
gdjs.GanhouCode.GDTrofeuObjects1= [];
gdjs.GanhouCode.GDTrofeuObjects2= [];
gdjs.GanhouCode.GDtrofeusObjects1= [];
gdjs.GanhouCode.GDtrofeusObjects2= [];
gdjs.GanhouCode.GDCreditosObjects1= [];
gdjs.GanhouCode.GDCreditosObjects2= [];
gdjs.GanhouCode.GDIncioObjects1= [];
gdjs.GanhouCode.GDIncioObjects2= [];
gdjs.GanhouCode.GDNewObjectObjects1= [];
gdjs.GanhouCode.GDNewObjectObjects2= [];

gdjs.GanhouCode.conditionTrue_0 = {val:false};
gdjs.GanhouCode.condition0IsTrue_0 = {val:false};
gdjs.GanhouCode.condition1IsTrue_0 = {val:false};


gdjs.GanhouCode.mapOfGDgdjs_46GanhouCode_46GDIncioObjects1Objects = Hashtable.newFrom({"Incio": gdjs.GanhouCode.GDIncioObjects1});gdjs.GanhouCode.mapOfGDgdjs_46GanhouCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.GanhouCode.GDNewObjectObjects1});gdjs.GanhouCode.eventsList0x5b7a18 = function(runtimeScene) {

{

gdjs.GanhouCode.GDIncioObjects1.createFrom(runtimeScene.getObjects("Incio"));

gdjs.GanhouCode.condition0IsTrue_0.val = false;
{
gdjs.GanhouCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GanhouCode.mapOfGDgdjs_46GanhouCode_46GDIncioObjects1Objects, runtimeScene, true, false);
}if (gdjs.GanhouCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.GanhouCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

gdjs.GanhouCode.condition0IsTrue_0.val = false;
{
gdjs.GanhouCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GanhouCode.mapOfGDgdjs_46GanhouCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.GanhouCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CenasPr", false);
}}

}


}; //End of gdjs.GanhouCode.eventsList0x5b7a18


gdjs.GanhouCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GanhouCode.GDTrofeuObjects1.length = 0;
gdjs.GanhouCode.GDTrofeuObjects2.length = 0;
gdjs.GanhouCode.GDtrofeusObjects1.length = 0;
gdjs.GanhouCode.GDtrofeusObjects2.length = 0;
gdjs.GanhouCode.GDCreditosObjects1.length = 0;
gdjs.GanhouCode.GDCreditosObjects2.length = 0;
gdjs.GanhouCode.GDIncioObjects1.length = 0;
gdjs.GanhouCode.GDIncioObjects2.length = 0;
gdjs.GanhouCode.GDNewObjectObjects1.length = 0;
gdjs.GanhouCode.GDNewObjectObjects2.length = 0;

gdjs.GanhouCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['GanhouCode'] = gdjs.GanhouCode;
