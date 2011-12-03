/*!
 * pJs JavaScript Framework v1.0
 * http://patrickj.co/
 * 
 * Copyright 2011, Patrick Montgomery
 * Licensed under the GPL Version 2 licenses.
 *
 * Date: Dec 3 2011
 */

 
p$.namespace("pjs.common.util", function(pub, log) {
	pub.SuperClass = function(name) {
		this.name = name;	
	}
	
	pub.SuperClass.prototype.getName = function() {
		return this.name;	
	}
	
	pub.SuperClass.prototype.getBigName = function() {
		this.name = "jeff";
		//return this.name + ' is my name';	
	}
	
	pub.SubClass = function(name) {
		//Calls super class constructor function
		pub.SuperClass.call(this, name);	
	}
	
	p$.inherit(pub.SubClass, pub.SuperClass);
	
	pub.SubClass.prototype.getBigName = function() {
		//calls super class method of same name.  call() changes context of 'this' is super class
		pub.SuperClass.prototype.getBigName.call(this);
		return this.name + ' is really my name';	
	}
	
});