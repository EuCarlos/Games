gdjs.CenaFinalCode = {};
gdjs.CenaFinalCode.GDWinnerObjects1= [];
gdjs.CenaFinalCode.GDWinnerObjects2= [];
gdjs.CenaFinalCode.GDFundoPretoObjects1= [];
gdjs.CenaFinalCode.GDFundoPretoObjects2= [];
gdjs.CenaFinalCode.GDMensagemObjects1= [];
gdjs.CenaFinalCode.GDMensagemObjects2= [];
gdjs.CenaFinalCode.GDgithubObjects1= [];
gdjs.CenaFinalCode.GDgithubObjects2= [];
gdjs.CenaFinalCode.GDRestartObjects1= [];
gdjs.CenaFinalCode.GDRestartObjects2= [];

gdjs.CenaFinalCode.conditionTrue_0 = {val:false};
gdjs.CenaFinalCode.condition0IsTrue_0 = {val:false};
gdjs.CenaFinalCode.condition1IsTrue_0 = {val:false};


gdjs.CenaFinalCode.eventsList0x5b7338 = function(runtimeScene) {

{


gdjs.CenaFinalCode.condition0IsTrue_0.val = false;
{
gdjs.CenaFinalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.CenaFinalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "New scene");
}}

}


}; //End of gdjs.CenaFinalCode.eventsList0x5b7338


gdjs.CenaFinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CenaFinalCode.GDWinnerObjects1.length = 0;
gdjs.CenaFinalCode.GDWinnerObjects2.length = 0;
gdjs.CenaFinalCode.GDFundoPretoObjects1.length = 0;
gdjs.CenaFinalCode.GDFundoPretoObjects2.length = 0;
gdjs.CenaFinalCode.GDMensagemObjects1.length = 0;
gdjs.CenaFinalCode.GDMensagemObjects2.length = 0;
gdjs.CenaFinalCode.GDgithubObjects1.length = 0;
gdjs.CenaFinalCode.GDgithubObjects2.length = 0;
gdjs.CenaFinalCode.GDRestartObjects1.length = 0;
gdjs.CenaFinalCode.GDRestartObjects2.length = 0;

gdjs.CenaFinalCode.eventsList0x5b7338(runtimeScene);
return;

}

gdjs['CenaFinalCode'] = gdjs.CenaFinalCode;
