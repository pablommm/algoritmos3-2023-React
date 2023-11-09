import "./Plantilla.css"
impo from "react"



function template() {
  
  return (
    

    <><head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>plantilla</title>
      <link rel="stylesheet" href="/Maquetado/CSS/general.css" />
      <link rel="stylesheet" href="../CSS/nav.css" />
      <link rel="stylesheet" href="/Maquetado/CSS/searchbar.css" />
      <link rel="stylesheet" href="/Maquetado/CSS/jugadores.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <script src="https://kit.fontawesome.com/e0d6dd6321.js" crossOrigin="anonymous"></script>
    </head><body>
        <div className="navbar-container">
          <span className="navbar-title">titulo plantilla</span>
        </div>

        <section className="searchbar-container">
          <div className="searchbar">
            <input type="text" placeholder="Buscar..." />
            <button type="submit"><i id="id_lupa" className="fa fa-search sarasa"></i></button>
          </div>
        </section>

        <main>

          <span id="id_add" className="material-symbols-outlined plus-icon">add</span>
        </main>
        <footer className="footer">

          <span id="id_footer" className="material-symbols-outlined">home</span>
          <span id="id_footer" className="material-symbols-outlined">account_box</span>
          <span id="id_footer" className="material-symbols-outlined">directions_run</span>
          <span id="id_footer" className="material-symbols-outlined">storefront</span>
          <span id="id_footer" className="material-symbols-outlined">logout</span>
        </footer>
      </body></>

  )
  
}

export default template
