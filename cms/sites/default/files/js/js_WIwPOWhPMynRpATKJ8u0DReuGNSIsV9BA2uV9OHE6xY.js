
/*!
 * jQuery UI 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.7",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,
"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,
"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,
d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}});
c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&
b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;

/*!
 * jQuery UI Widget 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;
/**
 * @file
 * Attaches the behaviors for the Overlay child pages.
 */

(function ($) {

/**
 * Attach the child dialog behavior to new content.
 */
Drupal.behaviors.overlayChild = {
  attach: function (context, settings) {
    // Make sure this behavior is not processed more than once.
    if (this.processed) {
      return;
    }
    this.processed = true;

    // If we cannot reach the parent window, break out of the overlay.
    if (!parent.Drupal || !parent.Drupal.overlay) {
      window.location = window.location.href.replace(/([?&]?)render=overlay&?/g, '$1').replace(/\?$/, '');
    }

    var settings = settings.overlayChild || {};

    // If the entire parent window should be refreshed when the overlay is
    // closed, pass that information to the parent window.
    if (settings.refreshPage) {
      parent.Drupal.overlay.refreshPage = true;
    }

    // If a form has been submitted successfully, then the server side script
    // may have decided to tell the parent window to close the popup dialog.
    if (settings.closeOverlay) {
      parent.Drupal.overlay.bindChild(window, true);
      // Use setTimeout to close the child window from a separate thread,
      // because the current one is busy processing Drupal behaviors.
      setTimeout(function () {
        if (typeof settings.redirect == 'string') {
          parent.Drupal.overlay.redirect(settings.redirect);
        }
        else {
          parent.Drupal.overlay.close();
        }
      }, 1);
      return;
    }

    // If one of the regions displaying outside the overlay needs to be
    // reloaded immediately, let the parent window know.
    if (settings.refreshRegions) {
      parent.Drupal.overlay.refreshRegions(settings.refreshRegions);
    }

    // Ok, now we can tell the parent window we're ready.
    parent.Drupal.overlay.bindChild(window);

    // IE8 crashes on certain pages if this isn't called; reason unknown.
    window.scrollTo(window.scrollX, window.scrollY);

    // Attach child related behaviors to the iframe document.
    Drupal.overlayChild.attachBehaviors(context, settings);

    // There are two links within the message that informs people about the
    // overlay and how to disable it. Make sure both links are visible when
    // either one has focus and add a class to the wrapper for styling purposes.
    $('#overlay-disable-message', context)
      .focusin(function () {
        $(this).addClass('overlay-disable-message-focused');
        $('a.element-focusable', this).removeClass('element-invisible');
      })
      .focusout(function () {
        $(this).removeClass('overlay-disable-message-focused');
        $('a.element-focusable', this).addClass('element-invisible');
      });
  }
};

/**
 * Overlay object for child windows.
 */
Drupal.overlayChild = Drupal.overlayChild || {
  behaviors: {}
};

Drupal.overlayChild.prototype = {};

/**
 * Attach child related behaviors to the iframe document.
 */
Drupal.overlayChild.attachBehaviors = function (context, settings) {
  $.each(this.behaviors, function () {
    this(context, settings);
  });
};

/**
 * Capture and handle clicks.
 *
 * Instead of binding a click event handler to every link we bind one to the
 * document and handle events that bubble up. This also allows other scripts
 * to bind their own handlers to links and also to prevent overlay's handling.
 */
Drupal.overlayChild.behaviors.addClickHandler = function (context, settings) {
  $(document).bind('click.drupal-overlay mouseup.drupal-overlay', $.proxy(parent.Drupal.overlay, 'eventhandlerOverrideLink'));
};

/**
 * Modify forms depending on their relation to the overlay.
 *
 * By default, forms are assumed to keep the flow in the overlay. Thus their
 * action attribute get a ?render=overlay suffix.
 */
Drupal.overlayChild.behaviors.parseForms = function (context, settings) {
  $('form', context).once('overlay', function () {
    // Obtain the action attribute of the form.
    var action = $(this).attr('action');
    // Keep internal forms in the overlay.
    if (action == undefined || (action.indexOf('http') != 0 && action.indexOf('https') != 0)) {
      action += (action.indexOf('?') > -1 ? '&' : '?') + 'render=overlay';
      $(this).attr('action', action);
    }
    // Submit external forms into a new window.
    else {
      $(this).attr('target', '_new');
    }
  });
};

/**
 * Replace the overlay title with a message while loading another page.
 */
Drupal.overlayChild.behaviors.loading = function (context, settings) {
  var $title;
  var text = Drupal.t('Loading');
  var dots = '';

  $(document).bind('drupalOverlayBeforeLoad.drupal-overlay.drupal-overlay-child-loading', function () {
    $title = $('#overlay-title').text(text);
    var id = setInterval(function () {
      dots = (dots.length > 10) ? '' : dots + '.';
      $title.text(text + dots);
    }, 500);
  });
};

/**
 * Switch active tab immediately.
 */
Drupal.overlayChild.behaviors.tabs = function (context, settings) {
  var $tabsLinks = $('#overlay-tabs > li > a');

  $('#overlay-tabs > li > a').bind('click.drupal-overlay', function () {
    var active_tab = Drupal.t('(active tab)');
    $tabsLinks.parent().siblings().removeClass('active').find('element-invisible:contains(' + active_tab + ')').appendTo(this);
    $(this).parent().addClass('active');
  });
};

/**
 * If the shortcut add/delete button exists, move it to the overlay titlebar.
 */
Drupal.overlayChild.behaviors.shortcutAddLink = function (context, settings) {
  // Remove any existing shortcut button markup from the titlebar.
  $('#overlay-titlebar').find('.add-or-remove-shortcuts').remove();
  // If the shortcut add/delete button exists, move it to the titlebar.
  var $addToShortcuts = $('.add-or-remove-shortcuts');
  if ($addToShortcuts.length) {
    $addToShortcuts.insertAfter('#overlay-title');
  }

  $(document).bind('drupalOverlayBeforeLoad.drupal-overlay.drupal-overlay-child-loading', function () {
    $('#overlay-titlebar').find('.add-or-remove-shortcuts').remove();
  });
};

/**
 * Use displacement from parent window.
 */
Drupal.overlayChild.behaviors.alterTableHeaderOffset = function (context, settings) {
  if (Drupal.settings.tableHeaderOffset) {
    Drupal.overlayChild.prevTableHeaderOffset = Drupal.settings.tableHeaderOffset;
  }
  Drupal.settings.tableHeaderOffset = 'Drupal.overlayChild.tableHeaderOffset';
};

/**
 * Callback for Drupal.settings.tableHeaderOffset.
 */
Drupal.overlayChild.tableHeaderOffset = function () {
  var topOffset = Drupal.overlayChild.prevTableHeaderOffset ? eval(Drupal.overlayChild.prevTableHeaderOffset + '()') : 0;

  return topOffset + parseInt($(document.body).css('marginTop'));
};

})(jQuery);
;

