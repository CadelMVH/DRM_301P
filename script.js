TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "buttonRestart": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "height": 38,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "data": {
    "name": "Button1195"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minHeight": 0
  },
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer"
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C201000_26EC_AEF6_41B8_92A89BC9CE00_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_3827ADC6_276A_94F5_41C0_4E4A88CC1ED0",
      "yaw": 32.78,
      "bleachingDistance": 0.4,
      "bleaching": 0.7,
      "pitch": 6.47
     }
    ],
    "thumbnailUrl": "media/panorama_2C201000_26EC_AEF6_41B8_92A89BC9CE00_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C201000_26EC_AEF6_41B8_92A89BC9CE00_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C201000_26EC_AEF6_41B8_92A89BC9CE00.jpeg"
      }
     ]
    }
   }
  ],
  "vfov": 180,
  "id": "panorama_2C201000_26EC_AEF6_41B8_92A89BC9CE00",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Entry",
  "hfovMin": 60
 },
 {
  "class": "PanoramaPlayer",
  "buttonMoveLeft": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "mode": "push",
   "width": 30,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5.png",
   "height": 30,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_pressed.png",
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_rollover.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
   "data": {
    "name": "Button1201"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minHeight": 0
  },
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "buttonPlayLeft": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "height": 38,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "data": {
    "name": "Button1196"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minHeight": 0
  },
  "preloadEnabled": false,
  "buttonMoveDown": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "mode": "push",
   "width": 30,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2.png",
   "height": 30,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_pressed.png",
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_rollover.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2",
   "data": {
    "name": "Button1204"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minHeight": 0
  },
  "gyroscopeEnabled": true,
  "buttonPlayRight": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "height": 38,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "data": {
    "name": "Button1198"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minHeight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveRight": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "mode": "push",
   "width": 30,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894.png",
   "height": 30,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_pressed.png",
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_rollover.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894",
   "data": {
    "name": "Button1205"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minHeight": 0
  },
  "buttonMoveUp": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "mode": "push",
   "width": 30,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB.png",
   "height": 30,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_pressed.png",
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_rollover.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
   "data": {
    "name": "Button1203"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minHeight": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonZoomOut": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "mode": "push",
   "width": 30,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "height": 30,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "data": {
    "name": "Button1207"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minHeight": 0
  },
  "buttonZoomIn": {
   "class": "IconButton",
   "horizontalAlign": "center",
   "mode": "push",
   "width": 30,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "height": 30,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "data": {
    "name": "Button1208"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "minHeight": 0
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -74.74,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -4.84,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -106.03,
     "path": "shortest",
     "yawSpeed": 59.05,
     "easing": "cubic_in_out",
     "targetPitch": -5.21,
     "pitchSpeed": 29.89
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C201000_26EC_AEF6_41B8_92A89BC9CE00_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 154.31,
   "pitch": -7.73
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C66CD09_26EC_76F6_41A1_D11062CD8B3E_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_5F157561_437F_DAEB_41CA_CD9C8DE437CB",
      "yaw": -47.36,
      "bleachingDistance": 0.05,
      "bleaching": 0.34,
      "pitch": 9.23
     }
    ],
    "thumbnailUrl": "media/panorama_2C66CD09_26EC_76F6_41A1_D11062CD8B3E_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C66CD09_26EC_76F6_41A1_D11062CD8B3E_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C66CD09_26EC_76F6_41A1_D11062CD8B3E.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "id": "panorama_2C66CD09_26EC_76F6_41A1_D11062CD8B3E",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Den",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 368.63,
    "x": 601.98,
    "angle": 208.06,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#339900",
     "fieldOfViewOverlayOutsideColor": "#000000",
     "thumbnailUrl": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_t.png",
     "width": 1862,
     "maximumZoomFactor": 1.2,
     "height": 1106,
     "overlays": [
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_535F9EFA_4358_67D9_41C5_C61D9C47ABED",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 157.64,
        "y": 293.18,
        "height": 150.9,
        "x": 523.17,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 65,
           "class": "ImageResourceLevel",
           "width": 68,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_2_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Entry"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Entryway",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "width": 157.64,
        "y": 293.18,
        "height": 150.9,
        "x": 523.17,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 130,
           "class": "ImageResourceLevel",
           "width": 136,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_2.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_52321AD7_4359_EFD7_41B0_DE84C9721B7A",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 255.99,
        "y": 824.16,
        "height": 101.05,
        "x": 1100.36,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 110,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_3_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Bedroom"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Bedroom"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "width": 255.99,
        "y": 824.16,
        "height": 101.05,
        "x": 1100.36,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 87,
           "class": "ImageResourceLevel",
           "width": 220,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_3.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_516EF9FE_4348_ADD9_41C8_45DC0E736F8D",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 157.47,
        "y": 559.54,
        "height": 312.31,
        "x": 1517.13,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 68,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_4_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Bathroom"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Bathroom",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "width": 157.47,
        "y": 559.54,
        "height": 312.31,
        "x": 1517.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 269,
           "class": "ImageResourceLevel",
           "width": 136,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_4.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_51E793D8_4348_7DD9_41C9_2299EA0014A7",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 174.6,
        "y": 235.9,
        "height": 141.66,
        "x": 926.16,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 61,
           "class": "ImageResourceLevel",
           "width": 75,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_5_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Kitchen"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Kitchen",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "width": 174.6,
        "y": 235.9,
        "height": 141.66,
        "x": 926.16,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 122,
           "class": "ImageResourceLevel",
           "width": 151,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_5.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_51B1947C_4349_DAD9_4169_69B4F46EA022",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 164.61,
        "y": 799.47,
        "height": 168.67,
        "x": 778.65,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 72,
           "class": "ImageResourceLevel",
           "width": 71,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_6_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Second Entry"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Second Entry",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "width": 164.61,
        "y": 799.47,
        "height": 168.67,
        "x": 778.65,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 145,
           "class": "ImageResourceLevel",
           "width": 142,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_6.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_50460831_4348_6A6B_41A9_E1F301103D28",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 252.35,
        "y": 877.83,
        "height": 129.14,
        "x": 1519.65,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "class": "ImageResourceLevel",
           "width": 108,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_7_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Shower"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Shower",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "width": 252.35,
        "y": 877.83,
        "height": 129.14,
        "x": 1519.65,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 111,
           "class": "ImageResourceLevel",
           "width": 217,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_7.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_5119FFB4_4348_A669_41B6_B675602B0104",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 253.57,
        "y": 91.14,
        "height": 334.62,
        "x": 87.98,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 144,
           "class": "ImageResourceLevel",
           "width": 109,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_8_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Deck"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Deck",
         "click": "this.mainPlayList.set('selectedIndex', 24)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "width": 253.57,
        "y": 91.14,
        "height": 334.62,
        "x": 87.98,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 289,
           "class": "ImageResourceLevel",
           "width": 219,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_8.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_5C7DAB39_4348_6E5B_41C4_D46C8C88D3CB",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 211.53,
        "y": 216.92,
        "height": 160.33,
        "x": 1442.98,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 69,
           "class": "ImageResourceLevel",
           "width": 91,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_9_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Utility"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Utility",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "width": 211.53,
        "y": 216.92,
        "height": 160.33,
        "x": 1442.98,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 139,
           "class": "ImageResourceLevel",
           "width": 183,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_9.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_62A7C1E1_4348_7DEB_419D_DABAC5D1C066",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 220.96,
        "y": 533.54,
        "height": 88.92,
        "x": 1085.94,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 39,
           "class": "ImageResourceLevel",
           "width": 95,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_10_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": true,
       "data": {
        "label": "Closet"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "toolTip": "Closet",
         "click": "this.mainPlayList.set('selectedIndex', 16)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "width": 220.96,
        "y": 533.54,
        "height": 88.92,
        "x": 1085.94,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 78,
           "class": "ImageResourceLevel",
           "width": 191,
           "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_HS_10.png"
          }
         ]
        }
       },
       "useHandCursor": true
      }
     ],
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 950,
        "class": "ImageResourceLevel",
        "width": 1600,
        "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A.png"
       },
       {
        "height": 475,
        "class": "ImageResourceLevel",
        "width": 800,
        "url": "media/map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A_lq.png",
        "grayscale": true
       }
      ]
     },
     "fieldOfViewOverlayRadiusScale": 0.13,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "id": "map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A",
     "label": "Floorplan transparent background",
     "scaleMode": "fit_inside",
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "minimumZoomFactor": 0.5
    }
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "class": "ViewerArea",
   "toolTipTextShadowColor": "#000000",
   "progressBorderRadius": 4,
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipFontStyle": "normal",
   "progressBarBorderSize": 0,
   "transitionDuration": 500,
   "toolTipDisplayTime": 600,
   "paddingBottom": 0,
   "progressBorderSize": 2,
   "toolTipPaddingBottom": 4,
   "playbackBarRight": 0,
   "playbackBarHeadWidth": 6,
   "playbackBarOpacity": 1,
   "playbackBarHeight": 20,
   "progressBarOpacity": 1,
   "progressBackgroundOpacity": 1,
   "shadow": false,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeadShadow": true,
   "paddingLeft": 0,
   "paddingRight": 0,
   "toolTipBorderRadius": 3,
   "progressOpacity": 1,
   "toolTipShadowOpacity": 1,
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipFontFamily": "Arial",
   "toolTipOpacity": 1,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressRight": 10,
   "toolTipPaddingRight": 6,
   "playbackBarHeadBorderSize": 0,
   "minHeight": 1,
   "paddingTop": 0,
   "toolTipBorderColor": "#767676",
   "toolTipBorderSize": 1,
   "playbackBarBorderColor": "#AAAAAA",
   "playbackBarHeadBorderColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipShadowVerticalLength": 0,
   "playbackBarBackgroundOpacity": 1,
   "width": "100%",
   "progressBorderColor": "#AAAAAA",
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarLeft": 0,
   "playbackBarBorderSize": 2,
   "height": "100%",
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadHeight": 30,
   "playbackBarBottom": 0,
   "progressLeft": 10,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowOpacity": 0,
   "playbackBarProgressOpacity": 1,
   "playbackBarHeadBorderRadius": 0,
   "toolTipFontColor": "#606060",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipFontSize": 12,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarProgressBorderColor": "#000000",
   "minWidth": 1,
   "playbackBarHeadOpacity": 1,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "toolTipShadowHorizontalLength": 0,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "top": "0%",
   "playbackBarBorderRadius": 4,
   "borderRadius": 0,
   "id": "MapViewer",
   "toolTipFontWeight": "normal",
   "progressHeight": 20,
   "borderSize": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipShadowSpread": 0,
   "progressBottom": 2,
   "toolTipPaddingLeft": 6,
   "left": "0%",
   "playbackBarProgressBorderSize": 0,
   "transitionMode": "blending",
   "playbackBarProgressBorderRadius": 0,
   "progressBarBorderRadius": 4
  },
  "movementMode": "constrained",
  "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
  "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -50.87,
     "path": "longest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -3.33,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C66CD09_26EC_76F6_41A1_D11062CD8B3E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 30.02,
   "pitch": -1.13
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C44E091_26ED_AF16_41A7_BFE64379D81C_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C44E091_26ED_AF16_41A7_BFE64379D81C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C44E091_26ED_AF16_41A7_BFE64379D81C.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C44E091_26ED_AF16_41A7_BFE64379D81C_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_2C44E091_26ED_AF16_41A7_BFE64379D81C",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Second Entry",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 883.8,
    "x": 860.96,
    "angle": 145.2,
    "map": "this.map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -166.18,
     "path": "longest",
     "yawSpeed": 52.6,
     "easing": "linear",
     "targetPitch": -10.99,
     "pitchSpeed": 26.68
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -143.32,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -7.98,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C44E091_26ED_AF16_41A7_BFE64379D81C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 48.74,
   "pitch": -6.66
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C7ED5E6_26ED_913D_41A7_854C689EAD84_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C7ED5E6_26ED_913D_41A7_854C689EAD84_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C7ED5E6_26ED_913D_41A7_854C689EAD84.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C7ED5E6_26ED_913D_41A7_854C689EAD84_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C7ED5E6_26ED_913D_41A7_854C689EAD84",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Living Room",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -141.94,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.96,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C7ED5E6_26ED_913D_41A7_854C689EAD84_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.77,
   "pitch": 0.25
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C77E370_26ED_B116_41B5_F70134929B6D_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C77E370_26ED_B116_41B5_F70134929B6D_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C77E370_26ED_B116_41B5_F70134929B6D.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C77E370_26ED_B116_41B5_F70134929B6D_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C77E370_26ED_B116_41B5_F70134929B6D",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Hallway",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 1.38,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -5.59,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 163.55,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -3.45,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C77E370_26ED_B116_41B5_F70134929B6D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -164.3,
   "pitch": -13.06
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C4DA1F6_26ED_911A_41C0_EEA04A207FD7_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C4DA1F6_26ED_911A_41C0_EEA04A207FD7_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C4DA1F6_26ED_911A_41C0_EEA04A207FD7.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C4DA1F6_26ED_911A_41C0_EEA04A207FD7_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_2C4DA1F6_26ED_911A_41C0_EEA04A207FD7",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Kitchen",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 306.73,
    "x": 1013.46,
    "angle": -120.47,
    "map": "this.map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -170.83,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -14.51,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 88.56,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -8.35,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C4DA1F6_26ED_911A_41C0_EEA04A207FD7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -34.66,
   "pitch": -12.01
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C7035DA_26EC_710A_41BE_2FB1DE786629_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C7035DA_26EC_710A_41BE_2FB1DE786629_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C7035DA_26EC_710A_41BE_2FB1DE786629.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C7035DA_26EC_710A_41BE_2FB1DE786629_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C7035DA_26EC_710A_41BE_2FB1DE786629",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Kitchen view2",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 6.66,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.08,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 169.7,
     "path": "longest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -11.37,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C7035DA_26EC_710A_41BE_2FB1DE786629_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -134.91,
   "pitch": -20.47
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C7CD93A_26EC_910A_41BD_4816C1C980CA_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C7CD93A_26EC_910A_41BD_4816C1C980CA_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C7CD93A_26EC_910A_41BD_4816C1C980CA.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C7CD93A_26EC_910A_41BD_4816C1C980CA_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C7CD93A_26EC_910A_41BD_4816C1C980CA",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Back Door",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 56.65,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.31,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -161.91,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -10.61,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C7CD93A_26EC_910A_41BD_4816C1C980CA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -54.16,
   "pitch": -5.23
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C797FC7_26EC_917A_41AF_B4251A1D7696_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C797FC7_26EC_917A_41AF_B4251A1D7696_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C797FC7_26EC_917A_41AF_B4251A1D7696.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C797FC7_26EC_917A_41AF_B4251A1D7696_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_2C797FC7_26EC_917A_41AF_B4251A1D7696",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Utility",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 297.08,
    "x": 1548.75,
    "angle": -40.65,
    "map": "this.map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 136.79,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -7.85,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -144.08,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -16.27,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C797FC7_26EC_917A_41AF_B4251A1D7696_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.77,
   "pitch": 5.65
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C79D333_26EC_911A_41B2_2A7E8B14B26B_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C79D333_26EC_911A_41B2_2A7E8B14B26B_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C79D333_26EC_911A_41B2_2A7E8B14B26B.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C79D333_26EC_911A_41B2_2A7E8B14B26B_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C79D333_26EC_911A_41B2_2A7E8B14B26B",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Utility & Panel Acsess",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -156.64,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -7.35,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 171.46,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -12.75,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C79D333_26EC_911A_41B2_2A7E8B14B26B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C7D5644_26EC_F37E_41AF_5580633C1CDB_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C7D5644_26EC_F37E_41AF_5580633C1CDB_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C7D5644_26EC_F37E_41AF_5580633C1CDB.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C7D5644_26EC_F37E_41AF_5580633C1CDB_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_2C7D5644_26EC_F37E_41AF_5580633C1CDB",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Bathroom",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 715.7,
    "x": 1595.87,
    "angle": 21.73,
    "map": "this.map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -134.28,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -13.38,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 134.03,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.95,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C7D5644_26EC_F37E_41AF_5580633C1CDB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C696C92_26EC_F71A_41C2_154B7D0C4B92_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C696C92_26EC_F71A_41C2_154B7D0C4B92_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C696C92_26EC_F71A_41C2_154B7D0C4B92.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C696C92_26EC_F71A_41C2_154B7D0C4B92_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C696C92_26EC_F71A_41C2_154B7D0C4B92",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Bathroom view2",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -6.91,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.71,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -170.33,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -12.75,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C696C92_26EC_F71A_41C2_154B7D0C4B92_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -127.82,
   "pitch": -12.73
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C6102E9_26EC_9336_41B2_122BD05CE694_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_5F0D80CF_4379_FA37_41B4_9B694CC9C5E7",
      "yaw": 75.37,
      "bleachingDistance": 1,
      "bleaching": 0.22,
      "pitch": 50.43
     }
    ],
    "thumbnailUrl": "media/panorama_2C6102E9_26EC_9336_41B2_122BD05CE694_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C6102E9_26EC_9336_41B2_122BD05CE694_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C6102E9_26EC_9336_41B2_122BD05CE694.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "id": "panorama_2C6102E9_26EC_9336_41B2_122BD05CE694",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Shower",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 942.4,
    "x": 1645.82,
    "angle": 112.24,
    "map": "this.map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 159.9,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.57,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -159.4,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -19.91,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C6102E9_26EC_9336_41B2_122BD05CE694_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -113.55,
   "pitch": -11.87
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C7E971A_26EC_B10A_41BF_EC9EAD59ED67_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C7E971A_26EC_B10A_41BF_EC9EAD59ED67_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C7E971A_26EC_B10A_41BF_EC9EAD59ED67.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C7E971A_26EC_B10A_41BF_EC9EAD59ED67_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C7E971A_26EC_B10A_41BF_EC9EAD59ED67",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Bathroom view3",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C7E971A_26EC_B10A_41BF_EC9EAD59ED67_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C66FDF0_26EC_B116_41B8_9E6E04CC9873_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C66FDF0_26EC_B116_41B8_9E6E04CC9873_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C66FDF0_26EC_B116_41B8_9E6E04CC9873.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C66FDF0_26EC_B116_41B8_9E6E04CC9873_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C66FDF0_26EC_B116_41B8_9E6E04CC9873",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Master Bedroom",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 150.98,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 8.48,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C66FDF0_26EC_B116_41B8_9E6E04CC9873_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -122.19,
   "pitch": -6.86
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C7CCB05_26EC_92FE_41BD_E6404048923F_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C7CCB05_26EC_92FE_41BD_E6404048923F_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C7CCB05_26EC_92FE_41BD_E6404048923F.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C7CCB05_26EC_92FE_41BD_E6404048923F_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C7CCB05_26EC_92FE_41BD_E6404048923F",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Master Bedroom view3",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -169.83,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -16.14,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C7CCB05_26EC_92FE_41BD_E6404048923F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.95,
   "pitch": -7.12
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C6BB0A9_26EC_6F36_416D_EA9AB583D166_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C6BB0A9_26EC_6F36_416D_EA9AB583D166_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C6BB0A9_26EC_6F36_416D_EA9AB583D166.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C6BB0A9_26EC_6F36_416D_EA9AB583D166_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_2C6BB0A9_26EC_6F36_416D_EA9AB583D166",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Closet",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 578,
    "x": 1196.42,
    "angle": 315.52,
    "map": "this.map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 171.96,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -13.38,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C6BB0A9_26EC_6F36_416D_EA9AB583D166_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -132.53,
   "pitch": -15.66
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C711603_26EF_B2FA_41C0_092542139DFD_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C711603_26EF_B2FA_41C0_092542139DFD_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C711603_26EF_B2FA_41C0_092542139DFD.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C711603_26EF_B2FA_41C0_092542139DFD_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C711603_26EF_B2FA_41C0_092542139DFD",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Master Bedroom view4",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 14.7,
     "path": "longest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -9.73,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C711603_26EF_B2FA_41C0_092542139DFD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 170.39,
   "pitch": -11.86
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C625D1A_26EF_B10A_41A1_6D0579C6408D_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C625D1A_26EF_B10A_41A1_6D0579C6408D_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C625D1A_26EF_B10A_41A1_6D0579C6408D.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C625D1A_26EF_B10A_41A1_6D0579C6408D_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C625D1A_26EF_B10A_41A1_6D0579C6408D",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Master Bedroom view5",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -10.55,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -14.01,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C625D1A_26EF_B10A_41A1_6D0579C6408D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -170.44,
   "pitch": -12.92
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C6BD113_26EF_F11B_41BF_AA6F30F98862_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C6BD113_26EF_F11B_41BF_AA6F30F98862_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C6BD113_26EF_F11B_41BF_AA6F30F98862.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C6BD113_26EF_F11B_41BF_AA6F30F98862_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C6BD113_26EF_F11B_41BF_AA6F30F98862",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Hallway view2",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -86.29,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -5.46,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C6BD113_26EF_F11B_41BF_AA6F30F98862_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 171,
   "pitch": -7.1
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C70CE31_26EF_F316_41AE_B3D7DE8005CF_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C70CE31_26EF_F316_41AE_B3D7DE8005CF_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C70CE31_26EF_F316_41AE_B3D7DE8005CF.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C70CE31_26EF_F316_41AE_B3D7DE8005CF_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C70CE31_26EF_F316_41AE_B3D7DE8005CF",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Kitchen view 4",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -162.16,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -13.63,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 130.13,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -5.46,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C70CE31_26EF_F316_41AE_B3D7DE8005CF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -81.14,
   "pitch": -7.03
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C7976E3_26EF_933A_41C0_CAD4CCDE2961_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C7976E3_26EF_933A_41C0_CAD4CCDE2961_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C7976E3_26EF_933A_41C0_CAD4CCDE2961.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C7976E3_26EF_933A_41C0_CAD4CCDE2961_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_2C7976E3_26EF_933A_41C0_CAD4CCDE2961",
  "hfovMax": 150,
  "pitch": 0,
  "label": "Living Room view2",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 143.82,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.33,
     "pitchSpeed": 17.05
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -169.32,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -6.47,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C7976E3_26EF_933A_41C0_CAD4CCDE2961_camera",
  "initialPosition": {
   "hfov": 150,
   "class": "PanoramaCameraPosition",
   "yaw": -155.78,
   "pitch": -66.98
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C721066_26EC_6F3A_41B6_45961B6897D8_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5520E9C0_43C9_EA29_41CF_534501924A3B",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.setMediaBehaviour(this.playList_6295C03D_4359_FA5B_41BF_48D9A076A21A, 0, this.panorama_2C721066_26EC_6F3A_41B6_45961B6897D8)"
       }
      ],
      "maps": [
       {
        "hfov": 13.65,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 57.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 23,
           "class": "ImageResourceLevel",
           "width": 16,
           "url": "media/panorama_2C721066_26EC_6F3A_41B6_45961B6897D8_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -16.01
       }
      ],
      "items": [
       {
        "hfov": 13.65,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 57.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 384,
           "class": "ImageResourceLevel",
           "width": 265,
           "url": "media/panorama_2C721066_26EC_6F3A_41B6_45961B6897D8_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -16.01
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_2C721066_26EC_6F3A_41B6_45961B6897D8_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C721066_26EC_6F3A_41B6_45961B6897D8_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C721066_26EC_6F3A_41B6_45961B6897D8.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "id": "panorama_2C721066_26EC_6F3A_41B6_45961B6897D8",
  "hfovMax": 150,
  "pitch": 0,
  "label": "Living space/den",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 883.8,
    "x": 860.96,
    "angle": -36.11,
    "map": "this.map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 146.09,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -6.72,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C721066_26EC_6F3A_41B6_45961B6897D8_camera",
  "initialPosition": {
   "hfov": 128,
   "class": "PanoramaCameraPosition",
   "yaw": -135.63,
   "pitch": -17.57
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C5C6CF5_26EB_971E_41B0_B6DCBB38EE3F_t.jpg",
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C5C6CF5_26EB_971E_41B0_B6DCBB38EE3F_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C5C6CF5_26EB_971E_41B0_B6DCBB38EE3F.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C5C6CF5_26EB_971E_41B0_B6DCBB38EE3F_t.jpg"
   }
  ],
  "vfov": 180,
  "id": "panorama_2C5C6CF5_26EB_971E_41B0_B6DCBB38EE3F",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Door Open",
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 10.43,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.44,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C5C6CF5_26EB_971E_41B0_B6DCBB38EE3F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -103.25,
   "pitch": -8.79
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2C5553A7_26F4_713A_41B7_E6723D385132_t.jpg",
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_2C5553A7_26F4_713A_41B7_E6723D385132_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2C5553A7_26F4_713A_41B7_E6723D385132.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_2C5553A7_26F4_713A_41B7_E6723D385132_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_2C5553A7_26F4_713A_41B7_E6723D385132",
  "pitch": 0,
  "hfovMax": 120,
  "label": "Outside/Deck",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 258.45,
    "x": 214.76,
    "angle": 210.88,
    "map": "this.map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 117.07,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 1.82,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_2C5553A7_26F4_713A_41B7_E6723D385132_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -109.53,
   "pitch": -7.54
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Video",
  "scaleMode": "fit_inside",
  "label": "DRM 301P drone tour slower",
  "thumbnailUrl": "media/video_5B320FCE_43C8_A639_41BB_61804A2C0FC9_t.jpg",
  "video": {
   "height": 1680,
   "class": "VideoResource",
   "mp4Url": "media/video_5B320FCE_43C8_A639_41BB_61804A2C0FC9.mp4",
   "width": 2986
  },
  "width": 2986,
  "id": "video_5B320FCE_43C8_A639_41BB_61804A2C0FC9",
  "loop": false,
  "height": 1680
 },
 {
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C201000_26EC_AEF6_41B8_92A89BC9CE00",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_2C201000_26EC_AEF6_41B8_92A89BC9CE00_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_6290D03D_4359_FA5B_41BF_FBB7DA872094",
    "media": "this.panorama_2C66CD09_26EC_76F6_41A1_D11062CD8B3E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6290D03D_4359_FA5B_41BF_FBB7DA872094, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2C66CD09_26EC_76F6_41A1_D11062CD8B3E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_6290803D_4359_FA5B_41C0_BBC5129D53EA",
    "media": "this.panorama_2C44E091_26ED_AF16_41A7_BFE64379D81C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6290803D_4359_FA5B_41C0_BBC5129D53EA, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2C44E091_26ED_AF16_41A7_BFE64379D81C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7ED5E6_26ED_913D_41A7_854C689EAD84",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_2C7ED5E6_26ED_913D_41A7_854C689EAD84_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C77E370_26ED_B116_41B5_F70134929B6D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_2C77E370_26ED_B116_41B5_F70134929B6D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_6291903D_4359_FA5B_41B3_571C3C66F7BA",
    "media": "this.panorama_2C4DA1F6_26ED_911A_41C0_EEA04A207FD7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6291903D_4359_FA5B_41B3_571C3C66F7BA, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2C4DA1F6_26ED_911A_41C0_EEA04A207FD7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7035DA_26EC_710A_41BE_2FB1DE786629",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_2C7035DA_26EC_710A_41BE_2FB1DE786629_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7CD93A_26EC_910A_41BD_4816C1C980CA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_2C7CD93A_26EC_910A_41BD_4816C1C980CA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_6292D03D_4359_FA5B_41B6_EA94C7770164",
    "media": "this.panorama_2C797FC7_26EC_917A_41AF_B4251A1D7696",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6292D03D_4359_FA5B_41B6_EA94C7770164, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2C797FC7_26EC_917A_41AF_B4251A1D7696_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C79D333_26EC_911A_41B2_2A7E8B14B26B",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_2C79D333_26EC_911A_41B2_2A7E8B14B26B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_6292603D_4359_FA5B_41C8_E36AA7CFAA49",
    "media": "this.panorama_2C7D5644_26EC_F37E_41AF_5580633C1CDB",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6292603D_4359_FA5B_41C8_E36AA7CFAA49, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2C7D5644_26EC_F37E_41AF_5580633C1CDB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C696C92_26EC_F71A_41C2_154B7D0C4B92",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_2C696C92_26EC_F71A_41C2_154B7D0C4B92_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_6293903D_4359_FA5B_41CC_210848E7B531",
    "media": "this.panorama_2C6102E9_26EC_9336_41B2_122BD05CE694",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_6293903D_4359_FA5B_41CC_210848E7B531, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2C6102E9_26EC_9336_41B2_122BD05CE694_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7E971A_26EC_B10A_41BF_EC9EAD59ED67",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_2C7E971A_26EC_B10A_41BF_EC9EAD59ED67_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C66FDF0_26EC_B116_41B8_9E6E04CC9873",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_2C66FDF0_26EC_B116_41B8_9E6E04CC9873_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7CCB05_26EC_92FE_41BD_E6404048923F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_2C7CCB05_26EC_92FE_41BD_E6404048923F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_626CB03D_4359_FA5B_4183_C4C4113B0758",
    "media": "this.panorama_2C6BB0A9_26EC_6F36_416D_EA9AB583D166",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_626CB03D_4359_FA5B_4183_C4C4113B0758, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2C6BB0A9_26EC_6F36_416D_EA9AB583D166_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C711603_26EF_B2FA_41C0_092542139DFD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_2C711603_26EF_B2FA_41C0_092542139DFD_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C625D1A_26EF_B10A_41A1_6D0579C6408D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_2C625D1A_26EF_B10A_41A1_6D0579C6408D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C6BD113_26EF_F11B_41BF_AA6F30F98862",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_2C6BD113_26EF_F11B_41BF_AA6F30F98862_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C70CE31_26EF_F316_41AE_B3D7DE8005CF",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "camera": "this.panorama_2C70CE31_26EF_F316_41AE_B3D7DE8005CF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7976E3_26EF_933A_41C0_CAD4CCDE2961",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "camera": "this.panorama_2C7976E3_26EF_933A_41C0_CAD4CCDE2961_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_626EF03D_4359_FA5B_41D0_8F33CD34B79D",
    "media": "this.panorama_2C721066_26EC_6F3A_41B6_45961B6897D8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_626EF03D_4359_FA5B_41D0_8F33CD34B79D, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2C721066_26EC_6F3A_41B6_45961B6897D8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C5C6CF5_26EB_971E_41B0_B6DCBB38EE3F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "camera": "this.panorama_2C5C6CF5_26EB_971E_41B0_B6DCBB38EE3F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_626E603D_4359_FA5B_41A7_1E99F51E011D",
    "media": "this.panorama_2C5553A7_26F4_713A_41B7_E6723D385132",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_626E603D_4359_FA5B_41A7_1E99F51E011D, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_2C5553A7_26F4_713A_41B7_E6723D385132_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)"
   },
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 25, 0)",
    "media": "this.video_5B320FCE_43C8_A639_41BB_61804A2C0FC9",
    "player": "this.MainViewerVideoPlayer",
    "end": "this.trigger('tourEnded')",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 25, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 25, this.video_5B320FCE_43C8_A639_41BB_61804A2C0FC9)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C201000_26EC_AEF6_41B8_92A89BC9CE00",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "camera": "this.panorama_2C201000_26EC_AEF6_41B8_92A89BC9CE00_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C66CD09_26EC_76F6_41A1_D11062CD8B3E",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "camera": "this.panorama_2C66CD09_26EC_76F6_41A1_D11062CD8B3E_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C44E091_26ED_AF16_41A7_BFE64379D81C",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "camera": "this.panorama_2C44E091_26ED_AF16_41A7_BFE64379D81C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7ED5E6_26ED_913D_41A7_854C689EAD84",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "camera": "this.panorama_2C7ED5E6_26ED_913D_41A7_854C689EAD84_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C77E370_26ED_B116_41B5_F70134929B6D",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "camera": "this.panorama_2C77E370_26ED_B116_41B5_F70134929B6D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C4DA1F6_26ED_911A_41C0_EEA04A207FD7",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "camera": "this.panorama_2C4DA1F6_26ED_911A_41C0_EEA04A207FD7_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7035DA_26EC_710A_41BE_2FB1DE786629",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "camera": "this.panorama_2C7035DA_26EC_710A_41BE_2FB1DE786629_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7CD93A_26EC_910A_41BD_4816C1C980CA",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "camera": "this.panorama_2C7CD93A_26EC_910A_41BD_4816C1C980CA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C797FC7_26EC_917A_41AF_B4251A1D7696",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
    "camera": "this.panorama_2C797FC7_26EC_917A_41AF_B4251A1D7696_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C79D333_26EC_911A_41B2_2A7E8B14B26B",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)",
    "camera": "this.panorama_2C79D333_26EC_911A_41B2_2A7E8B14B26B_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7D5644_26EC_F37E_41AF_5580633C1CDB",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
    "camera": "this.panorama_2C7D5644_26EC_F37E_41AF_5580633C1CDB_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C696C92_26EC_F71A_41C2_154B7D0C4B92",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)",
    "camera": "this.panorama_2C696C92_26EC_F71A_41C2_154B7D0C4B92_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C6102E9_26EC_9336_41B2_122BD05CE694",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)",
    "camera": "this.panorama_2C6102E9_26EC_9336_41B2_122BD05CE694_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7E971A_26EC_B10A_41BF_EC9EAD59ED67",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 14)",
    "camera": "this.panorama_2C7E971A_26EC_B10A_41BF_EC9EAD59ED67_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C66FDF0_26EC_B116_41B8_9E6E04CC9873",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 14, 15)",
    "camera": "this.panorama_2C66FDF0_26EC_B116_41B8_9E6E04CC9873_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7CCB05_26EC_92FE_41BD_E6404048923F",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 15, 16)",
    "camera": "this.panorama_2C7CCB05_26EC_92FE_41BD_E6404048923F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C6BB0A9_26EC_6F36_416D_EA9AB583D166",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 16, 17)",
    "camera": "this.panorama_2C6BB0A9_26EC_6F36_416D_EA9AB583D166_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C711603_26EF_B2FA_41C0_092542139DFD",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 17, 18)",
    "camera": "this.panorama_2C711603_26EF_B2FA_41C0_092542139DFD_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C625D1A_26EF_B10A_41A1_6D0579C6408D",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 18, 19)",
    "camera": "this.panorama_2C625D1A_26EF_B10A_41A1_6D0579C6408D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C6BD113_26EF_F11B_41BF_AA6F30F98862",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 19, 20)",
    "camera": "this.panorama_2C6BD113_26EF_F11B_41BF_AA6F30F98862_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C70CE31_26EF_F316_41AE_B3D7DE8005CF",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 20, 21)",
    "camera": "this.panorama_2C70CE31_26EF_F316_41AE_B3D7DE8005CF_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C7976E3_26EF_933A_41C0_CAD4CCDE2961",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 21, 22)",
    "camera": "this.panorama_2C7976E3_26EF_933A_41C0_CAD4CCDE2961_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C721066_26EC_6F3A_41B6_45961B6897D8",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 22, 23)",
    "camera": "this.panorama_2C721066_26EC_6F3A_41B6_45961B6897D8_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C5C6CF5_26EB_971E_41B0_B6DCBB38EE3F",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 23, 24)",
    "camera": "this.panorama_2C5C6CF5_26EB_971E_41B0_B6DCBB38EE3F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2C5553A7_26F4_713A_41B7_E6723D385132",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 24, 25)",
    "camera": "this.panorama_2C5553A7_26F4_713A_41B7_E6723D385132_camera"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_5B320FCE_43C8_A639_41BB_61804A2C0FC9",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 25, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.thumbnaillist5245_playlist, 25, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.thumbnaillist5245_playlist, 25, this.video_5B320FCE_43C8_A639_41BB_61804A2C0FC9)"
   }
  ]
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album 301P flyer with QR code 1 of 1",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_589FD430_43F8_5A69_41CD_B7C72ACF7792_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_inside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "duration": 5300,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_589FD430_43F8_5A69_41CD_B7C72ACF7792_0.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "DRM 301P flyer",
      "thumbnailUrl": "media/album_589FD430_43F8_5A69_41CD_B7C72ACF7792_0_t.png",
      "width": 1700,
      "id": "album_589FD430_43F8_5A69_41CD_B7C72ACF7792_0",
      "height": 2200,
      "duration": 5300
     }
    }
   ]
  },
  "thumbnailUrl": "media/album_589FD430_43F8_5A69_41CD_B7C72ACF7792_t.png",
  "id": "album_589FD430_43F8_5A69_41CD_B7C72ACF7792"
 },
 "this.album_589FD430_43F8_5A69_41CD_B7C72ACF7792_0",
 {
  "class": "PlayList",
  "id": "playList_6295C03D_4359_FA5B_41BF_48D9A076A21A",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_589FD430_43F8_5A69_41CD_B7C72ACF7792"
   }
  ]
 },
 "this.map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A",
 {
  "class": "PlayList",
  "id": "playList_6296203D_4359_FA5B_4195_4CCD0E966065",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_6297D03D_4359_FA5B_41B4_75C87CC93072",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_4E16CF9B_4359_A65F_41B3_72DCD7574F6A",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "class": "MediaAudio",
  "id": "audio_2DBF3FA1_26FB_9136_41A1_CEAD8B6739ED",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_2DBF3FA1_26FB_9136_41A1_CEAD8B6739ED.mp3",
   "oggUrl": "media/audio_2DBF3FA1_26FB_9136_41A1_CEAD8B6739ED.ogg"
  },
  "data": {
   "label": "Unmatched Excellense"
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "toolTipTextShadowColor": "#000000",
  "progressBorderRadius": 4,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipFontStyle": "normal",
  "progressBarBorderSize": 0,
  "transitionDuration": 500,
  "toolTipDisplayTime": 600,
  "paddingBottom": 0,
  "progressBorderSize": 2,
  "playbackBarRight": 0,
  "playbackBarHeadWidth": 6,
  "toolTipPaddingBottom": 4,
  "playbackBarOpacity": 1,
  "playbackBarHeight": 20,
  "progressBarOpacity": 1,
  "progressBackgroundOpacity": 1,
  "shadow": false,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadShadow": true,
  "paddingLeft": 0,
  "paddingRight": 0,
  "toolTipBorderRadius": 3,
  "progressOpacity": 1,
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontFamily": "Arial",
  "toolTipOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressRight": 10,
  "toolTipPaddingRight": 6,
  "playbackBarHeadBorderSize": 0,
  "minHeight": 50,
  "paddingTop": 0,
  "toolTipBorderColor": "#767676",
  "toolTipBorderSize": 1,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipShadowVerticalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBorderColor": "#AAAAAA",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 2,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadHeight": 30,
  "playbackBarBottom": 10,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "progressLeft": 10,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 100,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipShadowHorizontalLength": 0,
  "toolTipPaddingLeft": 6,
  "top": 77,
  "playbackBarBorderRadius": 4,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "borderRadius": 0,
  "id": "MainViewer",
  "toolTipFontWeight": "normal",
  "bottom": 92,
  "progressHeight": 20,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "progressBottom": 1,
  "borderSize": 0,
  "left": 0,
  "right": 0,
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "playbackBarProgressBorderSize": 0
 },
 {
  "class": "ThumbnailList",
  "horizontalAlign": "left",
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailShadowVerticalLength": 3,
  "selectedItemLabelFontWeight": "bold",
  "paddingBottom": 10,
  "itemThumbnailShadowOpacity": 0.8,
  "layout": "vertical",
  "shadow": false,
  "itemLabelTextDecoration": "none",
  "paddingLeft": 20,
  "paddingRight": 20,
  "playList": "this.thumbnaillist5245_playlist",
  "itemThumbnailHeight": 70,
  "minHeight": 0,
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontWeight": "normal",
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontSize": 14,
  "paddingTop": 10,
  "itemPaddingBottom": 3,
  "maxHeight": 800,
  "itemBackgroundColorDirection": "vertical",
  "scrollBarColor": "#FFFFFF",
  "itemThumbnailBorderRadius": 5,
  "itemPaddingTop": 3,
  "itemPaddingRight": 3,
  "itemLabelFontFamily": "Arial",
  "width": 158.5,
  "itemLabelGap": 8,
  "scrollBarWidth": 10,
  "itemLabelFontColor": "#FFFFFF",
  "itemThumbnailShadowColor": "#000000",
  "scrollBarMargin": 2,
  "itemMode": "normal",
  "itemHorizontalAlign": "center",
  "itemVerticalAlign": "middle",
  "itemOpacity": 1,
  "minWidth": 0,
  "itemThumbnailShadowHorizontalLength": 3,
  "top": "8.02%",
  "maxWidth": 800,
  "itemThumbnailWidth": 100,
  "itemBackgroundColor": [],
  "itemThumbnailShadow": true,
  "borderRadius": 5,
  "id": "thumbnaillist5245",
  "itemBorderRadius": 0,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "itemThumbnailOpacity": 1,
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "itemLabelFontStyle": "normal",
  "data": {
   "name": "ThumbnailList28173"
  },
  "itemPaddingLeft": 3,
  "backgroundOpacity": 0.2,
  "itemThumbnailShadowSpread": 1,
  "borderSize": 0,
  "itemBackgroundColorRatios": [],
  "itemLabelPosition": "bottom",
  "itemThumbnailShadowBlurRadius": 4,
  "gap": 0,
  "right": "0%",
  "backgroundColorRatios": [
   0
  ],
  "bottom": "10.1%"
 },
 {
  "class": "Label",
  "horizontalAlign": "center",
  "fontSize": 40,
  "width": 418,
  "paddingBottom": 0,
  "height": 43,
  "textDecoration": "none",
  "fontFamily": "Arial",
  "text": "Dream Silver 301P",
  "shadow": false,
  "fontWeight": "bold",
  "fontStyle": "normal",
  "minWidth": 30,
  "top": 16,
  "fontColor": "#666666",
  "paddingRight": 0,
  "paddingLeft": 0,
  "id": "label4056",
  "data": {
   "name": "Label28174"
  },
  "verticalAlign": "middle",
  "borderSize": 0,
  "minHeight": 16,
  "borderRadius": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "left": 459
 },
 {
  "class": "Container",
  "children": [
   {
    "class": "Container",
    "children": [
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
     {
      "class": "IconButton",
      "horizontalAlign": "center",
      "mode": "toggle",
      "width": 38,
      "paddingBottom": 0,
      "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C.png",
      "height": 38,
      "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C_pressed.png",
      "shadow": false,
      "transparencyActive": false,
      "minWidth": 0,
      "cursor": "hand",
      "paddingRight": 0,
      "paddingLeft": 0,
      "id": "IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
      "data": {
       "name": "Button1199"
      },
      "verticalAlign": "middle",
      "borderSize": 0,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "minHeight": 0
     },
     {
      "class": "Container",
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
       {
        "class": "Container",
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2"
        ],
        "horizontalAlign": "center",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "backgroundColorRatios": [
         0
        ],
        "width": 47,
        "paddingBottom": 0,
        "scrollBarWidth": 10,
        "height": "100%",
        "overflow": "hidden",
        "layout": "vertical",
        "scrollBarMargin": 2,
        "shadow": false,
        "minWidth": 20,
        "paddingRight": 0,
        "paddingLeft": 0,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "borderSize": 0,
        "scrollBarVisible": "rollOver",
        "data": {
         "name": "Container1202"
        },
        "minHeight": 20,
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "paddingTop": 0,
        "backgroundOpacity": 1,
        "contentOpaque": false,
        "scrollBarColor": "#000000",
        "creationPolicy": "inAdvance",
        "gap": 10
       },
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894"
      ],
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0
      ],
      "width": 133,
      "paddingBottom": 0,
      "scrollBarWidth": 10,
      "height": "100%",
      "overflow": "hidden",
      "layout": "horizontal",
      "scrollBarMargin": 2,
      "shadow": false,
      "minWidth": 20,
      "paddingRight": 0,
      "paddingLeft": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarVisible": "rollOver",
      "data": {
       "name": "Container1200"
      },
      "minHeight": 20,
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "paddingTop": 0,
      "backgroundOpacity": 1,
      "contentOpaque": false,
      "scrollBarColor": "#000000",
      "creationPolicy": "inAdvance",
      "gap": 5
     },
     {
      "class": "Container",
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0
      ],
      "width": 85,
      "paddingBottom": 0,
      "scrollBarWidth": 10,
      "height": "100%",
      "overflow": "hidden",
      "layout": "horizontal",
      "scrollBarMargin": 2,
      "shadow": false,
      "minWidth": 20,
      "paddingRight": 0,
      "paddingLeft": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarVisible": "rollOver",
      "data": {
       "name": "Container1206"
      },
      "minHeight": 20,
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "paddingTop": 0,
      "backgroundOpacity": 1,
      "contentOpaque": false,
      "scrollBarColor": "#000000",
      "creationPolicy": "inAdvance",
      "gap": 10
     }
    ],
    "horizontalAlign": "center",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0
    ],
    "width": 468,
    "paddingBottom": 0,
    "scrollBarWidth": 10,
    "height": "93.478%",
    "overflow": "hidden",
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "shadow": false,
    "minWidth": 468,
    "paddingRight": 0,
    "paddingLeft": 0,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "scrollBarOpacity": 0.5,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "Container1194"
    },
    "minHeight": 20,
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "paddingTop": 0,
    "backgroundOpacity": 1,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "creationPolicy": "inAdvance",
    "gap": 10
   }
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "center",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": "100%",
  "paddingBottom": 0,
  "height": 92,
  "scrollBarWidth": 10,
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "shadow": false,
  "minWidth": 1,
  "bottom": "0%",
  "paddingRight": 0,
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "Container29432"
  },
  "minHeight": 1,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "left": "0%",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "borderSize": 0,
  "gap": 6
 },
 {
  "class": "Image",
  "horizontalAlign": "center",
  "maxHeight": 817,
  "width": "9.198%",
  "paddingBottom": 0,
  "height": "7.604%",
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1467,
  "paddingRight": 0,
  "paddingLeft": 0,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "data": {
   "name": "Wave Logo"
  },
  "verticalAlign": "middle",
  "borderSize": 0,
  "minHeight": 1,
  "borderRadius": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": "0%"
 },
 {
  "class": "Image",
  "horizontalAlign": "center",
  "maxHeight": 186,
  "width": "38.151%",
  "paddingBottom": 0,
  "height": "6.979%",
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "top": "0.31%",
  "maxWidth": 1700,
  "paddingRight": 0,
  "paddingLeft": 0,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "data": {
   "name": "MTViewhomes"
  },
  "verticalAlign": "middle",
  "borderSize": 0,
  "minHeight": 1,
  "borderRadius": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": "8.53%"
 },
 {
  "class": "Container",
  "children": [
   "this.MapViewer"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "left",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": "28.739%",
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "height": "33.75%",
  "overflow": "scroll",
  "layout": "absolute",
  "scrollBarMargin": 2,
  "shadow": false,
  "minWidth": 1,
  "top": "1.82%",
  "paddingRight": 0,
  "paddingLeft": 0,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "minHeight": 1,
  "borderRadius": 0,
  "borderSize": 0,
  "data": {
   "name": "Container24488"
  },
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "left": "0.63%",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "creationPolicy": "inAdvance",
  "gap": 10
 }
], 
 "start": "this.playAudioList([this.audio_2DBF3FA1_26FB_9136_41A1_CEAD8B6739ED]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_6297D03D_4359_FA5B_41B4_75C87CC93072.set('selectedIndex', 0)",
 "class": "Player",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "vrPolyfillScale": 0.88,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "height": "100%",
 "overflow": "visible",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } }
 },
 "shadow": false,
 "minWidth": 20,
 "paddingRight": 0,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Player28156"
 },
 "mobileMipmappingEnabled": false,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "gap": 10
})