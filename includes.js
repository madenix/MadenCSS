document.getElementById("navbar").innerHTML = `
<div class="row surface row-items-hor-center row-gutter-1 p-1">
  <!-- Logo -->
  <div class="res-col-2 col-items-hor-center">
    <div class="fs-xxl text-primary row">
      <img src="Logo.png" width="32">
      <a href="index.html">Madenix</a>
    </div>
  </div>
  <!-- Menu -->
  <div class="res-col-9 col-items-hor-center fs-xl">
    THIS PAGE IS MADE WITH MadenCSS
  </div>
</div>
`;


document.getElementById("footer").innerHTML = `
<div class="row surface on-surface mt-1">
  <div class="col-12 text-center p-3">
    <span class="text-primary">&copy;</span> 2025 MADENIX all free to use
    <a href="emptyTemplate.html" class="text-primary">Empty Template</a>
  </div>
</div>
`;

document.getElementById("leftMenu").innerHTML = `
    <h3 class="m-1">🏠HOME</h3>
    <ul class="m-1">
      <li><a href="index.html">Get Started</a></li>
      <li><a href="layout.html">Layout</a></li>
    </ul>
    <h3 class="m-1 mt-3">🧩COMPONENTS</h3>
    <ul class="m-1">
      <li><a href="alerts.html">Alerts</a></li>
      <li><a href="buttons.html">Buttons</a></li>
      <li><a href="forms.html">Forms</a></li>
      <li><a href="navbars.html">Navbars</a></li>
    </ul>

    <h3 class="m-1 mt-3">🛠️UTULITIES</h3>
    <ul class="m-1">
      <li><a href="spacing.html">Spacing</a></li>
      <li><a href="typography.html">Typography</a></li>
    </ul>
`;