/*
 * jQuery UI Position 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+parseInt(c.curCSS(this,"marginRight",true))||0,w=m+q+parseInt(c.curCSS(this,"marginBottom",true))||0,i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=m/2;
i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;

/*
 * jQuery UI Autocomplete 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(d){d.widget("ui.autocomplete",{options:{appendTo:"body",delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},_create:function(){var a=this,b=this.element[0].ownerDocument,f;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(!(a.options.disabled||a.element.attr("readonly"))){f=false;var e=d.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:a._move("previousPage",
c);break;case e.PAGE_DOWN:a._move("nextPage",c);break;case e.UP:a._move("previous",c);c.preventDefault();break;case e.DOWN:a._move("next",c);c.preventDefault();break;case e.ENTER:case e.NUMPAD_ENTER:if(a.menu.active){f=true;c.preventDefault()}case e.TAB:if(!a.menu.active)return;a.menu.select(c);break;case e.ESCAPE:a.element.val(a.term);a.close(c);break;default:clearTimeout(a.searching);a.searching=setTimeout(function(){if(a.term!=a.element.val()){a.selectedItem=null;a.search(null,c)}},a.options.delay);
break}}}).bind("keypress.autocomplete",function(c){if(f){f=false;c.preventDefault()}}).bind("focus.autocomplete",function(){if(!a.options.disabled){a.selectedItem=null;a.previous=a.element.val()}}).bind("blur.autocomplete",function(c){if(!a.options.disabled){clearTimeout(a.searching);a.closing=setTimeout(function(){a.close(c);a._change(c)},150)}});this._initSource();this.response=function(){return a._response.apply(a,arguments)};this.menu=d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo||
"body",b)[0]).mousedown(function(c){var e=a.menu.element[0];d(c.target).closest(".ui-menu-item").length||setTimeout(function(){d(document).one("mousedown",function(g){g.target!==a.element[0]&&g.target!==e&&!d.ui.contains(e,g.target)&&a.close()})},1);setTimeout(function(){clearTimeout(a.closing)},13)}).menu({focus:function(c,e){e=e.item.data("item.autocomplete");false!==a._trigger("focus",c,{item:e})&&/^key/.test(c.originalEvent.type)&&a.element.val(e.value)},selected:function(c,e){var g=e.item.data("item.autocomplete"),
h=a.previous;if(a.element[0]!==b.activeElement){a.element.focus();a.previous=h;setTimeout(function(){a.previous=h;a.selectedItem=g},1)}false!==a._trigger("select",c,{item:g})&&a.element.val(g.value);a.term=a.element.val();a.close(c);a.selectedItem=g},blur:function(){a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");d.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
this.menu.element.remove();d.Widget.prototype.destroy.call(this)},_setOption:function(a,b){d.Widget.prototype._setOption.apply(this,arguments);a==="source"&&this._initSource();if(a==="appendTo")this.menu.element.appendTo(d(b||"body",this.element[0].ownerDocument)[0])},_initSource:function(){var a=this,b,f;if(d.isArray(this.options.source)){b=this.options.source;this.source=function(c,e){e(d.ui.autocomplete.filter(b,c.term))}}else if(typeof this.options.source==="string"){f=this.options.source;this.source=
function(c,e){a.xhr&&a.xhr.abort();a.xhr=d.ajax({url:f,data:c,dataType:"json",success:function(g,h,i){i===a.xhr&&e(g);a.xhr=null},error:function(g){g===a.xhr&&e([]);a.xhr=null}})}}else this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val();this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)!==false)return this._search(a)},_search:function(a){this.element.addClass("ui-autocomplete-loading");
this.source({term:a},this.response)},_response:function(a){if(a&&a.length){a=this._normalize(a);this._suggest(a);this._trigger("open")}else this.close();this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",a)}},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){if(a.length&&
a[0].label&&a[0].value)return a;return d.map(a,function(b){if(typeof b==="string")return{label:b,value:b};return d.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(a){var b=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(b,a);this.menu.deactivate();this.menu.refresh();b.show();this._resizeMenu();b.position(d.extend({of:this.element},this.options.position))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth(),
this.element.outerWidth()))},_renderMenu:function(a,b){var f=this;d.each(b,function(c,e){f._renderItem(a,e)})},_renderItem:function(a,b){return d("<li></li>").data("item.autocomplete",b).append(d("<a></a>").text(b.label)).appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term);this.menu.deactivate()}else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element}});
d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(a,b){var f=new RegExp(d.ui.autocomplete.escapeRegex(b),"i");return d.grep(a,function(c){return f.test(c.label||c.value||c)})}})})(jQuery);
(function(d){d.widget("ui.menu",{_create:function(){var a=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(b){if(d(b.target).closest(".ui-menu-item a").length){b.preventDefault();a.select(b)}});this.refresh()},refresh:function(){var a=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(b){a.activate(b,d(this).parent())}).mouseleave(function(){a.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var f=b.offset().top-this.element.offset().top,c=this.element.attr("scrollTop"),e=this.element.height();if(f<0)this.element.attr("scrollTop",c+f);else f>=e&&this.element.attr("scrollTop",c+f-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",a,{item:b})},
deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null}},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,f){if(this.active){a=this.active[a+"All"](".ui-menu-item").eq(0);
a.length?this.activate(f,a):this.activate(f,this.element.children(b))}else this.activate(f,this.element.children(b))},nextPage:function(a){if(this.hasScroll())if(!this.active||this.last())this.activate(a,this.element.children(".ui-menu-item:first"));else{var b=this.active.offset().top,f=this.element.height(),c=this.element.children(".ui-menu-item").filter(function(){var e=d(this).offset().top-b-f+d(this).height();return e<10&&e>-10});c.length||(c=this.element.children(".ui-menu-item:last"));this.activate(a,
c)}else this.activate(a,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(a){if(this.hasScroll())if(!this.active||this.first())this.activate(a,this.element.children(".ui-menu-item:last"));else{var b=this.active.offset().top,f=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var c=d(this).offset().top-b+f-d(this).height();return c<10&&c>-10});result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(a,result)}else this.activate(a,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})})(jQuery);
;

/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);
;
