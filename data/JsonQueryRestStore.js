dojo.provide("dojox.data.JsonQueryRestStore");
dojo.require("dojox.data.JsonRestStore");
dojo.require("dojox.data.util.JsonQuery");

if(dojox.data.ClientFilter){
	dojo.require("dojox.json.query"); // this is so we can perform queries locally 
}

// this is an extension of JsonRestStore to convert object attribute queries to 
// JSONQuery/JSONPath syntax to be sent to the server. This also enables
//	JSONQuery/JSONPath queries to be performed locally if dojox.data.ClientFilter
//	has been loaded
dojo.declare("dojox.data.JsonQueryRestStore",[dojox.data.JsonRestStore,dojox.data.util.JsonQuery]);
