import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  maps:string = '../../../assets/img/maps.png';
  whats:string = '../../../assets/img/whatsapp.png';
  insta:string = '../../../assets/img/instagram.png';

  ubicacion: string = 'Ubicanos en: 1 sur entre 2a y 3a poniente Col. Terán';
  numeros: string = '961 307 97 17 y 961 348 88 48';
  instagram:string = '@Sam_papotas';

  datosUbicacion: string = 'https://www.google.com/maps/place/Primera+Avenida+Sur+Pte.+230A,+Ter%C3%A1n,+29050+Tuxtla+Guti%C3%A9rrez,+Chis./@16.7520397,-93.1663101,3a,74.4y,355.75h,83.67t/data=!3m7!1e1!3m5!1sH-8Gdv7y4kzJdaa0yE3PSQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DH-8Gdv7y4kzJdaa0yE3PSQ%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D330.81168%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m7!3m6!1s0x85ecd97734703277:0x7b90e3a638109e84!8m2!3d16.7521265!4d-93.1663865!10e5!16s%2Fg%2F11s9jr3_qb?entry=ttu';
  datosInsta: string = 'https://www.instagram.com/sam_papotas/';
  datosWhats: string = 'https://api.whatsapp.com/send?phone=%2B529613079717&data=AWDzo_QqRXrh6DVWS4DQ9Yc5Et3OpEJlTNDi8Mi291mSQBvPOQZ3bWTIVR-JtiEq7fjKQmmh1eBnYgWbYFva8uE17VM1cH8FoRj51rYgs7cTncQ41rBdqYYdbNwe7AEjXDAQDl9a3kcJKcV_QSgU5VQRUZVch1ViDsIcCDc36QT8v1M8cg5qNHxqFCHBXc7zS5bWFNbmtc9tjFS5qWHxi91xiQWuLJEguaLxh6cImzT1BNDOG3PlPcwrleZWmls0mG5rbHUsBCPSgmrPoU6LMtnKnveLcIQCMYDqYbnnQXhh02zDLRc&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1Wo2RimBDL9-RqFN_RIie0c4SzCFhiI63mSPszy87B5Jjk8Wn0HGsg57s';

}
