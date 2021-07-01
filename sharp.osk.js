/*!
 * Sharp OSK v1.0.0 (https://getsharp.co.ke)
 *
 * Copyright 2021 Getsharp Developers Limited
 * 
 * Author : Albert Omwega
 * 
 * Licensed under ISC (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */


const sharp_osk_html = "<div id='virtual-osk-keyboard' class='p-2' style='position:fixed; bottom:0; width:100%; background-color: rgba(0,0,0,0.4); z-index: 99998; display:none; transition: all 0.4s; height:256px; box-shadow: 1px 1px 18px -10px rgba(0,0,0,0.75) !important;'> <div class='container' style='max-width: 800px;'> <table class='w-100'> <tbody> <tr> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='`' class='btn btn-light'>`</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='1' class='btn btn-light'>1</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='2' class='btn btn-light'>2</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='3' class='btn btn-light'>3</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='4' class='btn btn-light'>4</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='5' class='btn btn-light'>5</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='6' class='btn btn-light'>6</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='7' class='btn btn-light'>7</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='8' class='btn btn-light'>8</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='9' class='btn btn-light'>9</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='0' class='btn btn-light'>0</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='-' class='btn btn-light'>-</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='+' class='btn btn-light'>+</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='112211' class='btn btn-light'><i class = 'mdi mdi-keyboard-backspace'></i></button></td> </tr> <tr> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='99999' class='btn btn-light'>tab</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='q' class='btn btn-light'>q</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='w' class='btn btn-light'>w</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='e' class='btn btn-light'>e</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='r' class='btn btn-light'>r</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='t' class='btn btn-light'>t</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='y' class='btn btn-light'>y</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='u' class='btn btn-light'>u</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='i' class='btn btn-light'>i</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='o' class='btn btn-light'>o</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='p' class='btn btn-light'>p</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='[' class='btn btn-light'>[</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key=']' class='btn btn-light'>]</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='\' class='btn btn-light'>\</button></td> </tr> <tr> <td colspan='2'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='' class='btn btn-light caps-lock'>Caps</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='a' class='btn btn-light'>a</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='s' class='btn btn-light'>s</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='d' class='btn btn-light'>d</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='f' class='btn btn-light'>f</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='g' class='btn btn-light'>g</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='h' class='btn btn-light'>h</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='j' class='btn btn-light'>j</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='k' class='btn btn-light'>k</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='l' class='btn btn-light'>l</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key=';' class='btn btn-light'>;</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key=''' class='btn btn-light'>'</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='131313' class='btn btn-light'>Enter</button></td> </tr> <tr> <td colspan='2'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='' class='btn btn-light'>Shift</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='z' class='btn btn-light'>z</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='x' class='btn btn-light'>x</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='c' class='btn btn-light'>c</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='v' class='btn btn-light'>v</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='b' class='btn btn-light'>b</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='n' class='btn btn-light'>n</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='m' class='btn btn-light'>m</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key=',' class='btn btn-light'>,</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='.' class='btn btn-light'>.</button></td> <td style ='padding: 2px;'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='/' class='btn btn-light'>/</button></td> <td colspan='2'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key='' class='btn btn-light'>Shift</button></td> </tr> <tr> <td colspan='4'></td> <td colspan='6'><button tabindex='-1' type='button' style='height:44px; width: 100%;' data-key=' ' class='btn btn-light'></button></td> <td colspan='4'></td> </tr> </tbody> </table> </div> <button type='button' class='btn btn-light btn-sm keyboard-location' style='width: 40px; height: 40px; margin-top:-66px; bottom:10px; left:10px; border-radius:20px;'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style='fill:rgba(33, 37, 41, 1);transform:;-ms-filter:'><path d='M7 20L9 20 9 8 12 8 8 4 4 8 7 8zM20 16L17 16 17 4 15 4 15 16 12 16 16 20z'></path></svg></button> </div> <button id='virtual_keyboard_toggle_keyboard' type='button' class='btn btn-light btn-sm shadow' style='width: 40px; height: 40px; position:fixed; bottom:10px; right:10px; border-radius:20px; z-index: 99999; border-color: #29bbe3;'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style='fill:rgba(41, 187, 227, 1);transform:;-ms-filter:'><path d='M21,5H3C1.896,5,1,5.896,1,7v10c0,1.104,0.896,2,2,2h18c1.104,0,2-0.896,2-2V7C23,5.896,22.104,5,21,5z M13,7h2v2h-2V7z M13,11h2v2h-2V11z M9,7h2v2H9V7z M9,11h2v2H9V11z M5,7h2v2H5V7z M5,11h2v2H5V11z M17,17H7v-2h10V17z M19,13h-2v-2h2V13z M19,9h-2 V7h2V9z'></path></svg></button>";

