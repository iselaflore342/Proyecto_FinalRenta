const modelsrenta = {
    queryExitsPelicula: `SELECT NombrePelicula FROM Peliculas WHERE ID = ?`,
    queryExitsPeliID: `SELECT ID FROM Peliculas WHERE NombrePelicula = ?`,
    queryAddPelicula: `INSERT INTO Peliculas (NombrePelicula, Activo) VALUES (?, ?)`,
    queryUpdPelicula: `UPDATE Peliculas SET NombrePelicula = ?, Activo = ? WHERE ID = ?`,
    queryShowPeliculas: `SELECT * FROM Peliculas`,
    queryDesactPelicula: `UPDATE Peliculas SET Activo = 'N' WHERE ID = ?`,
    queryExitsRenta: `SELECT NombrePelicula FROM Cliente c JOIN Peliculas p ON c.IDP = p.ID WHERE NombrePelicula = ?`,
    queryExitRenta: `SELECT Nombre FROM Cliente WHERE Nombre = ?`,
    queryAddRenta: `INSERT INTO Cliente (IDP, Nombre, Apellido, FechaInicio, FechaFin, Costo, Entregado, Activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    queryUpdRenta: `UPDATE Cliente SET Nombre = ?, Apellido = ?, FechaInicio = ?, FechaFin = ?, Costo = ?, Entregado = ?, Activo = ? WHERE ID = ?`,
    queryShowRentas: `SELECT * FROM Cliente`,
    queryDesactRenta: `UPDATE Cliente SET Activo = 'N' WHERE ID = ?`
}

module.exports = modelsrenta