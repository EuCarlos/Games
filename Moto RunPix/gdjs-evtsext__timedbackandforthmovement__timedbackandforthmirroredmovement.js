
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement || {};

/**
 * Behavior generated from Timed Back and Forth Movement
 * @class TimedBackAndForthMirroredMovement
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Vertical = behaviorData.Vertical !== undefined ? behaviorData.Vertical : false;
    this._behaviorData.Speed = behaviorData.Speed !== undefined ? behaviorData.Speed : Number("100") || 0;
    this._behaviorData.Distance = behaviorData.Distance !== undefined ? behaviorData.Distance : Number("200") || 0;
    this._behaviorData.Timeout = behaviorData.Timeout !== undefined ? behaviorData.Timeout : Number("2") || 0;
    this._behaviorData.StartPosition = Number("0") || 0;
    this._behaviorData.LastPosition = Number("0") || 0;
    this._behaviorData.stuck = false;
};

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("TimedBackAndForthMovement::TimedBackAndForthMirroredMovement", gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement);

// Properties:
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects4= [];

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7ba48c = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedY() ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getY() < (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition()) - (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipY(false);
}
}}

}


{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getY() > (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition()) + (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedY()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipY(true);
}
}}

}


}; //End of gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7ba48c
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x6be71c = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedY()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].timerElapsedTime("BacknForth_timeout", (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimeout())) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipY(true);
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstuck(false);
}
}}

}


{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].timerElapsedTime("BacknForth_timeout", (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimeout())) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedY() ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipY(false);
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstuck(false);
}
}}

}


{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastPosition() == Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointY(""))) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstuck()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstuck(true);
}
}}

}


}; //End of gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x6be71c
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7b4d04 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedY()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstuck()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].addForce(0, (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()), 0);
}
}}

}


{

/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isFlippedY() ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstuck()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getPointY(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForce(0, -((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())), 0);
}
}}

}


}; //End of gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7b4d04
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7badec = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition() == 0 ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointY(""))));
}
}}

}


{


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7ba48c(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x6be71c(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7b4d04(runtimeScene, eventsFunctionContext);
}


}; //End of gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7badec
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7bb3bc = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedX() ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getX() > (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition()) + (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipX(false);
}
}}

}


{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getX() < (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition()) - (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipX(true);
}
}}

}


}; //End of gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7bb3bc
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7bbd64 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedX()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].timerElapsedTime("BacknForth_timeout", (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimeout())) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstuck(false);
}
}}

}


{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].timerElapsedTime("BacknForth_timeout", (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimeout())) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].isFlippedX() ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstuck(false);
}
}}

}


{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastPosition() == Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointX(""))) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstuck()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setstuck(true);
}
}}

}


}; //End of gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7bbd64
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x6b368c = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstuck()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].addForce(-((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())), 0, 0);
}
}}

}


{

/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].isFlippedX() ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getstuck()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getPointX(""))));
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForce((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed()), 0, 0);
}
}}

}


}; //End of gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x6b368c
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7b5ea4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1);


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStartPosition() == 0 ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("BacknForth_timeout");
}
}{for(var i = 0, len = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStartPosition(Math.round((gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2[i].getPointX(""))));
}
}}

}


{


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7bb3bc(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7bbd64(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x6b368c(runtimeScene, eventsFunctionContext);
}


}; //End of gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7b5ea4
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVertical() ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7badec(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getVertical()) ) {
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x7b5ea4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x5b7c78


gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype.doStepPreEventsContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._getVertical = function() {
    return this._behaviorData.Vertical !== undefined ? this._behaviorData.Vertical : false;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._setVertical = function(newValue) {
    this._behaviorData.Vertical = newValue;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._getSpeed = function() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("100") || 0;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._setSpeed = function(newValue) {
    this._behaviorData.Speed = newValue;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._getDistance = function() {
    return this._behaviorData.Distance !== undefined ? this._behaviorData.Distance : Number("200") || 0;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._setDistance = function(newValue) {
    this._behaviorData.Distance = newValue;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._getTimeout = function() {
    return this._behaviorData.Timeout !== undefined ? this._behaviorData.Timeout : Number("2") || 0;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._setTimeout = function(newValue) {
    this._behaviorData.Timeout = newValue;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._getStartPosition = function() {
    return this._behaviorData.StartPosition !== undefined ? this._behaviorData.StartPosition : Number("0") || 0;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._setStartPosition = function(newValue) {
    this._behaviorData.StartPosition = newValue;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._getLastPosition = function() {
    return this._behaviorData.LastPosition !== undefined ? this._behaviorData.LastPosition : Number("0") || 0;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._setLastPosition = function(newValue) {
    this._behaviorData.LastPosition = newValue;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._getstuck = function() {
    return this._behaviorData.stuck !== undefined ? this._behaviorData.stuck : false;
};
gdjs.evtsExt__TimedBackAndForthMovement__TimedBackAndForthMirroredMovement.TimedBackAndForthMirroredMovement.prototype._setstuck = function(newValue) {
    this._behaviorData.stuck = newValue;
};
