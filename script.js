require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "esri/widgets/Search",
  "esri/widgets/Legend",
      "dojo/domReady!"        
     ], function(WebScene, SceneView, Camera, Home, Search, Legend) {
 var scene = new WebScene({
        portalItem: { 
          id: "fc5f67fceaa9496086cf86b9519d4423"
        }
      });
  //*fc5f67fceaa9496086cf86b9519d4423*//
  
   var camera = new Camera({
        position: [         
          -101.1994, // lon
          43.78, // lat
          5000000// elevation in meters
        ],
        tilt:0,
        heading: 0
      });

var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera
            });
      
  var homeBtn = new Home({
        view: view
      });
  view.ui.add(homeBtn, "top-right");
       
});
