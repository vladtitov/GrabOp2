<?php
session_start();
	$id = 'guest';
    if(isset($_SESSION['user_id']) && $_SESSION['user_id']) $id = 'main';
//	$app = 'guest';
//	if(isset($_SESSION['user_id']) && $_SESSION['user_id']) $app = 'app';
 //echo $app;

?>
<html>
  <head>
    <title>GrabOp</title>
    <meta charset="UTF-8">
    <base href="/GitHub/GrabOp2/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="libs/bootstrap.css">
    <link rel="stylesheet" href="libs/font-awesome.css">
    <link rel="stylesheet" href="node_modules/@angular2-material/button/button.css">
    <script src="libs/jquery-3.1.0.min.js"></script>

    <link rel="stylesheet" href="css/sizes.css">
    <link rel="stylesheet" href="css/geom.css">
    <link rel="stylesheet" href="css/cards.css">
    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/forms.css">
    <link rel="stylesheet" href="css/switch.css">

    <script src="node_modules/core-js/client/shim.min.js"></script>

    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>

<!--    <script> var user_id = "<?php //echo $_SESSION['user_id'];?>////"; console.log('user_id', user_id);</script>-->
    <script src="systemjs.config<?php echo $id; ?>.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
<!--    <script src="systemjs.config.js"></script>-->
<!--    <script>-->
<!--      System.import('--><?php //echo $app; ?><!--<//').catch(function(err){ console.error(err); });-->
<!--    </script>-->
  </head>

  <body>
    <my-app>Loading...</my-app>
  </body>
</html>
