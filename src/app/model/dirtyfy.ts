import { utils } from "protractor";

// @dynamic
 export function dirtify(obj) {
    let isDirty = false;
    var validator = {
        get : function(target, property, receiver) {
            if (property==='isDirty') return isDirty;
            if (property === 'isProxy') return true;
            if (property==='clearDirt') {
                // var self=this;
                var f = function() {
                    isDirty=false;
                };
                return f.bind(target);
            } 
            const prop = target[property];
        if (typeof prop === 'object' && prop && !prop.isProxy) {
                target[property] = new Proxy(prop, validator);
            }

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
    }

    return new Proxy(obj, validator);
}

//module.exports = dirtify;