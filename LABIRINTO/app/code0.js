gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDSolidObjects1= [];
gdjs.New_32sceneCode.GDSolidObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDFinishObjects1= [];
gdjs.New_32sceneCode.GDFinishObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSolidObjects1Objects = Hashtable.newFrom({"Solid": gdjs.New_32sceneCode.GDSolidObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSolidObjects1Objects = Hashtable.newFrom({"Solid": gdjs.New_32sceneCode.GDSolidObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDFinishObjects1Objects = Hashtable.newFrom({"Finish": gdjs.New_32sceneCode.GDFinishObjects1});gdjs.New_32sceneCode.eventsList0x5b7338 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.New_32sceneCode.GDSolidObjects1.createFrom(runtimeScene.getObjects("Solid"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSolidObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
/* Reuse gdjs.New_32sceneCode.GDSolidObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSolidObjects1Objects, false);
}
}}

}


{


{
gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.New_32sceneCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{

gdjs.New_32sceneCode.GDFinishObjects1.createFrom(runtimeScene.getObjects("Finish"));
gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDFinishObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CenaFinal", false);
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x5b7338


gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDSolidObjects1.length = 0;
gdjs.New_32sceneCode.GDSolidObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDFinishObjects1.length = 0;
gdjs.New_32sceneCode.GDFinishObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0x5b7338(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
