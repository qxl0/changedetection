 export function dirtify(obj) {
    let isDirty = false;
    return new Proxy(obj,{
        get : function(target, property, receiver) {
            if (property==='isDirty') return isDirty;
            if (property==='clearDirt') {
                // var self=this;
                var f = function() {
                    isDirty=false;
                };
                return f.bind(target);
            } 
            // else if (typeof target[property] === 'object' && target[property] !== null) {
            //     return new Proxy(target[property], validator);
            // }

            return target[property];
        },
        has : function(target, property) {
            if (property==='isDirty'||property==='clearDirt') return true;
            return property in target;
        },
        set : function(target, property, value, receiver) {
            if (property==='isDirty'||property==='clearDirt') return false;
            if (target[property]!==value) isDirty=true;
            target[property]=value;
            return true;
        },
        deleteProperty : function(target, property) {
            if (property==='isDirty'||property==='clearDirt') return false;
            if (target[property]!=undefined) isDirty=true;
            delete target[property];
            return true;
        }
    });
}

//module.exports = dirtify;