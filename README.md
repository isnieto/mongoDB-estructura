# mongoDB-estructura
La base de datos de la optica se enfoca en la organización del negocio desde punto de vista del gestor.
Consta de 3 colecciones:
1. **Customers**: contiene los datos de los clientes incluyendo la lista de sus correspondientes facturas. La relación en **one-to-Many** por lo que las facturas van embebidas a la collección ( ya que toda factura contiene los datos del cliente pero los detalles de las facturas varian según caso). El objetivo es faciliar la consulta de los datos del cliente o de sus factura. 
2. **Suppliers**: contiene los datos de los proveedores incluyendo la lista de las marcas que ofrece dicho proveedor y, al tratarse nuevamente de una relación **one-to-Many**, la lista de pedidos también var embebida facilitando las consultas.
3. **Cátalogo de gafas**: esta colección se mantiene a parte del proveedor para facilitar una rápida consulta durante la realización de la venta por ejemplo. Objetivo es tener acceso a los detalles de todas las gafas que la optica tiene en catálogo. Además cada gafa incluye una  referencia al proveedor, en caso de que fuera necesario realizar una consulta de que proveedor se trata.
