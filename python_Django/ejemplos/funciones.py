print("Ejemplo de funcion lambda")
suma = lambda par1, par2: par1+par2
print(suma(3,2))
print("\n")
# ejemplo con parametros arbritrarios o dinamicos
def arbitrarios(*args, **kwargs):
    print("ARGS: ")
    print(args)
    for value in args:
        print(value)
    print("KWARGS: ")
    print(kwargs)
    for key in kwargs:
        print(kwargs[key])

def otra():
    pass
arbitrarios(1, "hola mundo", 3.2,[],{}, otra,  name="Nataly", num=99)

# ejemplo con parametros por omision o default
def saludo(nombre, mensaje="Hola"):
    print(mensaje+" "+nombre)
saludo("Nataly")

def calcular(importe, descuento):
    return importe - (importe * descuento / 100)
#datos = [1500, 10]
datos = {"importe":1500, "descuento":10}
print(calcular(**datos))
