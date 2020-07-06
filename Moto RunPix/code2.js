gdjs.PerdeuCode = {};
gdjs.PerdeuCode.GDPerdeuObjects1= [];
gdjs.PerdeuCode.GDPerdeuObjects2= [];
gdjs.PerdeuCode.GDRecomecarJogoObjects1= [];
gdjs.PerdeuCode.GDRecomecarJogoObjects2= [];
gdjs.PerdeuCode.GDcreditosObjects1= [];
gdjs.PerdeuCode.GDcreditosObjects2= [];
gdjs.PerdeuCode.GDInicioObjects1= [];
gdjs.PerdeuCode.GDInicioObjects2= [];

gdjs.PerdeuCode.conditionTrue_0 = {val:false};
gdjs.PerdeuCode.condition0IsTrue_0 = {val:false};
gdjs.PerdeuCode.condition1IsTrue_0 = {val:false};


gdjs.PerdeuCode.mapOfGDgdjs_46PerdeuCode_46GDRecomecarJogoObjects1Objects = Hashtable.newFrom({"RecomecarJogo": gdjs.PerdeuCode.GDRecomecarJogoObjects1});gdjs.PerdeuCode.mapOfGDgdjs_46PerdeuCode_46GDInicioObjects1Objects = Hashtable.newFrom({"Inicio": gdjs.PerdeuCode.GDInicioObjects1});gdjs.PerdeuCode.eventsList0x5b7a18 = function(runtimeScene) {

{

gdjs.PerdeuCode.GDRecomecarJogoObjects1.createFrom(runtimeScene.getObjects("RecomecarJogo"));

gdjs.PerdeuCode.condition0IsTrue_0.val = false;
{
gdjs.PerdeuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PerdeuCode.mapOfGDgdjs_46PerdeuCode_46GDRecomecarJogoObjects1Objects, runtimeScene, true, false);
}if (gdjs.PerdeuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CenasPr", false);
}}

}


{

gdjs.PerdeuCode.GDInicioObjects1.createFrom(runtimeScene.getObjects("Inicio"));

gdjs.PerdeuCode.condition0IsTrue_0.val = false;
{
gdjs.PerdeuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PerdeuCode.mapOfGDgdjs_46PerdeuCode_46GDInicioObjects1Objects, runtimeScene, true, false);
}if (gdjs.PerdeuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


}; //End of gdjs.PerdeuCode.eventsList0x5b7a18


gdjs.PerdeuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PerdeuCode.GDPerdeuObjects1.length = 0;
gdjs.PerdeuCode.GDPerdeuObjects2.length = 0;
gdjs.PerdeuCode.GDRecomecarJogoObjects1.length = 0;
gdjs.PerdeuCode.GDRecomecarJogoObjects2.length = 0;
gdjs.PerdeuCode.GDcreditosObjects1.length = 0;
gdjs.PerdeuCode.GDcreditosObjects2.length = 0;
gdjs.PerdeuCode.GDInicioObjects1.length = 0;
gdjs.PerdeuCode.GDInicioObjects2.length = 0;

gdjs.PerdeuCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['PerdeuCode'] = gdjs.PerdeuCode;
