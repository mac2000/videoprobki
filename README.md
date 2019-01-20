cam_info[3] = `

<div class="cam-number vpCamNum240">
ВЕБ-КАМЕРА № 3&
nbsp;&nbsp;&nbsp;&nbsp;
<a href="#" onclick="change_position(50.488, 30.526, 16); return false;" style="font-weight: normal;" rel="nofollow">см. на карте</a>
<style>.linktocam2{width: 27px; height: 21px; background: url(/themes/videoprobki/images/main2cam.png); float: right;}.linktocam2:hover{background: url(/themes/videoprobki/images/main2cam_h.png);}</style>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="/camera/3-moskovskii-prospekt-prospekt-geroev-stalingrada?">
<div title="Переход на страницу камеры" class="linktocam2"></div>
</a>
</div>
<div>
ГОРОД: Киев
<br />
РАЙОН: Оболонский
<br />
АДРЕС: <b>Московский проспект - проспект Героев Сталинграда</b>
<br />НАПРАВЛЕНИЕ ВЕБ-КАМЕРЫ: <b>метро Петровка</b></div>`;

cam_city[3] = "Kyiiv";
gpl_arr[3] = "gplmod4";
baseurl_arr[3] = "http://vs4.videoprobki.com.ua/streams/";
img_arr[3] = "http://img1.videoprobki.com.ua/camimg/cam3-5.jpg?109944274";
advert[3] = `Стоимость <a href=&#039;/service/run_line/&#039; class=&#039;white-link&#039;>рекламы в окне камеры</a> - 200 грн. в месяц`;

markerload[markerload.length] = function() {
setMarkers(
"/themes/videoprobki/images/icons/green_0.gif",
50.488,
30.526,
"Московский проспект - проспект Героев Сталинграда",
`<div style="width: 490px;"> <div class="inf-left"> <a href="#" onclick="clickevent(3, 93, 2, 50.488, 30.526, 0, 1, 1, 0)"> <img src="http://img1.videoprobki.com.ua/camimg/cam3-3.jpg?2119309418" width="264" height="198" border="0" alt="Московский проспект - проспект Героев Сталинграда" title="Видео, веб-камеры, Московский проспект - проспект Героев Сталинграда" /> <img src="/themes/videoprobki/images/but.png" width="46" height="46" class="inf-play-button" title="Просмотр ВИДЕО" /> </a> </div> <div class="inf-right"> <div class="cam-number vpCamNum240">ВЕБ-КАМЕРА № 3</div> <div>АДРЕС: <b>Московский проспект - проспект Героев Сталинграда</b><br /> НАПРАВЛЕНИЕ ВЕБ-КАМЕРЫ: <b>метро Петровка</b></div><br /> <a class="camera_page" href="/camera/3-moskovskii-prospekt-prospekt-geroev-stalingrada?c=Kyiiv" style="display: block;"><b>Прямая ссылка</b> на камеру</a><br /> <div class="infowindow-grey-button"><a href="#" onclick="neighborin_cameras_list(93); return false;">Камеры рядом</a></div> <div id="neighborin-cameras-list"></div></div><br class="clear-both" /></div>`,
0
);
};
sectorsload[sectorsload.length] = function() {
setPolyline(
"50.488776, 30.507158|50.488743, 30.508043|50.488704, 30.508950|50.488660, 30.510087|50.488620, 30.511184|50.488595, 30.511906|50.488559, 30.512834|50.488523, 30.513631|50.488491, 30.514280|50.488452, 30.515310|50.488387, 30.516712|50.488337, 30.517745|50.488279, 30.519006|50.488214, 30.520612|50.488155, 30.521723|50.488112, 30.522495|50.488110, 30.523203|50.488115, 30.523557|50.488120, 30.524276|50.488172, 30.525684|50.488230, 30.526309",
"1",
3
);
};

\$.getJSON(f_lang+"/getNeighboringCameras/"+nid, function(data){
var list = '';
for (var i in data) {
list = list + '<div style="padding: 2px 0 3px 4px;"><a href="#" onclick="clickevent('+data[i]["sid"]+', '+i+', 2, '+data[i]["lat"]+', '+data[i]["lon"]+', 0, 0); return false;">'+data[i]["address2"]+'</a></div>'
}

    $("#neighborin-cameras-list").html(list);
    $("#neighborin-cameras-list").slideToggle();

});

setPlayer(
"player_170",
"cam16",
"0",
"1",
"http://vs6.videoprobki.com.ua/streams/", "gplmod6", "1", "1",
"Стоимость <a href='/service/run_line/' class='white-link'>рекламы в окне камеры</a> - 200 грн. в месяц",
"1", "1", "2", "ru", 1, 1, "42");

// /themes/videoprobki/player/commercial/flowplayer.commercial-3.2.7.swf

id = "player_466",
fcam = "cam22",
nostart = "0",
streams = "2",
fbaseUrlVar = "http://vs4.videoprobki.com.ua/streams/",
fgpl = "gplmod4",
frotateCams = "0",
advertising = "",
advert_scrollingtext_text = "Стоимость <a href='/service/run_line/' class='white-link'>рекламы в окне камеры</a> - 200 грн. в месяц",
logo = "1",
advertising_clip = "0"

getGpl(fgpl)
"gplmod4"
getCam(fcam)
"cam22"

     $.post("/gplmod4", {p1: "cam22", p2: "2", p3: "1", p4: "1"}, console.log);
     cam22-5.jpg, cam22stream_1547884158.mp4, cam22stream_1547884220.mp4 success
     http://img1.videoprobki.com.ua/camimg/

     http://vs4.videoprobki.com.ua/streams/cam22stream_1547884220.mp4
     http://w2.videoprobki.com.ua/animation/images/animcam22_180.gif

gpl = '';
cam = '';
streams = '2';

{lat: 50.488347, lng: 30.526166},
{lat: 50.488301, lng: 30.525269},
{lat: 50.488274, lng: 30.524770},
{lat: 50.488250, lng: 30.523541},
{lat: 50.488264, lng: 30.522745},
{lat: 50.488271, lng: 30.522455},
{lat: 50.488274, lng: 30.522407},
{lat: 50.488271, lng: 30.522302},
{lat: 50.488347, lng: 30.520703},
{lat: 50.488388, lng: 30.519636},
{lat: 50.488450, lng: 30.518343},
{lat: 50.488498, lng: 30.517077},
{lat: 50.488554, lng: 30.515707},
{lat: 50.488600, lng: 30.514628},
{lat: 50.488627, lng: 30.513936},
{lat: 50.488670, lng: 30.512922},
{lat: 50.488711, lng: 30.511898},
{lat: 50.488743, lng: 30.511203},
{lat: 50.488789, lng: 30.510058},
{lat: 50.488835, lng: 30.508945},
{lat: 50.488875, lng: 30.508041},
{lat: 50.488909, lng: 30.507193},

{lat: 50.489254, lng: 30.497883},
{lat: 50.489259, lng: 30.496290},
{lat: 50.489267, lng: 30.494404},
{lat: 50.489271, lng: 30.492763},