let virtual_keyboard_caps=0;


(function ( $ ) {

    $.fn.initializeSharpOsk = function() {
        let kbd = $("#virtual-osk-keyboard");
        if(kbd.length==0){
            $('body').append(sharp_osk_html);
        }

        $("#virtual_keyboard_toggle_keyboard").click(function(){
            $("#virtual-osk-keyboard").toggle( 'fast');
        });

        $('#virtual-osk-keyboard').on('mousedown', function(e) { e.preventDefault();}); 

        $("#virtual-osk-keyboard .keyboard-location").click(function(e){
            e.preventDefault();
            postionKeyboard();
        });

        $( window ).resize(function() {
            postionKeyboard();
        });

        function postionKeyboard(){
            var $kbd = $("#virtual-osk-keyboard");           
            var pos = $kbd.position();                 
            if(pos.top==0){             
                $kbd.animate({
                    top: $('body').height()- $kbd.height()-14,
                    marginTop: 0
                });        
            }else{
                $kbd.animate({
                    top: 0,
                    marginTop: 0
                });
            }             
        }
      
        $('#virtual-osk-keyboard .btn').on('mousedown', function(e) {
            e.preventDefault();
            let $elem = $(':focus');
            if($elem.length==0) return;
            
            let elem_type = $elem[0].type;
           
            if(elem_type == 'password' || elem_type =='text' || elem_type == 'textarea' || elem_type == 'number' || elem_type =='email' || elem_type == 'search' || elem_type=='tel' || elem_type=='url'){
                    let cval = $elem.val();
                    let my_key = $(this).attr('data-key');
                    if(my_key==undefined) return;

                    if(my_key=='112211'){
                        if(cval.length>0){
                            $elem.val(cval.substr(0, cval.length-1));
                        }
                    }else if(my_key == '131313'){
                        var e = jQuery.Event("keypress");
                        e.which = 13; //choose the one you want
                        e.keyCode = 13;
                        $form = $($elem).closest('form');
                        if($form.length==1){
                            $form.trigger('submit');
                            $("#virtual-osk-keyboard").hide('fast')
                        }                        
                    }else if(my_key == '99999'){
                            e = jQuery.Event("keypress");
                            e.which = 9;
                            $elem.keypress(function(){}).trigger(e);
                    }else{
                        $elem.val(cval.toString()+my_key);
                    }                    
                }
            }
        );

        $('#virtual-osk-keyboard .caps-lock').on('mousedown', function(e) {
            e.preventDefault();
            virtual_keyboard_caps = !virtual_keyboard_caps;
            $('#virtual-osk-keyboard .btn').each(function(){
                let my_key = $(this).attr('data-key'); 
                if(my_key !=undefined){
                    let ischar = isKeyChar(my_key);
                    if(ischar){                   
                        if(virtual_keyboard_caps){
                            $(this).attr('data-key', my_key.toUpperCase());
                            $(this).html(my_key.toUpperCase());
                        }else{
                            $(this).attr('data-key', my_key.toLowerCase());
                            $(this).html(my_key.toLowerCase());
                        }
                    } 
                }             
            });
        });

        function isKeyChar(char) {
            return (/[a-zA-Z]/).test(char)
        }


        return this;
    };
 
}( jQuery ));
