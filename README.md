# mongoDB-estructura
La base de datos de la optica se enfoca en la organización del negocio desde punto de vista del gestor.
Consta de 3 colecciones:
1. **Customers**: contiene los datos de los clientes incluyendo la lista de sus correspondientes facturas. La relación en **one-to-Many** por lo que las facturas van embebidas a la collección. El objetivo es faciliar la consulta y evintando redundancia, ya que toda factura contiene los datos del cliente pero los datos de las facturas varian según caso.
2. **Suppliers**: contiene los datos de los proveedores incluyendo la lista de las marcas que ofrece dicho proveedor y, al tratarse nuevamente de una relación **one-to-Many**, la lista de pedidos también var embebida facilitando las consultas.
3. **Cátalogo de gafas**: contiene la lista de todas las gafas ofrecidas con sus detalles correspondientes para consulta por parte del gestor o por parte del comprador. Obejtivo es consulta rápida de los detalles de las gafas. Además cada gafa incluye una  referencia al proveedor, en caso de que fuera necesario realizar una consulta de que proveedor se trata.
