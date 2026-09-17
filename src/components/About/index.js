<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/sonu.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/sonu.jpg" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Someshwar Solat</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

    <!-- Security Script to Disable Right-Click, Inspect, and View Source -->
    <script>
      // Disable Right Click
      document.addEventListener("contextmenu", (e) => e.preventDefault());

      // Disable F12, Ctrl+Shift+I, Ctrl+U
      document.addEventListener("keydown", (e) => {
        if (
          e.keyCode === 123 || // F12
          (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
          (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
          (e.ctrlKey && e.shiftKey && e.keyCode === 74) // Ctrl+Shift+J (Console)
        ) {
          e.preventDefault();
        }
      });

      // Disable DevTools in Other Ways (Experimental)
      setInterval(() => 
      {
        const devtools = new Function("debugger");
        devtools();
      }, 1000);
    </script>
  </body>
</html>

