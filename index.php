<?php
?>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <title>Sudoko</title>
  </head>
  <body>
    <div id="container"></div>
    <div class="info"></div>
    <div class="btn" id="ran">Random Game</div>
    <div class="btn" id="def">Defined Game</div>
    <div id="difficulty">
      <label for="diff">Difficulty:&nbsp;</label>
      <input type="range" id="diff" name="diff" min="1" max="10" value="5" />
    </div>
    <div id="xHghLght">
      <label for="extraHighlight">Highlight Extra Areas:&nbsp;</label>
      <input type="checkbox" id="extraHighlight" name="extraHighlight" />
    </div>
    <div class="btn" id="hint">Hint</div>
    <div class="btn" id="check">Check</div>

    <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>
