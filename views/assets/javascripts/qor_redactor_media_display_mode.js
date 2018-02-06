"use strict";$(function(){$.Redactor.prototype.mediadisplaymode=function(){return{langs:{en:{mediaDisplayMode:"Media Display Mode",mediaDisplayModeButton:"Display mode"}},buttonStyle:{position:"absolute","z-index":"5",top:"50%",left:"50%","margin-top":"-11px","line-height":"1","background-color":"rgba(0,0,0,.9)","border-radius":"3px",color:"#fff","font-size":"12px",padding:"7px 10px",cursor:"pointer","margin-left":"-120px"},getEditterButton:function(){return'<span id="redactor-image-displaymode" data-redactor="verified" contenteditable="false">'+this.lang.get("mediaDisplayModeButton")+"</span>"},getTemplate:function(){return String()+'<div class="redactor-modal-tab redactor-group">\n                    <div id="redactor-image-preview" class="redactor-modal-tab-side"></div>\n                    <div class="redactor-modal-tab-area" id="redactor-modal-displaymode">\n                        <section>\n                            <select id="modal-media-display-mode">\n                                <option value="0">Please select display mode</option>\n                                <option value="normal">Normal</option>\n                                <option value="original">Original</option>\n                                <option value="fullwidth">Full Width</option>\n                            </select>\n                        </section>\n                        <section>\n                            <button id="redactor-modal-button-action">Save</button>\n                            <button id="redactor-modal-button-cancel">Cancel</button>\n                        </section>\n                    </div></div>'},init:function(){var e=this.core.editor(),t=e.find("img");"pre"!==this.opts.type&&"inline"!==this.opts.type&&e.on("click.redactor-mediadisplaymode touchstart.redactor-mediadisplaymode",t,this.mediadisplaymode.setImageEditter.bind(this))},insertButton:function(e){var t=this.mediadisplaymode;$(t.getEditterButton()).css(t.buttonStyle).appendTo(e.closest("#redactor-image-box")).on("click.redactor-mediadisplaymode",t.show)},removeButton:function(e){$(e.target).closest("#redactor-image-box").length||($("#redactor-image-displaymode").remove(),$(document).off("click.redactor-mediadisplaymode"))},setImageEditter:function(e){var t=$(e.target),i=this,a=t.closest(this.opts.imageTag);this.mediadisplaymode.$imageTag=a,this.mediadisplaymode.$image=t,this.mediadisplaymode.currentDisplaymode=this.mediadisplaymode.getDisplayMode(a.attr("class")),$(document).on("click.redactor-mediadisplaymode",this.mediadisplaymode.removeButton),setTimeout(function(){i.mediadisplaymode.insertButton(t)},10)},getDisplayMode:function(e){var t=e?e.match(/rd-display-\w+/):null;return t&&(t=t[0].replace("rd-display-","")),t},show:function(){var e=this.mediadisplaymode.currentDisplaymode;this.modal.addTemplate("mediadisplaymode",this.mediadisplaymode.getTemplate()),this.modal.load("mediadisplaymode","Media Display Mode",600),this.modal.getActionButton().text(this.lang.get("save")).on("click",this.mediadisplaymode.save),this.modal.show(),$("#modal-media-display-mode").val(e||0),$("#redactor-image-preview").html('<img src="'+this.mediadisplaymode.$image.prop("src")+'" style="max-width: 100%; opacity: 1">')},save:function(){var e=$("#modal-media-display-mode").val(),t=this.mediadisplaymode.$imageTag;t.removeClass(function(e,t){return(t.match(/rd-display-\w+/g)||[]).join(" ")}),0!=e&&t.addClass("rd-display-"+e),this.modal.close()}}}});