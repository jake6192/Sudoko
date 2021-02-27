<?php
?>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/Sudoku/style.css">
    <title>Sudoko</title>
  </head>
  <body>
    <div id="container"></div>
    <div class="info"></div>
    <div id="controlsContainer">
      <div class="btn" id="ran">Start Random Game</div>
      <div class="btn" id="def">Start Defined Game</div>
      <div class="btn" id="note">Toggle Cell Notes</div>
      <div class="btn" id="hint">Show Hint</div>
    </div>
    <div id="difficulty">
      <label for="diff">Difficulty:&nbsp;</label>
      <input type="range" id="diff" name="diff" min="1" max="10" value="5" />
    </div>
    <div id="xHghLght">
      <label for="extraHighlight">Highlight Extra Areas:&nbsp;</label>
      <input type="checkbox" id="extraHighlight" name="extraHighlight" />
    </div>
    <div class="btn" id="check">Check If Correct</div>

    <script type="text/javascript" src="/Sudoku/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="/Sudoku/main_app.js"></script>
  </body>
</html>